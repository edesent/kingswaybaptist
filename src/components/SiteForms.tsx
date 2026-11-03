"use client";

import { useSearchParams } from "next/navigation";
import Form from "./Forms";

/** The old Contact page asked people to start the subject with "Prayer Request"; this is a form of its own. */
export function PrayerForm() {
  return (
    <Form
      kind="prayer"
      button="Send my prayer request"
      thanks="Our prayer ministry will be lifting you up. If you asked for a call, someone will reach out soon."
      fields={[
        { name: "request", label: "How can we pray for you?", type: "textarea", required: true, rows: 5 },
        { name: "name", label: "Your name" },
        { name: "contact", label: "Phone or email", help: "Only if you’d like someone to follow up." },
        { name: "confidential", label: "Keep this between me and the pastor", type: "checkbox" },
        { name: "wantsCall", label: "I’d like someone to call me", type: "checkbox" },
      ]}
    />
  );
}

const topics = ["Planning a visit", "A question about the church", "Nursery and children", "The free gift of salvation", "Something else"];

export function ContactForm() {
  const params = useSearchParams();
  const preset = params.get("topic");
  return (
    <Form
      key={preset ?? ""}
      kind="contact"
      initial={preset ? { topic: preset } : {}}
      button="Send message"
      thanks="Thank you for reaching out. We’ll get back to you as soon as we can."
      fields={[
        { name: "name", label: "Your name", required: true },
        { name: "email", label: "Email", type: "email" },
        { name: "phone", label: "Phone", type: "tel" },
        {
          name: "topic",
          label: "What’s this about?",
          type: "select",
          options: preset && !topics.includes(preset) ? [preset, ...topics] : topics,
        },
        { name: "message", label: "Message", type: "textarea", required: true },
      ]}
    />
  );
}
