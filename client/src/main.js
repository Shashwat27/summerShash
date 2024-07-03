
export async function fetchData(route='',data={},methodType){
   const res = await fetch(`http"//localhost://3000${route}`,{
    method:methodType,
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify(data)
   })
}