export function knowledgePost(body) {
    
        
    return Liferay.Util.fetch(
		'/o/headless-delivery/v1.0/sites/20121/knowledge-base-articles',
		{method: 'POST',
         headers:{
         'Content-Type':'application/json'
         },
         body
        }
	).then(res => res.json());


};