theorem Center_In_Closed_Ball_Metric() {
  let(M = ⟨A,d⟩: MetricSpace) ∧
  let(a ∈ A) ∧
  let(ε ∈ ℝ>0) ∧
  let(Bₑ⁻(a): ClosedBall) →
  assert(a ∈ Bₑ⁻(a))
}

theorem Center_In_Closed_Ball_Normed() {
  let(⟨R,‖·‖⟩: NormedDivisionRing) ∧
  let(a ∈ R) ∧
  let(ε ∈ ℝ>0) ∧
  let(Bₑ⁻(a): ClosedBall) →
  assert(a ∈ Bₑ⁻(a))
}

theorem Center_In_Closed_Ball_PAdic() {
  let(p: Prime) ∧
  let(⟨ℚₚ,‖·‖ₚ⟩: PAdicNumbers) ∧
  let(a ∈ ℚₚ) ∧
  let(ε ∈ ℝ>0) ∧
  let(Bₑ⁻(a): ClosedBall) →
  assert(a ∈ Bₑ⁻(a))
}

proof Center_In_Closed_Ball() {
  apply(MetricAxiom_M1) →
  assert(d(a,a) = 0) →
  given(ε > 0) →
  conclude(d(a,a) < ε) →
  apply(ClosedBall_Definition) →
  conclude(a ∈ Bₑ⁻(a))
}