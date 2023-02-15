export function docsDelete(id) {
    // return  fetch(`http://localhost:8080/o/headless-delivery/v1.0/knowledge-base-articles/${id}`, {method:'DELETE', headers: { Authorization: `Basic ${btoa('test@liferay.com:learn')}` } })
    //     .then(Response=> Response)
        
    return Liferay.Util.fetch(
		`/o/headless-delivery/v1.0/documents/${id}`,
		{method: 'DELETE'}
	)

};