theorem AbsValueSimpleIsSimple() {
  setup {
    let(X, Σ: MeasurableSpace)
    let(f: X → ℝ, SimpleFunction)
  }
  assert(
    |f|: X → ℝ ∈ SimpleFunction
  )
}

proof AbsValueSimpleIsSimple() {
  // Standard representation of f
  apply(SimpleStandardRepresentation(f)) →
  assert(
    f = ∑_{k=0}^n a_k χ_{E_k}
  ) →

  // Define pointwise absolute value
  ∀x ∈ X {
    |f|(x) = |∑_{k=0}^n a_k χ_{E_k}(x)|
  } →

  // Property of standard representation
  assert(
    ∀x ∈ X → ∃!k ∈ [0,n]: x ∈ E_k
  ) →

  // Behavior for specific element
  lemma CharacteristicFunction() {
    ∀x ∈ X, ∀l ∈ [0,n] {
      x ∈ E_l → 
      (χ_{E_k}(x) = 0 ↔ k ≠ l) ∧
      (χ_{E_l}(x) = 1)
    }
  } →

  // Define function g
  setVar(g: X → ℝ) →
  assert(
    ∀x ∈ X: g(x) = ∑_{k=0}^n |a_k| χ_{E_k}(x)
  ) →

  // g is simple by construction
  assert(g ∈ SimpleFunction) →

  // Prove g equals |f|
  assert(
    ∀x ∈ X, ∀l ∈ [0,n] {
      x ∈ E_l →
      g(x) = |a_l| ∧
      |f|(x) = |a_l|
    }
  ) →

  // Conclude equality
  assert(g = |f|) →
  conclude(|f| ∈ SimpleFunction)
}