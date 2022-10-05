document.addEventListener('DOMContentLoaded',function (){

    //  ================================ SENSOR - TRANSDUCER ============================================
    document.getElementById("sensor_form").onsubmit = function (){

        let sensor_select = document.querySelector('#sensor_select').value;

        fetch(`https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=${sensor_select}`)
        .then(response => response.json())
        .then(data => {
            console.log(data); // call data => inspect
            let sensor_id = document.querySelector('#sensor_id').value; //select sensor id
            let sensor_name = data[sensor_id]?.name; //sensor data location
            let sensor_types = data[sensor_id]?.type;
            let sensor_unit = data[sensor_id]?.unit;
            let sensor_range = data[sensor_id]?.range;
            let sensor_plant = data[sensor_id]?.["plant-site"];
            let sensor_value = data[sensor_id]?.value;
            if(data[sensor_id] !== undefined){
                document.querySelector('#sensor_info').innerHTML = `**Sensor-ID : ${sensor_id}** 
                                                                        <br>Name : ${sensor_name}.</br> 
                                                                            Type : ${sensor_types}.</br>
                                                                            Unit : ${sensor_unit}.</br>
                                                                            Range : ${sensor_range}.</br>
                                                                            Plant-site : ${sensor_plant}.</br>
                                                                            Value : ${sensor_value}</br> `; //show data on page
            }
            else{
                document.querySelector('#sensor_info').innerHTML = "No-Data.";
            }
        })
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
    }
    //  ================================ SENSOR - TRANSDUCER ============================================

    //  ================================ POST - DATA ====================================================
    let PostFormData = document.getElementById('post_form')
    PostFormData.addEventListener('submit', function(e){
        e.preventDefault();
        let st_id = document.getElementById('st_id').value;
        let st_name = document.getElementById('st_name').value;
        let sensor_name = document.getElementById('sensor_name').value;
        let sensor_type = document.getElementById('sensor_type').value;
        let sensor_unit = document.getElementById('sensor_unit').value;
        let sensor_value = document.getElementById('sensor_value').value;

        fetch('https://midterm-exam-010723313-2022.herokuapp.com/student_post',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "st_id": st_id,
                "st_name": st_name,
                "sensor_name": sensor_name,
                "sensor_type": sensor_type,
                "sensor_unit": sensor_unit,
                "sensor_value": sensor_value,
            })
        })
        .then(response => console.log(response))
        .catch(error => console.log(error));
    })
    //  ================================ POST - DATA =====================================================
});