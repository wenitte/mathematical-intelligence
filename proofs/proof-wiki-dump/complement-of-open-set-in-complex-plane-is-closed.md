theorem ComplexOpenSetComplement() {
  assert(
    ∀S ⊆ ℂ: (isOpen(S) → isClosed(ℂ\S))
  )
} ↔

proof ComplexOpenSetComplement() {
  setVar(S: subset(ℂ), isOpen(S)) →
  assert(isOpen(S)) →
  
  lemma OpenSetNeighborhood() {
    assert(
      ∀z ∈ S: ∃ε > 0: (N_ε(z)\{z} ⊆ S)
    )
  } →

  lemma NotLimitPoint() {
    assert(
      ∀z ∈ ℂ: (z ∈ S → ¬isLimitPoint(z, S))
    )
  } →

  lemma LimitPointComplement() {
    assert(
      ∀z ∈ ℂ: (isLimitPoint(z, S) → z ∉ S)
    )
  } →

  lemma LimitPointInComplement() {
    assert(
      ∀z ∈ ℂ: (isLimitPoint(z, S) → z ∈ (ℂ\S))
    )
  } →

  apply(OpenSetNeighborhood()) →
  apply(NotLimitPoint()) →
  apply(LimitPointComplement()) →
  apply(LimitPointInComplement()) →
  
  assert(
    containsAllLimitPoints(ℂ\S) ∧ isClosed(ℂ\S)
  )
}