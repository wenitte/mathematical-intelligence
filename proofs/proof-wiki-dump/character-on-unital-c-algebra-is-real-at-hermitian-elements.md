theorem Character_Hermitian_Real() {
  assert(
    ∀A: CStarAlgebra ∧ ∀φ: Character(A) ∧ ∀x: Hermitian(A) ⇒
    φ(x) ∈ ℝ
  )
} ↔

proof Character_Hermitian_Real() {
  setVar(A: CStarAlgebra) →
  setVar(φ: Character(A)) →
  setVar(x: Hermitian(A)) →
  
  letExist(α,β: ℝ | φ(x) = α + iβ) →
  
  define(x_t := x + it𝟙_A, t: ℝ) →
  
  lemma CharacterUnital() {
    assert(φ(𝟙_A) = 1)
  } →
  
  apply(CharacterUnital()) →
  assert(φ(x_t) = φ(x) + it = α + i(β + t)) →
  assert(|φ(x_t)|² = α² + (β + t)²) →
  
  assert(|φ(x_t)|² ≤ ‖x_t‖²) by CharacterContinuous →
  assert(‖x_t‖² = ‖x_t x_t*‖) by CStarDef →
  assert(‖x_t x_t*‖ = ‖(x + it𝟙_A)(x - it𝟙_A)‖) by InvolutionDef →
  assert(‖(x + it𝟙_A)(x - it𝟙_A)‖ = ‖x² + t²𝟙_A‖) →
  assert(‖x² + t²𝟙_A‖ ≤ ‖x²‖ + t²) by NormTriangle →
  assert(‖x²‖ + t² ≤ ‖x‖² + t²) by NormPower →
  
  assert(∀t: ℝ ⇒ α² + β² + 2βt ≤ ‖x‖²) →
  
  byContradiction(β ≠ 0) {
    case(β > 0) {
      letExist(t > ‖x‖²/(2β)) →
      assert(α² + β² + 2βt > ‖x‖²) →
      contradiction()
    } →
    case(β < 0) {
      letExist(t < -‖x‖²/(2β)) →
      assert(α² + β² + 2βt > ‖x‖²) →
      contradiction()
    }
  } →
  
  assert(β = 0) →
  conclude(φ(x) = α ∈ ℝ)
}