function startmoveAlong(marker, Time, lineArr, duration, speed){
        var N =  Time[1] - Time[0];
        var num =  Time[0];
        var i = 0;
        var text;
        console.log(N);
        marker.moveAlong(lineArr, {
                duration: duration,
                autoRotation: true,
        });
        function Iter(){
                num = num + 1;
                marker.setText({
                        content: num.toString(),
                })
                if(num === Time[1]){
                        clearInterval(TMP);
                        console.log("结束计时");
                }
        }
        var TMP = setInterval(Iter, duration/N);
}

function startmoveAlongINKM(marker, text, lineArr, duration, speed){
        marker.moveAlong(lineArr, {
                // duration: duration,
                speed: speed,
                autoRotation: true,
        });
}

function ReturnResult(){
        function LocationgeoCode(geocoder, address, Cor)
        {
                return Cor;
        }
        return CLocationgeoCodeor;
}