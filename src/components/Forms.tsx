"use client";

import { useState, type FormEvent } from "react";
import Phone from "./Phone";
import { useForm, type FormKind } from "./useForm";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select" | "checkbox";
  required?: boolean;
  placeholder?: string;
  options?: string[];
  help?: string;
  rows?: number;
};

/**
 * One component draws every form on the site. Pass the kind (which decides
 * where the message goes and how it is checked on the server) and the fields.
 */
export default function Form({
  kind,
  fields,
  button,
  thanks,
  initial = {},
}: {
  kind: FormKind;
  fields: Field[];
  button: string;
  thanks: string;
  initial?: Record<string, string | boolean>;
}) {
  const { submit, status, error } = useForm(kind);
  const [values, setValues] = useState<Record<string, string | boolean>>(initial);

  const set = (name: string, v: string | boolean) => setValues((s) => ({ ...s, [name]: v }));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const out: Record<string, unknown> = { ...values };
    // honeypots travel with the real fields
    out.website = fd.get("website");
    out.company = fd.get("company");
    submit(out);
  };

  if (status === "sent") {
    return (
      <div className="border-2 border-orange bg-white p-7">
        <p className="display text-3xl">Got it. Thank you.</p>
        <p className="mt-2 text-ink-soft">{thanks}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 text-ink" noValidate>
      {/* Honeypots: people never see these; bots fill them. */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
        <label>
          Company <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {fields.map((f) => {
        const id = `${kind}-${f.name}`;
        if (f.type === "checkbox")
          return (
            <label key={f.name} className="flex items-start gap-3 text-[0.98rem]">
              <input
                id={id}
                type="checkbox"
                className="mt-1.5 h-4 w-4 accent-[#e85a22]"
                checked={Boolean(values[f.name])}
                onChange={(e) => set(f.name, e.target.checked)}
              />
              <span>
                {f.label}
                {f.help && <span className="block text-sm text-muted">{f.help}</span>}
              </span>
            </label>
          );
        return (
          <div key={f.name}>
            <label htmlFor={id} className="label">
              {f.label}
              {!f.required && <span className="ml-2 text-xs font-normal normal-case tracking-normal text-muted">optional</span>}
            </label>
            {f.type === "textarea" ? (
              <textarea
                id={id}
                className="field"
                rows={f.rows ?? 5}
                required={f.required}
                placeholder={f.placeholder}
                value={String(values[f.name] ?? "")}
                onChange={(e) => set(f.name, e.target.value)}
              />
            ) : f.type === "select" ? (
              <select id={id} className="field" required={f.required} value={String(values[f.name] ?? "")} onChange={(e) => set(f.name, e.target.value)}>
                <option value="">Choose one</option>
                {f.options?.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={id}
                type={f.type ?? "text"}
                className="field"
                required={f.required}
                placeholder={f.placeholder}
                autoComplete={f.type === "email" ? "email" : f.type === "tel" ? "tel" : f.name === "name" ? "name" : undefined}
                value={String(values[f.name] ?? "")}
                onChange={(e) => set(f.name, e.target.value)}
              />
            )}
            {f.help && <p className="mt-1 text-sm text-muted">{f.help}</p>}
          </div>
        );
      })}
      {status === "error" && (
        <p className="border border-[#9b3b2e] px-4 py-3 text-[0.95rem] text-[#9b3b2e]" role="alert">
          {error} <Phone className="font-bold underline" fallback="Call the church" />.
        </p>
      )}
      <div>
        <button type="submit" className="btn btn-orange" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : button}
        </button>
      </div>
    </form>
  );
}
