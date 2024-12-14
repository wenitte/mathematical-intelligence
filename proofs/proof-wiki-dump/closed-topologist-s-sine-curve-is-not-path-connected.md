theorem Topologists_Sine_Curve_Not_Path_Connected() {
  let G := {(x, sin(1/x)) | x > 0}
  let J := {(0,y) | y ∈ [-1,1]}
  assert(
    (G ∪ J is connected) ∧ (G ∪ J is not path-connected)
  )
} ↔

proof Topologists_Sine_Curve_Not_Path_Connected() {
  lemma Connected_Known() {
    assert(G ∪ J is connected)
  } →
  
  setVar(I := [0,1]) →
  setVar(A := (1/π, 0)) →
  
  lemma Path_Cannot_Reach_Zero() {
    ∀f: I → G ∪ J where f continuous ∧ f(0) = A →
    setVar(f₁ := pr₁ ∘ i ∘ f) →
    setVar(f₂ := pr₂ ∘ i ∘ f) →
    
    apply(Heine_Cantor_Theorem, f₂) →
    assert(f₂ is uniformly continuous on I) →
    
    ∃δ > 0: (
      ∀t,t' ∈ I: |t-t'| < δ → |f₂(t) - f₂(t')| < 2
    ) →
    
    setVar(partition := {t₀,...,tₙ} where 0 < t₀ < ... < tₙ = 1 ∧ tᵢ-tᵢ₋₁ < δ) →
    
    lemma Induction_Statement() {
      assert(
        ∀i ∈ {0,...,n}: f₁(tᵢ) > 2/((2i+3)π)
      )
    } →
    
    proof Induction() {
      assert(Base_Case: f₁(t₀) = 1/π > 2/(3π)) →
      
      ∀i ∈ {0,...,n}: (
        f₁(tᵢ) > 2/((2i+3)π) →
        assume(f₁(tᵢ₊₁) ≤ 2/((2i+5)π)) →
        apply(IVP) →
        ∃t,t' ∈ [tᵢ,tᵢ₊₁]: (
          |f₂(t) - f₂(t')| = 2 ∧ |t-t'| < δ
        ) →
        contradiction()
      )
    }
  } →
  
  conclude(
    ∀f continuous: f(1) ≠ (0,y) for any y ∈ [-1,1]
  )
}