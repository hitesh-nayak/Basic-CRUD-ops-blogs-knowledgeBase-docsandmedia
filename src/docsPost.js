export function docsPost(body) {
    // return  fetch(`http://localhost:8080/o/headless-delivery/v1.0/sites/20121/knowledge-base-articles`, {method:'POST', headers: {"Content-Type": "application/json", 'Authorization': `Basic ${btoa('test@liferay.com:learn')}` }, body })
    //     .then(Response=> Response)
        
    return Liferay.Util.fetch(
		`/o/headless-delivery/v1.0/sites/20121/documents`,
		{method: 'POST',
         body         }
	).then(res => res.json());

};  