document.addEventListener('DOMContentLoaded',function (){
    //  ================================FLOW-TRANSDUCER============================================
    document.getElementById("flow-form").onsubmit = function (){
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let flow_sensor_id = document.querySelector('#flow_sensor_id').value;
            let flow_sensor_name = data[flow_sensor_id]?.name;
            let flow_sensor_types = data[flow_sensor_id]?.type;
            let flow_sensor_unit = data[flow_sensor_id]?.unit;
            let flow_sensor_range = data[flow_sensor_id]?.range;
            let flow_sensor_plant = data[flow_sensor_id]?.["plant-site"];
            let flow_sensor_value = data[flow_sensor_id]?.value;
            if(data[flow_sensor_id] !== undefined){
                document.querySelector('#flow-info').innerHTML = `**FLOW-Sensor-ID : ${flow_sensor_id}** 
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
    //  ================================FLOW-TRANSDUCER============================================

    //  ================================LEVEL-TRANSDUCER============================================
    document.getElementById("level-form").onsubmit = function (){
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let level_sensor_id = document.querySelector('#level_sensor_id').value;
            let level_sensor_name = data[level_sensor_id]?.name;
            let level_sensor_types = data[level_sensor_id]?.type;
            let level_sensor_unit = data[level_sensor_id]?.unit;
            let level_sensor_range = data[level_sensor_id]?.range;
            let level_sensor_plant = data[level_sensor_id]?.["plant-site"];
            let level_sensor_value = data[level_sensor_id]?.value;
            if(data[level_sensor_id] !== undefined){
                document.querySelector('#level-info').innerHTML = `**LEVEL-Sensor-ID : ${level_sensor_id}** 
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
    //  ================================LEVEL-TRANSDUCER============================================
});