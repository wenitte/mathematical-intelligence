theorem Associative_Anticommutative() {
  assert(
    ∀S: Set, ∀(∘): BinaryOperation(S) →
    (Associative(∘) ∧ Anticommutative(∘)) →
    (∀x,y,z ∈ S: x ∘ y ∘ z = x ∘ z)
  )
} ↔

proof Associative_Anticommutative() {
  setVars(S: Set, (∘): BinaryOperation(S)) →
  assume(Associative(∘) ∧ Anticommutative(∘)) →
  
  lemma AssociativeIdempotentAnticommutative() {
    assert(∀x,z ∈ S: x ∘ z ∘ x = x) ∧
    assert(Idempotent(∘))
  } →

  setVars(x,y,z ∈ S) →
  
  let expr1 := x ∘ y ∘ z ∘ x ∘ z →
  assert(expr1 = x ∘ (y ∘ z) ∘ x ∘ z) by(Associative(∘)) →
  assert(x ∘ (y ∘ z) ∘ x ∘ z = x ∘ z) by(AssociativeIdempotentAnticommutative()) →

  assert(expr1 = x ∘ y ∘ (z ∘ x ∘ z)) by(Associative(∘)) →
  assert(x ∘ y ∘ (z ∘ x ∘ z) = x ∘ y ∘ z) by(AssociativeIdempotentAnticommutative()) →
  
  conclude(x ∘ y ∘ z = x ∘ z) by(TransitiveEquality)
}