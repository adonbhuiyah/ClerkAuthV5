import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest, NextResponse } from "next/server";
import createUser from "#/server";
import { clerkClient } from "@clerk/nextjs/server";
export async function POST(req: NextRequest) {
  try {
    console.log("[Webhook] Request received");

    const evt = await verifyWebhook(req);
    console.log("[Webhook] Event type:", evt.type);

    if (evt.type === "user.created") {
      const {
        username,
        first_name,
        last_name,
        email_addresses,
        id,
        image_url,
      } = evt.data;

      const user = {
        clerkId: id,
        username,
        email: email_addresses[0].email_address,
        photo: image_url,
        firstname: first_name,
        lastname: last_name,
      };
      console.log("[Webhook] Parsed user data:", user);

      const newUser = await createUser(user);

      if (!newUser) {
        console.error("[Webhook] DB save failed");

        return NextResponse.json({
          success: false,
          message: "User Created Unsuccessful",
          status: 400,
        });
      }

      console.log("[Webhook] Saving userId to Clerk metadata");

      const client =
        typeof clerkClient === "function" ? await clerkClient() : clerkClient;

      await client.users.updateUserMetadata(id, {
        publicMetadata: {
          userId: newUser._id,
        },
      });

      return NextResponse.json({
        success: true,
        data: newUser,
        message: "User has created successful",
        status: 201,
      });
    }
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
