theorem ComplementClosedSetIsOpen() {
  assert(
    ∀S ⊆ ℂ, (Closed(S) → Open(ℂ\S))
  )
} ↔

proof ComplementClosedSetIsOpen() {
  setVar(S: Set[ℂ]) →
  assert(Closed(S)) →
  
  lemma ClosedSetDefinition() {
    assert(
      Closed(S) ↔ ∀z∈ℂ, (LimitPoint(z,S) → z∈S)
    )
  } →
  
  lemma Transposition() {
    assert(
      ∀z∈ℂ, (z∉S → ¬LimitPoint(z,S))
    )
  } →
  
  lemma RelativeComplement() {
    assert(
      ∀z∈(ℂ\S) → ¬LimitPoint(z,S)
    )
  } →
  
  lemma LimitPointDefinition() {
    assert(
      ∀z∈(ℂ\S), ∃ε>0: (
        Nε(z)\{z} ∩ S = ∅
      )
    )
  } →
  
  apply(ClosedSetDefinition()) →
  apply(Transposition()) →
  apply(RelativeComplement()) →
  apply(LimitPointDefinition()) →
  
  assert(
    ∀z∈(ℂ\S), ∃ε>0: (
      Nε(z) ⊆ (ℂ\S)
    )
  ) →
  
  conclude(Open(ℂ\S))
}