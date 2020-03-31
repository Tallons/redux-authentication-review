const initialState = {
   name: "",
   address: "",
   city: "",
   state: "",
   zip: 0,
   img: "",
   mortgage:0,
   rent: 0
}

const UPDATE_LOCATION = "UPDATE_LOCATION"

export function updateLocation(){
   return {
      type: UPDATE_LOCATION,
      payload: {}
   }
}

export default function reducer(state = initialState, action){

   const {type, payload} = action
   switch (type) {

         case UPDATE_LOCATION:
            return {...state, ...payload}

      default:
         return state;
   }
}
