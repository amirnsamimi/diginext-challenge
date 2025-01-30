import { useLocation, useNavigate } from "react-router-dom";
import FormType from "../constants/FormType";
import { useEffect, useState } from "react";

export const EQUAL_SIGN = "~";
export const AND_SIGN = "+";
export const ARRAY_SEPARATOR = "--";

function parseUrl(url) {
  
}

function stringifyUrl(data) {}

// TODO: complete this hook
function useFilter(formData) {
  const [data, setData] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  let filterState ;

  const setFilterState = (s) => {};
  function onChange(e, name, type) {
    if(  data['seller-type'] && data['seller-type'].find(i=>i === e.target.value) ){
      setData(prev => {
        const updatedSellerType = prev['seller-type'];
        
      
        if (updatedSellerType.includes(e.target.value)) {
          return {
            ...prev,
            'seller-type': updatedSellerType.filter(i => i !== e.target.value),
          };
        }
        

        return prev;
      }); }
   else if (type === "checkbox-group" && e !== undefined) {
      setData((prev) => ({
        ...prev,
        [name]: Array.isArray(prev[name]) ? [...prev[name], e.target.value] : [e.target.value],
      }));    } else {
      setData((prev) => ({ ...prev, [name]: e.target.value }));
    }
  }

  useEffect(()=>{
    const sellerT = data['seller-type'] && data['seller-type'].join('--')
    filterState = Object.entries(data);
    navigate(`productName~${data['productName']}+sellerType~${sellerT}+category~${data['category']}+exist~${data['exist']}`)
  },[data])
 
  function onClear(name) {
    setData({})
  }
  function onClearAll() {
    setData({})
  }
  return { filterState, setFilterState, onChange, onClear, onClearAll };
}

export default useFilter;
