export type EcifRow = {
  id: string;
  name: string;
  description: string;
  deadline: string;
  amountUsd: number;
  amountLabel: string;
};

export const ECIF_TOTAL_USD = 100_000;

export const ECIF_ROWS: EcifRow[] = [
  {
    id: "kickoff",
    name: "Project Kick-off",
    description: "Contractul este semnat și comanda este aprobată înainte să înceapă lucrul.",
    deadline: "2 mar. 2026",
    amountUsd: 10_000,
    amountLabel: "10.000 USD",
  },
  {
    id: "initial",
    name: "Initial Deliverable",
    description: "Descoperirea este gata, mediul este pregătit, clientul confirmă startul.",
    deadline: "30 mar. 2026",
    amountUsd: 25_000,
    amountLabel: "25.000 USD",
  },
  {
    id: "mid",
    name: "Midpoint Milestone",
    description: "Planuri, configurări și un punct de migrare, în trimestrul fiscal.",
    deadline: "11 mai 2026",
    amountUsd: 40_000,
    amountLabel: "40.000 USD",
  },
  {
    id: "final",
    name: "Final Deliverable",
    description: "Activitatea finanțată este gata și clientul semnează.",
    deadline: "22 iun. 2026",
    amountUsd: 25_000,
    amountLabel: "25.000 USD",
  },
  {
    id: "poe",
    name: "Proof of Execution",
    description: "Dosarul de dovezi. Fără el, tranșele de mai sus nu se plătesc.",
    deadline: "La fiecare termen",
    amountUsd: 0,
    amountLabel: "0 USD",
  },
];

export const ECIF_ANCHOR: (string | null)[] = [
  "kickoff",
  "initial",
  null,
  "mid",
  null,
  "final",
  null,
  null,
];

export const ECIF_RELEASE_AT: Record<string, number> = {
  kickoff: 0,
  initial: 1,
  mid: 3,
  final: 5,
};
