import { chatroomStyle } from "../style";

const Message = ({ message }) => {
  if (message.label === "Send") {
    return (
      <div class="col-start-1 col-end-8 p-3 rounded-lg">
        <div class="flex flex-row items-cente ">
          <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
            {message.user}
          </div>

          <div class={`${chatroomStyle.receiveChat}`}>
            <div>{message.content}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div class="col-start-6 col-end-13 p-3 rounded-lg">
        <div class="flex items-center justify-start flex-row-reverse">
          <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
            {message.user}
          </div>
          <div class={`${chatroomStyle.sendChat}`}>
            <div>{message.content}</div>
          </div>
        </div>
      </div>
    );
  }
};

export default Message;
