export function docsGet() {
    // return fetch('http://localhost:8080/o/headless-delivery/v1.0/sites/20121/documents', { headers: { Authorization: `Basic ${btoa('test@liferay.com:learn')}` } })
    //             .then(Response => Response.json())
                
        return Liferay.Util.fetch(
		`/o/headless-delivery/v1.0/sites/20121/documents`,
            {method: 'GET'}
                  
	).then(res => res.json());


};