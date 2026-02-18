"use client";

import { type HTMLAttributes, type ReactNode } from "react";

type ContactRole = "owner" | "vet" | "neighbor" | "emergency";

interface EmergencyContact {
  name: string;
  role: ContactRole;
  phone: string;
  icon?: ReactNode;
}

interface EmergencyContactBarProps extends HTMLAttributes<HTMLDivElement> {
  contacts: EmergencyContact[];
}

const roleLabels: Record<ContactRole, string> = {
  owner: "Owner",
  vet: "Vet",
  neighbor: "Neighbor",
  emergency: "Emergency",
};

const roleIconColors: Record<ContactRole, string> = {
  owner: "var(--primary-light)",
  vet: "var(--secondary-light)",
  neighbor: "var(--accent-light)",
  emergency: "var(--danger-light)",
};

const roleTextColors: Record<ContactRole, string> = {
  owner: "var(--primary)",
  vet: "var(--secondary)",
  neighbor: "var(--accent)",
  emergency: "var(--danger)",
};

function DefaultIcon({ role }: { role: ContactRole }) {
  const initials: Record<ContactRole, string> = {
    owner: "O",
    vet: "V",
    neighbor: "N",
    emergency: "E",
  };
  return (
    <span
      className="contact-chip-icon-text"
      style={{ color: roleTextColors[role] }}
    >
      {initials[role]}
    </span>
  );
}

function EmergencyContactBar({
  contacts,
  className = "",
  ...props
}: EmergencyContactBarProps) {
  return (
    <div
      className={["contact-bar", className].filter(Boolean).join(" ")}
      {...props}
    >
      <div className="contact-bar-scroll">
        {contacts.map((contact) => (
          <div key={`${contact.name}-${contact.phone}`} className="contact-chip">
            <span
              className="contact-chip-icon"
              style={{ backgroundColor: roleIconColors[contact.role] }}
            >
              {contact.icon ?? <DefaultIcon role={contact.role} />}
            </span>
            <span className="contact-chip-info">
              <span className="contact-chip-name">{contact.name}</span>
              <span className="contact-chip-role">
                {roleLabels[contact.role]}
              </span>
            </span>
            <a
              href={`tel:${contact.phone}`}
              className="contact-chip-call"
              onClick={(e) => e.stopPropagation()}
            >
              Call
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export {
  EmergencyContactBar,
  type EmergencyContactBarProps,
  type EmergencyContact,
  type ContactRole,
};
