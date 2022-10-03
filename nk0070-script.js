document.addEventListener('DOMContentLoaded',function (){
      
    document.querySelector('form').onsubmit = function (){
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let flow_sensor_id = document.querySelector('#flow_sensor_id').value;
            let sensor_name = data[flow_sensor_id]?.name;
            let sensor_types = data[flow_sensor_id]?.type;
            let sensor_unit = data[flow_sensor_id]?.unit;
            let sensor_range = data[flow_sensor_id]?.range;
            let sensor_plant = data[flow_sensor_id]?.["plant-site"];
            let sensor_value = data[flow_sensor_id]?.value;
            if(data[flow_sensor_id] !== undefined){
                document.querySelector('#flow-info').innerHTML = `**FLOW-Sensor-ID : ${flow_sensor_id}** 
                                                                        <br>Name : ${sensor_name}.</br> 
                                                                            Type : ${sensor_types}.</br>
                                                                            Unit : ${sensor_unit}.</br>
                                                                            Range : ${sensor_range}.</br>
                                                                            Plant-site : ${sensor_plant}.</br>
                                                                            Value : ${sensor_value}</br> `;
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
});