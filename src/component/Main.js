import { useEffect, useState } from "react"

const Main = () => {

 
    const [users,setUsers]=useState([]);
    useEffect(()=>{
      fetch("https://type.fit/api/quotes").then((res)=>{
   return res.json();
    
  }).then((data)=>{
    setUsers(data);
  }).catch((err)=>console.log(err));
    },[]);
  
   const data=users;
   const [text,setText]=useState(Math.floor(Math.random() * 16))
   const quote=data.map((data,index)=>{
    if(index=== text){
      return data.text;
    }
   }).join("")
   const author=data.map((data,index)=>{
    if(index=== text){
      return  data.author.split(",")[0]==="type.fit"?"Unknown":data.author.split(",")[0]
    }
   }).join("")
   const tweet='"'+quote+'"'+" -"+author;
   const handleClick=()=>{
     setText(Math.floor(Math.random() * 16))
   }
   
  return (
    <main className="main" id={"col"+text}>
     <div className="quote-box">
     <div className="quote-text">
     <p className="quotes" id={"col-"+text}><i className="fa fa-quote-left "></i>{data.map((data,index)=>{
      if(index=== text){
        return data.text;
      }
     })}</p>
     </div>
       <div className="author">
     <p className="name-author"  id={"col-"+text}>- {data.map((data,index)=>{
      if(index=== text){
        return  data.author.split(",")[0]==="type.fit"?"Unknown":data.author.split(",")[0]
      }
     })}</p>
       </div>
       <div className="new-social">
        <div className="social">
        <a href={"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,xaktarous&caption="+author+"&content="+quote+"&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"}><i className="fa fa-tumblr-square isocial" id={"col-"+text}></i></a>
          <a href={"https://twitter.com/intent/tweet?hashtags=quotes,xaktarous&text="+tweet}><i className="fa fa-twitter-square isocial" id={"col-"+text}></i></a>
        </div>
        <button className="btn" onClick={handleClick} id={"col"+text}>New quote</button>
       </div>
     </div>
     <a href="#" className="by">by me</a>
    </main>
  )
}
export default Main