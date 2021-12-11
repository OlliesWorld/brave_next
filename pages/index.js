import Link from "next/link";

import Image from "next/image";

export default function Home({cards}) {
  // console.log(cards)
  return (
    <div className="main pt-4 pb-36">
  
        <div className="header my-4 text-center text-blue-900 font-extrabold">
          <h2 >These Women are </h2>
          <h2 className="text-4xl uppercase">inspiring, courageous, rebellious, kind, compassionate, fierce, and much more.</h2>
          <h4>Click on a card to learn more about each person!</h4>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 justify-items-center ml-10">
      {cards &&
        cards.map((card) => (
          <Link href={`/${card.Slug}`} key={card.id} passHref>
               <div  className="card w-72 shadow-2xl mb-4 cursor-pointer rounded-lg">
                <div className="front rounded-lg">
                <div className="m-auto ">
                <Image className="w-72 h-72" src={`http://localhost:1337${card.mainImage.url}`}  alt={card.name} width={290} height={275}/>
                </div>
                <div className="relative w-16 h-16 bg-green-900 rounded-full flex justify-center items-center text-center text-white p-5 shadow-xl -mt-16 ml-2">
                  
                  {card.type}
            
                </div >
              <div className="px-2 py-2 bg-purple-900 text-purple-50 w-72">
                <div className="font-bold text-2xl mb-2 text-center">{card.alias}</div>
                
                <div className="flex flex-col text-center justify-center space-x-4">
                  <div className="text-xl">{card.power}</div>
                 
                </div>
                <div className="pb-2">
                <p className="mt-2 mb-0 text-center font-bold underline">Quote:</p>
                  <p className="px-2">{card.quote1}</p>
                  </div>
              </div>
              </div>

              <div  className="back text-purple-50 max-w-md w-72  shadow-lg  bg-white">
              <div className="px-6 py-4 bg-blue-900 ">
                <div className="font-bold text-2xl  text-center">{card.name}</div>
                <div className="">
                  <div>Power: {card.power}</div>
                  <div>Reign: {card.reign}</div>
                </div>
                
              </div>
                  <div className="p-4 bg-purple-900 h-72 my-8">
                  {/* Click for The Why */}
                    <span className="font-bold">My Why:</span> {card.theWhy} 
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
  const res = await fetch("http://localhost:1337/cards");
  const cards = await res.json();

  return {
    props: { cards},
  };
}