import _ from 'lodash';

export const isEmpty = (obj)=>{
  if (typeof obj === 'string') {
     obj = _.trim(obj);
  }
  if (obj == null) { return true; }
  if (obj.length > 0) { return false; }
  if (obj.length === 0) { return true; }

  for(const key in obj) {
      return false;
  }

  return typeof obj === 'object';
};

export const isEqualByKeys = (arr1, arr2, keys)=>{

  let retFlag = false;
  if(arr1.length !== arr2.length){
    return false;
  }
  if(_.isArray(arr1) && _.isArray(arr2)){
    retFlag = arr1.every((obj1,index)=>{
      const obj2 = arr2[index]
      return keys.every((key)=>{
        return obj1[key] === obj2[key]
      })
    })
  }

  return retFlag;
};

