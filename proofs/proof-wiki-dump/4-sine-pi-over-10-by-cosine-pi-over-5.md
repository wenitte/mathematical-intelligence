theorem TrigIdentity_4SinPi10CosPi5() {
  assert(
    4 * sin(π/10) * cos(π/5) = 1
  )
} ↔

proof TrigIdentity_4SinPi10CosPi5_Complex() {
  setVar(z: ℂ) →
  assert((z + 1)(z² - 2z*cos(π/5) + 1)(z² - 2z*cos(3π/5) + 1) = z⁵ + 1) →
  
  let(z = i) →
  assert((1 + i)(-1 - 2i*cos(π/5) + 1)(-1 - 2i*cos(3π/5) + 1) = i + 1) →
  
  simplify() →
  assert(-4(1 + i)*cos(π/5)*cos(3π/5) = i + 1) →
  
  equateRealParts() →
  assert(-4*cos(π/5)*cos(π/10 + π/2) = 1) →
  
  apply(cos(A + π/2) = -sin(A)) →
  assert(-4*cos(π/5)*(-sin(π/10)) = 1) →
  
  simplify() →
  assert(4*sin(π/10)*cos(π/5) = 1)
} ∧

proof TrigIdentity_4SinPi10CosPi5_Angles() {
  setVar(θ: ℝ) →
  assert(4*sin(θ)*cos(2θ) = 1) →
  
  multiply(both_sides, cos(θ)) →
  assert(4*sin(θ)*cos(θ)*cos(2θ) = cos(θ)) →
  
  apply(DoubleAngleFormula_Sin(2θ)) →
  assert(2*sin(2θ)*cos(2θ) = cos(θ)) →
  
  apply(DoubleAngleFormula_Sin(4θ)) →
  assert(sin(4θ) = cos(θ)) →
  
  apply(SineComplement()) →
  assert(sin(π/2 - θ) = cos(θ)) →
  
  solve(θ) →
  assert(θ = π/10) →
  
  substitute(θ = π/10) →
  assert(4*sin(π/10)*cos(π/5) = 1)
}