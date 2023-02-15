export function blogsUpdate(id, body) {
   
        
    return Liferay.Util.fetch(
		`/o/headless-delivery/v1.0/blog-postings/${id}`,
		{method: 'PUT',
         headers:{
         'Content-Type':'application/json'
         },
        body
        }
	).then(res => res.json());


};