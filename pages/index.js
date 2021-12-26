import Link from "next/link";
import Image from "next/image";
import { fromImageToUrl, API_URL} from  '../utils/urls';

export default function Home({cards}) {
  // console.log(cards)
  return (
    <div className="main h-full pt-4 pb-36">
  
        <div className="header my-4 text-center text-blue-900 font-extrabold">
          <h2 >These Women are </h2>
          <h2 className="text-4xl uppercase">inspiring, courageous, rebellious, kind, compassionate, fierce, and much more.</h2>
          <h4>Click on a card to learn more about each person!</h4>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-full mb-20 ml-10">
       {cards &&
        cards.map((card) => (
          <Link href={`/${card.Slug}`} key={card.id} passHref>
               <div  className="card w-3/4 shadow-2xl cursor-pointer rounded-lg">
                <div className="front rounded-lg m-auto">
                <div className="w-full ">
                <Image className="m-auto  rounded-lg overflow-hidden" layout="fixed" sizes="50vh" src={fromImageToUrl(card.mainImage)}  alt={card.name} width={280} height={275}/>
                </div>
                <div className="relative w-16 h-16 bg-green-900 rounded-full flex justify-center items-center text-center text-white p-5 shadow-xl -mt-16 ml-2">
                  
                  {card.type}
            
                </div >
                <div className="rounded-bl-lg rounded-br-lg  px-2 py-2 mt-2 bg-blue-900">
                <div className="font-bold text-2xl mb-2 text-center">{card.alias}</div>
                <div className="flex justify-center space-x-4">
                  <div >{card.power}</div>
                  <div>{card.reign}</div>
                </div>
              </div>
              </div>

              <div  className="back text-purple-50 max-w-md w-72 h-3/4 shadow-lg  bg-white">
              <div className="px-6 bg-blue-900 ">
                <div className="font-bold text-2xl  text-center">{card.name}</div>
                <div className="">
                  <div>Power: {card.power}</div>
                  <div>Reign: {card.reign}</div>
                </div>
                
              </div>
                  <div className="px-4 h-full text-black overflow-hidden">
                   
                    <span className="font-bold">My Why:</span> click to learn more
                      {/* {card.theWhy}  */}
                    </div> 
                  </div>
          </div>
          </Link>

        ))} 
      
    </div>
   
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