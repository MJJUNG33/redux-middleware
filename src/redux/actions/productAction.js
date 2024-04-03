function getProducts(searchQuery) {

    return async(dispatch, getState) => {
        //  const url = `http://localhost:5000/products?q=${searchQuery}`;
         const url = `https://my-json-server.typicode.com/MJJUNG33/shopping-mall/products?q=${searchQuery}`;

         const response = await fetch(url);
         const data = await response.json();
        //  setProducts(data);
         console.log(data)
         dispatch({type:"GET_PRODUCT_SUCCESS", payload:{data}})
    };
}

export const productAction={getProducts};