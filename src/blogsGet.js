export function blogsGet() {
    

    return Liferay.Util.fetch(
		'/o/headless-delivery/v1.0/sites/20121/blog-postings',
		{method: 'GET'}
	).then(res => res.json());
        


};