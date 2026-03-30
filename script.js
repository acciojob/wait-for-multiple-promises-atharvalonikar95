//your JS code here. If required.
const tbody = document.getElementById("output")
const loadingRow = document.getElementById("loading");


const createPromise=(name)=>{
	return new Promise((res,rej)=>{
		let t=((Math.random()*2+1)*1000)
		setTimeout(()=>{
			res({name,time:(t/1000)})
		},t)
	})
}



Promise.all([createPromise("Promise 1"),
			 createPromise("Promise 2"),
			 createPromise("Promise 3")])
			.then(res=>{
				tbody.innerHTML = "";
				let total=0
				res.forEach(promise=>{
					const tr = document.createElement('tr')
					const td1 = document.createElement('td')
					const td2 = document.createElement('td')
	
					td1.textContent=promise.name
					let t=promise.time
					td2.textContent=t.toFixed(0)
	  
					total=Math.max(Number(t),Number(total))
					tr.append(td1,td2)
					tbody.append(tr)
				})
				const tr = document.createElement('tr')
				const td1 = document.createElement('td')
				const td2 = document.createElement('td')
				td1.textContent="Total"
				td2.textContent=total.toFixed(3)				
				tr.append(td1,td2)
				tbody.append(tr)				

			})

