export function knowledgeUpdate(id, body) {
   
        
    return Liferay.Util.fetch(
		`/o/headless-delivery/v1.0/knowledge-base-articles/${id}`,
		{method: 'PUT',
         headers:{
         'Content-Type':'application/json'
         },
        body
        }
	).then(res => res.json());


};