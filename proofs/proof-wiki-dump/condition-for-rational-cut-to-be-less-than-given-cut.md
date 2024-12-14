theorem RationalCutLessThanGivenCut() {
  assert(
    ∀α[Cut] ∧ ∀p[ℚ] ∧ let(p*: RationalCut(p)) ⇒
    (p ∈ α ↔ p* < α)
  )
} ↔

proof RationalCutLessThanGivenCut() {
  // Forward direction
  letVar(p: ℚ, α: Cut) →
  assume(p ∈ α) →
  lemma RationalCutDefinition() {
    assert(p ∉ p*)
  } →
  apply(RationalCutDefinition()) →
  conclude(p* < α) →

  // Reverse direction
  assume(p* < α) →
  lemma ExistentialWitness() {
    assert(∃q[ℚ]: q ∈ α ∧ q ∉ p*)
  } →
  apply(ExistentialWitness()) →
  letVar(q: ℚ) →
  assert(q ∈ α ∧ q ∉ p*) →
  assert(q ≥ p) →
  lemma CutProperty() {
    assert(∀x,y[ℚ]: (x ∈ α ∧ y ≤ x) ⇒ y ∈ α)
  } →
  apply(CutProperty(), [q, p]) →
  conclude(p ∈ α) →
  QED()
}