"use client";
import {
  TextBubble,
  DocumentBubble,
  ImageBubble,
  AudioBubble,
} from "@/components/chat/bubbles";
import ChatMessage from "@/components/chat/message";
import { ChatOptions } from "@/components/chat/options";
import { useChat } from "ai/react";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

export default function Chat() {
  const { input, handleInputChange, handleSubmit, isLoading, messages } =
    useChat();
  const { session } = useSession();
  const [model, setModel] = useState("Smart");

  return (
    <main className="flex">
      <div className="grow mx-auto max-w-screen-lg px-4 pt-8 pb-28">
        {messages.length === 0 && (
          <ChatOptions
            user={session && session.user}
            model={model}
            setModel={setModel}
          />
        )}
        <TextBubble
          messages={messages}
          loading={isLoading}
          user={session && session.user}
        />

        {/* <DocumentBubble />
                <ImageBubble />
                <ImageBubble /> */}
      </div>

      <ChatMessage
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        input={input}
      />
    </main>
  );
}
