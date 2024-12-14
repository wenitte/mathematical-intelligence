theorem CauchySequenceBounded_NormedDivisionRing() {
  assert(
    ∀R(NormedDivisionRing(R) ∧ HasNorm(R, ∥·∥) →
      ∀{xₙ}(CauchySequence({xₙ}, R) → BoundedSequence({xₙ}, R)))
  )
} ↔

proof CauchySequenceBounded_NormedDivisionRing() {
  setVar(R: NormedDivisionRing) →
  setVar(∥·∥: Norm(R)) →
  setVar(d: Metric) →
  assert(d = InducedMetric(∥·∥)) →
  setVar({xₙ}: Sequence(R)) →
  assume(CauchySequence({xₙ}, ⟨R,∥·∥⟩)) →
  
  lemma CauchyInNormImpliesCauchyInMetric() {
    assert(CauchySequence({xₙ}, ⟨R,∥·∥⟩) → CauchySequence({xₙ}, ⟨R,d⟩))
  } →
  apply(CauchyInNormImpliesCauchyInMetric()) →
  
  lemma CauchyImpliesBoundedInMetric() {
    assert(CauchySequence({xₙ}, ⟨R,d⟩) → BoundedSequence({xₙ}, ⟨R,d⟩))
  } →
  apply(CauchyImpliesBoundedInMetric()) →
  
  lemma BoundedEquivalenceNormMetric() {
    assert(BoundedSequence({xₙ}, ⟨R,d⟩) ↔ BoundedSequence({xₙ}, ⟨R,∥·∥⟩))
  } →
  apply(BoundedEquivalenceNormMetric()) →
  
  conclude(BoundedSequence({xₙ}, ⟨R,∥·∥⟩))
}