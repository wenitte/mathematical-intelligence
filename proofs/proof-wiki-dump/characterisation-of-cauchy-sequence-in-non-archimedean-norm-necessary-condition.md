theorem Cauchy_Sequence_NonArchimedean_Norm() {
  let(R: DivisionRing, ||·||: NonArchimedeanNorm, {xₙ}: Sequence(R)) →
  assume(isCauchySequence({xₙ}, R, ||·||)) →
  assert(
    lim_{n→∞} ||x_{n+1} - xₙ|| = 0
  )
} ↔

proof Cauchy_Sequence_NonArchimedeanNorm() {
  let(ε: ℝ) →
  assume(ε > 0) →
  
  lemma CauchyDefinition() {
    assert(
      ∃N ∈ ℕ: ∀n,m > N →
      ||xₙ - xₘ|| < ε
    )
  } →
  
  apply(CauchyDefinition()) →
  
  assert(
    ∃N ∈ ℕ: ∀n > N →
    ||x_{n+1} - xₙ|| < ε
  ) →
  
  conclude(
    ∀ε > 0: ∃N ∈ ℕ: ∀n > N →
    ||x_{n+1} - xₙ|| < ε
  ) →
  
  conclude(
    lim_{n→∞} ||x_{n+1} - xₙ|| = 0
  )
}