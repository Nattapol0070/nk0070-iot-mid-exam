document.addEventListener('DOMContentLoaded',function (){

    //  ================================ FLOW-TRANSDUCER ============================================
    document.getElementById("flow-form").onsubmit = function (){
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data); // call data => inspect
            let flow_sensor_id = document.querySelector('#flow_sensor_id').value; //select sensor id
            let flow_sensor_name = data[flow_sensor_id]?.name; //sensor data location
            let flow_sensor_types = data[flow_sensor_id]?.type;
            let flow_sensor_unit = data[flow_sensor_id]?.unit;
            let flow_sensor_range = data[flow_sensor_id]?.range;
            let flow_sensor_plant = data[flow_sensor_id]?.["plant-site"];
            let flow_sensor_value = data[flow_sensor_id]?.value;
            if(data[flow_sensor_id] !== undefined){
                document.querySelector('#flow-info').innerHTML = `**Flow-Sensor-ID : ${flow_sensor_id}** 
                                                                        <br>Name : ${flow_sensor_name}.</br> 
                                                                            Type : ${flow_sensor_types}.</br>
                                                                            Unit : ${flow_sensor_unit}.</br>
                                                                            Range : ${flow_sensor_range}.</br>
                                                                            Plant-site : ${flow_sensor_plant}.</br>
                                                                            Value : ${flow_sensor_value}</br> `;
            }
            else{
                document.querySelector('#flow-info').innerHTML = "Invalid.";
            }
        })
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
    }
    //  ================================ FLOW-TRANSDUCER ============================================

    //  ================================ LEVEL-TRANSDUCER ============================================
    document.getElementById("level-form").onsubmit = function (){
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data); // call data => inspect
            let level_sensor_id = document.querySelector('#level_sensor_id').value; //select sensor id
            let level_sensor_name = data[level_sensor_id]?.name; //sensor data location
            let level_sensor_types = data[level_sensor_id]?.type;
            let level_sensor_unit = data[level_sensor_id]?.unit;
            let level_sensor_range = data[level_sensor_id]?.range;
            let level_sensor_plant = data[level_sensor_id]?.["plant-site"];
            let level_sensor_value = data[level_sensor_id]?.value;
            if(data[level_sensor_id] !== undefined){
                document.querySelector('#level-info').innerHTML = `**Level-Sensor-ID : ${level_sensor_id}** 
                                                                        <br>Name : ${level_sensor_name}.</br> 
                                                                            Type : ${level_sensor_types}.</br>
                                                                            Unit : ${level_sensor_unit}.</br>
                                                                            Range : ${level_sensor_range}.</br>
                                                                            Plant-site : ${level_sensor_plant}.</br>
                                                                            Value : ${level_sensor_value}</br> `;
            }
            else{
                document.querySelector('#level-info').innerHTML = "Invalid.";
            }
        })
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
    }
    //  ================================ LEVEL-TRANSDUCER ============================================

    //  ================================ TEMPERATURE-TRANSDUCER ============================================
    document.getElementById("temp-form").onsubmit = function (){
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=temperature-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data); // call data => inspect
            let temp_sensor_id = document.querySelector('#temp_sensor_id').value; //select sensor id
            let temp_sensor_name = data[temp_sensor_id]?.name; //sensor data location
            let temp_sensor_types = data[temp_sensor_id]?.type;
            let temp_sensor_unit = data[temp_sensor_id]?.unit;
            let temp_sensor_range = data[temp_sensor_id]?.range;
            let temp_sensor_plant = data[temp_sensor_id]?.["plant-site"];
            let temp_sensor_value = data[temp_sensor_id]?.value;
            if(data[temp_sensor_id] !== undefined){
                document.querySelector('#temp-info').innerHTML = `**Temp-Sensor-ID : ${temp_sensor_id}** 
                                                                        <br>Name : ${temp_sensor_name}.</br> 
                                                                            Type : ${temp_sensor_types}.</br>
                                                                            Unit : ${temp_sensor_unit}.</br>
                                                                            Range : ${temp_sensor_range}.</br>
                                                                            Plant-site : ${temp_sensor_plant}.</br>
                                                                            Value : ${temp_sensor_value}</br> `;
            }
            else{
                document.querySelector('#temp-info').innerHTML = "Invalid.";
            }
        })
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
    }
    //  ================================ TEMPERATURE-TRANSDUCER ============================================

    //  ================================ PRESSURE-TRANSDUCER ============================================
    document.getElementById("pres-form").onsubmit = function (){
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=pressure-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data); // call data => inspect
            let pres_sensor_id = document.querySelector('#pres_sensor_id').value; //select sensor id
            let pres_sensor_name = data[pres_sensor_id]?.name; //sensor data location
            let pres_sensor_types = data[pres_sensor_id]?.type;
            let pres_sensor_unit = data[pres_sensor_id]?.unit;
            let pres_sensor_range = data[pres_sensor_id]?.range;
            let pres_sensor_plant = data[pres_sensor_id]?.["plant-site"];
            let pres_sensor_value = data[pres_sensor_id]?.value;
            if(data[pres_sensor_id] !== undefined){
                document.querySelector('#pres-info').innerHTML = `**Pressure-Sensor-ID : ${pres_sensor_id}** 
                                                                        <br>Name : ${pres_sensor_name}.</br> 
                                                                            Type : ${pres_sensor_types}.</br>
                                                                            Unit : ${pres_sensor_unit}.</br>
                                                                            Range : ${pres_sensor_range}.</br>
                                                                            Plant-site : ${pres_sensor_plant}.</br>
                                                                            Value : ${pres_sensor_value}</br> `;
            }
            else{
                document.querySelector('#pres-info').innerHTML = "Invalid.";
            }
        })
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
    }
    //  ================================ PRESSURE-TRANSDUCER ============================================
});