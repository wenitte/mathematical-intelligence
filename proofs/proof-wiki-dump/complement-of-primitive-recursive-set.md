theorem Complement_Primitive_Recursive() {
  assert(
    ∀S ⊆ ℕ [isPrimitiveRecursive(S)] →
    isPrimitiveRecursive(ℕ\S)
  )
} ↔

proof Complement_Primitive_Recursive() {
  setVar(S: Set[ℕ]) →
  assert(∀n ∈ ℕ: χ_[ℕ\S](n) = 1 ↔ χ_S(n) = 0) →
  assert(∀n ∈ ℕ: χ_[ℕ\S](n) = χ_{0}(χ_S(n))) →
  lemma Set_Zero_Primitive_Recursive() {
    assert(isPrimitiveRecursive({0}))
  } →
  lemma Composition_Primitive_Recursive() {
    assert(
      isPrimitiveRecursive(f) ∧ isPrimitiveRecursive(g) →
      isPrimitiveRecursive(f ∘ g)
    )
  } →
  apply(Set_Zero_Primitive_Recursive()) →
  apply(Composition_Primitive_Recursive()) →
  assert(isPrimitiveRecursive(χ_[ℕ\S]))
}