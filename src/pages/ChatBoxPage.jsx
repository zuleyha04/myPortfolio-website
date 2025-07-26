import { ChatBox } from "../components/ChatBox";
import { StarBackground } from "../components/StarBackground";

export const ChatBoxPage = () => {
  return (
    <div className="relative min-h-screen flex justify-center bg-[#080826] text-foreground px-4 sm:px-6 lg:px-8">
      <StarBackground /> 
      
      <div className="w-full max-w-md mx-auto mt-[15vh] mb-[10vh]">
        <div className="p-4 sm:p-6 bg-muted rounded-xl shadow-md">
          <ChatBox isOpen={true} />
        </div>
      </div>
    </div>
  );
};
