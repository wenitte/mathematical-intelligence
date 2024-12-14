theorem Relation_Composition_Associative() {
  assert(
    ∀R₁,R₂,R₃ [Relations] ⇒
    (R₃ ∘ R₂) ∘ R₁ = R₃ ∘ (R₂ ∘ R₁)
  )
} ↔

proof Relation_Composition_Associative() {
  assume(
    Dom(R₂) = Cdm(R₁) ∧
    Dom(R₃) = Cdm(R₂)
  ) →

  lemma Domain_Equality() {
    assert(
      Dom((R₃ ∘ R₂) ∘ R₁) = Dom(R₁) ∧
      Dom(R₃ ∘ (R₂ ∘ R₁)) = Dom(R₁)
    )
  } →

  lemma Codomain_Equality() {
    assert(
      Cdm((R₃ ∘ R₂) ∘ R₁) = Cdm(R₃) ∧
      Cdm(R₃ ∘ (R₂ ∘ R₁)) = Cdm(R₃)
    )
  } →

  setVar(x: Dom(R₁)) →
  
  assert(
    map((R₃ ∘ R₂) ∘ R₁, x) = 
    map(R₃ ∘ R₂, map(R₁, x))
  ) →
  
  assert(
    map(R₃ ∘ R₂, map(R₁, x)) = 
    map(R₃, map(R₂, map(R₁, x)))
  ) →
  
  assert(
    map(R₃, map(R₂, map(R₁, x))) = 
    map(R₃, map(R₂ ∘ R₁, x))
  ) →
  
  assert(
    map(R₃, map(R₂ ∘ R₁, x)) = 
    map(R₃ ∘ (R₂ ∘ R₁), x)
  ) →
  
  conclude(
    (R₃ ∘ R₂) ∘ R₁ = R₃ ∘ (R₂ ∘ R₁)
  )
}