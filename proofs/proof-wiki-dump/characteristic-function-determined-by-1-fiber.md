theorem Characteristic_Function_1Fiber() {
  assert(
    ∀A ⊆ S ∧ 
    ∀f: S → {0,1} ∧
    let χ_A be characteristic function on A ⇒
    (f = χ_A ↔ (∀s ∈ S: f(s) = 1 ↔ s ∈ A) ↔ f⁻¹(1) = A)
  )
}

proof Characteristic_Function_1Fiber() {
  section Forward_Implication() {
    assume(f = χ_A) →
    apply(Definition_Characteristic_Function) →
    assert(∀s ∈ S: f(s) = χ_A(s)) →
    assert(∀s ∈ S: f(s) = 1 ↔ s ∈ A)
  } →

  section Backward_Implication() {
    assume(∀s ∈ S: f(s) = 1 ↔ s ∈ A) →
    setVar(s: S) →
    
    case s_in_A() {
      assume(s ∈ A) →
      assert(f(s) = 1) →
      assert(χ_A(s) = 1)
    } →
    
    case s_not_in_A() {
      assume(s ∉ A) →
      assert(f(s) ≠ 1) →
      assert(f(s) ∈ {0,1}) →
      assert(f(s) = 0) →
      assert(χ_A(s) = 0)
    } →
    
    assert(∀s ∈ S: f(s) = χ_A(s)) →
    apply(Equality_of_Mappings) →
    assert(f = χ_A)
  } →

  assert((f = χ_A) ↔ (∀s ∈ S: f(s) = 1 ↔ s ∈ A)) →
  assert((∀s ∈ S: f(s) = 1 ↔ s ∈ A) ↔ f⁻¹(1) = A)
}