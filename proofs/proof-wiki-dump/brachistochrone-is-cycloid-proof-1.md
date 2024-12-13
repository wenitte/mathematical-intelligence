theorem Brachistochrone_Is_Cycloid() {
  assert(
    ∀curve[Brachistochrone] ↔ curve[Cycloid]
  )
} ↔

proof Brachistochrone_Is_Cycloid() {
  // Snell-Descartes Law generalization
  lemma Snell_Descartes() {
    assert(∀α,v → (sin(α)/v = k)) where k ∈ ℝ
  } →

  // Conservation of Energy
  lemma Energy_Conservation() {
    setVar(m,g,v,y: ℝ) →
    assert((1/2)mv² = mgy) →
    assert(v² = 2gy) →
    assert(v = √(2gy))  // equation (1)
  } →

  // Geometric relations
  lemma Geometric_Relations() {
    assert(sin(α) = cos(β)) →
    assert(cos(β) = 1/sec(β)) →
    assert(1/sec(β) = 1/√(1 + tan²(β))) →
    assert(1/√(1 + tan²(β)) = 1/√(1 + (y')²))  // equation (2)
  } →

  // Differential equation derivation
  apply(Snell_Descartes()) ∧
  apply(Energy_Conservation()) ∧
  apply(Geometric_Relations()) →
  assert(1/(y(1 + (y')²)) = 2k²g = 1/c) where c ∈ ℝ →
  
  // Solve differential equation
  assert((y')² = (c/y) - 1) →
  assert(dy/dx = √((c-y)/y)) →  // equation (3)
  
  // Change of variable
  setVar(φ: ℝ) →
  assert(√(y/(c-y)) = tan(φ)) →  // equation (4)
  assert(y = c·sin²(φ)) →  // equation (5)
  assert(dy/dφ = 2c·sin(φ)cos(φ)) →  // equation (6)

  // Final parametric equations
  setVar(a = c/2, θ = 2φ) →
  assert(x = a(θ - sin(θ))) ∧
  assert(y = a(1 - cos(θ))) →
  
  // Conclusion
  conclude(
    ∃a,θ → [x = a(θ - sin(θ)) ∧ y = a(1 - cos(θ))] ↔ curve[Cycloid]
  )
}