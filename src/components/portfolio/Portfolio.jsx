import React from 'react'
import "./portfolio.css"
import IMG1 from "../../todo.png";
import IMG2 from "../../note.png";
import IMG3 from "../../wheather.png";
import IMG4 from "../../snake.png";
import IMG5 from "../../youtube.png";

const data=[
  {
    id: 1,
    image: IMG1,
    title:'To-Do List App',
    github: 'https://github.com/khushal8645/TO-DO-List'
},
{
  id: 2,
  image: IMG2,
  title:'Note App',
  github: 'https://github.com/khushal8645/Note-App'
},
{
  id: 3,
  image: IMG3,
  title:'Weather App',
  github: 'https://github.com/khushal8645/Weather-app'
},
{
  id: 4,
  image: IMG4,
  title:'Snake Game',
  github: 'https://github.com/khushal8645/Snake_game'
},
{
  id: 5,
  image: IMG5,
  title:'Youtube Clone App',
  github: 'https://github.com/khushal8645/Youtube-clone-app'
}
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
       {
        data.map(({id, image,title, github}) => {
          return (
          <article key={id} className='portfolio_item'>
          <div className='portfolio_item-img'>
            <img src={image} alt="imag"/>
          </div>
          <h3>{title}</h3>
          <div className='portfolio_item-CTA'>
          <a href={github} className='btn' target='_blank' rel="noreferrer" alt="git">GitHub</a>
          </div>
        </article>
        )
       })
      }
      </div>
    </section>
  )
}

export default Portfolio
