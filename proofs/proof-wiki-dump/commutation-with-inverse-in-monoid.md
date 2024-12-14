theorem CommutationWithInverse() {
  assert(
    ∀(S: Monoid) ∧ ∀(x,y ∈ S) ∧ isInvertible(y) ⇒
    (x ∘ y = y ∘ x ↔ x ∘ y⁻¹ = y⁻¹ ∘ x)
  )
} ↔

proof CommutationWithInverse() {
  // Necessary Condition
  setVar(x,y ∈ S, isInvertible(y)) →
  assume(x ∘ y = y ∘ x) →
  assert(y⁻¹ ∘ x = 
    y⁻¹ ∘ x ∘ e                   // Identity axiom
    = y⁻¹ ∘ (x ∘ e)               // Associativity
    = y⁻¹ ∘ (x ∘ (y ∘ y⁻¹))       // Invertibility
    = y⁻¹ ∘ ((x ∘ y) ∘ y⁻¹)       // Associativity
    = y⁻¹ ∘ ((y ∘ x) ∘ y⁻¹)       // Commutativity assumption
    = (y⁻¹ ∘ (y ∘ x)) ∘ y⁻¹       // Associativity
    = ((y⁻¹ ∘ y) ∘ x) ∘ y⁻¹       // Associativity
    = (e ∘ x) ∘ y⁻¹               // Invertibility
    = x ∘ y⁻¹                     // Identity axiom
  ) →

  // Sufficient Condition
  assume(x ∘ y⁻¹ = y⁻¹ ∘ x) →
  lemma InverseOfInverse() {
    assert((y⁻¹)⁻¹ = y)
  } →
  apply(InverseOfInverse()) →
  assert(x commutes with (y⁻¹)⁻¹) →
  assert(x ∘ y = y ∘ x)
}