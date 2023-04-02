/* Smooth Scroll*/
var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');

var interval;
for(var i=0;i<navMenuAnchorTags.length;i++){
    
    navMenuAnchorTags[i].addEventListener('click', function(event){
        event.preventDefault();
        
        var targetSectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);
        
        interval = setInterval(scrollVertically,20,targetSection);
    });
}

function scrollVertically(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
        
        if(targetSectionCoordinates.top <= 0){
            clearInterval(interval);
            return;
        }
        window.scrollBy(0,50);
}


/*Skill bar Animation */

var progressBars = document.querySelectorAll('.skill-progress > div');
var skillContainer = document.getElementById('skill-container');
window.addEventListener('scroll',checkScroll);
var animationDone = false;

function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width = 0 + '%';
    }
}

initialiseBars();

function fillBars(){

    for(let bar of progressBars){
        let targetwidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let interval = setInterval(function(){
            if(currentWidth > targetwidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 10);
    }
}


function checkScroll(){
    //we have check whether skill container is visible
    var coordinates = skillContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top < window.innerHeight){
        animationDone = true;
        fillBars();
    }else if(coordinates.top > window.innerHeight){
        animationDone = false;
        initialiseBars();
    }
}