theorem Center_Open_Ball_P_Adic() {
  let(p: Prime) ∧
  let(Qp: NormedDivisionRing) ∧
  let(norm_p: Norm(Qp)) ∧
  let(a: Qp) ∧
  let(ε: ℝ>0) ∧
  let(Bε(a): OpenBall(Qp, ε, a)) →
  assert(
    a ∈ Bε(a)
  )
} ↔

proof Center_Open_Ball_P_Adic() {
  define(Bε(a)) {
    assert(Bε(a) = {x ∈ Qp | norm_p(x - a) < ε})
  } →
  apply(Center_Open_Ball_Normed_Division_Ring()) {
    verify(Qp: NormedDivisionRing) ∧
    verify(a: Qp) ∧
    verify(ε: ℝ>0) →
    conclude(a ∈ Bε(a))
  } →
  assert(a ∈ Bε(a))
}