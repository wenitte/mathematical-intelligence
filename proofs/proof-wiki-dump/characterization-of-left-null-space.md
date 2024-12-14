theorem Left_Null_Space_Characterization() {
  assert(
    ∀A ∈ ℳm×n(ℝ) ⇒ 
    N⟵(A) = {x ∈ ℝn : xᵀA = 0ᵀ}
  )
} ↔

proof Left_Null_Space_Characterization() {
  setVar(x: ℝn) →
  setVar(A: ℳm×n(ℝ)) →
  
  lemma Equivalence_Chain() {
    assert(
      x ∈ N⟵(A) ↔
      x ∈ N(Aᵀ) ↔
      AᵀX = 0 ↔
      (AᵀX)ᵀ = 0ᵀ ↔
      xᵀ(Aᵀ)ᵀ = 0ᵀ ↔
      xᵀA = 0ᵀ
    )
  } →

  lemma Step_Justifications() {
    assert(
      step1: "Definition of Left Null Space" ∧
      step2: "Definition of Null Space" ∧
      step3: "Taking transpose of both sides" ∧
      step4: "Transpose of Matrix Product" ∧
      step5: "Transpose of Transpose of Matrix"
    )
  } →
  
  assert(
    x ∈ N⟵(A) ↔ xᵀA = 0ᵀ
  ) →
  
  conclude(
    N⟵(A) = {x ∈ ℝn : xᵀA = 0ᵀ}
  )
}