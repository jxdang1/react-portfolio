import Project from '../components/Project'

const Portfolio = () => {
    return (
      <div>
        <h2>Portfolio</h2>

        <div className="flexContainer">

          <Project name={'PWA J.A.T.E Text Editor'} 
            github={'https://github.com/jxdang1/pwa-text-editor'}
            deployed={'https://polar-river-77993-3eb0c051fa2e.herokuapp.com/'}
            imageURL={'./jate-ss.jpg'}
            description={'Single-page application that meets PWA criteria that is a text editor that runs in the browser'} />
          
            <Project name={'Weather Dashboard'} 
              github={'https://github.com/jxdang1/weather-dashboard'}
              deployed={'https://jxdang1.github.io/weather-dashboard/'}
              imageURL={'./weather-ss.jpg'}
              description={'Weather application that uses OpenWeatherMaps geocoding API to input city of choice to see the forecast of city.'} />

            <Project name={'Code Quiz'} 
              github={'https://github.com/jxdang1/code-quiz'}
              deployed={'https://jxdang1.github.io/code-quiz/'}
              imageURL={'./code-quiz-ss.jpg'}
              description={'Created a simple code quiz that tests users knowledge on different languages with the use of JavaScript.'} /> 
        </div>
      </div>
    );
  }

  export default Portfolio;
  