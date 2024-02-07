import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';



function Sangyong() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const translate = () => {

    setOutputText(inputText);
  };

  return (
    
    <div className="App">
      <section className="section">
        <div className="container">
          <h1 className="title">Translator</h1>
          <div class="columns is-mobile">
          <div class="column">1</div>
  <div class="column">2</div>
</div>
          <div className="columns">
            <div className="column is-full">
              <div className="field">
                <label className="label">Before</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Input Text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-full">
              <div className="field">
                <label className="label">After</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    value={outputText}
                    readOnly
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="is-rounded button is-medium" onClick={translate}>
                translate
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sangyong;