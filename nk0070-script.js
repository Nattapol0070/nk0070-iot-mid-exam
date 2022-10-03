document.addEventListener('DOMContentLoaded',function (){
    fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer&sensor_id=1')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const sensor_value = data.value;
        document.querySelector('body').innerHTML = `Sensor value = ${sensor_value} `;
    });
});