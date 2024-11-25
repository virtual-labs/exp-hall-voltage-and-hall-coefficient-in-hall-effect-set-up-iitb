function activity3() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    pp.showtitle('Determination of Hall voltage, and Hall coefficient in Hall effect set up', 3);
    let left_panel_text = `
        <div id='act3-left-content' style='height: 100%; overflow: auto;'>
            <label for="">Select the activity</label>
            <select name="" id="first-dd" class="form-select" onchange="select_dataset();">
                <option value='' >--Select Activity--</option>
                <option value="data1">Calibration of the magentic field with current</option>
                <option value="data2">Hall voltage VH(mV) values for different electromagnet current at constant current through sample</option>
                <option value="data3">Hall voltage VH(mV) values for different current through samples at constant magnetic field</option>
            </select>

            <br>

            <div id='act-spec-img' ></div>

            <div id='choose-i'></div>
        </div>
    `;
    pp.addtoleftpannel(left_panel_text);
}
function select_dataset() {
    let first_dd = document.getElementById('first-dd');
    let img_container = document.getElementById('act-spec-img');
    let val = first_dd.value;
    if (val == '') {
        img_container.innerHTML = ``;
        return;
    }
    if (document.getElementById('choose-i')) {
        document.getElementById('choose-i').innerHTML = ``;
    }
    if (val == 'data1') {
        method = 1;
        activity3_method_1();
        img_container.innerHTML = `<img src="./images/assembly/Seq02.webp" style='margin-left: 30%; width: 268px; height: 222px;' alt="">`;
        // activity2();
    }
    if (val == "data2") {
        method = 2;
        activity3_method_2();
        img_container.innerHTML = `<img src="./images/assembly/Seq04.webp" style='margin-left: 30%; width: 268px; height: 222px;' alt="">`;
        // activity21();
    }
    if (val == "data3") {
        method = 3;
        activity3_method_3();
        img_container.innerHTML = `<img src="./images/assembly/Seq04.webp" style='margin-left: 30%; width: 268px; height: 222px;' alt="">`;
        // activity22();
    }
}
function activity3_method_1() {
    let data_size = data1.length;
    let new_dd_text = `
   
        <label for="">Move slider to vary current</label>
        <input id='current-slider' type='range' min='1' max='${data_size}' step='1' value='1' onchange='select_current();' oninput='select_current();' />
        <input disabled type="text" id='show-current' class='form-control' />
        <br>
        <input disabled type="text" id='show-mfield' class='form-control' />
        <br>

        <div>
        <button id="act4_btn" class="btn btn-primary" onclick="activity2();" style="position: absolute; bottom: 12vh; width: 85%;">Next</button>
        </div>

    `;
    let left_div = document.getElementById("choose-i");
    left_div.innerHTML += new_dd_text;
}
function select_current() {
    let i_slider = document.getElementById('current-slider');
    let show_i = document.getElementById('show-current');
    let show_mfield = document.getElementById('show-mfield');
    selected_current = data1[parseInt(i_slider.value) - 1][0];
    selected_magnetic_field = data1[parseInt(i_slider.value) - 1][1];
    show_i.value = "Current (Ampere) => " + data1[parseInt(i_slider.value) - 1][0].toString();
    show_mfield.value = "Magnetic Field (Gauss) => " + data1[parseInt(i_slider.value) - 1][1].toString();
}
function activity3_method_2() {
    let ele = document.getElementById('choose-i');
    ele.innerHTML = `
       

        <label for="">Select Material</label>
        <select class="form-select" id="a3-m2-2" onchange="set_m2(2);" name="">
            <option value="">--Select--</option>
            <option value="germanium">Germanium (Probe 1)</option>
            <option value="sillicon">Sillicon (Probe 2)</option>
        </select>

        <br>


        <label for="">Select Thickness in cm</label>
        <select class="form-select" id="a3-m2-3" onchange="set_m2(3);" name="">
            <option value="">--Select--</option>
            <option value="0.025">0.025</option>
            <option value="0.05">0.05</option>
            <option value="0.075">0.075</option>
            <option value="0.1">0.1</option>
        </select>

        <br>

        <label for="">Select Field Current Value (mA)</label>
        <select class="form-select" id="a3-m2-4" onchange="set_m2(4);" name="">
            <option value="">--Select--</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
        </select>

        <br>

        <button disabled class='btn btn-primary' onclick='a3_show_slider();' id='a3-btn-2' >Show Slider</button>

        <div id='m2-slider' ></div>
    `;
}
function set_m2(num) {
    if (num == 2) {
        let material_ele = document.getElementById('a3-m2-2');
        if (material_ele.value != '') {
            selected_material = material_ele.value;
        }
        else {
            return;
        }
    }
    else if (num == 3) {
        let thickness_ele = document.getElementById('a3-m2-3');
        if (thickness_ele.value != '') {
            selected_thickness = parseFloat(thickness_ele.value);
        }
        else {
            return;
        }
    }
    else if (num == 4) {
        let current_ele = document.getElementById('a3-m2-4');
        if (current_ele.value != '') {
            selected_field_current = parseInt(current_ele.value);
            let btn = document.getElementById('a3-btn-2');
            btn.disabled = false;
        }
        else {
            return;
        }
    }
    else {
        return;
    }
}
function a3_show_slider() {
    let btn = document.getElementById('a3-btn-2');
    let m2_slider = document.getElementById('m2-slider');
    if (btn) {
        btn.remove();
    }
    m2_slider.innerHTML = ``;
    get_dataset();
    m2_slider.innerHTML = `
    <input type="range" min="1" max="35" step='1' value='1' onchange="show_m2();" oninput="show_m2();" id="m2-slider1" />

    <br>

    <input disabled type="text" class="form-control" id="current-m2-inp" />

    <br>

    <input disabled type="text" class="form-control" id="b-m2-inp" />

    <br>

    <input disabled type="text" class="form-control" id="fi-m2-inp" />

    <br><br>

    <button disabled class='btn btn-primary' onclick='activity21();' id='m2-a3-a4' >Next</button>
    `;
}
function show_m2() {
    let slider1 = document.getElementById("m2-slider1");
    let show1 = document.getElementById("current-m2-inp");
    let show2 = document.getElementById("b-m2-inp");
    let show3 = document.getElementById("fi-m2-inp");
    show1.value = "Current Through Electromagnet (Ampere) => " + sel_data[parseInt(slider1.value) - 1][1].toString();
    show2.value = "Magnetic Field (Gauss) => " + sel_data[parseInt(slider1.value) - 1][2].toString();
    show3.value = "Hall Voltage VH(mV) Value for current through sample => " + sel_data[parseInt(slider1.value) - 1][1 + selected_field_current].toString();
    let btn = document.getElementById("m2-a3-a4");
    btn.disabled = false;
}
function activity3_method_3() {
    let ele = document.getElementById('choose-i');
    ele.innerHTML = `
       

        <label for="">Select Material</label>
        <select class="form-select" id="a3-m3-2" onchange="set_m3(2);" name="">
            <option value="">--Select--</option>
            <option value="germanium">Germanium (Probe 1)</option>
            <option value="sillicon">Sillicon (Probe 2)</option>
        </select>

        <br>


        <label for="">Select thickness in cm</label>
        <select class="form-select" id="a3-m3-3" onchange="set_m3(3);" name="">
            <option value="">--Select--</option>
            <option value="0.025">0.025</option>
            <option value="0.05">0.05</option>
            <option value="0.075">0.075</option>
            <option value="0.1">0.1</option>
        </select>

        <br>

        <label for="">Select current through sample (mA)</label>
        <select class="form-select" id="a3-m3-4" onchange="set_m3(4);" name="">
            <option value="">--Select--</option>
            <option value="1">1 (b = 2166)</option>
            <option value="2">2 (b = 4270)</option>
            <option value="3">3 (b = 6350)</option>
        </select>

        <br>

        <button disabled class='btn btn-primary' onclick='a3_m3_show_slider();' id='a3-m3-btn-2' >Show Slider</button>

        <div id='m3-slider' ></div>
    `;
}
function set_m3(num) {
    if (num == 2) {
        let material_ele = document.getElementById('a3-m3-2');
        if (material_ele.value != '') {
            selected_material_m3 = material_ele.value;
            selected_material = selected_material_m3;
        }
        else {
            return;
        }
    }
    else if (num == 3) {
        let thickness_ele = document.getElementById('a3-m3-3');
        if (thickness_ele.value != '') {
            selected_thickness_m3 = parseFloat(thickness_ele.value);
            selected_thickness = selected_thickness_m3;
        }
        else {
            return;
        }
    }
    else if (num == 4) {
        let current_ele = document.getElementById('a3-m3-4');
        if (current_ele.value != '') {
            selected_field_current_m3 = parseInt(current_ele.value);
            selected_field_current = selected_field_current_m3;
            let btn = document.getElementById('a3-m3-btn-2');
            if (current_ele.value == '1') {
                selected_b = 2166;
            }
            else if (current_ele.value == '2') {
                selected_b = 4270;
            }
            else if (current_ele.value == '3') {
                selected_b = 6350;
            }
            btn.disabled = false;
        }
        else {
            return;
        }
    }
    else {
        return;
    }
}
function a3_m3_show_slider() {
    let btn = document.getElementById('a3-m3-btn-2');
    let m2_slider = document.getElementById('m3-slider');
    if (btn) {
        btn.remove();
    }
    m2_slider.innerHTML = ``;
    get_dataset2();
    m2_slider.innerHTML = `
    <input type="range" min="1" max="30" step='1' value='1' onchange="show_m3();" oninput="show_m3();" id="m3-slider1" />

    <br>

    <input disabled type="text" class="form-control" id="current-m3-inp" />

    <br>

    <input disabled type="text" class="form-control" id="fi-m3-inp" />

    <br><br>

    <button disabled class='btn btn-primary' onclick='activity22();' id='m3-a3-a4' >Next</button>
    `;
}
function show_m3() {
    let slider1 = document.getElementById("m3-slider1");
    let show1 = document.getElementById("current-m3-inp");
    let show3 = document.getElementById("fi-m3-inp");
    show1.value = "Current Through Electromagnet (Ampere) => " + sel_data2[parseInt(slider1.value) - 1][1].toString();
    show3.value = "Hall Voltage VH(mV) Value for current through sample => " + sel_data2[parseInt(slider1.value) - 1][1 + selected_field_current_m3].toString();
    let btn = document.getElementById("m3-a3-a4");
    btn.disabled = false;
}
//activity3();
//# sourceMappingURL=activity3.js.map