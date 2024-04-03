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

function getDetailProduct(id) {
    return async(dispatch, getState) => {    
        // const url = `http://localhost:5000/products/${id}`;
        const url = `https://my-json-server.typicode.com/MJJUNG33/shopping-mall/products/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        // setProduct(data);
    dispatch({type: "DETAIL_PRODUCT", payload: {data}})
    }
    
}

export const productAction={getProducts, getDetailProduct};