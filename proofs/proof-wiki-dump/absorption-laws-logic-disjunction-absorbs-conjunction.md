theorem Absorption_Law_Logic() {
  assert(
    ∀p,q ∈ Bool ⇒ (p ∨ (p ∧ q)) ↔ p
  )
}

proof Absorption_Law_Logic() {
  // Truth Table Proof
  lemma Truth_Table() {
    assert(
      ∀p,q ∈ Bool ⇒
      truthTable([
        [F, F, F, F],
        [F, F, F, T],
        [T, T, F, F],
        [T, T, T, T]
      ]) ↔ (p ∨ (p ∧ q)) ↔ p
    )
  }

  // Algebraic Proof
  proof Algebraic() {
    setVar(p,q: Bool) →
    assert(p ∨ (p ∧ q)) →
    assert((p ∧ ⊤) ∨ (p ∧ q)) by(ConjunctionWithTautology) →
    assert(p ∧ (⊤ ∨ q)) by(LeftDistributiveConjunction) →
    assert(p ∧ ⊤) by(DisjunctionWithTautology) →
    assert(p) by(ConjunctionWithTautology)
  }

  apply(Truth_Table()) ∧ apply(Algebraic()) →
  assert((p ∨ (p ∧ q)) ↔ p)
}