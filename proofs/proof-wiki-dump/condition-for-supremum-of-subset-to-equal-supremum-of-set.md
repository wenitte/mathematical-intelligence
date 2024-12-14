theorem Suprema_Equality_Condition() {
  assert(
    ∀S,T ⊆ ℝ: T ⊆ S ∧ ∃sup(S) ∧ ∃sup(T) ⇒
    [sup(S) = sup(T) ↔ ∀ε ∈ ℝ>0: ∀s ∈ S: ∃t ∈ T: s < t + ε]
  )
}

proof Suprema_Equality_Condition() {
  // Necessary condition
  lemma Necessary() {
    assume(sup(S) = sup(T)) →
    apply(Suprema_Properties()) →
    assert(sup(S) ≤ sup(T)) →
    apply(Supremum_Definition()) →
    assert(∀ε ∈ ℝ>0: ∀s ∈ S: ∃t ∈ T: s < t + ε)
  }

  // Sufficient condition
  lemma Sufficient() {
    assume(∀ε ∈ ℝ>0: ∀s ∈ S: ∃t ∈ T: s < t + ε) →
    apply(Supremum_Definition()) →
    assert(sup(S) ≤ sup(T)) →
    apply(Supremum_Subset_Property(T,S)) →
    assert(sup(T) ≤ sup(S)) →
    conclude(sup(S) = sup(T))
  }

  apply(Necessary()) ∧ apply(Sufficient()) →
  conclude(
    sup(S) = sup(T) ↔ ∀ε ∈ ℝ>0: ∀s ∈ S: ∃t ∈ T: s < t + ε
  )
}