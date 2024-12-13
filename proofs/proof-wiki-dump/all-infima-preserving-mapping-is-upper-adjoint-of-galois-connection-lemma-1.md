theorem InfimaPreservingIsIncreasing() {
  let(S: CompleteLattice, ≼) ∧
  let(T: OrderedSet, ⪯) ∧
  let(g: S → T) ∧
  assert(
    IsInfimaPreserving(g) →
    IsIncreasing(g)
  )
} ↔

proof InfimaPreservingIsIncreasing() {
  define(d: T → S) →
  assert(∀t ∈ T: d(t) = inf(g⁻¹(t↑))) →
  
  setVar(x,y ∈ S) →
  assume(x ≼ y) →
  
  lemma UpperClosureDecreasing() {
    assert(y↑ ⊆ x↑)
  } →
  
  lemma InfimumUpperClosure() {
    assert(inf(x↑) = x) ∧
    assert(inf(y↑) = y)
  } →
  
  apply(IsInfimaPreserving(g)) →
  assert(
    g preserves inf(x↑) ∧
    g preserves inf(y↑)
  ) →
  
  lemma InfimumPreservingDef() {
    assert(inf(g→(x↑)) = g(x)) ∧
    assert(inf(g→(y↑)) = g(y))
  } →
  
  lemma ImageSubset() {
    assert(g→(y↑) ⊆ g→(x↑))
  } →
  
  apply(InfimumOfSubset) →
  conclude(g(x) ⪯ g(y))
}