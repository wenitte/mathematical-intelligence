theorem Bertrand() {
  assert(
    ∀U: ℝ₊ → ℝ ∧ U.isAnalytic() ∧
    ∃M > 0 ∧ hasStableCircularOrbit(M) ∧
    ∀orbit.nearCircular() ⇒ orbit.isClosed() →
    U = kr² ∨ U = -k/r, k > 0
  )
} ↔

proof Bertrand() {
  // Preliminary definitions
  setVar(m = 1) →
  define(U_M(r) = U(r) + M²/(2r²)) →
  define(Φ(r) = √2 ∫[r_min → r_max] (M dr)/(r² √(E - U_M(r)))) →
  
  // Variable substitution
  let(x = M/r) →
  assert(Φ = √2 ∫[x_min → x_max] dx/√(E - W(x))) →
  define(W(x) ≡ U(M/x) + x²/2) →
  
  // Oscillation frequency analysis
  assert(ω = √(V''(x₀)/m)) →
  assert(Φ ≈ 2π(M/x₀²)√W''(x₀)) →
  assert(Φ = 2π√(U'/(3U' + x₀U))) →
  
  // Solution analysis
  case(Φ.isConstant()) {
    assert(U(r) = kr^α, α ≥ -2, α ≠ 0 ∨ U(r) = b·ln(r)) →
    assert(Φ = 2π/√(α + 2))
  } →
  
  // Analysis for α > 0
  case(α > 0) {
    let(x = y·x_max) →
    assert(lim[E→∞](Φ) = π) →
    assert(2π/√(α + 2) = π) →
    assert(α = 2)
  } →
  
  // Analysis for negative power
  case(U(r) = -kr^(-β), 0 < β < 2) {
    assert(lim[E→-0](Φ) = 2π/(2 - β)) →
    assert(2π/(2 + α) = 2π/√(2 + α)) →
    assert(α = -1)
  } →
  
  conclude(U(r) = kr² ∨ U(r) = -k/r, k > 0)
}