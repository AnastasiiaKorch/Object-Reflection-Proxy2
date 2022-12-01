export default function destruction(obj){
  const emptyArr = [];
  obj.special.forEach((element) => {
    if(!element.description){
      element.description = 'Описание недоступно'
    }
    emptyArr.push(element)
  });
  return emptyArr
}