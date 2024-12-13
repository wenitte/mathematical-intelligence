theorem AllInfimaPreservingMappingLemma2() {
  assume(
    S: CompleteLattice(≤) ∧
    T: OrderedSet(⊑) ∧
    g: (S → T) ∧ 
    isAllInfimaPreserving(g) ∧
    d: (T → S) ∧
    ∀t∈T: d(t) = inf(g⁻¹[t↑])
  )
  assert(
    ∀t∈T: d(t) = min(g⁻¹[t↑])
  )
} ↔

proof AllInfimaPreservingMappingLemma2() {
  setVar(t: T) →
  
  assert(d(t) = inf(g⁻¹[t↑])) by def(d) →
  
  lemma ImageInverseImage() {
    assert(g[g⁻¹[t↑]] ⊆ t↑)
  } →
  
  lemma InfimumProperties() {
    assert(
      t = inf(t↑) ⊑ inf(g[g⁻¹[t↑]]) ∧
      inf(g[g⁻¹[t↑]]) ∈ t↑
    ) by apply(InfimumOfSubset, InfimumOfUpperClosure)
  } →
  
  assert(∃inf(g⁻¹[t↑])) by def(CompleteLattice) →
  
  assert(inf(g[g⁻¹[t↑]]) = g(d(t))) by def(isAllInfimaPreserving) →
  
  assert(d(t) ∈ g⁻¹[t↑]) by def(ImageSet) →
  
  conclude(d(t) = min(g⁻¹[t↑]))
}