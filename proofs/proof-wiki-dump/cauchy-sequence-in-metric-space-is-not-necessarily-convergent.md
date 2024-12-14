theorem Cauchy_Sequence_Not_Necessarily_Convergent() {
  assert(
    ∀M[MetricSpace(M) ∧ M = ⟨A,d⟩] ∧
    ∀{xₙ}[CauchySequence({xₙ}, M)] →
    ¬∀M[ConvergentSequence({xₙ}, M)]
  )
} ↔

proof Cauchy_Sequence_Not_Necessarily_Convergent() {
  setVar(A: ℘(ℝ)) →
  assert(A = {1/n : n ∈ ℤ₊}) →
  
  setVar(M: MetricSpace) →
  assert(M = ⟨A,τd⟩) →
  assert(τd = EuclideanMetric) →
  
  setVar({xₙ}: Sequence(A)) →
  
  lemma Integer_Reciprocal_Space_Cauchy() {
    assert(
      ∃{xₙ}[CauchySequence({xₙ}, M) ∧
      ¬∃l∈A[lim({xₙ}) = l]]
    )
  } →
  
  apply(Integer_Reciprocal_Space_Cauchy()) →
  assert(CauchySequence({xₙ}, M)) ∧
  assert(¬ConvergentSequence({xₙ}, M)) →
  conclude(∃M,{xₙ}[CauchySequence({xₙ}, M) ∧ ¬ConvergentSequence({xₙ}, M)])
}