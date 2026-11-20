function clock(){
    let time = new Date();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let ampm = hours >= 12 ? 'PM' : 'AM';
    console.log(hours,":", minutes,":", seconds, ampm);
}
setInterval(clock, 1000);
