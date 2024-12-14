theorem Composite_Quotient_Mappings() {
  assert(
    ∀S: Set ∧ 
    ∀R₁: Equivalence(S) ∧ 
    ∀R₂: Equivalence(S/R₁) ⇒
    ∃R₃: Equivalence(S) ∧
    ∃φ: Bijection((S/R₁)/R₂ → S/R₃) ∧
    φ([x]₂) = [x]₃
  )
} ↔

proof Composite_Quotient_Mappings() {
  setVar(S: Set) →
  setVar(R₁: Equivalence(S)) →
  setVar(R₂: Equivalence(S/R₁)) →
  
  define(R₃) {
    x R₃ y ↔ [[x]₁]₂ = [[y]₁]₂
  } →
  
  lemma Well_Defined() {
    assert(
      ∀x,y ∈ S: [[x]₁]₂ = [[y]₁]₂ ⇒ [x]₃ = [y]₃
    )
  } →
  
  lemma Injective() {
    assert(
      ∀x,y ∈ S: [x]₃ = [y]₃ ⇒ [[x]₁]₂ = [[y]₁]₂
    )
  } →
  
  lemma Surjective() {
    assert(
      ∀z ∈ S/R₃ ⇒ ∃x ∈ S: z = [x]₃
    )
  } →
  
  define(φ: (S/R₁)/R₂ → S/R₃) {
    φ([[x]₁]₂) = [x]₃
  } →
  
  apply(Well_Defined()) →
  apply(Injective()) →
  apply(Surjective()) →
  
  assert(
    φ is bijective
  )
}