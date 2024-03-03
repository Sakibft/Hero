const cardContainer = document.getElementById('card-container');
const titleAndViewR = document.getElementById('rTitleAndView');

const loadCategory = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts")
  const data = await res.json();
  const allData = data.posts;
  //  console.log(data);
  displayCArd(allData)
  // displayRightSiteOutput(allData)
};
// display card
const displayCArd = card => {
  card.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("mt-10")
    div.innerHTML = `
      
    <div id="carColorChange" class="card w-full h-80 lg:p-8 bg-base-100  bg-[#12132D0D]">
    <div class="card-body">
      <div class="card-actions flex lg:gap-10 ">
        <!-- L -->
        <div>
          <div class="avatar online">
            <div class="w-24 rounded-3xl">
              <img src="${item.image}" />
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
                <img src="./images/tabler-icon-eye.svg" alt="">
                <p>${
                  item.view_count
                  }</p>
              </div>
            </div>
            <div>
              <div class="flex lg:gap-3">
                <img src="./images/Group 18.svg" alt="">
                <p>${item.
                  posted_time}</p>
              </div>
            </div>
           </div>
           <div>
            <div>
              <button onclick="AddToList('${item.title.replace(/'/g,'@')} , ${item.view_count}')" class="btn btn-sm btn-circle cursor-pointer border border-green-300 w-10 ">
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
    // console.log(item); 
  });
}
// displayRightSiteOutput
const AddToList = (title) =>{
  const div = document.createElement("div");
   div.classList.add('flex', 'p-4', 'gap-y-5')
   div.innerHTML= `             
   <div> 
     <p class="mulish font-extrabold text-lg mt-3">10 Kids Unaware of Their <br> Halloween Costume</p>
   </div>
   <div>
     <div class="flex gap-3 mt-7">
     <img src="./images/tabler-icon-eye.svg" alt="">
     <p>1,560</p>
   </div>
 </div>
</div>
   `;
   titleAndViewR.appendChild(div);
   console.log(title);
  
  
 
}


loadCategory();