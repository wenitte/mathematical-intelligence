theorem Well_Defined_Metric_Extension() {
  let(M = (A,d): MetricSpace)
  let(C[A]: Set := CauchySequences(A))
  let(~: EquivalenceRelation := {(xₙ,yₙ) ∈ C[A]² | lim(n→∞) d(xₙ,yₙ) = 0})
  let(Ã := C[A]/~)
  let(d̃: Ã×Ã→ℝ₀₊ := {([xₙ]~,[yₙ]~) ↦ lim(n→∞) d(xₙ,yₙ)})
  assert(
    ∀xₙ,x̂ₙ,yₙ,ŷₙ ∈ C[A] : 
      (xₙ ~ x̂ₙ ∧ yₙ ~ ŷₙ) →
      d̃([xₙ]~,[yₙ]~) = d̃([x̂ₙ]~,[ŷₙ]~)
  )
} ↔

proof Well_Defined_Metric_Extension() {
  setVar(xₙ,x̂ₙ,yₙ,ŷₙ: C[A]) →
  assume(xₙ ~ x̂ₙ ∧ yₙ ~ ŷₙ) →
  
  assert(d(xₙ,yₙ) - d(x̂ₙ,ŷₙ) ≤ d(xₙ,x̂ₙ) + d(x̂ₙ,yₙ) - d(x̂ₙ,ŷₙ)) by(MetricTriangleInequality) →
  assert(d(xₙ,yₙ) - d(x̂ₙ,ŷₙ) ≤ d(xₙ,x̂ₙ) + d(x̂ₙ,ŷₙ) + d(ŷₙ,yₙ) - d(x̂ₙ,ŷₙ)) by(MetricTriangleInequality) →
  assert(d(xₙ,yₙ) - d(x̂ₙ,ŷₙ) ≤ d(xₙ,x̂ₙ) + d(ŷₙ,yₙ)) by(algebra) →
  
  lemma Reverse_Inequality() {
    assert(d(x̂ₙ,ŷₙ) - d(xₙ,yₙ) ≤ d(xₙ,x̂ₙ) + d(ŷₙ,yₙ)) by(analogous_argument)
  } →
  
  assert(|d(xₙ,yₙ) - d(x̂ₙ,ŷₙ)| ≤ d(xₙ,x̂ₙ) + d(ŷₙ,yₙ)) by(combine_inequalities) →
  
  assert(lim(n→∞) |d(xₙ,yₙ) - d(x̂ₙ,ŷₙ)| = 0) by(
    lim(n→∞) d(xₙ,x̂ₙ) = 0 ∧
    lim(n→∞) d(ŷₙ,yₙ) = 0 ∧
    SequenceLimitCombination
  ) →
  
  assert(d̃([xₙ]~,[yₙ]~) = d̃([x̂ₙ]~,[ŷₙ]~)) by(definition_d̃)
}