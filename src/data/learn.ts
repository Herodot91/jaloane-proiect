export const CONTRAST = [
  {
    id: "sarcina",
    label: "Am scris formularul de autentificare",
    verdict: "Nu este jalon",
    why: "Este o sarcină. O poate termina o singură persoană, fără o dovadă acceptată de altcineva.",
  },
  {
    id: "data",
    label: "Termenul din calendar este 12 mai",
    verdict: "Nu este jalon",
    why: "O dată nu dovedește că etapa s-a terminat. Poți ajunge la 12 mai și să nu ai nimic semnat.",
  },
  {
    id: "jalon",
    label: "Beneficiarul a semnat cerințele",
    verdict: "Este jalon",
    why: "Există o decizie și o dovadă. Abia de aici proiectarea și capitolul de cerințe pot sta în lucrare.",
  },
] as const;

export const FLOW = [
  {
    id: "sarcini",
    title: "Sarcini",
    text: "Lucrul de zi cu zi: un ecran, o regulă, un test. Nu intră singure în lucrare ca dovadă.",
  },
  {
    id: "jalon",
    title: "Jalon",
    text: "Punctul în care sarcinile devin o dovadă acceptată. Fără el, capitolul nu are ce apăra.",
  },
  {
    id: "capitol",
    title: "Capitol în lucrare",
    text: "Fiecare jalon trecut devine un capitol: problemă, cerințe, proiectare, construire, test, acceptare, lansare, beneficii.",
  },
] as const;

export const BA_WEIGHT = [3, 5, 3, 1, 2, 5, 3, 5];

export const CAPITOL = [
  "1. Problema și scopul",
  "2. Cerințe",
  "3. Proiectarea soluției",
  "4. Implementare",
  "5. Testare",
  "6. Acceptarea utilizatorilor",
  "7. Punere în folosință",
  "8. Concluzii și beneficii",
];
