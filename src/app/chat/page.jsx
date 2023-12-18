"use client";
import { TextBubble, DocumentBubble, ImageBubble, AudioBubble } from "@/components/chat/bubbles";
import ChatMessage from "@/components/chat/message";
import { useChat } from "ai/react";



export default function Chat() {

    const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat();

    console.log(messages);
    console.log(input);

    return (
        <main>
            <div className="mx-auto max-w-screen-lg px-4 pt-8 pb-28">
                <TextBubble messages={messages} />
                {/* <DocumentBubble />
                <ImageBubble />
                <ImageBubble /> */}
            </div>

            <ChatMessage handleInputChange={handleInputChange} handleSubmit={handleSubmit} input={input} />
        </main>
    )
}
