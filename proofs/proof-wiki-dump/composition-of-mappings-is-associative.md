theorem Composition_Associative() {
  assert(
    ∀f₁,f₂,f₃: Mapping ∧ 
    Dom(f₂) = Cdm(f₁) ∧ 
    Dom(f₃) = Cdm(f₂) ⇒
    (f₃ ∘ f₂) ∘ f₁ = f₃ ∘ (f₂ ∘ f₁)
  )
} ↔

proof Composition_Associative() {
  setVar(f₁,f₂,f₃: Mapping) →
  assert(Dom(f₂) = Cdm(f₁)) →
  assert(Dom(f₃) = Cdm(f₂)) →

  lemma Domain_Equality() {
    assert(
      Dom((f₃ ∘ f₂) ∘ f₁) = Dom(f₁) ∧
      Dom(f₃ ∘ (f₂ ∘ f₁)) = Dom(f₁)
    )
  } →

  lemma Codomain_Equality() {
    assert(
      Cdm((f₃ ∘ f₂) ∘ f₁) = Cdm(f₃) ∧
      Cdm(f₃ ∘ (f₂ ∘ f₁)) = Cdm(f₃)
    )
  } →

  apply(Domain_Equality()) →
  apply(Codomain_Equality()) →

  lemma Relations_Associative() {
    assert(
      ∀x ∈ Dom(f₁) ⇒
      map((f₃ ∘ f₂) ∘ f₁, x) = map(f₃ ∘ (f₂ ∘ f₁), x)
    )
  } →

  apply(Relations_Associative()) →
  assert((f₃ ∘ f₂) ∘ f₁ = f₃ ∘ (f₂ ∘ f₁))
}