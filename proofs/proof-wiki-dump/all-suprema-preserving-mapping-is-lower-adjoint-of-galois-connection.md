theorem AllSupremaPreservingIsLowerAdjoint() {
  assert(
    ∀S,T(
      isOrderedSet(S, ≼) ∧
      isCompleteLattice(T, ≾) ∧
      isMapping(d: T → S) ∧
      preservesAllSuprema(d)
    ) ⇒
    ∃g: S → T(
      isGaloisConnection(⟨g,d⟩) ∧
      ∀s ∈ S(g(s) = max(d⁻¹[s≼]))
    )
  )
} ↔

proof AllSupremaPreservingIsLowerAdjoint() {
  setVar(S: OrderedSet, T: CompleteLattice, d: T → S) →
  
  lemma MappingIsIncreasing() {
    assert(∀x,y ∈ T(x ≾ y ⇒ d(x) ≼ d(y))) →
    proof {
      setVar(x,y: T, x ≾ y) →
      assert(x≾ ⊆ y≾) by LowerClosureIsIncreasing →
      assert(sup(x≾) = x ∧ sup(y≾) = y) by SupremumOfLowerClosure →
      assert(d(sup(x≾)) = sup(d→(x≾)) ∧ d(sup(y≾)) = sup(d→(y≾))) by PreservesSuprema →
      assert(d→(x≾) ⊆ d→(y≾)) by ImageOfSubset →
      assert(d(x) ≼ d(y)) by SupremumOfSubset
    }
  } →

  lemma GEqualsMax() {
    assert(∀s ∈ S(g(s) = max(d⁻¹[s≼]))) →
    proof {
      setVar(s: S) →
      define(g(s) := sup(d⁻¹[s≼])) →
      assert(d[d⁻¹[s≼]] ⊆ s≼) by ImageOfInverseImage →
      assert(sup(d[d⁻¹[s≼]]) ≼ s) by SupremumProperties →
      assert(d⁻¹[s≼] has_supremum) by CompleteLattice →
      assert(sup(d[d⁻¹[s≼]]) = d(g(s))) by PreservesSuprema →
      assert(g(s) ∈ d⁻¹[s≼]) →
      assert(g(s) = max(d⁻¹[s≼]))
    }
  } →
  
  apply(MappingIsIncreasing()) →
  apply(GEqualsMax()) →
  assert(isGaloisConnection(⟨g,d⟩)) by GaloisConnectionByMaximum →
  assert(∀s ∈ S(g(s) = max(d⁻¹[s≼])))
}