const time = document.getElementById('time');

setInterval(function(){
    const date = new Date();
    let day = date.getDay();
    switch(day){
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thrusday';
            break;
        case 5:
            day = 'Friday';
            break;
        case 6:
            day = 'Saturday';
            break;
        case 7:
            day = 'Sunday';
            break;
        case 0:
            day = 'Sunday'
            break;
        default:
            day = '';
            break;
            
    }
    time.innerHTML = `<span>Date: ${date.toLocaleDateString()}<br>Day: ${day}<br>Time: ${date.toLocaleTimeString()}</span> `;
}, 1000) // It shows after 1000ms interval the function runs, until it stopped. And it is the only syntax.