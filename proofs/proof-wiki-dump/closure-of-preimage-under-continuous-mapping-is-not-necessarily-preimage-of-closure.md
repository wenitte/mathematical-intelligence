theorem Preimage_Closure_Counterexample() {
  assert(
    ∃ T₁(S₁,τ₁), T₂(S₂,τ₂): TopologicalSpace ∧
    ∃ H ⊆ S₁ ∧
    ∃ f: T₁ → T₂: Continuous ∧
    f⁻¹(cl(H)) ≠ cl(f⁻¹(H))
  )
} ↔

proof Preimage_Closure_Counterexample() {
  setVar(R: TopologicalSpace(Euclidean)) →
  define(f: R → R) {
    f(x) = {
      -1  if x ≤ -1
      x   if -1 ≤ x ≤ 1
      1   if x ≥ 1
    }
  } →
  assert(f: Continuous) →
  
  define(H: Subset(R)) {
    H = (0,1)
  } →
  
  lemma Closure_H() {
    assert(cl(H) = [0,1])
  } →
  
  lemma Preimage_H() {
    assert(f⁻¹(H) = (0,1))
  } →
  
  lemma Preimage_Closure_H() {
    assert(f⁻¹(cl(H)) = R)
  } →
  
  lemma Closure_Preimage_H() {
    assert(cl(f⁻¹(H)) = [0,1])
  } →
  
  conclude() {
    apply(Preimage_Closure_H()) ∧
    apply(Closure_Preimage_H()) →
    assert(R ≠ [0,1]) →
    assert(f⁻¹(cl(H)) ≠ cl(f⁻¹(H)))
  }
}