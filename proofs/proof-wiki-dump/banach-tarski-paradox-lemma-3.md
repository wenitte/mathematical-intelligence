theorem Banach_Tarski_Lemma3() {
  define(≈: SetRelation) {
    X ≈ Y ↔ ∃{X₁,...,Xₘ}, {Y₁,...,Yₘ} [
      (X = ∪ᵢXᵢ) ∧ (Y = ∪ᵢYᵢ) ∧ 
      ∀i∈[1,m](Xᵢ ∩ Xⱼ = ∅ for i≠j) ∧
      ∀i∈[1,m](Xᵢ ≅ Yᵢ)
    ]
  }

  assert(
    ∀X,X₁,Y ∈ Sets(ℝ³) →
    (X₁ ⊆ Y ⊆ X ∧ X ≈ X₁) ⇒ X ≈ Y
  )
} ↔

proof Banach_Tarski_Lemma3() {
  setVar(X,X₁,Y: Sets(ℝ³)) →
  assume(X₁ ⊆ Y ⊆ X ∧ X ≈ X₁) →
  
  assert(X = ∪ᵢX^ⁱ, X₁ = ∪ᵢX₁^ⁱ) →
  assert(∀i[X^ⁱ ≅ X₁^ⁱ]) →
  
  define(f^ⁱ: X^ⁱ → X₁^ⁱ) {
    isCongruence(f^ⁱ)
  } →
  
  define(f: X → X₁) {
    f|_{X^ⁱ} = f^ⁱ ∀i
  } →
  
  defineSequence(Xₙ) {
    X₀ = X
    X₁ = f[X]
    X₂ = f[X₁]
    ...
  } →
  
  defineSequence(Yₙ) {
    Y₀ = Y
    Y₁ = f[Y]
    Y₂ = f[Y₁]
    ...
  } →
  
  define(Z) {
    Z = ∪ₙ₌₀^∞(Xₙ ∖ Yₙ)
  } →
  
  assert(f[Z] ∩ (X ∖ Z) = ∅) →
  assert(Z ≈ f[Z]) →
  assert(X = Z ∪ (X ∖ Z)) →
  assert(Y = f[Z] ∪ (X ∖ Z)) →
  
  apply(Lemma2(Z, X∖Z, f[Z], X∖Z)) →
  conclude(X ≈ Y)
}