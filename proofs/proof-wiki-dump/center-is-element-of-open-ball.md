theorem Center_In_Open_Ball_Metric() {
  assume(M = ⟨A,d⟩: MetricSpace) ∧
  assume(a ∈ A) ∧
  assume(ε ∈ ℝ_{>0}) ∧
  assume(B_ε(a): OpenBall(a,ε,M))
  assert(
    a ∈ B_ε(a)
  )
} ↔

theorem Center_In_Open_Ball_Normed() {
  assume(⟨R,‖·‖⟩: NormedDivisionRing) ∧
  assume(a ∈ R) ∧
  assume(ε ∈ ℝ_{>0}) ∧
  assume(B_ε(a): OpenBall(a,ε,⟨R,‖·‖⟩))
  assert(
    a ∈ B_ε(a)
  )
} ↔

theorem Center_In_Open_Ball_Padic() {
  assume(p: Prime) ∧
  assume(⟨ℚ_p,‖·‖_p⟩: PAdicNumbers) ∧
  assume(a ∈ ℚ_p) ∧
  assume(ε ∈ ℝ_{>0}) ∧
  assume(B_ε(a): OpenBall(a,ε,⟨ℚ_p,‖·‖_p⟩))
  assert(
    a ∈ B_ε(a)
  )
} ↔

proof Center_In_Open_Ball() {
  apply(MetricAxiom_M1()) →
  assert(d(a,a) = 0) →
  assert(ε > 0) →
  assert(d(a,a) < ε) →
  apply(OpenBall_Definition()) →
  assert(a ∈ B_ε(a))
}