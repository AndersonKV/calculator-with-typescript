import React from "react";
import styled from "styled-components";

import KeyBoard from "./components/KeyBoard";

const Container = styled.div`
  min-width: 576px !important;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;

  .col {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
  }

  .d-flex {
    display: -ms-flexbox !important;
    display: flex !important;
  }

  .justify-content-center {
    -ms-flex-pack: center !important;
    justify-content: center !important;
  }

  .form-control {
    display: block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    height: 50px;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  .font-weight-light {
    font-weight: 300 !important;
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .btn-lg,
  .btn-group-lg > .btn {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;
  }

  .btn-dark {
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;
  }

  .btn-dark:hover {
    color: #fff;
    background-color: #23272b;
    border-color: #1d2124;
  }

  .btn-dark:focus,
  .btn-dark.focus {
    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
  }

  .btn-dark.disabled,
  .btn-dark:disabled {
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;
  }

  .clear {
    width: 130px !important;
  }
`;

const Calculator = styled.div`
  margin-top: 40px;
  border: solid 1px #000;
  padding: 20px;
  background-color: #2e2e2e;
  border-radius: 10px;
  box-shadow: 1px 1px 5px #000;

  .btn {
    width: 60px;
    height: 50px;
    margin: 5px;
    box-shadow: 1px 1px 1px #000;
  }

  .zero {
    width: 130px;
  }
`;

const ResultView = styled.input`
  text-align: right;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  border: solid 1px #000;
  box-shadow: 1px 1px 1px #000;
`;

const SubView = styled.span`
  margin-top: -70px;
  position: absolute;
  width: 238px;
  text-align: right;
  font-size: 12px;
`;

class App extends React.Component<{}, { input: string; lastInput: string }> {
  constructor(props: object) {
    super(props);

    this.state = {
      input: "",
      lastInput: "",
    };
  }

  handleCalculator = (action: string, value: string | number) => {
    const inputAppend = this.state.input + value.toString();
    const input = this.state.input;

    let notOperator = false;
    let notRepeatOperator = false;
    let operator = false;

    if (
      inputAppend[0] != "*" &&
      inputAppend[0] != "-" &&
      inputAppend[0] != "+" &&
      inputAppend[0] != "/"
    ) {
      notOperator = true;

      if (value == "*" || value == "-" || value == "+" || value == "/") {
        operator = true;
      }
    }

    if (operator === true) {
      if (
        input.slice(-1) == "*" ||
        input.slice(-1) == "-" ||
        input.slice(-1) == "+" ||
        input.slice(-1) == "/"
      ) {
        notRepeatOperator = true;
      }
    }

    if (notOperator == true) {
      if (notRepeatOperator === false) {
        try {
          if (this.state.input === "impossivel calcular") {
            this.setState({ input: value.toString() });
          } else {
            this.setState({ input: this.state.input + value.toString() });
          }
        } catch (err) {
          this.setState({
            input: "",
          });
          console.warn("ocorreu um erro durante o calculo");
        }
      }
    }
  };

  handleEqual = () => {
    try {
      this.setState({
        input: eval(this.state.input.toString()),
        lastInput: eval(this.state.input.toString()),
      });
    } catch (err) {
      this.setState({
        input: "impossivel calcular",
      });
      console.warn("ocorreu um erro durante o calculo");
    }
  };

  handleClear = () => {
    this.setState({ input: "" });
  };

  render() {
    return (
      <Container>
        <Row>
          <div className="col d-flex justify-content-center">
            <Calculator>
              <ResultView
                type="text"
                className="form-control resultado"
                value={this.state.input}
                disabled
              />
              <SubView>{this.state.lastInput}</SubView>
              <KeyBoard
                handleCalculator={this.handleCalculator}
                handleEqual={this.handleEqual}
                handleClear={this.handleClear}
              />
            </Calculator>
          </div>
        </Row>
      </Container>
    );
  }
}

export default App;
