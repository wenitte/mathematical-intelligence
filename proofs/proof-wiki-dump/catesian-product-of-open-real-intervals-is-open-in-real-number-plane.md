theorem CartesianProductOpenIntervals() {
  let(R2_d: MetricSpace(R², EuclideanMetric)) →
  let(a,b,c,d: R) →
  let(S = OpenInterval(a,b) × OpenInterval(c,d)) →
  assert(
    S ∈ OpenSets(R2_d)
  )
} ↔

proof CartesianProductOpenIntervals() {
  let(P = (x,y) ∈ S) →
  assert(a < x < b ∧ c < y < d) →
  
  let(ε = min{x-a, b-x, y-c, d-y}) →
  assert(ε > 0) →
  
  let(Bε(P): OpenBall(P,ε)) →
  let(Q = (x₀,y₀) ∈ Bε(P)) →
  
  assert(
    Q ∈ Bε(P) → |x - x₀| < ε ∧ |y - y₀| < ε
  ) →
  
  assert(
    |x - x₀| < x-a ∧
    |x - x₀| < b-x ∧
    |y - y₀| < y-c ∧
    |y - y₀| < d-y
  ) →
  
  lemma PointInSet() {
    assert(
      (|x - x₀| < x-a ∧ |x - x₀| < b-x) →
      a < x₀ < b
    ) ∧
    assert(
      (|y - y₀| < y-c ∧ |y - y₀| < d-y) →
      c < y₀ < d
    )
  } →
  
  apply(PointInSet()) →
  assert(Q ∈ S) →
  assert(Bε(P) ⊆ S) →
  
  conclude(
    ∀P∈S ∃ε>0: Bε(P)⊆S → S ∈ OpenSets(R2_d)
  )
}