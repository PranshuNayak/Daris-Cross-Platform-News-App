import NewsObj from '../config/NewsObj'

const fetchHeadlines = async (category,language)=>{
    let urlObj;
   if(category=='allNews'){
        urlObj = NewsObj.url+`/top-headlines?language=en&sortBy=popularity&apiKey=`+NewsObj.API_KEY;
   }
   else{
    urlObj = NewsObj.url+`/top-headlines?category=`+category+`&language=en&sortBy=popularity&apiKey=`+NewsObj.API_KEY;
   }
    try {
        const serverObj = await fetch(urlObj);
        const results = await serverObj.json();
        if(results.status=="ok"){
            
            return(results.articles)
        }

        else{
            console.log(results.code,results.message);
        }

    } catch (error) {
        console.log(error);
    }
}

module.exports={
    fetchHeadlines
}