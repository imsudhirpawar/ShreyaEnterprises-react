import CardTemplate from './card';
import React, { useState, useEffect } from 'react';
import './cardGroups.css'
import {BsChevronDoubleRight} from 'react-icons/bs'
import { icons } from 'react-icons/lib';

export default function CardItems() {
    const [data,setData] = useState([]);

    const getData = ()=>{
        fetch('data.json',{
            headers:{
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }}).then((responce)=>{
                return responce.json();
            }).then((myjson)=>{
                console.log(myjson);
                setData(myjson);
            })
    }

    useEffect(()=>{
        getData()
    },[])
  return (
    <div className="container">
      <div className='   pt-4 pb-4 h5  text-muted '>
      <BsChevronDoubleRight className='text-success'></BsChevronDoubleRight> Featured Products
      </div>
      <div className="row">
        {data.map((element) => (
          <div className="col-md-4  cardDes" key={element.id} >
            <CardTemplate {...element} />
          </div>
        ))}
      </div>
    </div>
  );
}