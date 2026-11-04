import { z } from "zod";
import { BUDGET_RANGES, PROJECT_TYPES } from "./constants";

const projectTypeValues = PROJECT_TYPES.map((p) => p.value) as [
  (typeof PROJECT_TYPES)[number]["value"],
  ...(typeof PROJECT_TYPES)[number]["value"][],
];

const budgetValues = BUDGET_RANGES.map((b) => b.value) as [
  (typeof BUDGET_RANGES)[number]["value"],
  ...(typeof BUDGET_RANGES)[number]["value"][],
];

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ad soyad en az 2 karakter olmalı")
    .max(100, "Ad soyad çok uzun"),
  company: z
    .string()
    .trim()
    .min(2, "Şirket adı en az 2 karakter olmalı")
    .max(120, "Şirket adı çok uzun"),
  email: z.string().trim().email("Geçerli bir e-posta girin").max(200),
  projectType: z.enum(projectTypeValues, {
    message: "Proje tipi seçin",
  }),
  budget: z.enum(budgetValues).optional(),
  message: z
    .string()
    .trim()
    .min(1, "Mesaj gerekli")
    .max(4000, "Mesaj çok uzun"),
  companyUrl: z.string().max(0).optional(), // honeypot (website adı autofill tetikler)
});

export type ContactFormValues = z.infer<typeof contactSchema>;
