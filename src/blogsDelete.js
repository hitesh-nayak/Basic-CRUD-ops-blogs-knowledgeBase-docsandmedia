export function blogsDelete(id) {
    
        

    return Liferay.Util.fetch(
		`/o/headless-delivery/v1.0/blog-postings/${id}`,
		{method: 'DELETE'
        
        }
	);

};