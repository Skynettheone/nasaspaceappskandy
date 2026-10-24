// Source: NASA Space Apps Sponsorship Proposal (Kandy 2026), page 6.
// The registration form and Firestore rules validate against these city names.
export const bootcampCities = ["Colombo", "Kandy"] as const;

export const bootcampCapacity: Record<(typeof bootcampCities)[number], string> = {
  Colombo: "500 students",
  Kandy: "300 students",
};

export const bootcampWebinar = {
  title: "Island-wide webinar",
  description: "Online and open to students in every district.",
};

export const bootcampWindow = "First week of November 2026";
