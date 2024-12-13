theorem Beta_Half_Half() {
  assert(
    β(1/2, 1/2) = π
    where β: ℝ × ℝ → ℝ is the Beta function
  )
} ↔

proof Beta_Half_Half_1() {
  define(β(x,y) := 2∫[0,π/2] sin(θ)^(2x-1) cos(θ)^(2y-1) dθ) →
  assert(
    β(1/2, 1/2) = 2∫[0,π/2] sin(θ)^(2×1/2-1) cos(θ)^(2×1/2-1) dθ
  ) →
  simplify(2×1/2-1 = 0) →
  assert(
    β(1/2, 1/2) = 2∫[0,π/2] sin(θ)^0 cos(θ)^0 dθ
  ) →
  simplify(sin(θ)^0 = cos(θ)^0 = 1) →
  assert(
    β(1/2, 1/2) = 2∫[0,π/2] dθ
  ) →
  evaluate(∫[0,π/2] dθ = π/2) →
  conclude(β(1/2, 1/2) = 2(π/2) = π)
}

proof Beta_Half_Half_2() {
  define(β(x,y) := ∫[0,1] t^(x-1)(1-t)^(y-1) dt) →
  assert(
    β(1/2, 1/2) = ∫[0,1] t^(-1/2)(1-t)^(-1/2) dt
  ) →
  substitute(t = sin²(θ)) →
  assert(dt = 2sin(θ)cos(θ)dθ) →
  mapBounds(
    t=0 → θ=0,
    t=1 → θ=π/2
  ) →
  assert(
    β(1/2, 1/2) = ∫[0,π/2] (2sin(θ)cos(θ))/(sin(θ)√(1-sin²(θ))) dθ
  ) →
  simplify(√(1-sin²(θ)) = cos(θ)) →
  assert(
    β(1/2, 1/2) = ∫[0,π/2] 2 dθ
  ) →
  evaluate(∫[0,π/2] 2 dθ = π) →
  conclude(β(1/2, 1/2) = π)
}

proof Beta_Half_Half_3() {
  define(β(x,y) := ∫[0,1] t^(x-1)(1-t)^(y-1) dt) →
  assert(
    β(1/2, 1/2) = ∫[0,1] t^(-1/2)(1-t)^(-1/2) dt
  ) →
  substitute(t = u²) →
  assert(dt = 2u du) →
  mapBounds(
    t=0 → u=0,
    t=1 → u=1
  ) →
  assert(
    β(1/2, 1/2) = ∫[0,1] (2u)/(u√(1-u²)) du
  ) →
  simplify() →
  assert(
    β(1/2, 1/2) = 2∫[0,1] 1/√(1-u²) du
  ) →
  evaluate(∫[0,1] 1/√(1-u²) du = arcsin(1) = π/2) →
  conclude(β(1/2, 1/2) = 2(π/2) = π)
}