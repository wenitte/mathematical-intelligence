theorem BAlgebra_Commutativity() {
  assert(
    ∀X,∘[is_BAlgebra(X,∘)] ⇒
    (is_commutative(X,∘) ↔ ∀x,y∈X[x∘(x∘y) = y])
  )
}

proof BAlgebra_Commutativity() {
  // Necessary condition
  lemma Necessary() {
    setVar(x,y: X) →
    assert(x∘(x∘y)) →
    apply(B_Identity_Axiom()) →
    assert((x∘(0∘y))∘x) →
    apply(Commutativity()) →
    assert((y∘(0∘x))∘x) →
    apply(B_Axiom_A3()) →
    assert(y∘(x∘x)) →
    apply(B_Axiom_A1()) →
    assert(y∘0) →
    apply(B_Axiom_A2()) →
    assert(y)
  }

  // Sufficient condition
  lemma Sufficient() {
    setVar(x,y: X) →
    assert((x∘(0∘y))∘y) →
    apply(B_Axiom_A3()) →
    assert(x∘(y∘(0∘(0∘y)))) →
    apply(B_Identity()) →
    assert(x∘(y∘y)) →
    apply(B_Axiom_A3()) →
    assert(y∘(x∘x)) →
    apply(B_Axiom_A2()) →
    assert(x∘0) →
    apply(B_Axiom_A1()) →
    assert(x) →
    apply(Hypothesis()) →
    assert(y∘(y∘x)) →
    apply(B_Identity()) →
    assert(y∘(y∘(0∘(0∘x)))) →
    apply(B_Axiom_A3()) →
    assert((y∘(0∘x))∘y)
  }

  apply(Right_Cancellable()) →
  assert(x∘(0∘y) = y∘(0∘x)) →
  conclude(is_commutative(X,∘))
}