import React from 'react';
import { Link } from 'react-router-dom'
import Card from '../components/Card'



function Contact(){

        
    return (
        <div className='contact'>

          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>

        </div>
    );
}

export default Contact;





// https://api.jsonbin.io/b/5f07ca805d4af74b01299012
// import React, { useState, useEffect } from 'react'
// import Loader from '../Componets/Loader'
// import CardProduto from '../Componets/CardProduto'
// import { useAxiosGet } from '../Hooks/HttpRequests'

// function Home() {
//     const url = `https://5f0272769e41230016d42d7c.mockapi.io/content/`

//     let products = useAxiosGet(url)

//     let content = null;

//     if (products.error) {
//         content = <p>
//             Aconteceu um erro, atualize a página ou tente novamente mais tarde
//             </p>
//     }



// function Contato(){
//   let cards = null;

//   try{

//     conteudo = cards
    
//     cartao = 
//     <div >
//                          <CardProduto
//                       product ={product}/>
//     </div>

//   }
  
//   catch(error){
//     console.log('DEU ERRO', error)
//   }




// }








//     if (products.loading) {
//         content = <Loader />
//     }

//     if (products.data) {
//         return (
//             content =
//             products.data.map((product) =>
//                 <div  key={product.id}>
//                     <CardProduto
//                     product ={product}/>
//                 </div>
//             ))
        
//     }

//     return (
//         <div>
            
                
//         {content}
           

//         </div>
//     )
// }

// export default Home;