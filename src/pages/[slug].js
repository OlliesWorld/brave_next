import Image from 'next/image'
import { fromImageToUrl, API_URL} from  '../utils/urls';

export default function Card({ card }) {
    // console.log(card)
    return (
      <div className="bg-regal-green">
          
           
          <div className="text-center">
            <h1 className="text-4xl">{card.name}</h1>
            <p>( {card.type} )</p>
            <p>Alias: <span>{card.alias}</span></p>
        </div>
        <div className='pb-4 text-center'>
        <Image className="m-auto w-52 rounded-lg overflow-hidden" layout="fixed" sizes="50vh" src={fromImageToUrl(card.mainImage)}  alt={card.name} width={280} height={275}/>
        </div>
        <div className="text-blue-900 font-extra-bold text-3xl text-center pb-8">
              <div className="origin">Origin: <span>{card.origin}</span></div>
              <div className="power">Power: <span>{card.power}</span></div>
              <div className="reign">Reign: <span>{card.reign}</span></div>
          
          </div>
          <div className="text-center mb-4 w-2/3 m-auto pb-8">
            <div><span className="font-extra-bold text-3xl underline">The Why: </span><div className='text-xl'>{card.theWhy}</div></div>
            {/* <a href='{resourceLink1}' target="_blank">Link #1</a> */}
        </div>
        <div className="relative border-2 bg-blue-900 pb-4 w-3/4 m-auto">
       
          <div className="ml-8 pb-8 text-white">
                <h2 className="text-4xl text-center underline  pb-3">Favorite quotes from {card.name}</h2>
                <div className='text-xl'>{card.quote1}</div>
                <div className='text-xl'>{card.quote2}</div>
                <div className='text-xl'>{card.quote3}</div>
                
              </div>
              </div>
              <div className="flex justify-center m-auto w-3/4">
              <div className="m-auto pt-4" >
                  <Image className="rounded-lg" src={fromImageToUrl(card.images[0])}  alt={card.name} width={275} height={300} />
              </div>
              <div className="m-auto pt-4" >
                  <Image className="rounded-lg" src={fromImageToUrl(card.images[1])}  alt={card.alias} width={275} height={300} />
              
                      </div>
            </div>
            {/* Card made by : {card} */}
          
        </div>
        
       
       
        
    )
}

// tell next.js how many pages there are
export async function getStaticPaths() {
    const res = await fetch(`https://strapi-gblj.onrender.com/cards`);
    const cards = await res.json();
  
    const paths = cards.map((card) => ({
      params: { slug: card.Slug },
    }));
  
    return {
      paths,
      fallback: false,
    };
  }
  
  // for each individual page: get the data for that page
  export async function getStaticProps({ params }) {
    const { slug } = params;
  
    const res = await fetch(`https://strapi-gblj.onrender.com/cards?Slug=${slug}`);
    const data = await res.json();
    const card = data[0];
  
    return {
      props: { card },
    };
  }