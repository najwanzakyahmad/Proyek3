//menambahkan title
var num = 0; 

var title = document.getElementById('title')
title.innerHTML = "All Members";

var title2 = document.getElementById('title2')
title2.innerHTML = `My Friends (${num}) `;


//menambahkan card nama dan username
const cardBody = document.getElementById('cardBody');
const elementNama = document.createElement('h5');
elementNama.classList.add('card-title');
const teksNama = document.createTextNode("Bobi");


const elementUsername = document.createElement('p');
elementUsername.classList.add('card-text1');
const teksUsername = document.createTextNode("@bobi_gans1");


elementUsername.appendChild(teksUsername)
elementNama.appendChild(teksNama);
elementNama.appendChild(elementUsername)
cardBody.appendChild(elementNama);


//menambahkan button
const followButton = document.querySelectorAll('.followButton')

for(i = 0; i<5; i++){
    const createButton = document.createElement('button');
    createButton.setAttribute('id', 'button1');
    createButton.classList.add('follow')
    const teksButton = document.createTextNode("Follow")

    createButton.appendChild(teksButton);
    
    followButton[i].appendChild(createButton);
}



//untuk memindahkan dari yang kanan kekiri begitupun sebaliknya
var card = document.querySelectorAll('.card');
var button1 = document.querySelectorAll('.follow');
var content1 = document.getElementById('content1');
var content2 = document.getElementById('content2');

for ( let i = 0; i < button1.length ;i++ ){
    button1[i].addEventListener('click', function(){
        // card[i].style.display = 'none'; 

        //mengubah kelasnya menjadi unfollow
        this.classList.toggle('unfollow');
        
        if(this.classList.toggle('follow')){
            num = num - 1;
            title2.innerHTML = `My Friends ${num}`
            button1[i].textContent = "Follow";
            button1[i].style.backgroundColor = "#0095F6";
            content1.appendChild(card[i]);
            
        }else{
            num += 1;
            title2.innerHTML = `My Friends ${num}`
            button1[i].textContent = "Unfollow";
            button1[i].style.backgroundColor = "red";
            content2.appendChild(card[i]);
        }

    })
};


