import React from 'react'

function List() {
    //Now we create a nested list
    const people = [
        { 
          name: 'chris',
          pets: [
            { name: 'bella', type: 'dog' },
            { name: 'cocoa', type: 'dog' }
          ]
        },
        { 
          name: 'nick',
          pets: [
            { name: 'hilo', type: 'cat' },
            { name: 'polly', type: 'cat' }
          ]
        }
      ];
    
      return (
        <div className= "list1">
          {people.map((person, index) => (
            <div key={index}>
              <h2>{person.name}'s Pets</h2>
    
              {/* loop over the pets */}
              <div className ="list2">
                {person.pets.map((pet, i) => (
                  <p key={i}>
                    {pet.type} named {pet.name}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }


  export default List;
    //This is a single list that we used in earlier file   
//     const people = [
//         { id: 1, name: 'Chris' },
//         { id: 2, name: 'Nick' }
//       ];
//     return (  
//         <div className= "list2">
//         {people.map(person => (
//             <p key={person.id}>{person.name}</p>
//           ))}
//           </div>
//     );
//   }
