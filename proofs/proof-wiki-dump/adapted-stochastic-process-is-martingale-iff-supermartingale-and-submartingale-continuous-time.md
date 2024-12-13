theorem Martingale_Equiv_Super_Sub_Martingale() {
  let(Ω, Σ, {ℱₜ}_{t≥0}, ℙ: FilteredProbSpace[Continuous]) →
  let({Xₜ}_{t≥0}: StochasticProcess[Continuous]) →
  assert(
    isAdapted({Xₜ}_{t≥0}, {ℱₜ}_{t≥0}) ↔
    (
      isMartingale({Xₜ}_{t≥0}, {ℱₜ}_{t≥0}) ↔
      (
        isSupermartingale({Xₜ}_{t≥0}, {ℱₜ}_{t≥0}) ∧
        isSubmartingale({Xₜ}_{t≥0}, {ℱₜ}_{t≥0})
      )
    )
  )
} ↔

proof Martingale_Equiv_Super_Sub_Martingale() {
  setVar(s, t: ℝ⁺) →
  assume(s < t) →
  assert(
    isMartingale({Xₜ}_{t≥0}, {ℱₜ}_{t≥0}) ↔
    (∀s,t: 𝔼[Xₜ|ℱₛ] = Xₛ[a.s.])
  ) →
  assert(
    isSupermartingale({Xₜ}_{t≥0}, {ℱₜ}_{t≥0}) ↔
    (∀s,t: 𝔼[Xₜ|ℱₛ] ≤ Xₛ[a.s.])
  ) →
  assert(
    isSubmartingale({Xₜ}_{t≥0}, {ℱₜ}_{t≥0}) ↔
    (∀s,t: 𝔼[Xₜ|ℱₛ] ≥ Xₛ[a.s.])
  ) →
  assert(
    (𝔼[Xₜ|ℱₛ] = Xₛ[a.s.]) ↔
    (𝔼[Xₜ|ℱₛ] ≤ Xₛ[a.s.] ∧ 𝔼[Xₜ|ℱₛ] ≥ Xₛ[a.s.])
  )
}