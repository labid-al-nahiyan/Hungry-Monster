const searchMeal=()=>
{
    document.getElementById("meal-thumbnil").innerHTML=""

    const mealName=document.getElementById("text-input").value

    const mealUrl=`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
       
    fetch(mealUrl)
    .then(res=>res.json())
    .then(data=>{
        
        if(data.meals==null){
            const newDiv=document.createElement('div')
            newDiv.innerHTML="Sorry,Not Found Your Item";
        
            document.getElementById("meal-thumbnil").appendChild(newDiv)
        }
        else{
            data.meals.forEach(element => {
                SingleMealThumbnil(element);
            
            });
        }
    })
}

const SingleMealThumbnil=element =>
{
    const singleMealThumbnil=`
        <img src="${element.strMealThumb}" alt="">
        <h4>${element.strMeal}</h4>`

    const newDiv=document.createElement('div')

    newDiv.className='single-meal-thumbnil'
    newDiv.innerHTML=singleMealThumbnil;

    const mealID=`${element.idMeal}`
    newDiv.setAttribute('id',mealID)

    document.getElementById("meal-thumbnil").appendChild(newDiv)
}

const clickOnMenu =document.getElementById("meal-thumbnil").addEventListener("click",function(event){
    document.getElementById("meal-details").innerHTML=""
    const singleMealId=event.target.parentNode.id
    mealDetails(singleMealId)
})


const mealDetails=mealId=>{
    const mealUrl=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(mealUrl)
    .then(res=>res.json())
    .then(data=>{
        
        const singleMeal=data.meals[0]   
        const mealDetails=`
            <img src="${singleMeal.strMealThumb}" width="200px" alt="">
            <h3>${singleMeal.strMeal}</h3>
            <h5>Ingredients</h5>
            <ul>
                <li>${singleMeal.strMeasure1} ${singleMeal.strIngredient1}</li>
                <li>${singleMeal.strMeasure2} ${singleMeal.strIngredient2}</li>
                <li>${singleMeal.strMeasure3} ${singleMeal.strIngredient3}</li>
                <li>${singleMeal.strMeasure4} ${singleMeal.strIngredient4}</li>
                <li>${singleMeal.strMeasure5} ${singleMeal.strIngredient5}</li>

            </ul>`
        const newDiv=document.createElement("div")
        newDiv.innerHTML= mealDetails
        document.getElementById("meal-details").appendChild(newDiv)
    })
}


