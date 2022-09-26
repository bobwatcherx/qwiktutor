import {
	component$,
	Resource
} from '@builder.io/qwik'

import type {
	RequestHandler
} from '@builder.io/qwik-city'

import {useEndpoint} from '@builder.io/qwik-city'


export const onGet: RequestHandler<ProductData> = async ({ params }) => {

let dataaal:any = []

await fetch("https://jsonplaceholder.typicode.com/todos/12")
.then(response=>response.json())
.then(json=>{
	dataaal  = json
})
  return {
   userId: dataaal.userId,
    id: dataaal.id,
    title: dataaal.title,
    completed:dataaal.completed
  };
};

interface productdata  {
    userId: number,
    id: number,
    title: string,
    completed:boolean   
}




export default component$(()=>{
	 const productData = useEndpoint<productdata>();
	return(
		<div>
		this resource example
		<br/>
 <Resource
      value={productData}
      onPending={() => <div>Loading...</div>}
      onRejected={() => <div>Error</div>}
      onResolved={(product) => (
        <>
          <h1>userId: {product.userId}</h1>
          <p>id: {product.id}</p>
          <p>title: {product.title}</p>
          <p>completed: {product.completed}</p>
        </>
      )}
    />
		</div>)
})