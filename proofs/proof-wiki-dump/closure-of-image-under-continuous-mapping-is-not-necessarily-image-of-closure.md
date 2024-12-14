theorem Closure_Image_Continuous_Mapping_Not_Equal() {
  assert(
    ∀(T₁: TopologicalSpace, T₂: TopologicalSpace, H ⊆ T₁.S₁, f: T₁ → T₂) ⇒
    (f continuous) ⇏ (f(cl(H)) = cl(f(H)))
  )
} ↔

proof Closure_Image_Continuous_Mapping_Not_Equal() {
  let(ℝ: TopologicalSpace) →
  let(f: ℝ → ℝ, f(x) = tanh(x)) →
  assert(f continuous) →
  
  let(H = (0,∞)) →
  
  lemma Closure_H() {
    assert(cl(H) = [0,∞)) →
    apply(ClosureDefinition)
  } →
  
  lemma Image_H() {
    assert(f(H) = (0,1)) →
    apply(HyperbolicTangentProperties)
  } →
  
  lemma Image_Closure_H() {
    assert(f(cl(H)) = [0,1)) →
    apply(HyperbolicTangentProperties) ∧
    apply(Closure_H)
  } →
  
  lemma Closure_Image_H() {
    assert(cl(f(H)) = [0,1]) →
    apply(ClosureDefinition) ∧
    apply(Image_H)
  } →
  
  assert(f(cl(H)) ≠ cl(f(H))) →
  apply(Image_Closure_H) ∧
  apply(Closure_Image_H) →
  
  conclude(∃ continuous f: f(cl(H)) ≠ cl(f(H)))
}