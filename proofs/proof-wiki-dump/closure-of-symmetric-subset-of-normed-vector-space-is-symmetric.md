theorem Closure_Symmetric_Set() {
  assert(
    let X be normed_vector_space ∧
    let A ⊆ X ∧
    isSymmetric(A) 
    ⇒ isSymmetric(closure(A))
  )
}

proof Closure_Symmetric_Set() {
  setVar(A⁻: closure(A)) →
  setVar(a ∈ A⁻) →
  
  lemma Point_In_Closure() {
    assert(
      x ∈ closure(S) ↔ 
      ∃{aₙ}ₙ∈ℕ ∈ S: limₙ→∞(aₙ) = x
    )
  } →
  
  apply(Point_In_Closure()) →
  assert(∃{aₙ}ₙ∈ℕ ∈ A: limₙ→∞(aₙ) = a) →
  
  assert(isSymmetric(A) ⇒ ∀n∈ℕ: -aₙ ∈ A) →
  
  lemma Sequence_Multiple_Rule() {
    assert(
      ∀{xₙ}ₙ∈ℕ, c∈ℝ:
      limₙ→∞(xₙ) = x ⇒ limₙ→∞(c·xₙ) = c·x
    )
  } →
  
  apply(Sequence_Multiple_Rule(), c = -1) →
  assert(limₙ→∞(-aₙ) = -a) →
  
  apply(Point_In_Closure()) →
  assert(-a ∈ A⁻) →
  
  conclude(isSymmetric(A⁻))
}