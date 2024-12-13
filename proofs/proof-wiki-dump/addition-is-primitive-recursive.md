theorem Addition_is_Primitive_Recursive() {
  assert(
    ∀Add: ℕ²→ℕ, Add(n,m) = n + m ⇒ 
    isPrimitiveRecursive(Add)
  )
} ↔

proof Addition_is_Primitive_Recursive() {
  // Base case observation
  assert(Add(n,0) = n) ∧
  assert(Add(n,m+1) = Succ(Add(n,m))) →

  // Need to find primitive recursive functions f and g
  setVar(f: ℕ→ℕ) ∧
  setVar(g: ℕ³→ℕ) →
  
  assert(
    Add(n,m) = {
      f(n) if m = 0;
      g(n,m-1,Add(n,m-1)) if m > 0
    }
  ) →

  // Define f
  assert(f(n) = n) ∧
  assert(f = pr₁¹) ∧
  assert(isPrimitiveRecursive(f)) →

  // Define g
  assert(g(n₁,n₂,n₃) = Succ(n₃)) ∧
  assert(g(n,m,Add(n,m)) = Succ(Add(n,m))) →

  lemma G_is_Primitive_Recursive() {
    assert(g(n₁,n₂,n₃) = Succ(pr₃³(n₁,n₂,n₃))) ∧
    assert(isPrimitiveRecursive(Succ)) ∧
    assert(isPrimitiveRecursive(pr₃³)) →
    assert(isPrimitiveRecursive(g))
  } →

  apply(G_is_Primitive_Recursive()) →

  // Final conclusion
  assert(Add = PrimitiveRecursion(pr₁¹,g)) →
  assert(isPrimitiveRecursive(Add))
}