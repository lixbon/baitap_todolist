import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_TODO } from "../../Redux/Constants/todoConstants";

class InputComponents extends Component {
  render() {
    return (
      <div className="mb-4">
        <h1 className="text-blue-600 text-3xl uppercase">Todo List</h1>
        <div className="flex mt-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
            placeholder="Add Todo"
            id="input-id"
          />
          <button
            className="flex-no-shrink p-2 border-3 rounded text-teal border-teal bg-green-500 hover:bg-green-700"
            onClick={() => {
              this.props.handleAddToDo();
            }}
          >
            Add
          </button>
        </div>
        <span className="text-red-600" id="span-input"></span>
      </div>
    );
  }
}
let mapDispatchToProps = (dispath) => {
  return {
    handleAddToDo: (value) => {
      dispath({
        type: ADD_TODO,
        payload: value,
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(InputComponents);
