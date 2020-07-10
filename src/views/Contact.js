import React from 'react';
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { useAxiosGet } from '../Hooks/HttpRequests'


function Contact() {
      const url = `https://api.jsonbin.io/b/5f07ca805d4af74b01299012/9`
      

      
      let itens = useAxiosGet(url)
      
      let content = null;
      


      if (itens.error) {
        content = <p>
          Aconteceu um erro, atualize a página ou tente novamente mais tarde
            </p>
      }

      if (itens.loading) {
        content = <p>Carregando :) </p>
      }

      if (itens.data) {
        return (

          content =
          itens.data.map((itens) =>
            <div>
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