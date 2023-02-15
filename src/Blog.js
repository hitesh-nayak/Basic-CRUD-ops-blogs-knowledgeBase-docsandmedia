import React, {useState, useEffect, useReducer, useRef}from 'react'
import ClayButton from '@clayui/button';
import ClayForm, {ClayInput} from '@clayui/form';
import { blogsGet } from './blogsGet';
import { blogsDelete } from './blogsDelete';
import { blogsPost } from './blogsPost';
import { blogsUpdate } from './blogsUpdate';

    


const Blog = () => {

let updateVal;
let data = [];
let newArticle ={
    headline:'',
    articleBody:''
}
const getArticles=()=>{
    blogsGet()
    .then(function(json){
    data = json.items;
    setItems(data);
    })
}

const deleteArticle = ()=>{
    blogsDelete(id)
    .then(Response => console.log(Response.status))
    data = data.filter((item)=>item.id != id)
    setId('')

}
const createArticle = () =>{
    if(uId&&updateVal=='update'){
        blogsUpdate(uId,JSON.stringify(article))
        .then(json=>console.log(json))
        setUId('');
        setArticle(newArticle);
    }
    else if(updateVal=='submit'){
        blogsPost(JSON.stringify(article))
    .then(json => console.log(json))
    setUId('')
    getArticles();
    setArticle(newArticle)
    }
}
    
const[items, setItems] = useState([])
const[id, setId] = useState('')
const[uId, setUId] = useState('')
const[article, setArticle] = useState({
        headline:'',
        articleBody:''
        })
    
useEffect(()=>{
    getArticles();
},data)
    
useEffect(()=>{
    deleteArticle();
},[])

useEffect(()=>{
    createArticle();
},data)

const handleChange =(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setArticle({...article, [name]:value})
}
    
const handleSubmit = (e) =>{
        e.preventDefault()
		console.log(data)
}
    
const handleDelete = (e)=>{
        e.preventDefault()
}
    
    
return (
    <div style={{marginLeft:'2px'}}>
        <h1 style={{marginBottom:'1rem'}}>Blog posts</h1>

        <form action="" onSubmit={handleSubmit}>
            <ClayForm.Group >
                <label htmlFor="basicInputText">Blog post ID</label>

                <ClayInput
                    id="basicInputText"
                    placeholder="DO NOT ENTER IF YOU ARE NOT UPDATING A BLOG POST"
                    type="text"
                    value={uId}
                    onChange={(e)=>{
                        setUId(e.target.value)
                    }}
                />

                <label htmlFor="basicInputText">Blog post headline</label>
      
                <ClayInput
        
                    id="basicInputText"
                    placeholder="Your blog post headline"
                    type="text"
                    name='headline'
                    value={article.headline}
                    onChange={handleChange}
                />
      
                <label htmlFor="basicInputText">Blog post body</label>
      
                <ClayInput
                    component='textarea'
                    id="basicInputText"
                    placeholder="Your thoughts here"
                    type="text"
                    name='articleBody'
                    value={article.articleBody}
                    onChange={handleChange}
                />
	  
            </ClayForm.Group>

            <ClayButton displayType="primary" type='submit'
                    name='submit'
                    onClick={(e)=>{
                    updateVal = e.target.name
                        createArticle();}}>
				Submit Post
			</ClayButton>

            <ClayButton displayType="primary" type='submit'
                    style={{marginLeft:'1rem'}}
                    name='update'
                    onClick={(e)=>{
                    updateVal = e.target.name
                        createArticle();}}>
				Update Post
			</ClayButton>
        </form>
        
        <div style={{marginTop:'2rem'}}>
            <form onSubmit={handleDelete}>
                <ClayForm.Group>
                    <label htmlFor="basicInputText">Blog post ID</label>
                        
                    <ClayInput
                            id="basicInputText"
                            placeholder="Blog post ID you want to delete"
                            type="text"
                            value={id}
                            onChange={(e)=>{
                                setId(e.target.value)
                            }}
                    />
                </ClayForm.Group>
                    
                <ClayButton displayType="primary" type='submit'
                            onClick={deleteArticle}>
                    Delete
			    </ClayButton>
            </form>
        </div>

        <div style={{marginTop: '4rem', marginBottom:'5rem'}}>
            <ClayButton displayType="primary"  
                        onClick={getArticles}>
				Refresh Posts
			</ClayButton>
        </div>

        {items.map((article)=>{
            return <div className='articles' key={article.id} >
                        <h6>ID: {article.id}</h6>

                        <h1 className='articleHead'>{article.headline}</h1>
                    
                        <p style={{overflow:'auto',whiteSpace:'nowrap', width:'30rem', height:'10rem'}}>{article.articleBody}</p>

                    </div>
            
            })

            }
	
    </div>
)
}

export default Blog