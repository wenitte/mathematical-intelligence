theorem CompositionSeriesSymmetricGroup() {
  assert(
    ∀n ∈ ℤ where (n > 2 ∧ n ≠ 4) ⇒
    CompositionSeries(Sₙ) = [{e} ⊲ Aₙ ⊲ Sₙ]
  )
} ↔

proof CompositionSeriesSymmetricGroup() {
  setVar(n: ℤ where n > 2 ∧ n ≠ 4) →
  
  lemma AltGroupNormal() {
    assert(Aₙ ⊲ Sₙ)
  } →
  
  lemma QuotientGroup() {
    assert(Sₙ/Aₙ ≅ ℤ₂)
  } →
  
  apply(AltGroupNormal(), QuotientGroup()) →
  assert(Aₙ is maximal normal in Sₙ) →
  
  lemma AltGroupSimple() {
    assert(
      ∀n ∈ ℤ where (n > 0 ∧ n ≠ 4) ⇒
      IsSimple(Aₙ)
    )
  } →
  
  apply(AltGroupSimple()) →
  assert(
    NormalSubgroups(Aₙ) = [{e}, Aₙ]
  ) →
  
  assert({e} is maximal normal in Aₙ) →
  
  lemma CompositionLength() {
    assert(
      ∀G where IsGroup(G) ∧ IsSimple(G/N) ∧ N ⊲ G ⇒
      CompositionLength(G) = CompositionLength(N) + 1
    )
  } →
  
  apply(CompositionLength()) →
  assert(CompositionSeries(Sₙ) = [{e} ⊲ Aₙ ⊲ Sₙ])
}