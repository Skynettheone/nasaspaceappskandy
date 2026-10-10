"use client";
import Link from "next/link";
import { FormSelect } from "./FormSelect";
import { useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { CheckIcon } from "@phosphor-icons/react/dist/csr/Check";
import { ArrowUpRightIcon as ArrowUpRight } from "@phosphor-icons/react/dist/csr/ArrowUpRight";
import { CheckCircleIcon as CheckCircle2 } from "@phosphor-icons/react/dist/csr/CheckCircle";
import { CircleNotchIcon as LoaderCircle } from "@phosphor-icons/react/dist/csr/CircleNotch";
import {
  fieldsFor,
  initialValues,
  validateForm,
  buildPayload,
  type FormValues,
} from "@/lib/form-schema";
import { useFormSubmit } from "@/lib/useFormSubmit";
import type { FormKind } from "@/lib/submissions";
import {
  availabilityOptions,
  mentorSkills,
  volunteerSkills,
  site,
} from "@/content/site";

const formTitles: Record<FormKind, string> = {
  registrations: "Your next chapter.",
  volunteers: "Join the crew.",
  ambassadors: "Represent your campus.",
  messages: "Start a conversation.",
};
export function ApplicationForm({ kind }: { kind: FormKind }) {
  const [values, setValues] = useState<FormValues>(() => ({
    ...initialValues[kind],
  }));
  const {
    errors,
    clearError,
    submitting,
    receipt,
    formError,
    submit,
    reset,
    trap,
    setTrap,
  } = useFormSubmit({
    kind,
    validate: () => validateForm(kind, values),
    build: () => buildPayload(kind, values),
  });
  function update(name: string, value: string | boolean | string[]) {
    setValues((previous) => ({
      ...previous,
      [name]: value,
      ...(name === "role" ? { skills: [] } : {}),
    }));
    clearError(name);
    if (name === "track") {
      clearError("teamName");
      clearError("leadName");
    }
    if (name === "role") clearError("skills");
  }
  function toggle(name: string, value: string) {
    const current = Array.isArray(values[name])
      ? (values[name] as string[])
      : [];
    update(
      name,
      current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value],
    );
  }
  if (receipt)
    return (
      <div className="application-form form-success" role="status">
        <CheckCircle2 size={42} weight="regular" aria-hidden="true" />
        <h2>
          {kind === "messages" ? "Message received." : "Application received."}
        </h2>
        <p>
          Your submission has been saved for the Kandy organising team to
          review.
        </p>
        {kind === "registrations" && (
          <p>
            For global participation, also complete registration on the{" "}
            <a className="text-link" href={site.globalUrl}>
              NASA Space Apps website{" "}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            .
          </p>
        )}
        <span className="technical-label">REFERENCE / {receipt}</span>
        <button
          className="outline-button"
          onClick={() => {
            reset();
            setValues({ ...initialValues[kind] });
          }}
        >
          <span className="button-label">Send another response</span>
        </button>
      </div>
    );
  return (
    <form
      className="application-form"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        void submit();
      }}
      aria-busy={submitting}
    >
      <h2>{formTitles[kind]}</h2>
      <div className="form-grid">
        {kind === "registrations" && (
          <fieldset className="choice-group" disabled={submitting}>
            <legend id="track-label">How are you joining?</legend>
            <RadioGroup.Root className="choice-options" name="track" aria-labelledby="track-label" value={String(values.track)} onValueChange={(value) => update("track", value)} disabled={submitting}>
              {[
                ["team", "With a team"],
                ["solo", "Solo / find a team"],
              ].map(([value, label]) => (
                <label key={value}>
                  <RadioGroup.Item className="custom-radio" id={value === "team" ? "field-track" : undefined} value={value}>
                    <RadioGroup.Indicator className="custom-radio-dot" />
                  </RadioGroup.Item>
                  {label}
                </label>
              ))}
            </RadioGroup.Root>
          </fieldset>
        )}
        {kind === "volunteers" && (
          <fieldset className="choice-group" disabled={submitting}>
            <legend id="role-label">Your role</legend>
            <RadioGroup.Root className="choice-options" name="role" aria-labelledby="role-label" value={String(values.role)} onValueChange={(value) => update("role", value)} disabled={submitting}>
              {["volunteer", "mentor"].map((role) => (
                <label key={role}>
                  <RadioGroup.Item className="custom-radio" id={role === "volunteer" ? "field-role" : undefined} value={role}>
                    <RadioGroup.Indicator className="custom-radio-dot" />
                  </RadioGroup.Item>
                  {role === "volunteer" ? "Volunteer" : "Mentor"}
                </label>
              ))}
            </RadioGroup.Root>
          </fieldset>
        )}
        {fieldsFor(kind, values).map((field) => {
          const props = {
            id: `field-${field.name}`,
            name: field.name,
            value: String(values[field.name] ?? ""),
            required: field.required,
            disabled: submitting,
            "aria-invalid": !!errors[field.name],
            "aria-describedby": errors[field.name]
              ? `error-${field.name}`
              : undefined,
            onChange: (
              e: React.ChangeEvent<
                HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
              >,
            ) => update(field.name, e.target.value),
          };
          return (
            <div
              className={`field${field.wide ? " wide" : ""}`}
              key={field.name}
            >
              <label htmlFor={props.id}>
                {field.label}
                {field.required
                  ? " *"
                  : field.type !== "select"
                    ? " (optional)"
                    : ""}
              </label>
              {field.type === "select" ? (
                <FormSelect id={props.id} name={field.name} value={props.value}
                  options={field.options ?? []} required={field.required} disabled={submitting}
                  invalid={props["aria-invalid"]} describedBy={props["aria-describedby"]}
                  onValueChange={(value) => update(field.name, value)} />
              ) : field.type === "textarea" ? (
                <textarea {...props} maxLength={field.max} rows={5} />
              ) : (
                <input
                  {...props}
                  type={field.type || "text"}
                  maxLength={field.max}
                  autoComplete={field.autoComplete}
                />
              )}
              {errors[field.name] && (
                <span id={`error-${field.name}`} className="field-error">
                  {errors[field.name]}
                </span>
              )}
            </div>
          );
        })}
        {kind === "volunteers" &&
          (
            [
              [
                "skills",
                "Your skills",
                values.role === "mentor" ? mentorSkills : volunteerSkills,
              ],
              [
                "availability",
                "When could you help? Dates will be confirmed with you.",
                availabilityOptions,
              ],
            ] as const
          ).map(([name, label, options]) => (
            <fieldset
              className="choice-group"
              key={name}
              disabled={submitting}
              aria-describedby={errors[name] ? `error-${name}` : undefined}
            >
              <legend>{label} *</legend>
              <div className="choice-options">
                {options.map((option, index) => (
                  <label key={option}>
                    <Checkbox.Root className="custom-checkbox" disabled={submitting}
                      id={index === 0 ? `field-${name}` : undefined}
                      checked={
                        Array.isArray(values[name]) &&
                        (values[name] as string[]).includes(option)
                      }
                      onCheckedChange={() => toggle(name, option)}
                    ><Checkbox.Indicator><CheckIcon size={13} weight="bold" aria-hidden="true" /></Checkbox.Indicator></Checkbox.Root>
                    {option}
                  </label>
                ))}
              </div>
              {errors[name] && (
                <span id={`error-${name}`} className="field-error">
                  {errors[name]}
                </span>
              )}
            </fieldset>
          ))}
      </div>
      {(kind === "registrations" || kind === "ambassadors") && (
        <>
          <label className="consent">
            <Checkbox.Root className="custom-checkbox"
              id="field-agreed"
              checked={values.agreed === true}
              disabled={submitting}
              onCheckedChange={(checked) => update("agreed", checked === true)}
              aria-invalid={!!errors.agreed}
              aria-describedby={errors.agreed ? "error-agreed" : undefined}
            ><Checkbox.Indicator><CheckIcon size={13} weight="bold" aria-hidden="true" /></Checkbox.Indicator></Checkbox.Root>
            <span>
              {kind === "registrations" ? (
                <>
                  I have read and agree to the{" "}
                  <a
                    href={site.participantTerms}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NASA Space Apps participant terms and code of conduct
                  </a>
                  .
                </>
              ) : (
                <>
                  I am willing to help share Kandy event information with my
                  campus and coordinate with the organising team.
                </>
              )}
            </span>
          </label>
          {errors.agreed && (
            <p id="error-agreed" className="field-error">
              {errors.agreed}
            </p>
          )}
        </>
      )}
      <div className="form-trap" aria-hidden="true">
        <label>
          Leave this field empty
          <input
            name="website"
            value={trap}
            onChange={(e) => setTrap(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>
      <p className="form-privacy">
        Your details go to the Kandy organising team to handle your request.{" "}
        Read our <Link href="/privacy">data notice</Link>.
      </p>
      {formError && (
        <p className="form-feedback" role="alert">
          {formError}
        </p>
      )}
      <button type="submit" className="white-button" disabled={submitting}>
        <span className="button-label">{submitting
          ? "Sending…"
          : kind === "messages"
            ? "Send message"
            : "Send application"}</span>
        {submitting ? (
          <LoaderCircle className="spin" size={17} aria-hidden="true" />
        ) : (
          <ArrowUpRight size={17} aria-hidden="true" />
        )}
      </button>
    </form>
  );
}
