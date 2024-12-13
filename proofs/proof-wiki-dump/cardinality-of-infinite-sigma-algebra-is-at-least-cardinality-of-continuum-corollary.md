theorem Infinite_SigmaAlgebra_Uncountable() {
  assume(
    MM: σ-algebra,
    X: set,
    MM.defined_on(X),
    is_infinite(MM)
  )
  assert(
    is_uncountable(MM)
  )
}

proof Infinite_SigmaAlgebra_Uncountable() {
  reference(theorem: "Cardinality_Infinite_SigmaAlgebra_GE_Continuum") →
  assert(
    |MM| ≥ |ℝ|
  ) →
  reference(theorem: "Real_Numbers_Uncountable") →
  assert(
    |ℝ| > ℵ₀
  ) →
  apply(transitivity_cardinality) →
  assert(
    |MM| ≥ |ℝ| > ℵ₀
  ) →
  conclude(
    is_uncountable(MM)
  )
}

metadata {
  depends_on: [
    "Axiom_of_Choice",
    "Cardinality_Infinite_SigmaAlgebra_GE_Continuum",
    "Real_Numbers_Uncountable"
  ]
}