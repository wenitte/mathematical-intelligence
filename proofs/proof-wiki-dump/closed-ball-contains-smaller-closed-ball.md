theorem ClosedBall_Contains_SmallerBall(M: MetricSpace, a: Element, ε: ℝ, δ: ℝ) {
  require(M = (A, d)) ∧
  require(a ∈ A) ∧
  require(ε > 0) ∧ 
  require(δ > 0) ∧
  require(ε ≤ δ) ∧
  require(B⁻_ε(a) = {x ∈ A | d(x,a) ≤ ε}) ∧
  require(B⁻_δ(a) = {x ∈ A | d(x,a) ≤ δ})
  assert(
    B⁻_ε(a) ⊆ B⁻_δ(a)
  )
} ↔

proof ClosedBall_Contains_SmallerBall() {
  letVar(x: Element) →
  assume(x ∈ B⁻_ε(a)) →
  
  lemma Step1() {
    assert(x ∈ B⁻_ε(a) → d(x,a) ≤ ε) by(def:ClosedBall)
  } →
  
  lemma Step2() {
    assert(d(x,a) ≤ ε ∧ ε ≤ δ → d(x,a) ≤ δ) by(transitivity)
  } →
  
  lemma Step3() {
    assert(d(x,a) ≤ δ → x ∈ B⁻_δ(a)) by(def:ClosedBall)
  } →
  
  apply(Step1()) →
  apply(Step2()) →
  apply(Step3()) →
  
  lemma Conclusion() {
    assert(∀x: x ∈ B⁻_ε(a) → x ∈ B⁻_δ(a)) by(def:Subset)
  } →
  
  assert(B⁻_ε(a) ⊆ B⁻_δ(a))
}