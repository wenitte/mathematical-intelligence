theorem Bijection_Has_Inverses() {
  assert(
    ∀f: S → T, (Bijection(f)) ⇒ 
    ∃f⁻¹: T → S, (
      (f⁻¹ ∘ f = Is) ∧ 
      (f ∘ f⁻¹ = It)
    )
  )
}

proof Bijection_Has_Inverses() {
  setVar(f: S → T) →
  assume(Bijection(f)) →
  
  lemma Bijection_Properties() {
    assert(
      Bijection(f) ↔ (Injection(f) ∧ Surjection(f))
    )
  } →
  
  apply(Bijection_Properties()) →
  assert(Injection(f) ∧ Surjection(f)) →
  
  lemma Injection_Left_Inverse() {
    assert(
      Injection(f) ⇒ ∃g₁: T → S, (g₁ ∘ f = Is)
    )
  } →
  
  lemma Surjection_Right_Inverse() {
    assert(
      Surjection(f) ⇒ ∃g₂: T → S, (f ∘ g₂ = It)
    )
  } →
  
  apply(Injection_Left_Inverse()) →
  apply(Surjection_Right_Inverse()) →
  
  lemma Unique_Inverse() {
    assert(
      (g₁ ∘ f = Is ∧ f ∘ g₂ = It) ⇒ g₁ = g₂
    )
  } →
  
  apply(Unique_Inverse()) →
  setVar(f⁻¹ := g₁) →
  assert(f⁻¹ ∘ f = Is) →
  assert(f ∘ f⁻¹ = It)
}