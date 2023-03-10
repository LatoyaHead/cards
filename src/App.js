import React from 'react';
import './App.css';
import Cards from './components/Cards'

const supplies = [
  {
    title:'Beauty',
    imageUrl:'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1187&q=80',
    body:`Everything has beauty, but not everyone sees it. ...
    The beauty of a woman is not in a facial mode but the true beauty in a woman is reflected in her soul. ...
    Never lose an opportunity of seeing anything beautiful, for beauty is God's handwriting.
    Beauty is power; a smile is its sword.`
  },
  {
    title:'Beauty',
    imageUrl:'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    body:`Everything has beauty, but not everyone sees it. ...
    The beauty of a woman is not in a facial mode but the true beauty in a woman is reflected in her soul. ...
    Never lose an opportunity of seeing anything beautiful, for beauty is God's handwriting.
    Beauty is power; a smile is its sword.`
  },
  {
    title:'Gaming',
    imageUrl:'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    body:`Everything has beauty, but not everyone sees it. ...
    The beauty of a woman is not in a facial mode but the true beauty in a woman is reflected in her soul. ...
    Never lose an opportunity of seeing anything beautiful, for beauty is God's handwriting.
    Beauty is power; a smile is its sword.`
  },
  {
    title:'Gaming',
    imageUrl:'https://images.unsplash.com/photo-1567027757540-7b572280fa22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    body:`A controller, in a computing context, is a hardware device or a software program that manages or directs the flow of data between two entities. In computing, 
    controllers may be cards, microchips or separate hardware devices for the control of a peripheral device.`
  }
]

function App() {
  return (
    <div className="App">
      {
        supplies.map(supply => {
          return (
            <Cards
            title={supply.title}
            imageUrl={supply.imageUrl}
            body={supply.body}
            />
          )
        })
      }
      
    </div>
  );
}

export default App;
