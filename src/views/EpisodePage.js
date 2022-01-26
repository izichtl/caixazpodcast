import React from 'react';
import Card from '../components/Card'
import { useAxiosGet } from '../Hooks/HttpRequests'


function Contact() {
      const url = `https://api.jsonbin.io/b/5f07ca805d4af74b01299012/23`
      let itens = useAxiosGet(url)
      let content = null;
      


      if (itens.error) {
        content = <p>
          Aconteceu um erro, atualize a página ou tente novamente mais tarde
            </p>
      }

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