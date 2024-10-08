const experience = [
    {
        img: "images/pyb.png",
        name: 'Hackerrank: SQL (Basic)',
    },
    {
        img: "images/psb.png",
        name: 'Hackerrank: SQL (Intermediate)',
    },
    {
        img: "images/psi.png",
        name: 'Hackerrank: SQL (Advanced)',
    },
    {
        img: "images/cyh.png",
        name: 'NPTEL: Programming in Java',
    },
    {
        img: "images/poi.png",
        name: 'Google: Digital Garage',
    },
    {
        img: "images/pdi.png",
        name: 'Udemy: Mastering Data Structures & Algorithms',
    },
    {
        img: "images/ri.png",
        name: 'FreeCodeCamp: Front End Development Libraries',
    },
    {
        img: "images/ro.png",
        name: 'FreeCodeCamp: Responsive Web Design',
    },
    {
        img: "images/rp.png",
        name: 'Cisco: Networking Basics',
    }

];

$.each(experience, function(x, y) {
    var dat = ""
    dat += '<div  class="info1">';
    dat += '<img src="' + experience[x]['img'] + '" style="width: 180px; height:100px; position:absolute;">';
    dat += '<div class="text2" style="margin-top: 105px;">' + experience[x]['name'] + '</div>';
    dat += '</div></div>';
    $('#main').append(dat);
});

function initImagePopup(elem){
    document.addEventListener('click', function (e) {
        if (!e.target.matches(elem +' img')) return;
        else{

            var image = e.target; // get current clicked image
            var popupImage = document.createElement("img"); 
            popupImage.setAttribute('src', image.src);
            popupImage.style.width = image.width+"px";
            popupImage.style.height = image.height+"px";
            popupImage.style.left = image.offsetLeft+"px";
            popupImage.style.top = image.offsetTop+"px";
            popupImage.classList.add('popImage');
            var popupContainer = document.createElement("div"); 
            popupContainer.classList.add('popupContainer');
            var popUpBackground = document.createElement("div"); 
            $(".navbar").addClass("zen");
            popUpBackground.classList.add('popUpBackground');
            popupContainer.appendChild(popUpBackground);
            popupContainer.appendChild(popupImage);
            document.body.appendChild(popupContainer);
            popupImageFunction();
            var wait;
            window.onresize = function(){
                clearTimeout(wait);
                wait = setTimeout(popupImageFunction, 100);
            };

            popupImage.addEventListener('click', function (e) {
                closePopUpImage();
            });
            popUpBackground.addEventListener('click', function (e) {
                closePopUpImage();
            });

            function popupImageFunction(){
                setTimeout(function(){      
                    popUpBackground.classList.add('active');
                    popupImage.style.left = "15%";
                    popupImage.style.top = "50px";       
                    popupImage.style.width = window.innerWidth * 0.7+"px";
                    popupImage.style.height = ((image.height / image.width) * (window.innerWidth * 0.7))+"px";       
                }, 10);
            }

            function closePopUpImage(){
                $(".navbar").removeClass("zen");
                popupImage.style.width = image.width+"px";
                popupImage.style.height = image.height+"px";
                popupImage.style.left = image.offsetLeft+"px";
                popupImage.style.top = image.offsetTop+"px";
                popUpBackground.classList.remove('active');
                setTimeout(function(){      
                    popupContainer.remove();
                }, 300);
            }
            
        }
    });
}

initImagePopup(".info1")
setTimeout(() => {
$(".lc").removeClass("lk")
}, 1000);
