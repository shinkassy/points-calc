function func() {

        var tokyo = 52;
        var kashima = 51;
        var yokohama = 48;
        var kawasaki = 44;
        var hiroshima = 43;
        var cosaka = 43;
        var sapporo = 39;
        var ooita = 39;
        var kobe = 32;
        var simizu = 32;
        var nagoya = 31;
        var gosaka = 31;
        var shonan = 31;
        var sendai =31;
        var urawa = 31;
        var tosu = 27;
        var matsumoto = 24;
        var iwata = 18


        //27節
        var tokyog = parseInt(document.ptable.tokyo27.value)
        alert (tokyog)
        tokyo = tokyo + getpoint(parseInt(document.ptable.tokyo27.value), parseInt(document.ptable.yokohama27.value));
        //yokohama = yokohama + getpoint(parseInt(document.ptable.yokohama27.value), parseInt(document.ptable.tokyo27.value));





        //if(tokyogoal == yokohamagoal){
        //    tokyo = tokyo + 1;
        //    yokohama = yokohama + 1;
        //}else if(tokyogoal > yokohamagoal){
        //    tokyo = tokyo + 3;
        //}else{
        //    yokohama = yokohama + 3;
        //}

        var pointtable =[
            {name: 'tokyo', point: tokyo},
            {name: 'kashima', point: kashima},
            {name: 'yokohama', point: yokohama},
            {name: 'kawasaki', point: kawasaki},
            {name: 'hiroshima', point: hiroshima},
            {name: 'cosaka', point: cosaka},
            {name: 'sapporo', point: sapporo},
            {name: 'ooita', point: ooita},
            {name: 'kobe', point: kobe},
            {name: 'simizu', point: simizu},
            {name: 'nagoya', point: nagoya},
            {name: 'gosaka', point: gosaka},
            {name: 'shonan', point: shonan},
            {name: 'sendai', point: sendai},
            {name: 'urawa', point: urawa},
            {name: 'tosu', point: tosu},
            {name: 'matsumoto', point: matsumoto},
            {name: 'iwata', point: iwata}
        ];

        pointtable.sort(function(a, b) {
        if (a.point < b.point) {
            return 1;
        } else {
            return -1;
        }
        });

        var tablehtml = "<tr><th>順位</th><th>チーム</th><th>勝点</th></tr>";

        for (i=0;i < pointtable.length; i++){
            var rank = i + 1;
            tablehtml = tablehtml + "<tr><th>"+ rank +"</th><td>" + pointtable[i]['name'] + "</td><td>" + pointtable[i]['point'] + "</td></tr>";
        }

        document.getElementById("table").innerHTML = tablehtml
        }



        function getpoint(hg, ag){
            if(hg == ag){
                return 1;
            }else if(hg > ag){
                return 3;
            }else{
                return 0;
            }
        }
