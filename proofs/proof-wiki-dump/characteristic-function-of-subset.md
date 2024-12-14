theorem Characteristic_Function_Subset_Inequality() {
  assert(
    ∀(A,B,S: Set)(A ⊆ B ⊆ S) ⇒
    ∀s ∈ S: χ_A(s) ≤ χ_B(s)
  )
} ↔

proof Characteristic_Function_Subset_Inequality() {
  setVar(A,B,S: Set) →
  assert(A ⊆ B ⊆ S) →
  setVar(s: S) →
  
  lemma CharFuncRange() {
    assert(
      χ_A(s) ∈ {0,1} ∧ χ_B(s) ∈ {0,1}
    )
  } →

  case χ_A(s) = 0 {
    assert(0 ≤ χ_B(s)) →
    assert(χ_A(s) ≤ χ_B(s))
  } →

  case χ_A(s) = 1 {
    assert(χ_A(s) = 1 ↔ s ∈ A) →
    assert(s ∈ A ∧ A ⊆ B ⇒ s ∈ B) →
    assert(s ∈ B ↔ χ_B(s) = 1) →
    assert(χ_A(s) ≤ χ_B(s))
  } →

  applyLogic(
    ProofByCases(χ_A(s) = 0 ∨ χ_A(s) = 1)
  ) →
  
  assert(∀s ∈ S: χ_A(s) ≤ χ_B(s))
}