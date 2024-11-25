declare var MathJax;

function activity4() {
	pp.clearleftpannel();
	pp.clearrightpannel();

	pp.addoffcanvas(3);

	pp.showtitle(
		'Determination of Hall voltage, and Hall coefficient in Hall effect set up',
		3
	);

	if (method == 1) {
		activity4_method_1();
	} else if (method == 2) {
		get_dataset();
		activity4_method_2();
	} else if (method == 3) {
		get_dataset2();
		activity4_method_3();
	}
}

function activity4_method_1() {
	let activity4_tab_headings = [
		'Sr No.',
		'Current (Ampere)',
		'Magnetic Field (Gauss)',
		'Check',
	];

	let verify_row = [
		[
			'1',
			`${data1[0][0]}`,
			`<input type='text' class='form-control' id='b-inp-1' />`,
			`<input type='button' class='btn btn-primary' id='verify-1' value='verify' onclick='verify_m1(1);' />`,
		],
		[
			'2',
			`${data1[0][1]}`,
			`<input type='text' class='form-control' id='b-inp-2' />`,
			`<input type='button' class='btn btn-primary' id='verify-2' value='verify' onclick='verify_m1(2);' />`,
		],
	];

	let table = new Table(activity4_tab_headings, verify_row);

	pp.addtoleftpannel(table.template);

	table.draw();
}

let first_verified: boolean = false;
let second_verified: boolean = false;

function verify_m1(num: number) {
	let inp1: HTMLInputElement = <HTMLInputElement>(
		document.getElementById('b-inp-1')
	);
	let inp2: HTMLInputElement = <HTMLInputElement>(
		document.getElementById('b-inp-2')
	);

	if (num == 1) {
		console.log(data1[0][1], parseFloat(inp1.value));

		if (!verify_values(data1[0][1], parseFloat(inp1.value))) {
			alert('first values is not correct!!');
			return;
		}

		alert('first value is correct');

		first_verified = true;
	}

	if (num == 2) {
		if (!verify_values(data1[1][1], parseFloat(inp2.value))) {
			alert('Second value is not correct!!');
			return;
		}

		second_verified = true;
	}

	if (first_verified && second_verified) {
		alert('Both values are correct');
		display_first_table();
	}

	return;
}

function display_first_table() {
	pp.clearleftpannel();

	let activity4_tab_headings = [
		'Sr No.',
		'Current (Ampere)',
		'Magnetic Field (Gauss)',
	];

	let t_data = [];

	for (let i = 0; i < data1.length; i++) {
		t_data[i] = [];
		t_data[i][0] = i + 1;
		t_data[i][1] = data1[i][0];
		t_data[i][2] = data1[i][1];
	}

	let table = new Table(activity4_tab_headings, t_data);

	pp.addtoleftpannel(table.template);

	table.draw();
}

function activity4_method_2() {
	let activity4_tab_headings = [
		'Sr No.',
		'Current (Ampere)',
		'Magnetic Field (Gauss)',
		'Hall voltage VH(mV) value',
		'Check',
	];

	let verify_row = [
		[
			'1',
			`${sel_data[0][1]}`,
			`<input type='text' class='form-control' id='m2-a4-1' />`,
			`<input type='text' class='form-control' id='m2-a4-2' />`,
			`<input type='button' class='btn btn-primary' id='m2-a4-verify' ' value='verify' onclick='verify_m2();' />`,
		],
	];

	let table = new Table(activity4_tab_headings, verify_row);

	pp.addtoleftpannel(table.template);

	table.draw();
}

function verify_m2() {
	let val2: HTMLInputElement = <HTMLInputElement>(
		document.getElementById('m2-a4-1')
	);
	let val3: HTMLInputElement = <HTMLInputElement>(
		document.getElementById('m2-a4-2')
	);

	console.log(sel_data[0][2], sel_data[0][1 + selected_field_current]);

	if (!verify_values(parseFloat(val2.value), sel_data[0][2])) {
		alert('Magnetic Field value is incorrect');
		return;
	}
	if (
		!verify_values(
			parseFloat(val3.value),
			sel_data[0][1 + selected_field_current]
		)
	) {
		alert('vh value is incorrect');
		return;
	}

	alert('All entered values are are correct!!');

	display_second_table();
}

function display_second_table() {
	pp.clearleftpannel();

	let activity4_tab_headings = [
		'Sr No.',
		'Current (Ampere)',
		'Magnetic Field (Gauss)',
		'Hall voltage VH(mV) value',
	];

	let edited_table = [];

	for (let i = 0; i < sel_data.length; i++) {
		edited_table[i] = [];
		edited_table[i][0] = sel_data[i][0];
		edited_table[i][1] = sel_data[i][1];
		edited_table[i][2] = sel_data[i][2];
		edited_table[i][3] = sel_data[i][1 + selected_field_current];
	}

	let table = new Table2(
		activity4_tab_headings,
		edited_table,
		'm2-tab-head',
		'm2-tab-body',
		`${selected_material} base thickness ${selected_thickness}`
	);

	pp.addtoleftpannel(table.template);

	table.draw();
}

function activity4_method_3() {
	pp.showdescription(
		`
    <div>
    
    <p><span>$$r_h = \\frac {v_h * i * b}{thickness}$$</span></p>
    <p>vh = hall voltage</p>
    <p>i = Current through sample</p>
    <p>b = ${selected_b}</p>
    <p>thickness</p>

    </div>
    `,
		3
	);

	MathJax.typeset();

	let activity4_tab_headings = [
		'Sr No.',
		'I = Current through sample (mA)',
		'Hall voltage VH(mV) values for different magnetic filed (varying the electromagnet current)',
		'rh',
		'Check',
	];

	for (let i = 0; i < sel_data2.length; i++) {
		let res =
			(sel_data2[i][1 + selected_field_current_m3] *
				selected_field_current_m3 *
				selected_b) /
			selected_thickness_m3;
		sel_data2[i].push(res);
	}

	for (let i = 0; i < third_obs_data.length; i++) {
		let res = (
			(parseFloat(third_obs_data[i][2]) *
				selected_field_current *
				selected_b) /
			selected_thickness
		).toFixed(0);
		third_obs_data[i].push(res.toString());
	}

	let verify_row = [
		[
			'1',
			`${third_obs_data[0][1]}`,
			`<input type='text' class='form-control' id='m3-a4-1' />`,
			`<input type='text' class='form-control' id='m3-a4-2' />`,
			`<input type='button' class='btn btn-primary' id='m3-a4-verify' ' value='verify' onclick='verify_m3();' />`,
		],
	];

	let table = new Table(activity4_tab_headings, verify_row);

	pp.addtoleftpannel(table.template);

	table.draw();
}

function verify_m3() {
	let val2: HTMLInputElement = <HTMLInputElement>(
		document.getElementById('m3-a4-1')
	);
	let val3: HTMLInputElement = <HTMLInputElement>(
		document.getElementById('m3-a4-2')
	);

	console.log(third_obs_data[0][2], third_obs_data[0][3]);

	if (
		!verify_values(parseFloat(val2.value), parseFloat(third_obs_data[0][2]))
	) {
		alert('vh value is incorrect!!');
		return;
	}
	if (
		!verify_values(parseFloat(val3.value), parseFloat(third_obs_data[0][3]))
	) {
		alert('rh values is incorrect!!');
		return;
	}

	alert('All entered values are are correct!!');

	display_third_table();
}
function display_third_table() {
	pp.clearleftpannel();
	pp.showdescription('', 3);

	let activity4_tab_headings = [
		'Sr No.',
		'I = Current through sample (mA)',
		'Hall voltage VH(mV) values for different magnetic field (varying the electromagnet current)',
		'rh',
	];

	let edited_table = [];

	for (let i = 0; i < third_obs_data.length; i++) {
		edited_table[i] = [];
		edited_table[i][0] = third_obs_data[i][0];
		edited_table[i][1] = third_obs_data[i][1];
		edited_table[i][2] = third_obs_data[i][2];
		edited_table[i][3] = third_obs_data[i][3];
	}

	let table = new Table2(
		activity4_tab_headings,
		edited_table,
		'm3-tab-head',
		'm3-tab-body',
		`${selected_material_m3} base thickness ${selected_thickness_m3}`
	);

	pp.addtoleftpannel(table.template);

	table.draw();
}
