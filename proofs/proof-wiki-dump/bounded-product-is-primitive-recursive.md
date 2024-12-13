theorem BoundedProduct_Primitive_Recursive() {
  assert(
    ∀f: ℕ^(k+1) → ℕ, isPrimitiveRecursive(f) ⇒
    ∀g: ℕ^(k+1) → ℕ, (
      (∀n₁,...,nₖ,z ∈ ℕ) 
      g(n₁,...,nₖ,z) = match z with {
        0 → 1
        z > 0 → ∏(y=1 to z)[f(n₁,...,nₖ,y)]
      }
    ) ⇒ isPrimitiveRecursive(g)
  )
}

proof BoundedProduct_Primitive_Recursive() {
  setVar(f: ℕ^(k+1) → ℕ) →
  assume(isPrimitiveRecursive(f)) →
  setVar(g: ℕ^(k+1) → ℕ) →
  
  assert(
    g satisfies {
      g(n₁,...,nₖ,0) = 1 ∧
      g(n₁,...,nₖ,z+1) = g(n₁,...,nₖ,z) × f(n₁,...,nₖ,z+1)
    }
  ) →
  
  lemma PrimitiveRecursionComponents() {
    assert(
      isPrimitiveRecursive(Add) ∧
      isPrimitiveRecursive(f) ∧
      isPrimitiveRecursive(constant(1))
    )
  } →
  
  apply(PrimitiveRecursion_Rule) →
  apply(PrimitiveRecursionComponents()) →
  
  conclude(
    g is defined by primitive recursion from primitive recursive components ⇒
    isPrimitiveRecursive(g)
  )
}