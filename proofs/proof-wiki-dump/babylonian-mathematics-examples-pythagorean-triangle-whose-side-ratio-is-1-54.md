theorem BabylonianPythagoreanTriangle() {
  assert(
    ∃a,b,c ∈ ℤ⁺ ∧ (a² + b² = c²) ∧ (c/a = 1.54) →
    [a = 540 ∧ c = 829]
  )
} ↔

proof BabylonianPythagoreanTriangle() {
  setVar(a,b,c: ℤ⁺) →
  assume(a² + b² = c² ∧ c/a = 1.54) →
  assume(a is even) →
  
  lemma PythagoreanParametrization() {
    assert(∃p,q ∈ ℤ⁺ →
      a = 2pq ∧
      b = p² - q² ∧
      c = p² + q²
    )
  } →
  
  apply(PythagoreanParametrization()) →
  assert(c/a = 1/2(p/q + q/p)) →
  
  setVar(t: ℝ) →
  assert(t = p/q) →
  assert(1/2(t + 1/t) = 1.54) →
  assert(t² + 1 = 3.08t) →
  assert(t = ±2.711 ∨ t = 0.369) →
  assert(t = 2.711 since p > q) →
  
  assert(p/q ≈ 27/10) →
  setVar(p = 27, q = 10) →
  
  compute(
    a = 2pq = 2(27)(10) = 540,
    c = p² + q² = 27² + 10² = 829
  ) →
  
  verify(c/a = 829/540 ≈ 1.535) →
  conclude(a = 540 ∧ c = 829)
}