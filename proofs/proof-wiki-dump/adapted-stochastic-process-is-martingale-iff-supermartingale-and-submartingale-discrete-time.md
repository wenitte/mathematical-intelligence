theorem Martingale_Equivalence() {
  let(Ω, Σ, {ℱₙ}_{n≥0}, ℙ: FilteredProbabilitySpace) →
  let({Xₙ}_{n≥0}: StochasticProcess) →
  assert(
    isAdapted({Xₙ}_{n≥0}, {ℱₙ}_{n≥0}) →
    (isMartingale({Xₙ}_{n≥0}, {ℱₙ}_{n≥0}) ↔
     (isSupermartingale({Xₙ}_{n≥0}, {ℱₙ}_{n≥0}) ∧
      isSubmartingale({Xₙ}_{n≥0}, {ℱₙ}_{n≥0})))
  )
}

proof Martingale_Equivalence() {
  setVar(n: ℤ₊) →
  
  lemma MartingaleCondition() {
    assert(
      isMartingale({Xₙ}_{n≥0}, {ℱₙ}_{n≥0}) ↔
      ∀n: 𝔼[Xₙ₊₁|ℱₙ] = Xₙ a.s.
    )
  } →

  lemma SupermartingaleCondition() {
    assert(
      isSupermartingale({Xₙ}_{n≥0}, {ℱₙ}_{n≥0}) ↔
      ∀n: 𝔼[Xₙ₊₁|ℱₙ] ≤ Xₙ a.s.
    )
  } →

  lemma SubmartingaleCondition() {
    assert(
      isSubmartingale({Xₙ}_{n≥0}, {ℱₙ}_{n≥0}) ↔
      ∀n: 𝔼[Xₙ₊₁|ℱₙ] ≥ Xₙ a.s.
    )
  } →

  apply(MartingaleCondition()) →
  apply(SupermartingaleCondition()) →
  apply(SubmartingaleCondition()) →
  
  assert(
    𝔼[Xₙ₊₁|ℱₙ] = Xₙ a.s. ↔
    (𝔼[Xₙ₊₁|ℱₙ] ≤ Xₙ a.s. ∧ 𝔼[Xₙ₊₁|ℱₙ] ≥ Xₙ a.s.)
  )
}