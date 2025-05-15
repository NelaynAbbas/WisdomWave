import { Message } from "../components";
import styles from "../style";

const Messages = ({ messages }) => {
  return (
    <div class="grid grid-cols-12 gap-y-4">
      {messages.map((message, id) => (
        <Message key={id} message={message} />
      ))}
    </div>
  );
};
export default Messages;

{
  /* <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-cente ">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>

                        <div class={`${chatroomStyle.receiveChat}`}>
                          <div>Hey How are you today?</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>
                        <div class={`${chatroomStyle.receiveChat}`}>
                          <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Vel ipsa commodi illum saepe numquam maxime
                            asperiores voluptate sit, minima perspiciatis.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-6 col-end-13 p-3 rounded-lg">
                      <div class="flex items-center justify-start flex-row-reverse">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>
                        <div class={`${chatroomStyle.sendChat}`}>
                          <div>I'm ok what about you?</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-6 col-end-13 p-3 rounded-lg">
                      <div class="flex items-center justify-start flex-row-reverse">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>
                        <div class={`${chatroomStyle.sendChat}`}>
                          <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing.
                            ?
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>
                        <div class={`${chatroomStyle.receiveChat}`}>
                          <div>Lorem ipsum dolor sit amet !</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-6 col-end-13 p-3 rounded-lg">
                      <div class="flex items-center justify-start flex-row-reverse">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>
                        <div class={`${chatroomStyle.sendChat}`}>
                          <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing.
                            ?
                          </div>
                          {/* <div class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-black">
                            Seen
                          </div> */
}
//     </div>
//   </div>
// </div>
// <div class="col-start-1 col-end-8 p-3 rounded-lg">
//   <div class="flex flex-row items-center">
//     <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
//       A
//     </div>
//     <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
//       <div>
//         Lorem ipsum dolor sit amet consectetur adipisicing
//         elit. Perspiciatis, in.
//       </div>
//     </div>
//   </div>
// </div> */}
