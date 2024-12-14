theorem Infimum_Subset_Equality() {
  assert(
    ∀S,T ⊆ ℝ, T ⊆ S ∧ ∃(inf S) ∧ ∃(inf T) ⇒
    [inf S = inf T ↔ ∀ε ∈ ℝ_{>0}: ∀s ∈ S: ∃t ∈ T: s + ε > t]
  )
}

proof Infimum_Subset_Equality() {
  // Necessary condition
  lemma Necessary() {
    assume(inf S = inf T) →
    assert(inf S ≥ inf T) →
    apply(Infimum_Properties) →
    conclude(∀ε ∈ ℝ_{>0}: ∀s ∈ S: ∃t ∈ T: s + ε > t)
  } →

  // Sufficient condition
  lemma Sufficient() {
    assume(∀ε ∈ ℝ_{>0}: ∀s ∈ S: ∃t ∈ T: s + ε > t) →
    assert(inf S ≥ inf T) →
    lemma Subset_Property() {
      assert(T ⊆ S ⇒ inf T ≥ inf S)
    } →
    apply(Subset_Property) →
    assert(inf T ≥ inf S) →
    conclude(inf S = inf T)
  } →

  apply(Necessary) →
  apply(Sufficient) →
  conclude(
    inf S = inf T ↔ ∀ε ∈ ℝ_{>0}: ∀s ∈ S: ∃t ∈ T: s + ε > t
  )
}