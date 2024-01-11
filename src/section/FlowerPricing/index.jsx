import React, { useContext, useEffect, useState } from "react";
import "./index.scss"
import { SearchContext } from "../../context/searchContext";

function FlowerPircing() {
  const [flower, setFlower] = useState([]);
  const [sortedProperty, setSortedProperty] = useState(null)
  const {handleSearch,search} = useContext(SearchContext)

  useEffect(() => {
    getAll()
  }, []);
  

  function getAll() {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setFlower(data));
  }

  function Delete(id) {
    fetch("http://localhost:3000/" +id, { method: "DELETE",})
      .then((res) => res.json())
      .then((data) => {getAll()});
  }

  return (
    <div className="flowerPircing">
      <div className="flowerPircingAll">
        <div className="head">Devoted to wonderful beauty</div>
        <h1 className="main">Flowers Pricing</h1>
        <div className="sorted"> <input type="text" onChange={(e)=>handleSearch(e)} />
        <button onClick={()=>setSortedProperty({property:"price",asc:false})}>Price By Down</button>
        <button onClick={()=>setSortedProperty({property:"price",asc:true})}>Price By Up</button>
        <button onClick={()=>setSortedProperty(null)}>Default</button></div>
        <div className="cards">
          {flower
          .filter((x)=>x.name.toLowerCase().includes(search.toLowerCase()))
          .sort((a,b) => {
            if (sortedProperty&& sortedProperty.asc) {
                return (a[sortedProperty.property] > b[sortedProperty.property]) ? 1 : ((b[sortedProperty.property] > a[sortedProperty.property]) ? -1 : 0)
            }else if (sortedProperty && sortedProperty.asc===false) {
               return  (a[sortedProperty.property] < b[sortedProperty.property]) ? 1 : ((b[sortedProperty.property] < a[sortedProperty.property]) ? -1 : 0)
            }
            else {
                return 0
            }
          })
          .map((x) => (
            <ul className="card">
              <li className="image"><img src={x.image}  /></li>
              <li className="name">{x.name}</li>
              <li className="price">${x.price}</li>
              <button className="btn" onClick={()=>Delete(x._id)}>Delete</button>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlowerPircing;
