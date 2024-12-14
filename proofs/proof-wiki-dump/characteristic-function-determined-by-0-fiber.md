theorem Characteristic_Function_0Fiber() {
  assert(
    ∀A ⊆ S ∧ ∀f: S → {0,1} ∧ χ_A = CharacteristicFunction(A) ⇒
    (f = χ_A ↔ (∀s ∈ S: f(s) = 0 ↔ s ∉ A)) ∧
    (f = χ_A ↔ f⁻¹(0) = S∖A)
  )
}

proof Characteristic_Function_0Fiber() {
  // Part 1: f = χ_A ⇒ (∀s ∈ S: f(s) = 0 ↔ s ∉ A)
  lemma Forward_Implication() {
    setVar(s: S) →
    assume(f = χ_A) →
    apply(CharacteristicFunction_Definition) →
    assert(∀s ∈ S: f(s) = 0 ↔ s ∉ A)
  }

  // Part 2: (∀s ∈ S: f(s) = 0 ↔ s ∉ A) ⇒ f = χ_A
  lemma Backward_Implication() {
    setVar(s: S) →
    assume(∀s ∈ S: f(s) = 0 ↔ s ∉ A) →
    
    case s ∉ A {
      assert(f(s) = 0) →
      assert(χ_A(s) = 0)
    } →
    
    case s ∈ A {
      assert(f(s) ≠ 0) →
      assert(f(s) ∈ {0,1}) →
      assert(f(s) = 1) →
      assert(χ_A(s) = 1)
    } →
    
    assert(∀s ∈ S: f(s) = χ_A(s)) →
    apply(Equality_of_Mappings) →
    assert(f = χ_A)
  }

  // Combine both directions
  apply(Forward_Implication()) ∧
  apply(Backward_Implication()) →
  assert(f = χ_A ↔ (∀s ∈ S: f(s) = 0 ↔ s ∉ A)) →
  assert(f⁻¹(0) = S∖A ↔ (∀s ∈ S: f(s) = 0 ↔ s ∉ A)) →
  assert(f = χ_A ↔ f⁻¹(0) = S∖A)
}