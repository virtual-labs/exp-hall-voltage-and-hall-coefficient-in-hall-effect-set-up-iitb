let curr_hall_current_index = 0;
let cv_meter_up_1;
let cv_meter_down_1;
let cv_meter_power_1;
let cv_power_on_1 = true;
let can_use_cv_meter_1 = false;
let can_mount_hall_probe_1 = false;
let can_show_cv_reading_1s_1 = false;
let a22_cv_down = false;
let a22_cv_up = false;
let a22_em_down = false;
let a22_em_up = false;
let cv_i_reading_1;
let cv_v_reading_1;
let i_reading_1;
let v_reading_1;
let seleted_em_index = 0;
let selected_data_array_1 = [];
let curr_data2_index_1 = 0;
let can_edit_table = false;
let selected_mag_field = 0;
function activity22() {
    //clear screen
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    pp.showtitle(`<p id="exp-title">Measuring Magnetic Field with Gauss Probe</p>`, 3);
    pp.showdescription(`<div style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: calc(1vw + 12px);">Click on the start button</p>`, 3);
    //add left panel text and button
    let left_title = `
    <div style='position: absolute; top: 2.5vw; background-color: rgb(144, 175, 233); font-size: 1.3vw; padding: 1%; border-radius: 10px; width: 38vw;'>Hall voltage VH(mV) values for different electromagnetic  current at constant current through sample</div>

    <div id='start-first' style='position: absolute; top: 14vw; left: 16vw; z-index: 10;'>
    <button class='btn btn-success' style='font-size: 1.5vw;  width: 10vw;' onclick='show_table_2();' >Start</button>
    </div>
    `;
    get_data_array_1();
    pp.addtoleftpannel(left_title);
    gauss_table_2();
    show_rp();
    //add all canvases and contexts
    pp.addtoleftpannel(inner_canvas);
    canvas = document.getElementById('canvas-1');
    context = canvas.getContext('2d');
    canvas2 = document.getElementById('canvas-2');
    context2 = canvas2.getContext('2d');
    curr_index = 0;
    scene1 = new Scene_Canvas(canvas);
    scene1.addcanvas(canvas2);
    probe = new Chemistry.Custome_image(hall_probe1, new Chemistry.Point(1350, 460), 804 * 1.3, 666 * 1.3, canvas);
    scene1.add(probe);
    load_buttons_2();
    window.onload = a22_windowresize;
    window.onresize = a22_windowresize;
    a22_windowresize();
}
function a22_windowresize() {
    //canvas size
    a22_canvas_size();
    //canvas mapping
    a22_canvas_mapping();
    //draw scene
    scene1.draw();
    //  for(let j = 0; j<a1_index.length; j++) {
    //      a1_labels[a1_index[j]].draw();
    //  }
}
function a22_canvas_size() {
    canvas.width = window.innerWidth * 0.91;
    canvas.height = ((canvas.width * 1080.0) / 1920) * 0.85;
    lscale = canvas.width / 1920.0;
    document.getElementById('leftpannel').style.height =
        canvas.height + 5 + 'px';
    document.getElementById('leftpannel').style.margin = '0';
    canvas2.width = window.innerWidth * 0.21;
    canvas2.height = window.innerWidth * 0.15;
}
function a22_canvas_mapping() {
    context.translate(0, canvas.height);
    context.scale(1, -1);
    context2.translate(0, canvas2.height);
    context2.scale(1, -1);
}
function gauss_table_2() {
    let heading = [
        'S no.',
        'Current Through Hall Probe',
        'Hall Volatage V<sub>H</sub>, mV',
    ];
    let rows = [];
    for (let i = 0; i < third_obs_data.length; i++) {
        rows[i] = [];
        rows[i][0] = third_obs_data[i][0];
        rows[i][1] = third_obs_data[i][1];
        rows[i][2] = third_obs_data[i][2];
    }
    tab = new Observation_Table(heading, rows);
    pp.addtoleftpannel(tab.template);
    let doc = document.getElementsByTagName('table')[0];
    doc.style.display = 'none';
    tab.draw();
    pp.addtoleftpannel(`
    <div style='position: absolute; top: 32vw;' id='tab-btns' >
    <div>
    `);
}
function show_table_2() {
    console.log('I was here');
    pp.showdescription(`<div style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: calc(1vw + 12px);">
    <p>Click on power button of Electromagnet Power Supply</p>
    </div>`, 3);
    show_rp();
    let ele = document.getElementById('start-first');
    ele.remove();
    let doc = document.getElementsByTagName('table')[0];
    doc.style.display = 'block';
    tab.draw();
    needle = new Chemistry.Needle(190, 83, 70, 5, 150, 'red', canvas2); // 77 to 150
    scene1.add(needle);
    scene1.draw();
    addEventListener('click', set_positions_2);
    // pp.addtoleftpannel(`
    // <div style='position: absolute; top: 39.5vw;'>
    // <button class='btn btn-success' style='width: 19vw;'>Save</button>
    // <button class='btn btn-danger' style='width: 19vw;'>delete</button>
    // </div>
    // `);
    let tb = (document.getElementById('tab-btns'));
    tb.innerHTML = `
    <p style='margin: 0; font-size: 1.4vw;'>Selected Electromagnet Current = <span id='show-sel-current' style='color: blue; font-weight: 600;'>${seleted_em_index} mA</span></p>
    <p style='margin: 0; font-size: 1.4vw;'>Selected Magentic Field = <span id='show-field' style='color: blue; font-weight: 600;'>${selected_mag_field} mA</span></p>
    <p style='margin: 0; font-size: 1.4vw;'>Selected material = <span style='color: blue; font-weight: 600;'>${selected_material}</span> </p>
    <p style='margin: 0; font-size: 1.4vw;'>Selected Thickness = <span style='color: blue; font-weight: 600;'>${selected_thickness}</span> </p>
    <button onclick='add_reading_2();' class='btn btn-success' style='width: 19vw; position: relative; z-index: 5; font-size: 1.4vw;'>Save</button>
    <button onclick='remove_reading_2();' class='btn btn-danger' style='width: 19vw;  position:relative; z-index: 5; font-size: 1.4vw;'>delete</button>
    `;
}
function load_buttons_2() {
    em_power = new Chemistry.Circle(new Chemistry.Point(40, 68), 15, canvas2);
    em_up = new Chemistry.Circle(new Chemistry.Point(315, 155), 15, canvas2);
    em_up.color = 'transparent';
    em_down = new Chemistry.Circle(new Chemistry.Point(415, 155), 15, canvas2);
    em_down.color = 'transparent';
    cv_meter_power_1 = new Chemistry.Circle(new Chemistry.Point(1413, 200), 15, canvas);
    cv_meter_up_1 = new Chemistry.Circle(new Chemistry.Point(1634, 175), 15, canvas);
    cv_meter_up_1.color = 'transparent';
    cv_meter_down_1 = new Chemistry.Circle(new Chemistry.Point(1551, 175), 15, canvas);
    cv_meter_down_1.color = 'transparent';
    scene1.add(em_power);
    scene1.add(em_up);
    scene1.add(em_down);
    scene1.add(cv_meter_power_1);
    scene1.add(cv_meter_up_1);
    scene1.add(cv_meter_down_1);
}
function set_positions_2(e) {
    let x = Math.round((e.clientX - rect.x) / lscale);
    let y = Math.round((canvas2.height - (e.clientY - rect.y)) / lscale);
    console.log('a22 x&y', x, y);
    let x4 = e.clientX;
    let y4 = e.clientY;
    if (x <= 932 && x >= 900) {
        if (y <= -422 && y >= -454) {
            console.log('clicked on power button');
            em_power.color = 'green';
            can_mount_hall_probe_1 = true;
            scene1.draw();
            pp.showdescription(`<div style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: calc(1vw + 12px);">
        Now, Click on the Hall Probe to mount it on wooden stand
        </div>`, 3);
            show_rp();
        }
    }
    if (a22_em_up) {
        if (x <= 1205 && x >= 1175) {
            if (y <= -336 && y >= -367) {
                console.log('clicked on up button');
                console.log(needle_angle);
                if (needle_angle < 150) {
                    needle_angle += 24;
                    seleted_em_index = Math.round((150 - needle_angle) / 24);
                    console.log(seleted_em_index);
                    needle.angleInRadians = needle_angle * (Math.PI / 180);
                    dsp_reading_1();
                    scene1.draw();
                    can_edit_table = true;
                    // if(curr_hall_current_index != 0) {
                    //     curr_hall_current_index--;
                    // }
                }
                scene1.draw();
                clear_table_1();
                let show = (document.getElementById('show-sel-current'));
                let show_field = (document.getElementById('show-field'));
                show.innerText = seleted_em_index.toString() + ' mA';
                selected_field_current = seleted_em_index;
                for (let i = 0; i < data1.length; i++) {
                    if (data1[i][0] == seleted_em_index) {
                        show_field.innerText =
                            data1[i][1].toString() + ' Guass';
                        selected_b = data1[i][1];
                    }
                }
                scene1.draw();
            }
        }
    }
    if (a22_em_down) {
        if (x <= 1305 && x >= 1275) {
            if (y <= -336 && y >= -367) {
                console.log('clicked on down button');
                console.log(needle_angle);
                if (needle_angle > 78) {
                    needle_angle -= 24;
                    seleted_em_index = Math.round((150 - needle_angle) / 24);
                    console.log(seleted_em_index);
                    needle.angleInRadians = needle_angle * (Math.PI / 180);
                    dsp_reading_1();
                    can_edit_table = true;
                    // if(curr_hall_current_index != 34) {
                    //     curr_hall_current_index++;
                    // }
                }
                scene1.draw();
                clear_table_1();
                let show = (document.getElementById('show-sel-current'));
                let show_field = (document.getElementById('show-field'));
                show.innerText = seleted_em_index.toString() + ' mA';
                scene1.draw();
                for (let i = 0; i < data1.length; i++) {
                    if (data1[i][0] == seleted_em_index) {
                        show_field.innerText =
                            data1[i][1].toString() + ' Guass';
                        selected_b = data1[i][1];
                    }
                }
            }
        }
    }
    //for mouting gauss probe
    if (can_mount_hall_probe_1) {
        if (x4 > 1520 * lscale && x4 < 1785 * lscale) {
            if (y4 < 563 * lscale && y4 > 531 * lscale) {
                probe.img = hall_probe2;
                can_use_cv_meter_1 = true;
                scene1.draw();
                pp.showdescription(`<div style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: calc(1vw + 12px);">
    <p>Turn on (click) the power supply of Current/Voltage meter</p>
    </div>`, 3);
                show_rp();
            }
        }
    }
    //for turning on the gauss meter power and display
    if (can_use_cv_meter_1) {
        if (x <= 1428 && x >= 1396) {
            if (y <= -385 && y >= -415) {
                cv_meter_power_1.color = 'green';
                scene1.draw();
                a22_cv_down = true;
                a22_cv_up = true;
                a22_em_down = true;
                a22_em_up = true;
                show_gm_display_2();
                pp.showdescription(`<div style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: calc(1vw + 12px);">
               <p>* You can only take reading at a certain current through hall probe. Set It to a fix value before taking readings</p>
               <p>* Now you can use UP and Down arrow buttons on the Electromagnet Power supply to change the current through electromagnet.</p>
               <p>* Click save to add a values to the observation table</p>
               <p>* Click delete button to delete the last value in the observation table</p>
               <p>* You can take 8 readings only</p>
               <p>Note : if you change hall current value the observation table values will start from begining again</p>
            </div>`, 3);
                show_rp();
            }
        }
    }
    if (cv_power_on_1 && a22_cv_up) {
        if (x <= 1647 && x >= 1619) {
            if (y <= -409 && y >= -439) {
                if (curr_hall_current_index < 29) {
                    curr_hall_current_index += 1;
                }
                display_readings_1();
            }
        }
    }
    if (cv_power_on_1 && a22_cv_down) {
        if (x <= 1566 && x >= 1535) {
            if (y <= -411 && y >= -439) {
                if (curr_hall_current_index > 0) {
                    curr_hall_current_index -= 1;
                }
                display_readings_1();
            }
        }
    }
}
function show_gm_display_2() {
    cv_i_reading_1 = new Chemistry.Geo_Text('0.5', new Chemistry.Point(1455, 250), canvas);
    cv_v_reading_1 = new Chemistry.Geo_Text('0.0', new Chemistry.Point(1616, 250), canvas);
    scene1.add(cv_i_reading_1);
    scene1.add(cv_v_reading_1);
    cv_i_reading_1.font = '50%';
    cv_v_reading_1.font = '50%';
    scene1.draw();
    can_show_cv_reading_1s_1 = true;
}
function add_reading_2() {
    if (can_edit_table) {
        let table = (document.getElementsByClassName('table')[0]);
        let rows = table.tBodies[0].rows;
        if (curr_index < 8) {
            let r = display_readings_1();
            let index = curr_hall_current_index;
            if (curr_hall_current_index != 0) {
                index--;
            }
            third_obs_data[curr_index][1] = cv_i_reading_1.text;
            third_obs_data[curr_index][2] = cv_v_reading_1.text;
            rows[curr_index].innerHTML = `
                <td style='padding: 0;'>${curr_index + 1}</td>
                <td style='padding: 0;'>${cv_i_reading_1.text}</td>
                <td style='padding: 0;'>${cv_v_reading_1.text}</td>
            `;
            curr_index++;
        }
    }
    else {
        alert('For adding observations all power supplies must be on with non-zero values. Please check again!!');
    }
    if (curr_index == 8) {
        removeEventListener('click', set_positions_2);
        activity4();
    }
}
function remove_reading_2() {
    if (can_edit_table) {
        let table = (document.getElementsByClassName('table')[0]);
        let rows = table.tBodies[0].rows;
        if (curr_index > 0) {
            third_obs_data[curr_index][1] = '';
            third_obs_data[curr_index][2] = '';
            rows[curr_index - 1].innerHTML = `
                <td style='padding: 0;'>${curr_index}</td>
                <td style='padding: 0;'></td>
                <td style='padding: 0;'></td>
            `;
            curr_index--;
        }
    }
    else {
        alert('For adding observations all power supplies must be on with non-zero values. Please check again!!');
    }
}
function get_data_array_1() {
    for (let i = 0; i < data2.length; i++) {
        if (data3[i]['probe'] == selected_material &&
            data3[i]['thickness'] == selected_thickness) {
            selected_data_array_1 = data3[i]['data'];
            console.log(selected_data_array_1);
            return;
        }
    }
    alert('data array not assigned');
}
function dsp_reading_1() {
    if (can_show_cv_reading_1s_1) {
        cv_i_reading_1.text =
            selected_data_array_1[curr_hall_current_index][1].toFixed(1);
        console.log(selected_data_array_1[curr_hall_current_index][1], seleted_em_index + 1);
        cv_v_reading_1.text =
            selected_data_array_1[curr_hall_current_index][seleted_em_index + 1].toFixed(1);
    }
}
function display_readings_1() {
    // if(can_show_cv_reading_1s_1 && curr_hall_current_index != 0) {
    cv_i_reading_1.text =
        selected_data_array_1[curr_hall_current_index][1].toFixed(1);
    console.log(selected_data_array_1[curr_hall_current_index][1], seleted_em_index + 1);
    cv_v_reading_1.text =
        selected_data_array_1[curr_hall_current_index][seleted_em_index + 1].toFixed(1);
    scene1.draw();
    return cv_v_reading_1.text;
    // }
    // if(can_show_cv_reading_1s_1 && curr_hall_current_index == 0) {
    //     cv_i_reading_1.text =  selected_data_array_1[curr_hall_current_index][1].toFixed(1);
    //     console.log(selected_data_array_1[curr_hall_current_index][1], seleted_em_index+2);
    //     cv_v_reading_1.text = selected_data_array_1[curr_hall_current_index][seleted_em_index+2].toFixed(1);
    //     return cv_v_reading_1.text;
    //    }
}
function clear_table_1() {
    if (can_edit_table) {
        let table = (document.getElementsByClassName('table')[0]);
        let rows = table.tBodies[0].rows;
        for (let i = 0; i < third_obs_data.length; i++) {
            third_obs_data[i][1] = '';
            third_obs_data[i][2] = '';
            rows[i].innerHTML = `
        <td style='padding: 0;'>${i + 1}</td>
        <td style='padding: 0;'></td>
        <td style='padding: 0;'></td>
    `;
        }
        curr_index = 0;
    }
}
//# sourceMappingURL=activity22.js.map