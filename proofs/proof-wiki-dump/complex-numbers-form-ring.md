theorem Complex_Numbers_Ring() {
  assert(
    struct(ℂ, +, ×) is_ring
  )
} ↔

proof Complex_Numbers_Ring() {
  lemma Complex_Addition_Group() {
    assert(struct(ℂ, +) is_abelian_group)
  } →
  apply(Complex_Addition_Group()) →

  lemma Complex_Multiplication_Closed() {
    assert(∀x,y ∈ ℂ ⇒ (x × y) ∈ ℂ)
  } →

  lemma Complex_Multiplication_Associative() {
    assert(∀x,y,z ∈ ℂ ⇒ x × (y × z) = (x × y) × z)
  } →
  
  apply(Complex_Multiplication_Closed()) ∧
  apply(Complex_Multiplication_Associative()) →
  assert(struct(ℂ, ×) is_semigroup) →

  lemma Complex_Distribution() {
    setVar(x,y,z: ℂ) →
    assert(
      x × (y + z) = x × y + x × z ∧
      (y + z) × x = y × x + z × x
    )
  } →

  apply(Complex_Addition_Group()) ∧
  apply(Complex_Multiplication_Closed()) ∧
  apply(Complex_Multiplication_Associative()) ∧
  apply(Complex_Distribution()) →
  
  conclude(
    struct(ℂ, +, ×) satisfies_ring_axioms →
    struct(ℂ, +, ×) is_ring
  )
}