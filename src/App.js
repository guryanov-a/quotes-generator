import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

class App extends Component {
  quotes = [
    {
      quote: 'Judge a man by his questions rather than his answers.',
      author: 'Voltaire'
    }, 
    {
      quote: 'A certain amount of opposition is a great help to a man. Kites rise against, not with, the wind.',
      author: 'Lewis Mumford'
    }, 
    {
      quote: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
      author: 'Ralph Waldo Emerson'
    }, 
    {
      quote: 'The world is always in movement.',
      author: 'V. S. Naipaul'
    }, 
    {
      quote: 'I have never seen snow and do not know what winter means.',
      author: 'Duke Kahanamoku'
    }, 
    {
      quote: 'It is well to think well; it is divine to act well.',
      author: 'Horace Mann'
    }, 
    {
      quote: 'The temple of art is built in words.',
      author: 'Josiah Gilbert Holland'
    }, 
    {
      quote: 'To advise is not to compel.',
      author: 'Anton Chekhov'
    }, 
    {
      quote: 'The journey of a thousand miles begins with one step.',
      author: 'Lao Tzu'
    }, 
    {
      quote: 'Whatever you do in life, surround yourself with smart people who\'ll argue with you.',
      author: 'John Wooden'
    }
  ];

  state = {
    activeQuote: {
      text: '',
      author: '',
    },
  };
  

  handleNewQuote = () => {
    this.generateQuote();
  }

  generateQuote = () => {
    const activeQuoteNumber = getRandomInt(0, this.quotes.length);

    this.setState({
      activeQuote: {
        text: this.quotes[activeQuoteNumber].quote,
        author: this.quotes[activeQuoteNumber].author,
      }
    });
  }

  componentDidMount() {
    const $script = require('scriptjs');

    $script('https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js');

    this.generateQuote();
  }

  render() {
    const {
      activeQuote,
    } = this.state;

    return (
      <Fragment>
        <section id="intro-section" className="section intro-section">
          <div className="container-fluid">
            <div className="section__header">
              <h1 className="intro-section-h page-h">Quotes generator</h1>
            </div>
            <div className="intro-section__content section__content">
              <div id="quote-box" className="quotes">
                <blockquote className="quotes__quote quote blockquote">
                  <div id="text" className="quote__text">{ activeQuote.text }</div>
                  <footer className="blockquote-footer">
                    <div id="author" className="quote_author">{ activeQuote.author }</div>
                  </footer>
                </blockquote>
                <div className="quotes__btns">
                  <button 
                    id="new-quote" 
                    className="btn quotes__get"
                    onClick={this.handleNewQuote}
                  >New quote</button>
                </div>
                <div className="share-btn-section">
                  <a 
                    id="tweet-quote" 
                    className="twitter-share-button" 
                    rel="noopener noreferrer"
                    target="_blank"
                    href={`https://twitter.com/intent/tweet?text=${activeQuote.text} - ${activeQuote.author}&url=https://guryanov-artyom.com`}
                  >Tweet</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default App;
