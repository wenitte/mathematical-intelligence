theorem Cauchy_Sequence_Bounded() {
  assert(
    ∀R(NormedDivisionRing(R) ∧ ∀{xₙ}(CauchySequence({xₙ}, R) → Bounded({xₙ}, R)))
  )
} ↔

proof Cauchy_Sequence_Bounded() {
  setVar(R: NormedDivisionRing) →
  setVar({xₙ}: Sequence(R)) →
  assume(CauchySequence({xₙ}, R)) →
  
  lemma NormSequenceConvergent() {
    assert(
      CauchySequence({xₙ}, R) → Convergent({‖xₙ‖}, ℝ)
    )
  } →
  
  lemma ConvergentBounded() {
    assert(
      ∀{yₙ}(Convergent({yₙ}, ℝ) → Bounded({yₙ}, ℝ))
    )
  } →
  
  apply(NormSequenceConvergent()) →
  apply(ConvergentBounded(), {‖xₙ‖}) →
  
  assert(
    ∃M ∈ ℝ₊(∀n ∈ ℕ(‖xₙ‖ = |‖xₙ‖| ≤ M))
  ) →
  
  conclude(Bounded({xₙ}, R))
}