theorem ComplexNumbersCannotBeOrderedCompatibly() {
  assert(
    ∀C(FieldComplex(C) → ¬∃≤(TotalOrdering(≤, C) ∧ OrderCompatible(≤, C)))
  )
} ↔

proof ComplexNumbersCannotBeOrderedCompatibly() {
  assume(
    ∃≤(TotalOrdering(≤, C) ∧ OrderCompatible(≤, C))
  ) →
  
  lemma OrderingProperties() {
    assert(
      ∀z ∈ C(z ≠ 0 → (0 ≺ z ∨ z ≺ 0) ∧ ¬(0 ≺ z ∧ z ≺ 0)) ∧
      ∀z₁,z₂ ∈ C((0 ≺ z₁ ∧ 0 ≺ z₂) → (0 ≺ z₁z₂ ∧ 0 ≺ z₁ + z₂))
    )
  } →

  lemma AlternativeProperty() {
    assert(
      ∀z ∈ C(z ≠ 0 → (0 ≺ z ∨ 0 ≺ -z) ∧ ¬(0 ≺ z ∧ 0 ≺ -z))
    )
  } →

  setVar(i: C) →
  assert(i ≠ 0) →
  assert(0 ≺ i ∨ 0 ≺ -i) →

  cases {
    case(0 ≺ i) {
      assert(0 ≺ i) →
      assert(0 ≺ i × i) →
      assert(0 ≺ -1)
    }
    case(0 ≺ -i) {
      assert(0 ≺ -i) →
      assert(0 ≺ (-i) × (-i)) →
      assert(0 ≺ -1)
    }
  } →

  assert(0 ≺ -1) →
  assert(0 ≺ (-1) × (-1)) →
  assert(0 ≺ 1) →
  
  assert(0 ≺ -1 ∧ 0 ≺ 1) →
  assert(Contradiction(AlternativeProperty())) →
  conclude(¬∃≤(TotalOrdering(≤, C) ∧ OrderCompatible(≤, C)))
}