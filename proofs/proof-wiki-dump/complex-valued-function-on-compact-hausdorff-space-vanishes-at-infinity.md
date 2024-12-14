theorem Complex_Function_Vanishes_At_Infinity() {
  assert(
    ∀X: CompactHausdorffSpace ∧ 
    ∀f: X → ℂ ⇒
    VanishesAtInfinity(f)
  )
} ↔

proof Complex_Function_Vanishes_At_Infinity() {
  setVar(X: CompactHausdorffSpace) →
  setVar(f: X → ℂ) →
  setVar(ε: ℝ+) →
  
  lemma CompactSet() {
    assert(
      X.isCompact ∧
      ∀x ∈ X ⇒ ∃O: OpenSet(X) ∧ x ∈ O ∧
      |f(x)| < ε
    )
  } →

  assert(
    ∀x ∈ X\X ⇒ |f(x)| < ε
  ) →

  apply(CompactSet()) →
  
  conclude(
    VanishesAtInfinity(f)
  )
}