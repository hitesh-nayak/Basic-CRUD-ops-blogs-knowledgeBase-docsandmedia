export function knowledgeDelete(id) {
    
        

    return Liferay.Util.fetch(
		`/o/headless-delivery/v1.0/knowledge-base-articles/${id}`,
		{method: 'DELETE'
        
        }
	);

};