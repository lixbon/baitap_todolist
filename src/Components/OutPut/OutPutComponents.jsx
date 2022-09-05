import React, { Component } from "react";
import { connect } from "react-redux";
import { DONE_TODO, REMOVE_TODO } from "../../Redux/Constants/todoConstants";

class OutPutComponents extends Component {
  renderList = (value) => {
    return this.props.todoList.map((item) => {
      if (value == item.isDone) {
        return (
          <div className="flex mb-4 items-center" key={item.id}>
            <p className="w-full text-black">{item.content}</p>
            {item.isDone ? (
              ""
            ) : (
              <button
                className="flex-no-shrink p-2 ml-4 mr-2 bg-green-400 rounded hover:text-white text-green border-green hover:bg-green-700"
                onClick={() => {
                  this.props.handleDoneJob(item.id);
                }}
              >
                Done
              </button>
            )}

            <button
              className="flex-no-shrink p-2 ml-2  rounded border-red-500 bg-red-400 hover:text-white hover:bg-red-600"
              onClick={() => {
                this.props.handleRemoveToDo(item.id);
              }}
            >
              Remove
            </button>
          </div>
        );
      }
    });
  };
  render() {
    return (
      <div>
        <h1 className="text-white bg-green-600 mb-3 text-xl text-center">
          JOB DONE
        </h1>
        {this.renderList(true)}

        <h1 className="text-red-500 bg-yellow-200 mb-3 text-xl text-center">
          JOB TO DO
        </h1>
        {this.renderList(false)}
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    todoList: state.todoListReducer.todoList,
  };
};
let mapDispatchToProps = (dispath) => {
  return {
    handleRemoveToDo: (value) => {
      dispath({
        type: REMOVE_TODO,
        payload: value,
      });
    },
    handleDoneJob: (value) => {
      dispath({
        type: DONE_TODO,
        payload: value,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(OutPutComponents);
