import Link from "next/link";
// import Image from "next/image";
import { fromImageToUrl, API_URL} from  '../utils/urls';

export default function Home({cards}) {
  // console.log(cards)
  return (
    <div className="main bg-stone-200 h-full m-auto pt-4 pb-16">
  
        <div className="header rounded-lg lg:w-4/5 m-auto py-4 text-center text-white bg-regal-green font-extrabold">
          <h2 className="text-6xl ">Dissenters, Rebels, Activists, and </h2>
          <h2 className="text-2xl uppercase">inspiring, courageous, rebellious, kind, compassionate, fierce, and much more.</h2>
          <h4>Click on a card to learn more about each person!</h4>
        </div>
        
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4  w-2/3 h-full mx-auto mt-4 justify-items-center">
       {cards &&
        cards.map((card) => (
          <Link href={`/${card.Slug}`} key={card.id} passHref>
               <div  className="card w-64 h-72 shadow-2xl rounded-lg mb-12 cursor-pointer">
                <div className="front w-64 rounded-lg m-auto">
                <div className="w-full ">
                <img src={fromImageToUrl(card.mainImage)}  alt={card.name} className="w-full h-60"  />
               
                </div>
                <div className="relative w-16 h-16 bg-regal-gold/95 rounded-full flex justify-center items-center text-center text-white p-5 shadow-xl -mt-16 ml-2">
                  
                  {card.type}
            
                </div >
                <div className="rounded-bl-lg rounded-br-lg  px-2 py-2 -mt-2 bg-regal-green text-white">
                <div className="font-bold text-2xl mb-2 text-center">{card.alias}</div>
                <div className=" text-center m-0">
                  <div >{card.power}</div>
                  <div >Reign {card.reign}</div>
                </div>
              </div>
              </div>

              <div  className="back rounded-lg text-purple-50 max-w-md w-64 h-80 shadow-lg  bg-white">
              <div className="px-6 bg-blue-900 ">
                <div className="font-bold text-2xl  text-center">{card.name}</div>
                <div className="">
                  <div>Power: {card.power}</div>
                  <div >Reign: {card.reign}</div>
                </div>
                
              </div>
                  <div className="px-4 h-full text-black overflow-hidden">
                   <div className="mb-2">Quote - {card.quote1}</div>
                    <span className="font-bold">My Why:</span> click to learn more
                      
                    </div> 
                  </div>
          </div>
          </Link>

        ))} 
      
    </div>
   <div className="mt-12 text-center text-3xl">For more information about these incredible people check out: <Link href="/resources" passHref><h2 className="text-regal-green text-extra-bold">Resources Page</h2></Link></div>
</div>

     
    
  );
}
export async function getStaticProps() {
  const baseURL = 'http://localhost';
  const url = 'https://strapi-gblj.onrender.com/cards';
  
  const res = await fetch(new URL(url, baseURL))
  
  const cards = await res.json();
  
  return {
    props: { cards},
  };
}