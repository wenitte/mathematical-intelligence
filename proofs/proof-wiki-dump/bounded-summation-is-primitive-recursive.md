theorem BoundedSummation_PrimitiveRecursive() {
  assert(
    ∀f: ℕ^(k+1) → ℕ,
    isPrimitiveRecursive(f) →
    ∀g: ℕ^(k+1) → ℕ,
    g(n₁,n₂,...,nₖ,z) = match z with {
      0 → 0;
      z > 0 → ∑(y=1 to z) f(n₁,n₂,...,nₖ,y)
    } →
    isPrimitiveRecursive(g)
  )
} ↔

proof BoundedSummation_PrimitiveRecursive() {
  setVar(f: ℕ^(k+1) → ℕ) →
  assert(isPrimitiveRecursive(f)) →
  
  lemma RecursiveDefinition() {
    assert(
      g(n₁,n₂,...,nₖ,0) = 0 ∧
      ∀z ∈ ℕ: g(n₁,n₂,...,nₖ,z+1) = 
        g(n₁,n₂,...,nₖ,z) + f(n₁,n₂,...,nₖ,z+1)
    )
  } →

  assert(isPrimitiveRecursive(add)) →
  assert(isPrimitiveRecursive(f)) →
  assert(isPrimitiveRecursive(constant(0))) →
  
  lemma PrimitiveRecursionComponents() {
    assert(
      g = primitiveRecursion(
        base: constant(0),
        step: add,
        recursive: f
      )
    )
  } →
  
  apply(PrimitiveRecursionComponents()) →
  assert(isPrimitiveRecursive(g))
}