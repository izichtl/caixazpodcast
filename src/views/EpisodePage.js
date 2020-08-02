import React from 'react';
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { useAxiosGet } from '../Hooks/HttpRequests'
import AwesomeComponent from '../components/Loading'


function Contact() {
      const url = `https://api.jsonbin.io/b/5f07ca805d4af74b01299012/16`
      

      
      let itens = useAxiosGet(url)
      
      let content = null;
      


      if (itens.error) {
        content = <p>
          Aconteceu um erro, atualize a página ou tente novamente mais tarde
            </p>
      }

      //TODO align to center the loading animation

      // if (itens.loading) {
      //   content = <div >
      //     <div className='loading'>
      //     <AwesomeComponent />
      //     </div>
      //   </div>
      // }

      if (itens.data) {
        return (

          content =
          itens.data.map((itens) =>
            
            <div className='episodePage'>
            <Card item={itens}/>
            </div>
            
          ))

      }

      return (
        <div >
         
         {content}

        </div>
      )

}

export default Contact;






// <Card item={itens} />