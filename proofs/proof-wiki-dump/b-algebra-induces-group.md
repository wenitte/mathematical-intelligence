theorem B_Algebra_Induces_Group() {
  assert(
    ∀X: B_Algebra(X) ⇒
    let * := λa,b ∈ X: a ∘ (0 ∘ b) →
    (
      IsGroup(X, *) ∧
      ∀x ∈ X: (0 ∘ x) = inverse(x) ∧
      ∀a,b ∈ X: a * inverse(b) = a ∘ b
    )
  )
} ↔

proof B_Algebra_Induces_Group() {
  setVars(x,y,z: X) →
  
  lemma Closure() {
    assert(∀a,b ∈ X: a * b ∈ X) →
    apply(definition(*)) →
    assert(a * b = a ∘ (0 ∘ b)) →
    apply(B_Algebra_Axiom_AC()) →
    assert(a ∘ (0 ∘ b) ∈ X)
  } →

  lemma Associativity() {
    assert((x * y) * z = x * (y * z)) →
    apply(definition(*)) →
    assert((x ∘ (0 ∘ y)) ∘ (0 ∘ z)) →
    apply(B_Algebra_Axiom_A3()) →
    assert(x ∘ ((0 ∘ z) ∘ (0 ∘ (0 ∘ y)))) →
    apply(B_Algebra_Identity()) →
    assert(x ∘ ((0 ∘ z) ∘ y)) →
    apply(B_Algebra_Axiom_A3()) →
    assert(x ∘ (0 ∘ (y ∘ (0 ∘ z)))) →
    apply(definition(*)) →
    assert(x * (y * z))
  } →

  lemma Identity_Element() {
    setVar(e := 0) →
    assert(x * e = x) ∧ assert(e * x = x) →
    apply(definition(*)) →
    assert(x ∘ (0 ∘ 0)) ∧ assert(0 ∘ (0 ∘ x)) →
    apply(B_Algebra_Axiom_A1()) →
    assert(x ∘ 0) ∧ assert(0 ∘ (0 ∘ x)) →
    apply(B_Algebra_Axiom_A2(), B_Algebra_Identity()) →
    assert(x) ∧ assert(x)
  } →

  lemma Inverse_Elements() {
    assert(∀x ∈ X: ∃x⁻¹: x * x⁻¹ = 0 ∧ x⁻¹ * x = 0) →
    setVar(x⁻¹ := 0 ∘ x) →
    apply(definition(*)) →
    assert(x ∘ (0 ∘ (0 ∘ x))) ∧ assert((0 ∘ x) ∘ (0 ∘ x)) →
    apply(B_Algebra_Identity()) →
    assert(x ∘ x) ∧ assert((0 ∘ x) ∘ (0 ∘ x)) →
    apply(B_Algebra_Axiom_A1()) →
    assert(0) ∧ assert(0)
  } →

  lemma Inverse_Property() {
    assert(∀a,b ∈ X: a * b⁻¹ = a ∘ b) →
    apply(definition(*)) →
    assert(a ∘ (0 ∘ (0 ∘ b))) →
    apply(B_Algebra_Identity()) →
    assert(a ∘ b)
  } →

  apply(Closure(), Associativity(), Identity_Element(), Inverse_Elements(), Inverse_Property())
}