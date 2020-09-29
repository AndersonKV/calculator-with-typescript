import React from "react";
import styled from "styled-components";

import { Button } from "./Button";

const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;

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
    width: 90%;
    height: calc(2.25rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
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

  .col {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
  }

  .clear {
    width: 130px !important;
  }

  .enter {
    height: 110px !important;
  }
`;

interface SelectProps {
  handleCalculator: object;
  handleClear: object;
  handleEqual: object;
}

const keyBoard: React.FC<SelectProps> = (props) => {
  return (
    <>
      <Row>
        <Button handleClick={props.handleClear} action={"operator"}>
          C
        </Button>
        <Button handleClick={props.handleCalculator} action={"operator"}>
          /
        </Button>
        <Button handleClick={props.handleCalculator} action={"operator"}>
          *
        </Button>
      </Row>

      <Row>
        <Button handleClick={props.handleCalculator} action={"value"}>
          7
        </Button>

        <Button handleClick={props.handleCalculator} action={"value"}>
          8
        </Button>
        <Button handleClick={props.handleCalculator} action={"value"}>
          9
        </Button>
        <Button handleClick={props.handleCalculator} action={"operator"}>
          -
        </Button>
      </Row>

      <Row>
        <Button handleClick={props.handleCalculator} action={"value"}>
          4
        </Button>
        <Button handleClick={props.handleCalculator} action={"value"}>
          5
        </Button>
        <Button handleClick={props.handleCalculator} action={"value"}>
          6
        </Button>
        <Button handleClick={props.handleCalculator} action={"operator"}>
          +
        </Button>
      </Row>

      <Row>
        <Button handleClick={props.handleCalculator} action={"value"}>
          1
        </Button>
        <Button handleClick={props.handleCalculator} action={"value"}>
          2
        </Button>
        <Button handleClick={props.handleCalculator} action={"value"}>
          3
        </Button>

        <Button handleClick={props.handleEqual} action={"operator"}>
          =
        </Button>
      </Row>

      <Row style={{ marginTop: "-60px" }}>
        <Button handleClick={props.handleCalculator} action={"value"}>
          0
        </Button>
        <Button handleClick={props.handleCalculator} action={"operator"}>
          .
        </Button>
      </Row>
    </>
  );
};

export default keyBoard;
