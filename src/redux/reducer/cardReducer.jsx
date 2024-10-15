const initialData ={
    cartCount:0
}

const cartReducer = (state= initialData, action)=>{
    // return state

    //for testItem
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                cartCount: ++state.cartCount
            }
        case 'REMOVE_FROM_CART':
            return{
                cartCount: state.cartCount-=1
            }
        default:
            return state
    }

}
export default cartReducer