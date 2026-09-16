import { eveChannel } from "eve/channels/eve";
import { localDev, none, vercelOidc } from "eve/channels/auth";

export default eveChannel({
  auth: [
    // Lets the eve TUI and your Vercel deployments reach the deployed agent.
    vercelOidc(),
    // Open on localhost for `eve dev`; ignored in production.
    localDev(),
    // Public demo: admits anonymous browser traffic. Replace with a real
    // auth check before this handles anything private. See the course README.
    none(),
  ],
});
