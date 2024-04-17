function repeatHello (cb){
    setInterval(cb, 1000);
}

repeatHello(()=> console.log("Hello"));