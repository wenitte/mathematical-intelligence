theorem Center_In_Closed_Ball_P_adic() {
  let(p: Prime) ∧
  let(Qp: NormedField, ∥·∥_p: Norm) ∧
  let(a: Qp) ∧
  let(ϵ: ℝ>0) ∧
  let(B_ϵ⁻(a): ClosedBall) →
  assert(
    a ∈ B_ϵ⁻(a)
  )
} ↔

proof Center_In_Closed_Ball_P_adic() {
  assert(B_ϵ⁻(a) = {x ∈ Qp | ∥x - a∥_p ≤ ϵ}) →
  lemma Center_In_Closed_Ball_Normed_Ring() {
    assert(∀R: NormedDivisionRing, ∀c ∈ R, ∀r > 0 →
      c ∈ B_r⁻(c)
    )
  } →
  apply(Center_In_Closed_Ball_Normed_Ring(), [Qp, a, ϵ]) →
  assert(a ∈ B_ϵ⁻(a))
}