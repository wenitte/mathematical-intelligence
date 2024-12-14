theorem Center_In_Open_Ball_Normed_Ring() {
  let(R: NormedDivisionRing, ||·||: Norm) →
  let(a: R) →
  let(ε: ℝ, ε > 0) →
  let(Bₑ(a): OpenBall) →
  assert(
    Bₑ(a) = {x ∈ R | ||x - a|| < ε} →
    a ∈ Bₑ(a)
  )
}

proof Center_In_Open_Ball_Normed_Ring() {
  let(d: Metric) →
  assert(d(x,y) = ||x - y||) →
  
  lemma OpenBall_Equivalence() {
    assert(
      Bₑ(a) in (R, ||·||) ↔ Bₑ(a) in (R,d)
    )
  } →
  
  lemma Center_In_Ball_Metric() {
    assert(
      ∀x ∈ R, ∀ε > 0 →
      x ∈ Bₑ(x) in (R,d)
    )
  } →
  
  apply(OpenBall_Equivalence()) →
  apply(Center_In_Ball_Metric()) →
  assert(a ∈ Bₑ(a))
}