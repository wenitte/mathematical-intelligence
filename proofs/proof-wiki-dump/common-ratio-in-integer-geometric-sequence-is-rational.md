theorem CommonRatioIntegerGeometricSequenceRational() {
  assert(
    ∀{ak} ∈ ℤℕ [ak is geometric sequence] →
    ∃r ∈ ℚ [r is common ratio of {ak}]
  )
} ↔

proof CommonRatioIntegerGeometricSequenceRational() {
  setVar(ak: geometric_sequence) →
  assert(ak ∈ ℤ ∀k ∈ ℕ) →
  lemma IntegersSubdomainRationals() {
    assert(ℤ ⊂ ℚ)
  } →
  apply(IntegersSubdomainRationals()) →
  assert(ak ∈ ℚ ∀k ∈ ℕ) →
  lemma RationalGeometricSequenceRationalRatio() {
    assert(
      ∀{bk} ∈ ℚℕ [bk is geometric sequence] →
      ∃r ∈ ℚ [r is common ratio of {bk}]
    )
  } →
  apply(RationalGeometricSequenceRationalRatio()) →
  assert(∃r ∈ ℚ [r is common ratio of {ak}])
}