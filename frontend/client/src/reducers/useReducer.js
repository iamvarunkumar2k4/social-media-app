export const initalState=null;
export const reducer=(state,action)=>{
  if(action.type=="USER")
  {
    return action.paylaod
  }
  return state
}