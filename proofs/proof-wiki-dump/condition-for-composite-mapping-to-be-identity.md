theorem Composite_Mapping_Identity() {
  assert(
    ∀S,T: Set ∧
    ∀f: S → T ∧
    ∀g: T → S ∧
    (g ∘ f = I_S) ⇒
    (isInjection(f) ∧ isSurjection(g))
  )
}

proof Composite_Mapping_Identity() {
  setVar(S: Set) →
  setVar(T: Set) →
  setVar(f: S → T) →
  setVar(g: T → S) →
  assume(g ∘ f = I_S) →
  
  lemma Identity_Properties() {
    assert(isBijection(I_S)) →
    assert(isInjection(I_S)) →
    assert(isSurjection(I_S))
  } →
  
  lemma Injection_Composite() {
    assert(
      (g ∘ f = I_S) ∧
      isInjection(I_S) ⇒
      isInjection(f)
    )
  } →
  
  lemma Surjection_Composite() {
    assert(
      (g ∘ f = I_S) ∧
      isSurjection(I_S) ⇒
      isSurjection(g)
    )
  } →
  
  apply(Identity_Properties()) →
  apply(Injection_Composite()) →
  apply(Surjection_Composite()) →
  
  assert(isInjection(f)) →
  assert(isSurjection(g)) →
  conclude(isInjection(f) ∧ isSurjection(g))
}