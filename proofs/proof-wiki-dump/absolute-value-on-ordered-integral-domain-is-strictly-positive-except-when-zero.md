theorem AbsValuePositivity() {
  context(
    D: OrderedIntegralDomain,
    |·|: D → D,  // absolute value function
    P: D → bool  // strict positivity property
  )
  assert(
    ∀a ∈ D → (|a| > 0 ↔ a ≠ 0)
  )
} ↔

proof AbsValuePositivity() {
  setVar(a: D) →
  lemma TrichotomyLaw() {
    assert(
      ∀x ∈ D → (P(x) ∨ P(-x) ∨ x = 0)
      ∧ ¬(P(x) ∧ P(-x))
      ∧ ¬(P(x) ∧ x = 0)
      ∧ ¬(P(-x) ∧ x = 0)
    )
  } →

  case P(a) {
    assert(0 < a) →
    assert(|a| = a) →
    assert(P(|a|))
  } ∨

  case P(-a) {
    assert(a < 0) →
    assert(|a| = -a) →
    assert(P(|a|))
  } ∨

  case a = 0 {
    assert(|a| = a) →
    assert(|a| = 0)
  } →

  apply(TrichotomyLaw()) →
  conclude(
    (P(a) ∨ P(-a)) → |a| > 0
    ∧ (a = 0 → |a| = 0)
    → (|a| > 0 ↔ a ≠ 0)
  )
}