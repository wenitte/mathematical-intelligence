theorem BoundedRightContinuousDistributionFunction() {
  assert(
    ∀K ∈ ClosedInterval ∧ inf(K) > -∞ ∧
    ∀m ∈ ℝ≥0 ∧
    ∀F: K → ℝ where (
      isBounded(F) ∧ 
      isRightContinuous(F) ∧ 
      isIncreasing(F) ∧
      lim[x→inf(K)] F(x) = m ∧
      lim[x→sup(K)] F(x) = M ∈ (0,∞)
    ) ⇒
    ∃μ: BorelMeasure(K) where (
      F_μ = F ∧
      μ(K) = M ∧
      μ({inf(K)}) = m
    )
  )
} ↔

proof BoundedRightContinuousDistributionFunction() {
  setVar(K: ClosedInterval, m: ℝ≥0, F: K → ℝ) →
  define(F̃: K → ℝ, x ↦ F(x) - m) →
  assert(
    isBounded(F̃) ∧
    isRightContinuous(F̃) ∧
    isIncreasing(F̃) ∧
    lim[x→inf(K)] F̃(x) = 0 ∧
    lim[x→sup(K)] F̃(x) = M - m ∈ (0,∞)
  ) →
  
  apply(MainTheorem()) {
    obtain(μ̃: BorelMeasure(K)) where (
      F_μ̃ = F̃ ∧
      μ̃(K) = M - m
    )
  } →
  
  define(μ = μ̃ + m·δ_{inf(K)}) →
  
  lemma IsMeasure() {
    assert(
      isBorelMeasure(δ_{inf(K)}) ∧
      isLinearCombination(μ, μ̃, m·δ_{inf(K)}) ⇒
      isBorelMeasure(μ)
    )
  } →
  
  assert(μ(K) = μ̃(K) + m·δ_{inf(K)}(K) = (M-m) + m = M) →
  
  ∀x ∈ K: (
    F_μ(x) = μ((-∞,x]∩K) 
    = μ̃((-∞,x]∩K) + m·δ_{inf(K)}((-∞,x]∩K)
    = F̃(x) + m 
    = F(x)
  ) →
  
  conclude(
    ∃μ: BorelMeasure(K) where (
      F_μ = F ∧
      μ(K) = M ∧
      μ({inf(K)}) = m
    )
  )
}