document.addEventListener('DOMContentLoaded',function (){
      
    document.querySelector('form').onsubmit = function (){
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const flow_sensor_id = document.querySelector('#flow_sensor_id').value;
            let sensor_value = data[flow_sensor_id].value;
            if(sensor_value !== undefined){
                document.querySelector('#result').innerHTML = `Sensor value = ${sensor_value} `;
            }
            else{
                document.querySelector('#result').innerHTML = "Invalid.";
            }
        })
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
    }
});