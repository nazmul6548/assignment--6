const callMyApi = async () => {
    const apiLInk = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await apiLInk.json();
    const information = data.posts;
    console.log(information);
    cardItems(information);
}

const cardItems = (info) => {
// console.log(info);
const cardContainer = document.getElementById('card-container');
cardContainer.innerText=""
info.forEach(element => {
    
    console.log(element);
    const cardInfo = document.createElement('div');
    cardInfo.classList=`bg-[#F3F3F5] rounded-3xl w-full  lg:w-[100%] mb-[5px]`;
    cardInfo.innerHTML=`
    <div class="grid grid-cols-1 gap-5 bg-[#F3F3F5] rounded-3xl w-full  lg:w-[70%]">
    <div class="flex flex-col lg:flex-row mb-5">
      
       <div class="flex">
       <div class="indicator mt-8 ml-8">
    <span class="indicator-item badge ${element.isActive ? 'bg-green-500' :
    'bg-red-500'} text-white px-2 py-1 rounded-full">

    </span>
    <div class="grid w-32 h-32 bg-base-300 place-items-center">
        <img src ="${element.image}" alt="" class="rounded-2xl" >
    </div>
    </div>

        <div>
            <div class=" mt-10">
                <div class="flex text-left w-3/4 m-auto">
                    <p class="">#${element.category}</p>
                    <p class="ml-14">Author : ${element.author.name}</p>
                      
                  </div>
                  <h4 class="text-center lg:text-left text-3xl pt-5 pb-5 w-full  lg:w-3/4 m-auto">${element.title}</h4>
                  <p class="text-center lg:text-left pb-5 w-full lg:w-3/4 m-auto">${element.description}</p>
                  <div class="border border-dotted border-gray-500 border-1 w-3/4 m-auto">
                  </div>
                  <div class="flex justify-evenly pt-10 pb-5">
                    <div class="flex">
                        <img src="./icon/tabler-icon-message-2.png" alt="">
                        <p class="ml-4">${element.comment_count}</p>
                      </div>
                      <div class="flex">
                        <img src="./icon/Group 16.png" alt="">
                        <p class="ml-4">${element.view_count}</p>
                      </div>
                      <div class="flex">
                        <img src="./icon/Group 18.png" alt="">
                        <p class="ml-4">${element.posted_time}</p>
                    </div>
                    <button onclick="handleButtonClick('${element.title}',${element.view_count})"><img src="./icon/Group 40106.png" alt=""> </button>
                  </div>
              </div>
              
        </div>
       </div>
          <!--  -->
    </div>
</div>                                             
    `
    cardContainer.appendChild(cardInfo)
});



}
let count =0;
const handleButtonClick= (title,view) => {
    count++;
const store = document.getElementById('storeId');
const div = document.createElement('div');
div.style.display='flex';
div.style.justifyContent="space-between";
div.style.backgroundColor="#FFFFFF";
div.style.padding="10px";
div.style.borderRadius='10px';
div.style.marginTop='10px';

const numCount = document.getElementById('number');
numCount.innerText=`${count}`

const p = document.createElement('p');
p.innerText=title;
const p2 = document.createElement('p');
p2.innerText=view;
div.appendChild(p);
div.appendChild(p2);
store.appendChild(div);
}
// 

// search button
const callMyThirdApi = async (categoryName) => {
    let myThirdLink = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${categoryName}`);
    let dataCol = await myThirdLink.json();
    const stores =dataCol.posts;
    console.log(stores);
    
    // 
    
    thirdApi(stores)
        // 

    
}

const thirdApi = (stores) => {
    console.log(stores);
    const cardContaine = document.getElementById('card-container');
    cardContaine.innerText="";
    stores.forEach(elem => {
        console.log(elem);
        const cartId =document.createElement('div');

        cartId.classList=`bg-[#F3F3F5] rounded-3xl w-full  lg:w-[100%] mb-[5px]`;
        cartId.innerHTML=`
        <div class="grid grid-cols-1 gap-5 bg-[#F3F3F5] rounded-3xl w-full  lg:w-[70%]">
        <div class="flex flex-col lg:flex-row mb-5">
          
           <div class="flex">
           <div class="indicator mt-8 ml-8">
        <span class="indicator-item badge ${elem.isActive ? 'bg-green-500' :
        'bg-red-500'} text-white px-2 py-1 rounded-full">
    
        </span>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">
            <img src ="${elem.image}" alt="" class="rounded-2xl" >
        </div>
        </div>
    
            <div>
                <div class=" mt-10">
                    <div class="flex text-left w-3/4 m-auto">
                        <p class="">#${elem.category}</p>
                        <p class="ml-14">Author : ${elem.author.name}</p>
                          
                      </div>
                      <h4 class="text-center lg:text-left text-3xl pt-5 pb-5 w-full  lg:w-3/4 m-auto">${elem.title}</h4>
                      <p class="text-center lg:text-left pb-5 w-full lg:w-3/4 m-auto">${elem.description}</p>
                      <div class="border border-dotted border-gray-500 border-1 w-3/4 m-auto">
                      </div>
                      <div class="flex justify-evenly pt-10 pb-5">
                        <div class="flex">
                            <img src="./icon/tabler-icon-message-2.png" alt="">
                            <p class="ml-4">${elem.comment_count}</p>
                          </div>
                          <div class="flex">
                            <img src="./icon/Group 16.png" alt="">
                            <p class="ml-4">${elem.view_count}</p>
                          </div>
                          <div class="flex">
                            <img src="./icon/Group 18.png" alt="">
                            <p class="ml-4">${elem.posted_time}</p>
                        </div>
                        <button onclick="handleButtonClick('${elem.title}',${elem.view_count})"><img src="./icon/Group 40106.png" alt=""> </button>
                      </div>
                  </div>
                  
            </div>
           </div>
              <!--  -->
        </div>
    </div>                                             
        `
        cardContaine.appendChild(cartId)


    })
    setTimeout(() => {
        toggleSpinner(false);
    }, 2000);
}
// search button
// 
const handleSearch = () => {
    toggleSpinner(true)
// console.log("search");
const inputSearch = document.getElementById('inputField').value;
 
// console.log(inputSearch);
callMyThirdApi(inputSearch)
// callMyApi(inputSearch);
}
// 
// Latest 
// Latest 
const callMySecondApi =async () => {
    const mysecLink = await fetch(` https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const document = await mysecLink.json();
    // console.log(document);
    latestCard(document)

}
const addLatestCard = document.getElementById('latestCard');
const latestCard = (card) => {
// console.log(card);
card.forEach(element => {
// console.log(element);
const div =document.createElement('div');
div.classList=`card w-full  bg-base-100 shadow-xl`;
div.innerHTML=`
<figure class="px-10 pt-10">
                          <img src="${element.cover_image}" alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="flex items-center justify-start ml-8 mt-5">
                            <img src="./icon/Frame.png" alt="">
                            <p>${element.author.posted_date ? element.author.posted_date : ' no publish date' }</p>
                        </div>
                        <div class="card-body text-left">
                            
                          <h1 class="text text-xl font-bold">${element.title}</h1>
                          <p>${element.description}</p>
                          <div class="flex items-center">
                            <img src="${element.profile_image}" class="w-[10%] rounded-full ">
                            <div class="ml-3">
                                <p class="font-bold">${element.author.name}</p>
                                <p>${element.author.designation ? element.author.designation : 'unknown'}</p>
                            </div>
                          </div>
                        </div

                        
`
addLatestCard.appendChild(div);
});
}







// 
const toggleSpinner =(load) => {
    const loadingSpinner = document.getElementById('spinnerContainer');
    if (load) {

        loadingSpinner.classList.remove('hidden');
        
    }else{
        loadingSpinner.classList.add('hidden')
    }
}
//


// callMyThirdApi()
callMySecondApi();


// callMyApi("comedy");
// callMyApi("music");
callMyApi();