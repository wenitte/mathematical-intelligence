theorem CartesianProduct_PreservesCardinality() {
  assert(
    ∀R,S,T: Set ∧ (S ∼ T) ⇒ 
    ((R × S ∼ R × T) ∧ (S × R ∼ T × R))
  )
} ↔

proof CartesianProduct_PreservesCardinality() {
  setVar(R,S,T: Set) →
  assume(S ∼ T) →
  assert(∃f: S → T, f is bijective) →
  assert(∃g: T → S, g = f⁻¹) by BijectionIffInverse() →
  
  define(f̂: R × S → R × T) {
    ∀r ∈ R, s ∈ S: f̂(r,s) = (r, f(s))
  } →
  
  define(ĝ: R × T → R × S) {
    ∀r ∈ R, t ∈ T: ĝ(r,t) = (r, g(t))
  } →
  
  lemma CompositionIsIdentity() {
    assert(
      ∀r ∈ R, s ∈ S:
      ĝ(f̂(r,s)) = ĝ(r,f(s)) = (r,g(f(s))) = (r,s) ∧
      ∀r ∈ R, t ∈ T:
      f̂(ĝ(r,t)) = f̂(r,g(t)) = (r,f(g(t))) = (r,t)
    )
  } →
  
  apply(CompositionIsIdentity()) →
  assert(ĝ = f̂⁻¹) →
  assert(f̂ is bijective) by BijectionIffInverse() →
  assert(R × S ∼ R × T) by SetEquivalenceDefinition() →
  
  assert(S × R ∼ T × R) by SymmetricArgument() →
  conclude()
}