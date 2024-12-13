theorem Bijection_Has_Inverses() {
  assert(
    ∀f: S → T, 
    isBijection(f) ∧
    ∃I_S: S → S [isIdentityMap(I_S)] ∧
    ∃I_T: T → T [isIdentityMap(I_T)] ∧
    ∃f⁻¹: T → S [isInverse(f, f⁻¹)]
    ⇒ 
    (f⁻¹ ∘ f = I_S) ∧ (f ∘ f⁻¹ = I_T)
  )
} ↔

proof Bijection_Has_Inverses() {
  setVar(f: S → T) →
  assume(isBijection(f)) →
  assert(isInjection(f) ∧ isSurjection(f)) →
  
  lemma Left_Inverse_Exists() {
    apply(Injection_iff_Left_Inverse) →
    assert(∃g₁: T → S [g₁ ∘ f = I_S])
  } →

  lemma Right_Inverse_Exists() {
    apply(Surjection_iff_Right_Inverse) →
    assert(∃g₂: T → S [f ∘ g₂ = I_T])
  } →

  apply(Left_and_Right_Inverses_are_Inverse_Mapping) →
  assert(g₁ = g₂ = f⁻¹) →
  
  conclude(
    (f⁻¹ ∘ f = I_S) ∧ (f ∘ f⁻¹ = I_T)
  )
}

axiom Axiom_of_Choice() {
  assert(
    ∀A,B, ∀f: A → B [
      isSurjection(f) ⇒ ∃g: B → A [f ∘ g = I_B]
    ]
  )
}