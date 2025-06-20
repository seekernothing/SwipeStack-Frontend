// Chat.jsx
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import { BASE_URL } from "../utils/Constants";
import axios from "axios";

const Chat = () => {
  const { targetUserId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const user = useSelector((store) => store.user);
  const userId = user?._id;
  const socketRef = useRef(null);
  const chatBottomRef = useRef(null);

  const fetchChatMessages = async () => {
    const chat = await axios.get(BASE_URL + "/chat/" + targetUserId, {
      withCredentials: true,
    });

    // console.log(chat.data.messages);


    const chatMessages = chat?.data?.messages.map((msg) => {
      const{senderId,text} = msg
      return {
        firstName: senderId?.firstName,
        text: text,
        userId: senderId?._id,
        photoUrl: senderId?.photoUrl,
      };
    });

    setMessages(chatMessages);

  };

  

 
  
  useEffect(()=>{
    fetchChatMessages()
  },[])

  useEffect(() => {
    if (!userId) return;
    const socket = createSocketConnection();
    socketRef.current = socket;

    socket.emit("joinChat", {
      firstName: user.firstName,
      userId,
      targetUserId,
    });

    socket.on("messageReceived", (msg) => {
      // console.log("Received message:", msg);
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId, targetUserId, user?.firstName]);

  useEffect(() => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    if (!socketRef.current) return;

    const msg = {
      firstName: user.firstName,
      userId,
      targetUserId,
      text: newMessage,
      photoUrl: user.photoUrl,
    };
   
    
    // console.log("Sending message:", msg);
    socketRef.current.emit("sendMessage", msg);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-[80vh] w-full max-w-2xl mx-auto bg-base-100 rounded-lg shadow">
      {/* <div className="p-4 border-b border-base-200 text-lg font-semibold">
        Chat with {targetUserId}
      </div> */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-3">
        {messages.length === 0 && (
          <div className="text-center text-gray-400">No messages yet</div>
        )}

        {messages.map((msg, index) => {
          const isSelf = String(msg.userId) === String(userId);
          // console.log("Message Render:", msg.text, "isSelf:", isSelf);

          return (
            <div
              key={index}
              className={`flex w-full mb-2 ${
                isSelf ? "justify-end" : "justify-start"
              }`}
            >
              {!isSelf ? (
                <div className="flex items-end gap-2 max-w-[80%]">
                  <img
                    src={
                      msg.photoUrl ||
                      "https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                    }
                    alt={msg.firstName}
                    className="w-10 h-10 rounded-full object-cover border-2 border-primary"
                  />
                  <div>
                    <div className="text-xs font-semibold text-primary mb-1 ml-1">
                      {msg.firstName}
                    </div>
                    <div className="bg-base-300 text-base-content rounded-2xl rounded-bl-sm px-4 py-2 shadow">
                      {msg.text}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-end gap-2 max-w-[80%] flex-row-reverse">
                  <img
                    src={
                      user.photoUrl ||
                      "https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                    }
                    alt={user.firstName}
                    className="w-10 h-10 rounded-full object-cover border-2 border-success"
                  />
                  <div className="text-right">
                    <div className="text-xs font-semibold text-success mb-1 mr-1">
                      {user.firstName}
                    </div>
                    <div className="bg-success text-white rounded-2xl rounded-br-sm px-4 py-2 shadow">
                      {msg.text}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        <div ref={chatBottomRef} />
      </div>
      <form className="p-4 border-t border-base-200" onSubmit={sendMessage}>
        <div className="flex gap-4">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type here"
            className="input flex-1"
          />
          <button type="submit" className="btn btn-success">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
