import React from "react";

export default function Comments() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-lg font-semibold">Comments</h1>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://i.pinimg.com/736x/f2/e1/a5/f2e1a5eaada53615f13234193a3f91c2.jpg" />
          </div>
        </div>
        <div className="chat-bubble">
          This feature is still under development
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://i.pinimg.com/736x/f2/e1/a5/f2e1a5eaada53615f13234193a3f91c2.jpg" />
          </div>
        </div>
        <div className="chat-bubble">
          This feature is still under development
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://i.pinimg.com/736x/f2/e1/a5/f2e1a5eaada53615f13234193a3f91c2.jpg" />
          </div>
        </div>
        <div className="chat-bubble">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          delectus exercitationem dolorem repudiandae quisquam ipsum voluptatem
          nemo, laborum laboriosam repellat reiciendis odit cum voluptatibus
          eum, sunt minus obcaecati, expedita molestias.
        </div>
      </div>
    </div>
  );
}
