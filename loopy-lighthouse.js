for (let i = 100; i <= 200; i++){ //Set start at 100, go to max 200, increment 1 each loop.
    if (i % 3 === 0 && i % 4 === 0){ console.log("LoopyLighthouse"); } //If Divisible by 3 & 4 log "LoopyLighthouse".
    else if (i % 4 === 0){ console.log("Lighthouse"); } // If Divisible by 4 log "Lighthouse".
    else if (i % 3 === 0){ console.log("Loopy"); } // If Divisible by 3 log "Loopy".
    else {
        console.log(i); // Log Value if not Divisible by prior tests.
    }
}