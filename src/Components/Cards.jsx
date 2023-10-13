import axios from 'axios';
import React, { Component } from 'react';
import {AiOutlineHome, } from 'react-icons/ai';

export default class Cards extends Component {
    state = {
        Data: []
    }

    getData = () => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                // console.log('API Response:', res.data);


                this.setState({
                    Data: res.data
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    componentDidMount() {
        this.getData();
    }

    render() {
                console.log(this.state.Data[0]);
        return (
            <>
    <div class="px-14 p-6 bg-blue-500">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {this.state.Data.map((item , index)=>{
           return (<div class="bg-white rounded-lg overflow-hidden shadow-md" key={index}>
                <div className='overflow-hidden'><img src={item.image} alt="Product 1" class="w-full h-56 object-cover hover:scale-110 cursor-pointer" /></div>
                <div class="p-4">
                    <h2 class="text-xl font-semibold mb-2">{item.category}</h2>
                    <p class="text-gray-700 truncate">{item.description}</p>
                    <div class="flex items-center mt-3">
                        <div class="text-yellow-400 mr-2">
                            ★★★★☆
                        </div>
                        <span class="text-gray-600">${item.price}</span>
                        <button class="ml-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Buy Now</button>
                        {/* <AiOutlineHome/> */}
                    </div>
                </div>
            </div>)
})}
            </div>
            </div>

            </>
        )
    }
}




                // <div className='px-20 py-10 w-full'>
                    
                // </div>