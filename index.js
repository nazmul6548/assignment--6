const callMyApi = async () => {
    const apiLInk = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts#`);
    const data = await apiLInk.json();
    const information = data.posts;
    // console.log(information);
    cardItems(information);
}

const cardItems = (info) => {
console.log(info);
const cardContainer = document.getElementById('card-container')
info.forEach(element => {
    console.log(element);
    const cardInfo = document.createElement('div');
    cardInfo.classList=`bg-[#F3F3F5] rounded-3xl w-full  lg:w-[100%] mb-[5px]`;
    cardInfo.innerHTML=`
    <div class="grid grid-cols-1 gap-5 bg-[#F3F3F5] rounded-3xl w-full  lg:w-[70%]">
    <div class="flex flex-col lg:flex-row mb-5">
       <!--  -->
       <div class="flex">
       <div class="indicator mt-8 ml-8">
    <span class="indicator-item badge ${element.isActive ? 'bg-green-500' :
    'bg-red-500'} text-white px-2 py-1 rounded-full">

    </span>
    <div class="grid w-32 h-32 bg-base-300 place-items-center">
        <img src ="${element.image}" alt="" >
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
//     const titleStore = title
//     // console.log(titleStore);
//     const viewStore = view;
// console.log(viewStore);
// const addTitle = document.getElementById('title');
// addTitle.innerText=titleStore;
// const addView = document.getElementById('view');
// addView.innerText=viewStore;
const store = document.getElementById('storeId');
const div = document.createElement('div');
div.style.display='flex';
div.style.justifyContent="space-between";
div.style.backgroundColor="#FFFFFF";
div.style.padding="10px";
div.style.borderRadius='10px';
div.style.marginTop='10px';
const p = document.createElement('p');
p.innerText=title;
const p2 = document.createElement('p');
p2.innerText=view;
div.appendChild(p);
div.appendChild(p2);
store.appendChild(div);
}


callMyApi();