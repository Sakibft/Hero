const cardContainer = document.getElementById('card-container');
const titleAndViewR = document.getElementById('rTitleAndView');
const PostLatest = document.getElementById('latest-post');

const loadCategory = async (searchText) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`)
  // https://openapi.programming-hero.com/api/retro-forum/posts
  const data = await res.json();
  const allData = data.posts;
  //  console.log(data);
  displayCArd(allData)
  // displayRightSite(allData)
};
// display card
const displayCArd = card => {
  cardContainer.innerHTML='';
  card.forEach(item => {
    
    let onlineBadge = `<div class="avatar offline">`;
     if(item.isActive){
      onlineBadge = `<div class="avatar online">`;
     }
    const div = document.createElement("div");
    div.classList.add("mt-10")
    div.innerHTML = `
      
    <div id="carColorChange" class="card w-full h-80 lg:p-8 bg-base-100  bg-[#12132D0D]">
    <div class="card-body">
      <div class="card-actions flex lg:gap-10 ">
        <!-- L -->
        <div>
        ${onlineBadge}
            <div class="w-24 rounded-3xl">
              <img class="rounded-3xl" src="${item.image}" />
            </div>
          </div>
        </div>
        <!-- R -->
        <div>
          <div class="flex lg:gap-5">
            <h1 class="mulish font-bold">#<span>${item.category}</span> </h1>
            <p class="mulish font-bold">Author : <span>${item.author.name}</span> </p>
          </div>
          <p id="titleCard" class="mulish font-black lg:text-xl lg:mt-3">${item.title}</p>
          <p class="lg:text-lg mulish lg:mt-3 font-semibold text-gray-500">It’s one thing to subject yourself to ha Halloween costume mishap because, <br> hey that’s your prerogative.</p>
           <hr class="border-dashed border lg:mt-4 lg:mb-4">
           <!-- foot -->
           <div class="flex justify-between">
           <div class="flex gap-8">
            <div class="flex lg:gap-3">
              <img src="./images/tabler-icon-message-2.svg" alt="">
              <p class="mt-1">${item.
                comment_count
                }</p>
            </div>
            <div>
              <div id="viewCard" class="flex lg:gap-3">
                <img id="imggg" src="./images/tabler-icon-eye.svg" alt="">
                <p>${
                  item.view_count
                  }</p>
              </div>
            </div>
            <div>
              <div class="flex lg:gap-3">
                <img id="imgg" src="./images/Group 18.svg" alt="">
                <p>${item.
                  posted_time}</p>
              </div>
            </div>
           </div>
           <div>
            <div>
              <button onclick="AddToList('${item.title.replace(/'/g,'-')}',${item.view_count})" class="btn btn-sm btn-circle cursor-pointer border border-green-300 w-10 ">
                <img class="w-4 h-4" src="./images/e.svg" alt="">
              </button>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  </div>

 `;
 cardContainer.appendChild(div)
 
    console.log(item); 
  });
  // hide loading spinner
//  toggleLoadingSpinner(false);
setTimeout(() => {
  toggleLoadingSpinner(false);
}, 2000);
}
// displayRightSiteOutput
 let sum = 1;
const AddToList = (title,view) =>{
  // console.log(title);
  // console.log(view);
  const Asum = document.getElementById('count').innerText=sum;
    sum = sum + 1;
  const div = document.createElement("div");
 
   div.innerHTML= `             
   <div class="flex justify-between p-4 lg:w-96 bg-base-100 rounded-xl mt-2 ">
   <div>
     <p class="mulish font-extrabold text-lg mt-3">${title}</p>
   </div>
   <div>
     <div class="flex gap-3 mt-3">
       <img src="./images/tabler-icon-eye.svg" alt="">
       <p>${view}</p>
     </div>
   </div>
 </div>
   `;
   titleAndViewR.appendChild(div);
  
}
// Latest posts load data 
const loadLatestPosts = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts")
  const data = await res.json();
  // const allData = data.posts; 
    displayPost(data);
};
const displayPost = item =>{
  item.forEach(item =>{
    const div = document.createElement("div");
    // div.classList.add('mt-5')
    div.innerHTML = `
    <div class="card w-full border border-gray-300">
          <figure><img src="${item.cover_image}" alt="Shoes" />
          </figure>
          <div class="card-body">
            <div class="flex gap-2">
              <img class=" " src="./images/bag.png" alt="">
              <p class="text-sm mulish font-semibold text-gray-500"> ${item.author?.posted_date || 'No Publish Date'}</p>
            </div>
            <h2 class="card-title mulish font-extrabold">${item.title}
            </h2>
            <p>${item.description}</p>
            <div class="card-actions">
              <div class="avatar mt-2">
                <div class="w-10 rounded-full">
                  <img src="${item.profile_image}" />
                </div>
              </div>
              <div>
                <h1 class="mulish font-extrabold text-lg">${item.author.name}</h1>
                <h1 class="text-sm mulish font-semibold text-gray-500">${item.author?.designation || 'unknown'}</h1>
              </div>
            </div>
          </div>
        </div>
    `;
    PostLatest.appendChild(div)
    // console.log(item);
  })
// console.log(item);
}
// handle search button 
const handleSearch = () => {
  toggleLoadingSpinner(true)
const searChField = document.getElementById('searchText');
const searchText = searChField.value;
console.log(searchText);
loadCategory(searchText)
// console.log('hi');
}

// lodding 
const toggleLoadingSpinner = (isLoading) =>{
  const loodingSpinner = document.getElementById('loading-spiner');
   
  if(isLoading){
    loodingSpinner.classList.remove('hidden')
  }
  else{
    loodingSpinner.classList.add('hidden')
  }
}

 
loadLatestPosts()

handleSearch();