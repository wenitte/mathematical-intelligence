theorem BAlgebra_Identity_00x() {
  assert(
    ∀X[BAlgebra(X) ⇒ 
      ∀x ∈ X: 0 ∘ (0 ∘ x) = x]
  )
} ↔

proof BAlgebra_Identity_00x() {
  setVar(X: BAlgebra) →
  setVar(x: X) →
  
  assert(0 ∘ x = (0 ∘ x) ∘ 0) →       // B-Algebra Axiom A2
  
  assert((0 ∘ x) ∘ 0 = 0 ∘ (0 ∘ (0 ∘ x))) →  // B-Algebra Axiom A3
  
  lemma LeftCancellable() {
    assert(∀a,b ∈ X: 0 ∘ a = 0 ∘ b ⇒ a = b)
  } →
  
  apply(LeftCancellable(), [0 ∘ x = 0 ∘ (0 ∘ (0 ∘ x))]) →
  
  assert(x = 0 ∘ (0 ∘ x))
}