theorem Antitransitive_Implies_Antireflexive() {
  assert(
    ∀S: Set ∧ ∀R ⊆ S×S ∧ isAntitransitive(R) →
    isAntireflexive(R)
  )
} ↔

proof Antitransitive_Implies_Antireflexive() {
  setVar(S: Set) →
  setVar(R: S×S) →
  assume(¬isAntireflexive(R)) →
  assert(∃x ∈ S: (x,x) ∈ R) →
  
  lemma TransitivityViolation() {
    assert((x,x) ∈ R ∧ (x,x) ∈ R) →
    apply(Idempotence) →
    assert((x,x) ∈ R)
  } →
  
  apply(TransitivityViolation()) →
  assert(∃x ∈ S: [(x,x) ∈ R ∧ (x,x) ∈ R ∧ (x,x) ∈ R]) →
  assert(¬isAntitransitive(R)) →
  contradiction() →
  conclude(isAntireflexive(R))
}