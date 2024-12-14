theorem DenseComplement() {
  assert(
    ∀X(TopologicalSpace(X) ∧
    (∀U ∈ τ → Uncountable(U)) ∧
    (∃A ⊆ X → Countable(A)))
    ⇒ EverywhereDense(X\A, X)
  )
}

proof DenseComplement() {
  setVar(X: TopologicalSpace) →
  setVar(A: Set, A ⊆ X) →
  assume(Countable(A)) →
  assume(∀U ∈ τ → Uncountable(U)) →
  
  ∀a ∈ X {
    setVar(U: OpenSet, U ∈ τ) →
    assert(Neighborhood(U, a)) →
    assert(Uncountable(U)) →
    
    lemma UncountableMinusCountable() {
      assert(
        Uncountable(U) ∧ Countable(A) →
        Uncountable(U ∩ (X\A))
      )
    } →
    
    apply(UncountableMinusCountable()) →
    assert(U ∩ (X\A) ≠ ∅) →
    assert(a ∈ Closure(X\A))
  } →
  
  assert(X ⊆ Closure(X\A)) →
  assert(Closure(X\A) ⊆ X) →
  assert(Closure(X\A) = X) →
  conclude(EverywhereDense(X\A, X))
}

corollary DenseComplementReals() {
  assert(
    ∀A ⊆ ℝ(Countable(A) →
    EverywhereDense(ℝ\A, ℝ))
  )
} ↔
apply(DenseComplement())