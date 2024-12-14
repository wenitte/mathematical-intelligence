theorem Chebyshev_Distance_Is_Metric() {
  let M[i] = (A[i], d[i]) for i ∈ [1..n] be metric spaces
  let A = ∏(i=1..n) A[i]
  let d[∞]: A × A → ℝ where
  d[∞](x,y) = max(i=1..n){d[i](x[i],y[i])}
  assert(
    d[∞] is a metric on A
  )
} ↔

proof Chebyshev_Distance_Is_Metric() {
  // M1: d(x,x) = 0
  proof_M1() {
    assert(d[∞](x,x) = max(i=1..n){d[i](x[i],x[i])}) →
    assert(∀i: d[i](x[i],x[i]) = 0) →
    assert(max(i=1..n){0} = 0)
  } →

  // M2: Triangle Inequality
  proof_M2() {
    setVar(k ∈ [1..n]: d[k](x[k],z[k]) = max(i=1..n){d[i](x[i],z[i])}) →
    assert(d[k](x[k],z[k]) = d[∞](x,z)) →
    assert(d[k](x[k],z[k]) ≤ d[k](x[k],y[k]) + d[k](y[k],z[k])) →
    assert(d[k](x[k],y[k]) ≤ max(i=1..n){d[i](x[i],y[i])}) →
    assert(d[k](y[k],z[k]) ≤ max(i=1..n){d[i](y[i],z[i])}) →
    assert(d[∞](x,z) ≤ d[∞](x,y) + d[∞](y,z))
  } →

  // M3: Symmetry
  proof_M3() {
    assert(d[∞](x,y) = max(i=1..n){d[i](x[i],y[i])}) →
    assert(∀i: d[i](x[i],y[i]) = d[i](y[i],x[i])) →
    assert(d[∞](x,y) = d[∞](y,x))
  } →

  // M4: Positive definiteness
  proof_M4() {
    assert(x ≠ y → ∃k ∈ [1..n]: x[k] ≠ y[k]) →
    assert(x[k] ≠ y[k] → d[k](x[k],y[k]) > 0) →
    assert(d[k](x[k],y[k]) > 0 → max(i=1..n){d[i](x[i],y[i])} > 0) →
    assert(d[∞](x,y) > 0)
  }
}