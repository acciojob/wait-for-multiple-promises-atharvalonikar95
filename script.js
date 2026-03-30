//your JS code here. If required.
const tbody = document.getElementById("output")
const loadingRow = document.createElement("tr");
const loadingTd = document.createElement("td");
loadingTd.colSpan = 2;
loadingTd.textContent = "Loading...";
loadingRow.appendChild(loadingTd);
tbody.appendChild(loadingRow);

const createPromise=(name)=>{
	return new Promise((res,rej)=>{
		let t=((Math.random()*3+1)*1000)
		setTimeout(()=>{
			res({name,time:(t/1000)})
		},t)
	})
}



Promise.all([createPromise("Promise 1"),
			 createPromise("Promise 2"),
			 createPromise("Promise 3")])
			.then(res=>{
				let total=0
				res.forEach(promise=>{
					const tr = document.createElement('tr')
					const td1 = document.createElement('td')
					const td2 = document.createElement('td')
	
					td1.textContent=promise.name
					td2.textContent=promise.time.toFixed(3)
	
					total+=parseInt(promise.time)
					tr.append(td1,td2)
					tbody.append(tr)
				})
				const tr = document.createElement('tr')
				const td1 = document.createElement('td')
				const td2 = document.createElement('td')
				td1.textContent="Total"
				td2.textContent=total.toFixed(3)				
				tbody.removeChild(loadingRow);
				tr.append(td1,td2)
				tbody.append(tr)				
			})

