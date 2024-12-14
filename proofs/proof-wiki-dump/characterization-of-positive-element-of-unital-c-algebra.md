theorem CStarAlgebraPositiveElement() {
  let(A: CStarAlgebra, unital) ∧
  let(a: A, hermitian) ∧
  let(t: ℝ, t ≥ 0) →
  assert(
    (‖a - t𝟙_A‖ ≤ t → a_positive) ∧
    (‖a‖ ≤ t ∧ a_positive → ‖a - t𝟙_A‖ ≤ t)
  )
} ↔

proof CStarAlgebraPositiveElement() {
  let(B: CStarAlgebra) →
  assert(B = generate({𝟙_A, x})) →
  
  lemma CommutativeSelfAdjoint() {
    assert(B.commutative)
  } →
  
  lemma SpectrumEquality() {
    assert(σ_B(x) = σ_A(x))
  } →
  
  let(Φ_B: spectrum(B)) →
  let(G: isometricUnitalStarIso(B → C(Φ_B))) →

  // Forward direction
  assume(‖a - t𝟙_A‖ ≤ t) →
  assert(‖G(a) - t‖_∞ = ‖a - t𝟙_A‖ ≤ t) →
  let(f = G(a)) →
  assert(f.hermitian) →
  assert(∀φ∈Φ_B → f(φ)∈ℝ) →
  assert(∀φ∈Φ_B → f(φ)∈[0,2t]) →
  assert(σ_C(Φ_B)(f) ⊆ [0,2t]) →
  assert(σ_A(a) = σ_B(a) = σ_C(Φ_B)(f) ⊆ [0,2t] ⊆ [0,∞)) →
  conclude(a_positive) →

  // Reverse direction
  assume(‖a‖ ≤ t ∧ a_positive) →
  let(f = G(a)) →
  assert(σ_C(Φ_B)(f) = σ_B(a) = σ_A(a)) →
  assert(σ_C(Φ_B)(f) ⊆ [0,∞)) →
  assert(∀φ∈Φ_B → f(φ)∈[0,∞)) →
  assert(‖f‖_∞ ≤ t) →
  assert(∀φ∈Φ_B → f(φ)∈[0,t]) →
  assert(∀φ∈Φ_B → t-f(φ)∈[0,t]) →
  assert(‖t - G(a)‖_∞ ≤ t) →
  conclude(‖a - t𝟙_A‖ ≤ t)
}