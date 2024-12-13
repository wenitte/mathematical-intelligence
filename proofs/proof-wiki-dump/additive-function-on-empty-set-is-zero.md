theorem EmptySetAdditiveFunction() {
  assert(
    ∀A: Algebra(Sets) ∧
    ∀f: (A → ℝ̄) ∧ 
    isAdditive(f, A) ⇒
    f(∅) = 0
  )
}

proof EmptySetAdditiveFunction() {
  setVar(A: Algebra(Sets)) →
  setVar(f: (A → ℝ̄)) →
  assume(isAdditive(f, A)) →
  
  lemma EmptySetInAlgebra() {
    assert(∅ ∈ A)
  } →
  
  setVar(X: A) →
  
  assert(X ∩ ∅ = ∅) →
  
  assert(f(X) + f(∅) = f(X ∪ ∅)) →
  
  lemma UnionEmptySet() {
    assert(X ∪ ∅ = X)
  } →
  
  apply(UnionEmptySet()) →
  assert(f(X) + f(∅) = f(X)) →
  assert(f(X) + f(∅) - f(X) = 0) →
  assert(f(∅) = 0)
}