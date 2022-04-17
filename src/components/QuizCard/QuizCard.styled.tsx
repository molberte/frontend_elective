import styled from 'styled-components'

export const QuizCardStyled = styled.div`
  /*Code, located below, is responsible for Quiz-page style*/
  .quiz {
    font-family: -apple-system, BlinkMacSystemFont, 'Dela Gothic One',
      'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #9beae5;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
  }

  * {
    font-family: 'Verdana', cursive, sans-serif;
    color: #7866dd;
  }

  .box-section {
    margin-top: -4%;
    background-color: rgba(255, 255, 255, 0.79);
    width: 450px;
    min-height: 200px;
    height: min-content;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 10px 10px 42px 0px rgba(46, 28, 77, 0.35);
    display: flex;
    justify-content: space-evenly;
  }

  .result-section {
    position: relative;
    width: 50%;
    max-width: 300px;
    max-height: 300px;
  }

  .question-section {
    width: 100%;
    position: relative;
  }

  .question-count {
    margin-bottom: 20px;
  }

  .question-count span {
    font-size: 28px;
  }

  .question-text {
    margin-bottom: 12px;
  }

  .answer-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  button {
    width: 100%;
    font-size: 16px;
    color: #ffffff;
    background-color: #9beae5;
    border-radius: 15px;
    display: flex;
    padding: 5px;
    justify-content: flex-start;
    align-items: center;
    border: 5px solid #7bc9c4;
    cursor: pointer;
  }

  button:hover {
    background-color: #7866dd;
  }

  button:focus {
    outline: none;
  }

  button svg {
    margin-right: 5px;
  }

  .result-image {
    display: block;
    width: 100%;
    height: auto;
    max-height: 100%;
  }

  .result-text {
    position: absolute;
    bottom: 0;
    background: rgba(94, 78, 180, 0.6); /* Black see-through */
    transition: 0.5s ease;
    opacity: 0;
    font-size: 20px;
    padding: 20px;
    text-align: center;
  }

  /* When you mouse over the container, fade in the overlay title */
  .result-section:hover .result-text {
    opacity: 1;
  }
`
