on("chat:message", function(msg) {
    if (msg !== undefined && msg.content !== undefined) {
            if(msg.content.indexOf("Difficulté:") !== -1) {
            var toucher = msg.inlinerolls[0]["results"]["total"];
            var diff = msg.inlinerolls[1]["results"]["total"];
            var gain = toucher-diff;
            var NR = Math.floor(gain/5);

            if(NR>=0){
                if(msg.content.indexOf("Esquive") !== -1) {
                    var esq = NR + 1;
                    sendChat(msg.who, "/me retire " + esq + " NR à l'attaque.");
                } else {
                    sendChat(msg.who, "/me a " + NR + " NR !");
                }

            } else {
                sendChat(msg.who, "/me a échoué de " + gain);
            }

        } else if(msg.content.indexOf("a fait") !== -1) {
            var toucher = msg.inlinerolls[0]["results"]["total"];
            var gain = toucher-15;
            var NR = Math.floor(gain/5);

            if(NR>=0){
                    sendChat(msg.who, "/me a " + NR + " NR !");
                } else {
                    sendChat(msg.who, "/me a échoué de " + gain);
                }
        }
    }
});
