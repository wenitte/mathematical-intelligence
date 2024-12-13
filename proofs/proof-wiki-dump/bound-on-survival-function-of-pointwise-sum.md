theorem Bound_Survival_Function_Pointwise_Sum() {
  let(X: MeasureSpace, Σ: σ-algebra, μ: Measure)
  let(f,g: X → R̄, measurable: Σ)
  let(F_f, F_g, F_f+g: SurvivalFunctions)
  assert(
    ∀α,β ∈ [0,∞] ⇒ F_f+g(α + β) ≤ F_f(α) + F_g(β)
  )
} ↔

proof Bound_Survival_Function_Pointwise_Sum() {
  setVar(α,β ∈ [0,∞]) →
  
  lemma SetInclusion() {
    assert({x ∈ X: |f(x) + g(x)| ≥ α + β} ⊆ 
           {x ∈ X: |f(x)| ≥ α} ∪ {x ∈ X: |g(x)| ≥ β})
  } →
  
  proof SetInclusion() {
    setVar(x ∈ X) →
    case |f(x) + g(x)| = ∞ {
      assert(f(x) = ±∞ ∨ g(x) = ±∞) →
      assert(|f(x)| = ∞ ∨ |g(x)| = ∞) →
      assert(|f(x)| ≥ α ∨ |g(x)| ≥ β)
    } ∧
    case |f(x) + g(x)| < ∞ {
      assume(|f(x)| < α ∧ |g(x)| < β) →
      apply(TriangleInequality) →
      assert(|f(x) + g(x)| ≤ |f(x)| + |g(x)| < α + β) →
      contradiction(|f(x) + g(x)| ≥ α + β) →
      assert(|f(x)| ≥ α ∨ |g(x)| ≥ β)
    }
  } →
  
  assert(F_f+g(α + β) = μ({x ∈ X: |f(x) + g(x)| ≥ α + β})) →
  apply(SetInclusion) →
  apply(MonotoneMeasure) →
  assert(F_f+g(α + β) ≤ μ({x ∈ X: |f(x)| ≥ α} ∪ {x ∈ X: |g(x)| ≥ β})) →
  apply(SubadditiveMeasure) →
  assert(μ({x ∈ X: |f(x)| ≥ α} ∪ {x ∈ X: |g(x)| ≥ β}) ≤ 
         μ({x ∈ X: |f(x)| ≥ α}) + μ({x ∈ X: |g(x)| ≥ β})) →
  assert(F_f+g(α + β) ≤ F_f(α) + F_g(β))
}