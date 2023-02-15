export function blogsPost(body) {
    
        
    return Liferay.Util.fetch(
		'/o/headless-delivery/v1.0/sites/20121/blog-postings',
		{method: 'POST',
         headers:{
         'Content-Type':'application/json'
         },
         body
        }
	).then(res => res.json());


};