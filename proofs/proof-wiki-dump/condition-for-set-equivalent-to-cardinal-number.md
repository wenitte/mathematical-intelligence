theorem CardinalEquivalence() {
  assert(
    ∀S ∈ Set ⇒ [
      let(|S| := ⋂{x ∈ On : S ~ x}) ∧
      equiv(
        (S ~ |S|),
        (∃x ∈ On : S ~ x),
        (∃x ∈ On : ∃y : (y ⊆ x ∧ S ~ y))
      )
    ]
  )
} ↔

proof CardinalEquivalence() {
  // 2 ⟹ 1
  block2To1() {
    assume(∃x ∈ On : S ~ x) →
    apply(OrdinalWellOrdered()) →
    assert(∃!min_x ∈ On : S ~ min_x) →
    assert(min_x = |S|) →
    conclude(S ~ |S|)
  } →

  // 3 ⟹ 2
  block3To2() {
    assume(∃x ∈ On : ∃y : (y ⊆ x ∧ S ~ y)) →
    setVar(x: On, y: Set) →
    assert(y ⊆ x ∧ S ~ y) →
    apply(UniqueOrdinalIsomorphism()) →
    assert(∃z ∈ On : y ~ z) →
    apply(SetEquivTransitive()) →
    conclude(S ~ z)
  } →

  // 1 ⟹ 3
  block1To3() {
    contradict() →
    assume(¬(∃x ∈ On : ∃y : (y ⊆ x ∧ S ~ y))) →
    assert(∀x ∈ On : S ≁ x) →
    assert(|S| = ⋂∅ = U) →
    assert(S ≁ U) →
    assert(S ≁ |S|) →
    conclude(S ~ |S| → ∃x ∈ On : ∃y : (y ⊆ x ∧ S ~ y))
  }
}