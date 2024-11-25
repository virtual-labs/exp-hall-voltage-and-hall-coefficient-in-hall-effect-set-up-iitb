let scene1: Scene_Canvas;

let tab: Observation_Table;
let canvas2: HTMLCanvasElement;
let context2: CanvasRenderingContext2D;
let gm_reading: number = 0;

// canvas buttons
let em_power: Chemistry.Circle;
let em_up: Chemistry.Circle;
let em_down: Chemistry.Circle;
let gm_power: Chemistry.Circle;
let gm_up: Chemistry.Circle;
let gm_down: Chemistry.Circle;
let gm_meter_reading: Chemistry.Geo_Text;
let gm_reading_text = '00';

//booleans for sequantial process
let can_mount_probe = false;
let can_use_gauss_meter = false;
let can_show_gm_reading = false;
let a2_em_up = false;
let a2_em_down = false;

// table index saved
let curr_index: number = 0;
let curr_data1_index: number = 0;

let inner_canvas = `
<canvas id='canvas-1' style='position: absolute;'></canvas>
<canvas id='canvas-2' style='position: absolute;'></canvas>
`;

let probe: Chemistry.Custome_image;
let needle: Chemistry.Needle;

// em neddle angle
let needle_angle: number = 150;

function activity2() {
	//clear screen
	pp.clearleftpannel();
	pp.clearrightpannel();
	pp.addoffcanvas(3);

	pp.showtitle(
		`<p id="exp-title">Measuring Magnetic Field with Gauss Probe</p>`,
		3
	);
	pp.showdescription(
		`<div style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: calc(1vw + 12px);">Click on the start button</p>`,
		3
	);

	//add left panel text and button

	let left_title = `
    <div style='position: absolute; top: 2.5vw; background-color: rgb(144, 175, 233); font-size: 2vw; padding: 1%; border-radius: 10px;'>Calibration of Magnetic Field with Current</div>

    <div id='start-first' style='position: absolute; top: 10vw; left: 16vw; z-index: 10;'>
    <button class='btn btn-success' style='font-size: 1.5vw;  width: 10vw;' onclick='show_table();' >Start</button>
    </div>
    `;

	pp.addtoleftpannel(left_title);
	gauss_table();

	show_rp();

	//add all canvases and contexts
	pp.addtoleftpannel(inner_canvas);

	canvas = <HTMLCanvasElement>document.getElementById('canvas-1');
	context = canvas.getContext('2d');
	canvas2 = <HTMLCanvasElement>document.getElementById('canvas-2');
	context2 = canvas2.getContext('2d');

	scene1 = new Scene_Canvas(canvas);
	scene1.addcanvas(canvas2);

	probe = new Chemistry.Custome_image(
		gauss_probe1,
		new Chemistry.Point(1350, 460),
		804 * 1.3,
		666 * 1.3,
		canvas
	);
	scene1.add(probe);

	load_buttons();

	window.onload = a2_windowresize;
	window.onresize = a2_windowresize;

	a2_windowresize();
}

function a2_windowresize() {
	//canvas size
	a2_canvas_size();

	//canvas mapping
	a2_canvas_mapping();

	//draw scene

	scene1.draw();

	//  for(let j = 0; j<a1_index.length; j++) {
	//      a1_labels[a1_index[j]].draw();
	//  }
}

function a2_canvas_size() {
	canvas.width = window.innerWidth * 0.91;
	canvas.height = ((canvas.width * 1080.0) / 1920) * 0.85;
	lscale = canvas.width / 1920.0;
	document.getElementById('leftpannel').style.height =
		canvas.height + 5 + 'px';
	document.getElementById('leftpannel').style.margin = '0';

	canvas2.width = window.innerWidth * 0.21;
	canvas2.height = window.innerWidth * 0.15;
}

function a2_canvas_mapping() {
	context.translate(0, canvas.height);
	context.scale(1, -1);
	context2.translate(0, canvas2.height);
	context2.scale(1, -1);
}

function gauss_table() {
	let heading = ['S no.', 'Current (Ampere)', 'Magnetic Field (Gauss)'];
	let rows = [];

	for (let i = 0; i < first_obs_data.length; i++) {
		rows[i] = [];
		rows[i][0] = first_obs_data[i][0];
		rows[i][1] = first_obs_data[i][1];
		rows[i][2] = first_obs_data[i][2];
	}

	tab = new Observation_Table(heading, rows);

	pp.addtoleftpannel(tab.template);

	let doc = document.getElementsByTagName('table')[0];
	doc.style.display = 'none';
	tab.draw();

	pp.addtoleftpannel(`
    <div style='position: absolute; top: 39.5vw;' id='tab-btns' >
    <div>
    `);
}

function show_table() {
	console.log('I was here');

	pp.showdescription(
		`<div style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: calc(1vw + 12px);">
    <p>Click on power button of Electromagnet Power Supply</p>
    </div>`,
		3
	);
	show_rp();

	let ele = document.getElementById('start-first');
	ele.remove();

	let doc = document.getElementsByTagName('table')[0];
	doc.style.display = 'block';
	tab.draw();

	needle = new Chemistry.Needle(190, 83, 70, 5, 150, 'red', canvas2); // 35 t0 150

	scene1.add(needle);

	scene1.draw();

	addEventListener('click', set_positions);
	// pp.addtoleftpannel(`
	// <div style='position: absolute; top: 39.5vw;'>
	// <button class='btn btn-success' style='width: 19vw;'>Save</button>
	// <button class='btn btn-danger' style='width: 19vw;'>delete</button>
	// </div>
	// `);
	let tb: HTMLDivElement = <HTMLDivElement>(
		document.getElementById('tab-btns')
	);
	tb.innerHTML = `
    <button onclick='add_reading();' class='btn btn-success' style='width: 19vw; position: relative; z-index: 5;'>Save</button>
    <button onclick='remove_reading();' class='btn btn-danger' style='width: 19vw;  position:relative; z-index: 5;'>Delete</button>
    `;
}

function load_buttons() {
	em_power = new Chemistry.Circle(new Chemistry.Point(40, 68), 15, canvas2);
	em_up = new Chemistry.Circle(new Chemistry.Point(315, 155), 15, canvas2);
	em_up.color = 'transparent';
	em_down = new Chemistry.Circle(new Chemistry.Point(415, 155), 15, canvas2);
	em_down.color = 'transparent';

	gm_power = new Chemistry.Circle(new Chemistry.Point(1413, 200), 15, canvas);
	gm_up = new Chemistry.Circle(new Chemistry.Point(40, 675), 15, canvas);
	gm_down = new Chemistry.Circle(new Chemistry.Point(40, 675), 15, canvas);

	scene1.add(em_power);
	scene1.add(em_up);
	scene1.add(em_down);

	scene1.add(gm_power);
	// scene1.add(gm_up)
	// scene1.add(gm_down)
}

function set_positions(e) {
	let x = Math.round((e.clientX - rect.x) / lscale);
	let y = Math.round((canvas2.height - (e.clientY - rect.y)) / lscale);

	let x4 = e.clientX;
	let y4 = e.clientY;

	console.log('x&y', x, y);

	if (x <= 932 && x >= 900) {
		if (y <= -423 && y >= -453) {
			console.log('clicked on power button');
			em_power.color = 'green';
			can_mount_probe = true;
			scene1.draw();
			pp.showdescription(
				`<div style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: calc(1vw + 12px);">
        Now, Click on the Gauss Probe to mount it on wooden stand
        </div>`,
				3
			);
			show_rp();
		}
	}

	if (a2_em_up) {
		if (x <= 1206 && x >= 1176) {
			if (y <= -337 && y >= -367) {
				console.log('clicked on up button');
				if (needle_angle < 150) {
					needle_angle += 2.42857;
					gm_reading += 0.1;
					console.log(gm_reading);

					needle.angleInRadians = needle_angle * (Math.PI / 180);
					if (can_show_gm_reading) {
						for (let i = 0; i < data1.length; i++) {
							if (
								data1[i][0] ==
								parseFloat(Math.abs(gm_reading).toFixed(1))
							) {
								gm_meter_reading.text = data1[i][1].toFixed(0);
								curr_data1_index = i;
								break;
							}
						}
					}
					scene1.draw();
				}
			}
		}
	}

	if (a2_em_down) {
		if (x <= 1305 && x >= 1277) {
			if (y <= -336 && y >= -367) {
				console.log('clicked on down button');
				if (needle_angle > 65) {
					needle_angle -= 2.42857;
					gm_reading -= 0.1;
					console.log(gm_reading);
					needle.angleInRadians = needle_angle * (Math.PI / 180);
					if (can_show_gm_reading) {
						for (let i = 0; i < data1.length; i++) {
							if (
								data1[i][0] ==
								parseFloat(Math.abs(gm_reading).toFixed(1))
							) {
								gm_meter_reading.text = data1[i][1].toFixed(0);
								curr_data1_index = i;
								break;
							}
						}
					}
					scene1.draw();
				}
			}
		}
	}

	//for mouting gauss probe
	if (can_mount_probe) {
		if (x4 > 1520 * lscale && x4 < 1785 * lscale) {
			if (y4 < 563 * lscale && y4 > 531 * lscale) {
				probe.img = gauss_probe2;
				can_use_gauss_meter = true;
				scene1.draw();
				pp.showdescription(
					`<div style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: calc(1vw + 12px);">
    <p>Turn on (click) the power supply of Gauss Meter</p>
    </div>`,
					3
				);
				show_rp();
			}
		}
	}

	//for turning on the gauss meter power and display
	if (can_use_gauss_meter) {
		if (x <= 1428 && x >= 1396) {
			if (y <= -385 && y >= -416) {
				gm_power.color = 'green';
				scene1.draw();
				show_gm_display();
				a2_em_down = true;
				a2_em_up = true;
				pp.showdescription(
					`<div style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: calc(1vw + 12px);">
                  <p>*Now you can use UP and Down arrow buttons on the Electromagnet Power supply to change the current through electromagnet.</p>
                  <p>* Click save to add a values to the observation table</p>
                  <p>* Click delete to delete the last value in the observation table</p>
                  <p>* You can take 8 readings only</p>
               </div>`,
					3
				);
				show_rp();
			}
		}
	}
}

function show_gm_display() {
	gm_meter_reading = new Chemistry.Geo_Text(
		'0',
		new Chemistry.Point(1460, 205),
		canvas
	);
	scene1.add(gm_meter_reading);
	gm_meter_reading.font = '70%';
	scene1.draw();
	can_show_gm_reading = true;
}

function add_reading() {
	let table: HTMLTableElement = <HTMLTableElement>(
		document.getElementsByClassName('table')[0]
	);

	let rows = table.tBodies[0].rows;

	if (curr_index < 8) {
		rows[curr_index].innerHTML = `
            <td style='padding: 0;'>${curr_index + 1}</td>
            <td style='padding: 0;'>${data1[curr_data1_index][0]}</td>
            <td style='padding: 0;'>${data1[curr_data1_index][1]}</td>
        `;
		curr_index++;
	}

	if (curr_index == 8) {
		removeEventListener('click', set_positions);
		activity3();
	}
}

function remove_reading() {
	let table: HTMLTableElement = <HTMLTableElement>(
		document.getElementsByClassName('table')[0]
	);

	let rows = table.tBodies[0].rows;
	if (curr_index > 0) {
		rows[curr_index - 1].innerHTML = `
            <td style='padding: 0;'>${curr_index}</td>
            <td style='padding: 0;'></td>
            <td style='padding: 0;'></td>
        `;
		curr_index--;
	}
}

function show_rp() {
	var bsOffcanvas = new bootstrap.Offcanvas(
		document.getElementById('offcanvasRight3')
	);
	bsOffcanvas.show();
}
