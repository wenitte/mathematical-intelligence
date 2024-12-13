theorem Absolute_Difference_Function_Is_Primitive_Recursive() {
  assert(
    ∀n,m ∈ ℕ² → (
      adf(n,m) = |n - m| ∧
      adf: ℕ² → ℕ ∧
      isPrimitiveRecursive(adf)
    )
  )
} ↔

proof Absolute_Difference_Function_Is_Primitive_Recursive() {
  setVar(n,m: ℕ) →
  
  lemma Absolute_Value_Decomposition() {
    assert(
      |n - m| = (n ∸ m) + (m ∸ n) ∧
      |n - m| = add((n ∸ m), (m ∸ n))
    )
  } →
  
  lemma Projection_Function_Property() {
    assert(
      m ∸ n = pr²₂(n,m) ∸ pr²₁(n,m)
    )
  } →
  
  apply(Absolute_Value_Decomposition()) →
  apply(Projection_Function_Property()) →
  
  assert(
    adf(n,m) = |n - m| ∧
    adf(n,m) = (n ∸ m) + (m ∸ n) ∧
    adf(n,m) = add((n ∸ m), (pr²₂(n,m) ∸ pr²₁(n,m)))
  ) →
  
  lemma Primitive_Recursive_Components() {
    assert(
      isPrimitiveRecursive(∸) ∧
      isPrimitiveRecursive(add) ∧
      isPrimitiveRecursive(pr²ₖ)
    )
  } →
  
  apply(Primitive_Recursive_Components()) →
  assert(
    isPrimitiveRecursive(adf)
  )
}