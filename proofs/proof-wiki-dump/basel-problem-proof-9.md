theorem Basel_Problem() {
  assert(
    ∑(n=1 to ∞)[1/n²] = π²/6
  )
} ↔

proof Basel_Problem() {
  define(f: ℝ → ℝ) {
    domain(x ∈ (0,2π)) →
    f(x) = {
      (x-π)² : 0 < x ≤ π,
      π² : π < x < 2π
    }
  } →
  
  assert(
    f(x) ∼ (2π²/3) + ∑(n=1 to ∞)[
      (2cos(nx)/n²) + (((-1)ⁿπ)/n + (2((-1)ⁿ-1))/(πn³))sin(nx)
    ]
  ) →
  
  setVar(x := 0) →
  assert(
    f(0) = (2π²/3) + ∑(n=1 to ∞)[
      (2cos(0)/n²) + (((-1)ⁿπ)/n + (2((-1)ⁿ-1))/(πn³))sin(0)
    ]
  ) →
  
  apply(sin(0) = 0) →
  assert(
    (0-π)² = (2π²/3) + ∑(n=1 to ∞)[2cos(0)/n²]
  ) →
  
  apply(cos(0) = 1) →
  assert(
    π² = (2π²/3) + 2∑(n=1 to ∞)[1/n²]
  ) →
  
  solve(
    π² = (2π²/3) + 2∑(n=1 to ∞)[1/n²]
  ) →
  
  assert(
    (π²/2 - π²/3) = ∑(n=1 to ∞)[1/n²]
  ) →
  
  simplify() →
  assert(
    π²/6 = ∑(n=1 to ∞)[1/n²]
  )
}