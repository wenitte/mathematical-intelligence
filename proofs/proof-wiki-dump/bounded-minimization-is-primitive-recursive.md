theorem BoundedMinimization_PrimitiveRecursive() {
  assert(
    ∀f: ℕ^(k+1) → ℕ, isPrimitiveRecursive(f) →
    ∃g: ℕ^(k+1) → ℕ where
    g(n₁,n₂,...,nₖ,z) = μy≤z[f(n₁,n₂,...,nₖ,y) = 0] →
    isPrimitiveRecursive(g)
  )
}

proof BoundedMinimization_PrimitiveRecursive() {
  # Base case definition
  define(g₀: ℕ^(k+1) → ℕ) {
    g₀(n₁,n₂,...,nₖ,0) = 
      if f(n₁,n₂,...,nₖ,0) = 0 then 0
      else 1
  } →

  # Recursive case definition
  define(g: ℕ^(k+1) → ℕ) {
    g(n₁,n₂,...,nₖ,z+1) = 
      if g(n₁,n₂,...,nₖ,z) ≤ z then g(n₁,n₂,...,nₖ,z)
      else if f(n₁,n₂,...,nₖ,z+1) = 0 then z+1
      else z+2
  } →

  # Prove base case primitive recursive
  lemma BaseCase_PrimitiveRecursive() {
    assert(isPrimitiveRecursive(g₀)) ↔
    apply(DefinitionByCases_PrimitiveRecursive) ∧
    assert(isPrimitiveRecursiveRelation(f(n₁,n₂,...,nₖ,0) = 0)) ∧
    assert(isPrimitiveRecursive(0)) ∧
    assert(isPrimitiveRecursive(1))
  } →

  # Prove recursive case primitive recursive
  lemma RecursiveCase_PrimitiveRecursive() {
    assert(isPrimitiveRecursive(g)) ↔
    apply(DefinitionByCases_PrimitiveRecursive) ∧
    assert(isPrimitiveRecursiveRelation(g(n₁,n₂,...,nₖ,z) ≤ z)) ∧
    assert(isPrimitiveRecursive(z+1)) ∧
    assert(isPrimitiveRecursive(z+2))
  } →

  # Main conclusion
  apply(BaseCase_PrimitiveRecursive) ∧
  apply(RecursiveCase_PrimitiveRecursive) →
  assert(isPrimitiveRecursive(g))
} 

theorem BoundedMinimization_PrimitiveRecursive_Relation() {
  assert(
    ∀R: ℕ^(k+1) → Bool, isPrimitiveRecursive(R) →
    ∃g: ℕ^(k+1) → ℕ where
    g(n₁,n₂,...,nₖ,z) = μy≤z[R(n₁,n₂,...,nₖ,y)] →
    isPrimitiveRecursive(g)
  )
}

proof BoundedMinimization_PrimitiveRecursive_Relation() {
  # Convert relation to function using characteristic function
  define(χᵣ: ℕ^(k+1) → ℕ) {
    χᵣ(n₁,n₂,...,nₖ,y) = characteristic_function(R)
  } →
  
  define(f: ℕ^(k+1) → ℕ) {
    f(n₁,n₂,...,nₖ,y) = sgn_bar(χᵣ(n₁,n₂,...,nₖ,y))
  } →

  assert(isPrimitiveRecursive(χᵣ)) ∧
  assert(isPrimitiveRecursive(sgn_bar)) →
  assert(isPrimitiveRecursive(f)) →
  
  apply(BoundedMinimization_PrimitiveRecursive) →
  assert(isPrimitiveRecursive(g))
}