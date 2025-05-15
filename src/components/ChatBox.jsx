import { ChatBoxInput, Messages } from "../components";
import styles from "../style";
import { chatroomStyle } from "../style";
import { messages } from "../constants";

const ChatBox = ({ sendMessage }) => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.boxWidth} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow p-5`}
    >
      <div class="flex h-screen antialiased text-gray-800 ">
        <div class="flex flex-row h-full w-full overflow-hidden">
          <div class="flex flex-col flex-auto h-full p-6">
            <div class="flex flex-col flex-auto flex-shrink-0 rounded-2xl h-full p-4">
              <div class="flex flex-col h-full overflow-hidden mb-4">
                <div class="flex flex-col h-full">
                  <Messages messages={messages} />
                  <div class="grid grid-cols-12 gap-y-2"></div>
                </div>
              </div>
              <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
              <ChatBoxInput onSendMessage={sendMessage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatBox;
