theorem InvertibilityInPowerStructure() {
  let(S: Magma, ∘: Operation, ∘ₚₚ: PowerStructure(S,∘)) →
  let(e ∈ S: IdentityElement(S,∘)) →
  assert(
    ∀X ⊆ S: (
      IsInvertible(X,∘ₚₚ) ↔
      ∃x ∈ S: (IsInvertible(x,∘) ∧ X = {x})
    ) ∧
    (IsAssociative(∘) ∨ IsCancellable(∘))
  )
}

proof InvertibilityInPowerStructure() {
  lemma IdentityElementPowerStructure() {
    assert(J = {e}: IdentityElement(𝒫(S),∘ₚₚ))
  } →

  // Sufficient condition
  let(X: IsInvertible(X,∘ₚₚ)) →
  assert(∃Y ∈ 𝒫(S): X ∘ₚₚ Y = J) →
  assert(∃Y ∈ 𝒫(S): {x ∘ y | x ∈ X, y ∈ Y} = {e}) →
  assert(∃x ∈ X: ∃y ∈ S: x ∘ y = e) →
  
  assert(∃Y ∈ 𝒫(S): Y ∘ₚₚ X = J) →
  assert(∃Y ∈ 𝒫(S): {y ∘ x | x ∈ X, y ∈ Y} = {e}) →
  assert(∃x ∈ X: ∃y ∈ S: y ∘ x = e) →

  // Case: Associative
  case(IsAssociative(∘)) {
    assume(∃z ∈ X: z ≠ x) →
    assert(∀y ∈ Y: z ∘ y = e = y ∘ z) →
    assert(z ∘ e = z) →
    assert(z ∘ (y ∘ x) = z) →
    assert((z ∘ y) ∘ x = z) →
    assert(e ∘ x = z) →
    assert(x = z) →
    contradiction()
  } →

  // Case: Cancellable
  case(IsCancellable(∘)) {
    assume(∃z ∈ X: z ≠ x) →
    assert(∀y ∈ Y: z ∘ y = e = y ∘ z) →
    assert(x ∘ y = z ∘ y) →
    assert(x = z) →
    contradiction()
  } →

  // Necessary condition
  let(x ∈ S: IsInvertible(x,∘)) →
  let(y ∈ S: x ∘ y = e = y ∘ x) →
  let(X = {x}) →
  assert(X ∘ₚₚ {y} = {x ∘ y} = {e} = J) →
  assert({y} ∘ₚₚ X = {y ∘ x} = {e} = J) →
  conclude(IsInvertible(X,∘ₚₚ))
}