const getCategoryes = async()=>{
    const defalutCategoryData = "https://openapi.programming-hero.com/api/news/category/01"
    const responce = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const defaultResponce = await fetch(defalutCategoryData)
    const data = await responce.json();
    const defaultNews = await defaultResponce.json();
    const singelCategory = data.data.news_category
    const singleNews = defaultNews.data
    console.log (data.data.news_category)
    console.log (defaultNews.data)

    // lets make category
    const catagoriDiv = document.getElementById("catagoriDiv")
    singelCategory.forEach(catagory =>{
        const catagorys = document.createElement('div')
        catagorys.innerHTML=`
        <p onClick=(categoryFunction(${catagory.category_id})) id="${catagory.category_id}" class="cursor-pointer text-white text-2xl font-[500] text-left p-[15px]" >${catagory.category_name}</p>
        `
        catagoriDiv.appendChild(catagorys)
    })

    // lets make news cards
    const newsFLend = document.getElementById("newsFLend")
    singleNews.forEach( singleNews=>{
        const newscard = document.createElement("div");
        const sNewsTitles = singleNews.title;
        const sNewsDetails = singleNews.details;
        const publisheddate = singleNews.author.published_date;
        const shortTitles = sNewsTitles.slice(0,50)
        const shortDetails = sNewsDetails.slice(0,200)
        const shortData = publisheddate.split(" ")
        console.log(shortData)
        newscard.innerHTML =`
                    <div class="card bg-base-100 shadow-xl border-[lightgray] border-[2px] cursor-pointer">
            <figure><img src="${singleNews.image_url}" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">${shortTitles} ...</h2>
                <p>${shortDetails}...</p>
                <div class="card-actions">
                <div id="border" class="h-[2px] w-full bg-gray-300"></div>
                <div class="flex items-center justify-between w-full">
                        <div id="author" class="flex flex-1 gap-2">
                        <img class="w-[40px] rounded-full" src="${singleNews.author.img} alt="${singleNews.author.name}"/>
                            <div>
                                <p class="text-[14px]">${singleNews.author.name}</p>
                                <p class="text-[14px] font-sans"><i class="fa-regular fa-calendar-check"></i> 
                                ${shortData[0]}</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <p class="font-sans"><i class="fa-solid fa-star"></i> ${singleNews.rating.number}</p>
                            <p class="font-sans"><i class="fa-regular fa-eye"></i> ${singleNews.total_view}</p>
                        </div>
                </div>
                </div>
            </div>
            </div>
        `
        newsFLend.appendChild(newscard)
    })

    // categori buttons 
    const category1 = document.getElementById("01")
    category1.classList.add("activeCategory")
}

const categoryFunction = async (cateegoryId)=>{
            // categori buttons 
        const category1 = document.getElementById("01")
        const category2 = document.getElementById("02")
        const category3 = document.getElementById("03")
        const category4 = document.getElementById("04")
        const category5 = document.getElementById("05")
        const category6 = document.getElementById("06")
        const category7 = document.getElementById("07")
        const category8 = document.getElementById("08")

    if(cateegoryId===1){
        category1.classList.add("activeCategory")
        category2.classList.remove("activeCategory")
        category3.classList.remove("activeCategory")
        category4.classList.remove("activeCategory")
        category5.classList.remove("activeCategory")
        category6.classList.remove("activeCategory")
        category7.classList.remove("activeCategory")
        category8.classList.remove("activeCategory")
    }
    if(cateegoryId===2){
        category2.classList.add("activeCategory")
        category1.classList.remove("activeCategory")
        category3.classList.remove("activeCategory")
        category4.classList.remove("activeCategory")
        category5.classList.remove("activeCategory")
        category6.classList.remove("activeCategory")
        category7.classList.remove("activeCategory")
        category8.classList.remove("activeCategory")
    }
    if(cateegoryId===3){
        category3.classList.add("activeCategory")
        category1.classList.remove("activeCategory")
        category2.classList.remove("activeCategory")
        category4.classList.remove("activeCategory")
        category5.classList.remove("activeCategory")
        category6.classList.remove("activeCategory")
        category7.classList.remove("activeCategory")
        category8.classList.remove("activeCategory")
    }
    if(cateegoryId===4){
        category4.classList.add("activeCategory")
        category1.classList.remove("activeCategory")
        category2.classList.remove("activeCategory")
        category3.classList.remove("activeCategory")
        category5.classList.remove("activeCategory")
        category6.classList.remove("activeCategory")
        category7.classList.remove("activeCategory")
        category8.classList.remove("activeCategory")
    }
    if(cateegoryId===5){
        category5.classList.add("activeCategory")
        category1.classList.remove("activeCategory")
        category2.classList.remove("activeCategory")
        category3.classList.remove("activeCategory")
        category4.classList.remove("activeCategory")
        category6.classList.remove("activeCategory")
        category7.classList.remove("activeCategory")
        category8.classList.remove("activeCategory")
    }
    if(cateegoryId===6){
        category6.classList.add("activeCategory")
        category1.classList.remove("activeCategory")
        category2.classList.remove("activeCategory")
        category3.classList.remove("activeCategory")
        category4.classList.remove("activeCategory")
        category5.classList.remove("activeCategory")
        category7.classList.remove("activeCategory")
        category8.classList.remove("activeCategory")
    }
    if(cateegoryId===7){
        category7.classList.add("activeCategory")
        category1.classList.remove("activeCategory")
        category2.classList.remove("activeCategory")
        category3.classList.remove("activeCategory")
        category4.classList.remove("activeCategory")
        category5.classList.remove("activeCategory")
        category6.classList.remove("activeCategory")
        category8.classList.remove("activeCategory")
    }
    if(cateegoryId===8){
        category8.classList.add("activeCategory")
        category1.classList.remove("activeCategory")
        category2.classList.remove("activeCategory")
        category3.classList.remove("activeCategory")
        category4.classList.remove("activeCategory")
        category5.classList.remove("activeCategory")
        category6.classList.remove("activeCategory")
        category7.classList.remove("activeCategory")
    }
    const defalutCategoryData = "https://openapi.programming-hero.com/api/news/category/0" + cateegoryId
    const singleNew = await fetch(defalutCategoryData)
    const defaultNews = await singleNew.json();
    const singleNews = defaultNews.data
    const mainData = defaultNews
    console.log(singleNews) 
    console.log(mainData.status)
    errorField.textContent=''
    if(mainData.status===false){
        const errorField = document.getElementById("errorField")  
        console.log("error")
        errorField.style.display ="flex"
        const newsFLend = document.getElementById("newsFLend").style.display="none"  
        errorField.textContent=''
        const errorMessage =  document.createElement("div")
        errorMessage.innerHTML='<p class="errorMessage text-center text-4xl">Sorry the api does not have any news related to this catgory.</p>'
        errorField.appendChild(errorMessage)
    }
    else{
        // lets make news cards
        const newsFLend = document.getElementById("newsFLend")
        const errorField = document.getElementById("errorField").style.display ="none"
        newsFLend.style.display= "grid"
    newsFLend.textContent=""
    singleNews.forEach( singleNews=>{
        const newscard = document.createElement("div");
        const sNewsTitles = singleNews.title;
        const sNewsDetails = singleNews.details;
        const publisheddate = singleNews.author.published_date;
        const shortTitles = sNewsTitles.slice(0,50)
        const shortDetails = sNewsDetails.slice(0,200)
        const shortData = publisheddate.split(" ")
        console.log(shortData)
        newscard.innerHTML =`
                    <div class="card bg-base-100 shadow-xl border-[lightgray] border-[2px] cursor-pointer">
            <figure><img src="${singleNews.image_url}" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">${shortTitles} ...</h2>
                <p>${shortDetails}...</p>
                <div class="card-actions">
                <div id="border" class="h-[2px] w-full bg-gray-300"></div>
                <div class="flex items-center justify-between w-full">
                        <div id="author" class="flex flex-1 gap-2">
                        <img class="w-[40px] rounded-full" src="${singleNews.author.img} alt="${singleNews.author.name}"/>
                            <div>
                                <p class="text-[14px]">${singleNews.author.name}</p>
                                <p class="text-[14px] font-sans"><i class="fa-regular fa-calendar-check"></i> 
                                ${shortData[0]}</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <p class="font-sans"><i class="fa-solid fa-star"></i> ${singleNews.rating.number}</p>
                            <p class="font-sans"><i class="fa-regular fa-eye"></i> ${singleNews.total_view}</p>
                        </div>
                </div>
                </div>
            </div>
            </div>
        `
        newsFLend.appendChild(newscard)
    })
}
}










getCategoryes();