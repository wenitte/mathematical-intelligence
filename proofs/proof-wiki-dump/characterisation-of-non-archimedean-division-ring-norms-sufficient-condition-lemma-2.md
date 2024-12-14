theorem NormPowerBound(R: NormedDivisionRing) {
  assert(
    ∀x ∈ R ∧ ∀n ∈ ℕ ∧ ∀i ∈ ℕ[0..n] ⇒
    ‖xⁱ‖ ≤ max{‖xⁿ‖, 1}
  )
}

proof NormPowerBound(R: NormedDivisionRing) {
  setVar(x: R) →
  setVar(n: ℕ) →
  
  case NormGreaterOne() {
    assume(‖x‖ > 1) →
    assert(∀i ∈ ℕ[0..n] ⇒ ‖xⁱ‖ ≤ ‖xⁿ‖) →
    assert(‖xⁿ‖ ≤ max{‖xⁿ‖, 1})
  } →

  case NormLessEqualOne() {
    assume(‖x‖ ≤ 1) →
    assert(∀i ∈ ℕ[0..n] ⇒ ‖xⁱ‖ ≤ 1) →
    assert(1 ≤ max{‖xⁿ‖, 1})
  } →

  byExhaustiveCases() →
  assert(∀i ∈ ℕ[0..n] ⇒ ‖xⁱ‖ ≤ max{‖xⁿ‖, 1})
}