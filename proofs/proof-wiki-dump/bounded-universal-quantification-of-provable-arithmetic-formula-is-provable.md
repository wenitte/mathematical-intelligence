theorem BoundedUniversalQuantification() {
  let(φ(x): WFF_Arithmetic[1_free_var]) ∧
  let(τ: Term_Arithmetic[no_vars]) ∧
  let(⟦n⟧: UnaryRep(n)) ∧
  assert(
    (∀n ∈ ℕ: ℕ ⊨ φ(x ← ⟦n⟧) → IsTheorem(MA, φ(x ← ⟦n⟧))) ∧
    (ℕ ⊨ ∀x < τ: φ(x))
    → IsTheorem(MA, ∀x < τ: φ(x))
  )
}

proof BoundedUniversalQuantification() {
  setVar(t = val_ℕ(τ)) →
  
  lemma ValueFormula() {
    assert(∀x₀ < t: ℕ ⊨ φ(x ← x₀))
  } →
  
  lemma TheoremForAll() {
    assert(∀x₀ < t: IsTheorem(MA, φ(x ← ⟦x₀⟧)))
  } →
  
  lemma LowerSection() {
    assert(IsTheorem(MA, ∀x: (x = 0 ∨ x = s(0) ∨ ... ∨ x = ⟦t-1⟧ ∨ ¬(x < ⟦t⟧))))
  } →
  
  apply(TheoremForAll()) ∧
  apply(LowerSection()) ∧
  apply(FalseImpliesEvery()) ∧
  apply(ProofByCases()) →
  
  assert(IsTheorem(MA, ∀x < τ: φ(x)))
}