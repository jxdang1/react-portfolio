import Project from '../components/Project'

const Portfolio = () => {
    return (
      <div>
        <h2>Portfolio</h2>

        <div className="flexContainer">

          <Project name={'Project 3 Placeholder'} 
            github={'http://github.com'}
            deployed={'http://google.com'}
            imageURL={'http://placekitten.com/200/200'}
            description={'Placeholder for 3rd Group Project'} />
          
            <Project name={'E-Commerce Back End'} 
              github={'https://github.com/jxdang1/ecommerce-backend'}
              deployed={''}
              imageURL={'http://placekitten.com/200/200'}
              description={'Back end application for an e-commerce site using Express.js and Sequelize'} />
        </div>
      </div>
    );
  }

  export default Portfolio;
  