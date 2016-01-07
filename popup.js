//10 diferent styles, 10 playlists for each style and a Math Random. Easy.

    function randomlyOpen(playlist){
         window.open(playlist[Math.floor(Math.random() * 10)]);
    }
    //Refactoring (more than 3 repeats)


    //Rock
    document.getElementById("rock").addEventListener("click", myRock);
        function myRock() {
                
                randomlyOpen(links.Rock);
        }

    //Retro
    document.getElementById("retro").addEventListener("click", myRetro);
        function myRetro() {

                randomlyOpen(links.Retro);
        }

    //Sunshine
    document.getElementById("sunshine").addEventListener("click", mySunshine);
        function mySunshine() {

                randomlyOpen(links.Sunshine);
        }

    //Coding
    document.getElementById("coding").addEventListener("click", myCoding);
        function myCoding() {
            window.open(links.Coding[Math.floor(Math.random() * 20)]);
        }


    //Love
    document.getElementById("love").addEventListener("click", myLove);
        function myLove() {

                randomlyOpen(links.Love);
        }

    //Relax
    document.getElementById("relax").addEventListener("click", myRelax);
        function myRelax() {

                randomlyOpen(links.Relax);
        }

    //Emo
    document.getElementById("emo").addEventListener("click", myEmo);
        
        function myEmo() {

            randomlyOpen(links.Emo);
        }

    //Heavy
    document.getElementById("kickass").addEventListener("click", myKickAss);
        
        function myKickAss() {

            randomlyOpen(links.Kickass);
        }

    //House
    document.getElementById("house").addEventListener("click", myHouse);
        
        function myHouse() {

                window.open(links.House[Math.floor(Math.random() * 20)]);        
            }

    //Electronic
    document.getElementById("electronic").addEventListener("click", myElectronic);
        
        function myElectronic() {

           randomlyOpen(links.Electronic);
    }
        ;

    //URL Darth Mike
    document.getElementById("DM").addEventListener("click", mySoundcloud);
    function mySoundcloud () {
        window.open("http://soundcloud.com/darth-mike");
    }

    // when click "i" element
    $(document).ready(function(){
        $("#i").click(function(){
            $('#panel-wrap').toggleClass("full");
            $('#panel').toggleClass("hidden");
        });
    });