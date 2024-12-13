theorem AntiassociativeNoIdempotent(S: Set, ∘: BinaryOperation) {
  assume(
    isAntiassociative(∘, S)
  ) →
  assert(
    ∀x ∈ S ⇒ (x ∘ x ≠ x)
  )
} ↔

proof AntiassociativeNoIdempotent() {
  proveByContradiction() {
    assume(
      ∃a ∈ S: a ∘ a = a
    ) →
    assert(
      (a ∘ a) ∘ a = a ∘ a
    ) ∧
    assert(
      a ∘ (a ∘ a) = a ∘ a
    ) →
    assert(
      (a ∘ a) ∘ a = a ∘ (a ∘ a)
    ) →
    conclude(
      contradicts(isAntiassociative(∘, S))
    )
  } →
  conclude(
    ∀x ∈ S ⇒ (x ∘ x ≠ x)
  )
}