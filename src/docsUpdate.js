export function docsUpdate(id, body) {
    // return  fetch(`http://localhost:8080/o/headless-delivery/v1.0/knowledge-base-articles/${id}`, {method:'PUT', headers: {"Content-Type": "application/json", 'Authorization': `Basic ${btoa('test@liferay.com:learn')}` }, body })
    //     .then(Response=> Response)

    return Liferay.Util.fetch(
		`/o/headless-delivery/v1.0/documents/${id}`,
		{method: 'PUT',
         body         }
	).then(res => res.json());
        


};