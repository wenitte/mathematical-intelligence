theorem InverseCommutation() {
  assert(
    ∀M: Monoid(S, ∘, eₛ) ∧
    ∀x,y ∈ S ∧
    isInvertible(x) ∧ isInvertible(y) ⇒
    (x ∘ y = y ∘ x ↔ x⁻¹ ∘ y⁻¹ = y⁻¹ ∘ x⁻¹)
  )
} ↔

proof InverseCommutation() {
  // Necessary condition (⇒)
  assume(x ∘ y = y ∘ x) →
  assert(
    x⁻¹ ∘ y⁻¹ = 
    (y ∘ x)⁻¹   // by Inverse of Product
  ) →
  assert(
    (y ∘ x)⁻¹ = 
    (x ∘ y)⁻¹   // by assumption x ∘ y = y ∘ x
  ) →
  assert(
    (x ∘ y)⁻¹ = 
    y⁻¹ ∘ x⁻¹   // by Inverse of Product
  ) →
  conclude(x⁻¹ ∘ y⁻¹ = y⁻¹ ∘ x⁻¹) →

  // Sufficient condition (⇐)
  assume(x⁻¹ ∘ y⁻¹ = y⁻¹ ∘ x⁻¹) →
  lemma InverseOfInverse() {
    assert(
      ∀a ∈ S ∧ isInvertible(a) ⇒
      (a⁻¹)⁻¹ = a
    )
  } →
  apply(InverseOfInverse()) →
  assert(
    (x⁻¹)⁻¹ = x ∧ (y⁻¹)⁻¹ = y
  ) →
  conclude(x ∘ y = y ∘ x)
}