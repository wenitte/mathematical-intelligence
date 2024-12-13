theorem Bounded_Sum_Primitive_Recursive() {
  assert(
    ∀f: ℕ^(k+1) → ℕ, Primitive_Recursive(f) ∧
    ∀g: ℕ^(k+1) → ℕ, (
      g(n₁,...,nₖ,z) = ∑_{y=0}^{z-1} ℓ_y where f(n₁,...,nₖ,y) codes ℓ_y
    ) ⇒
    Primitive_Recursive(g)
  )
} ↔

proof Bounded_Sum_Primitive_Recursive() {
  setVars(n₁,...,nₖ,z: ℕ) →
  
  assert(
    g(n₁,...,nₖ,z) = match z with {
      0 → 0,
      z' → g(n₁,...,nₖ,z-1) +_ℤ f(n₁,...,nₖ,z-1)
    }
  ) →
  
  lemma Integer_Addition_Primitive_Recursive() {
    assert(
      ∀x,y: ℤ, Primitive_Recursive(+_ℤ)
    )
  } →
  
  assert(
    IsPrimitiveRecursion(g, Zero_Function(), +_ℤ ∘ f)
  ) →
  
  apply(Integer_Addition_Primitive_Recursive()) →
  
  assert(
    Primitive_Recursive(g)
  )
}