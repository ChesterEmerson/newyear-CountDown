
    const count = new Date('January, 2024 00:00:00').getTime();
    const countdown = setInterval(() => {
     
       const now = new Date().getTime();
       const timer = count - now;
       
       const days = Math.floor(timer % (100000 * 60 * 60 * 60) / (1000 * 60 * 60 * 24));
       const hours = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       const minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
       const seconds = Math.floor((timer % (1000 * 60)) / 1000);

        document.getElementById('timer').innerHTML = `${days.toString().padStart(2, '0')}`;
        document.getElementById('timers').innerHTML = `${hours.toString().padStart(2, '0' )}`;
        document.getElementById('timerss').innerHTML = `${minutes.toString().padStart(2, '0')}`;
        document.getElementById('timersss').innerHTML = `${seconds.toString().padStart(2, '0')}`;
        if (timer <= 0) {
            clearInterval(countdown);
            document.getElementById('timer');
        } else if (timer <= 0){
            clearInterval(countdown);
            document.getElementById('timers');
        } else if (timer <= 0) {
            clearInterval(countdown);
            document.getElementById('timerss');
        } else if (timer <= 0) {
            clearInterval(countdown)
           document.getElementById('timersss');
        } else {
            console.log("Happy New Year!");
        }

    }, 1000);
