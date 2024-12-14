theorem Composite_Constant_Mapping() {
  assert(
    ∀S,T: Set, ∀c ∈ T, ∀f_c: S → T | (∀x ∈ S: f_c(x) = c) ⇒
    (∀g: Dom(g) → S: f_c ∘ g is_constant) ∧
    (∀h: T → Cdm(h): h ∘ f_c is_constant)
  )
} ↔

proof Composite_Constant_Mapping() {
  // Part 1: f_c ∘ g is constant
  setVar(g: Dom(g) → S) →
  assert(∀x ∈ Dom(g): ((f_c ∘ g)(x)) = f_c(g(x))) → // By composition definition
  assert(∀x ∈ Dom(g): f_c(g(x)) = c) →  // By constant mapping definition
  conclude(f_c ∘ g is_constant) →

  // Part 2: h ∘ f_c is constant
  setVar(h: T → Cdm(h)) →
  assert(∀x ∈ S: ((h ∘ f_c)(x)) = h(f_c(x))) → // By composition definition
  assert(∀x ∈ S: h(f_c(x)) = h(c)) → // By constant mapping definition
  assert(h(c) is_constant) →
  conclude(h ∘ f_c is_constant)
}