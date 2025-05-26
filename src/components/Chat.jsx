import { useState } from "react";
import { useParams } from "react-router-dom";

const Chat = () => {
   
  const { targetUserId } = useParams();
  const [messages, setMessages] = useState([{text:"Hello Abhishek"}])

  return (
    <div className="flex flex-col h-[80vh] max-h-[700px] w-full max-w-2xl mx-auto bg-base-100 rounded-lg shadow p-0">
      {/* Header */}
      <div className="p-4 border-b border-base-200 text-lg font-semibold flex items-center justify-between">
        Chat with {targetUserId}
      </div>
      {/* Chat messages area */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6 bg-base-100">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
              />
            </div>
          </div>
          <div className="chat-header">
           Nikhil
            <time className="text-xs opacity-50 ml-2">12:45</time>
          </div>
<div className="chat-bubble">
  { messages.map((msg,index) => (
    <div
      key={index}
     
    >
      {msg.text}
    </div>
  ))}
</div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
              />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50 ml-2">12:46</time>
          </div>
          <div className="chat-bubble">I hate you!</div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
      </div>
      {/* Input area fixed at bottom */}
      <form className="p-4 border-t border-base-200 bg-base-100">
        <div className="flex justify-center items-center gap-4">
          <input type="text" placeholder="Type here" className="input flex-1" />
          <button type="submit" className="btn btn-soft btn-success">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
