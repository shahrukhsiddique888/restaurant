 //   return (
//     <div className="card rounded-none ">
//       <div className="flex-shrink-0 sm:max-h-120 sm:overflow-auto  lg:overflow-x-auto">
//         <div className="grid  lg:grid-rows-auto lg:grid-cols-1 sm:grid-rows-1 sm:grid-cols-1 gap-8">
//           {menu.map((item, index) => (
//             <div key={item.name} className=" p-1 m-full card flex flex-col justify-center items-center">
//               <div 
            
//               >
//                 <img src={item.photo} alt={item.name} className="w-auto h-auto pt-0 mr-0" loading="lazy" />
//               </div>
//               <a
//                 href={item.href}
//                 className={classNames(
//                   item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                   'flex rounded-md  px-3 py-2 text-sm font-medium mb-2'
//                 )}
//                 aria-current={item.current ? 'page' : undefined}
//               >  
//                 {item.name}
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>

import React from 'react';

const menu = [
  { name: 'appertisers', href: 'https://diningexclusive.co.nz/', current: false, photo: 'https://s.yimg.com/os/creatr-uploaded-images/2020-06/c39ecc20-ab32-11ea-9efb-b01583fe6e6f' },
  { name: 'salads', href: '#', current: false, photo: 'https://assets.website-files.com/5e86c7170f1ab21474c3f2a4/5ef1cecb899ee03d62c90355_Natural%2Blight%2B-%2BFood%2BPhotography%2B-%2BFrenchly%2B-4365.jpeg' },
  { name: 'mains', href: '#', current: false, photo: 'https://www.angelahopperphotography.com/wp-content/uploads/2019/03/Food-Photography-11.jpg' },
  { name: 'desserts', href: '#', current: false, photo: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/12/2016/02/Food-Photography7.jpg' },
  { name: 'drinks', href: '#', current: false, photo: 'https://twolovesstudio.com/wp-content/uploads/2017/05/99-Best-Food-Photography-Tips-5-1.jpg' },
//   { name: 'appertisers1', href: 'https://diningexclusive.co.nz/', current: false, photo: 'https://s.yimg.com/os/creatr-uploaded-images/2020-06/c39ecc20-ab32-11ea-9efb-b01583fe6e6f' },
//   { name: 'salads1', href: '#', current: false, photo: 'https://assets.website-files.com/5e86c7170f1ab21474c3f2a4/5ef1cecb899ee03d62c90355_Natural%2Blight%2B-%2BFood%2BPhotography%2B-%2BFrenchly%2B-4365.jpeg' },
//   { name: 'mains1', href: '#', current: false, photo: 'https://www.angelahopperphotography.com/wp-content/uploads/2019/03/Food-Photography-11.jpg' },
//   { name: 'desser1ts', href: '#', current: false, photo: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/12/2016/02/Food-Photography7.jpg' },
//   { name: 'drinks1', href: '#', current: false, photo: 'https://twolovesstudio.com/wp-content/uploads/2017/05/99-Best-Food-Photography-Tips-5-1.jpg' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Bar() {
  // Define an array of objects containing transformation properties for each image
  const transformations = [
    { scale: "scale(1.1)", rotate: "-6deg", translateX: "0", translateY: "0" },
    { scale: "scale(0.75)", rotate: "6deg", translateX: "2px", translateY: "15px" },
    { scale: "scale(1.5)", rotate: "0", translateX: "0", translateY: "11px" },
    { scale: "scale(1)", rotate: "0", translateX: "0", translateY: "24px" },
    { scale: "scale(1)", rotate: "0", translateX: "20px", translateY: "4px" }
  ];

  return (
    <div className="card rounded-none">
      <div className="flex-shrink-0 grid 
      grid-flow-col
       lg:grid-rows-1 lg:grid-cols-1 sm:grid-rows-1 sm:grid-cols-1 gap-8 overflow-auto">
        {menu.map((item, index) => (
          <div key={item.name} className="items-center card">
            <div
              style={{
                transform: `scale(${transformations[index].scale}) rotate(${transformations[index].rotate}) translate(${transformations[index].translateX}, ${transformations[index].translateY})`
              }}
            >
              <img src={item.photo} alt={item.name} className="w-auto h-auto mr-3" loading="lazy" />
            </div>
            <a
              href={item.href}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'flex rounded-md px-3 py-2 text-sm font-medium mb-2 lg:overflow-auto'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
