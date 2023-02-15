import React, {useState, useEffect, useReducer, useRef}from 'react'
import ClayButton from '@clayui/button';
import ClayForm, {ClayInput} from '@clayui/form';
import { knowledgeGet } from './knowledgeGet';
import { knowledgeDelete } from './knowledgeDelete';
import { knowledgePost } from './knowledgePost';
import { knowledgeUpdate } from './knowledgeUpdate';

    


const Knowledge = () => {

let updateVal;
let data = [];
let newArticle ={
    title:'',
    articleBody:''
}
const getArticles=()=>{
    knowledgeGet()
    .then(function(json){
    data = json.items;
    setItems(data);
    })
}

const deleteArticle = ()=>{
    knowledgeDelete(id)
    .then(Response => console.log(Response.status))
    data = data.filter((item)=>item.id != id)
    setId('')

}
const createArticle = () =>{
    if(uId&&updateVal=='update'){
        knowledgeUpdate(uId,JSON.stringify(article))
        .then(json=>console.log(json))
        setUId('');
        setArticle(newArticle);
    }
    else if(updateVal=='submit'){
        knowledgePost(JSON.stringify(article))
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
        title:'',
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
        <h1 style={{marginBottom:'1rem'}}>Knowledge Base Articles</h1>

        <form action="" onSubmit={handleSubmit}>
            <ClayForm.Group >
                <label htmlFor="basicInputText">Article ID</label>

                <ClayInput
                    id="basicInputText"
                    placeholder="DO NOT ENTER IF YOU ARE NOT UPDATING AN ARTICLE"
                    type="text"
                    value={uId}
                    onChange={(e)=>{
                        setUId(e.target.value)
                    }}
                />

                <label htmlFor="basicInputText">Article Title</label>
      
                <ClayInput
        
                    id="basicInputText"
                    placeholder="Your Article title"
                    type="text"
                    name='title'
                    value={article.title}
                    onChange={handleChange}
                />
      
                <label htmlFor="basicInputText">Article Body</label>
      
                <ClayInput
                    component='textarea'
                    id="basicInputText"
                    placeholder="Your article here"
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
				Submit Article
			</ClayButton>

            <ClayButton displayType="primary" type='submit'
                    style={{marginLeft:'1rem'}}
                    name='update'
                    onClick={(e)=>{
                    updateVal = e.target.name
                        createArticle();}}>
				Update Article
			</ClayButton>
        </form>
        
        <div style={{marginTop:'2rem'}}>
            <form onSubmit={handleDelete}>
                <ClayForm.Group>
                    <label htmlFor="basicInputText">Article ID</label>
                        
                    <ClayInput
                            id="basicInputText"
                            placeholder="Article ID you want to delete"
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
				Refresh Articles
			</ClayButton>
        </div>

        {items.map((article)=>{
            return <div className='articles' key={article.id} >
                        <h6>ID: {article.id}</h6>

                        <h1 className='articleHead'>{article.title}</h1>
                    
                        <p style={{overflow:'auto',whiteSpace:'nowrap', width:'30rem', height:'10rem'}}>{article.articleBody}</p>

                    </div>
            
            })

            }
	
    </div>
)
}

export default Knowledge