theorem BanachAlgebraCharacter() {
  let(A: BanachAlgebra, ||·||: Norm, ℂ: ComplexNumbers) →
  let(A₊: Unitization(A), ||·||_{A₊}: Norm) →
  let(φ: Function(A₊ → ℂ), character(φ)) →
  assert(
    (∀x,λ ∈ A₊: φ(x,λ) = λ) ∨
    (∃φ̃: character(A): φ(x,λ) = φ̃(x) + λ)
  )
} ↔

proof BanachAlgebraCharacter() {
  // Initial setup from linearity
  assert(φ(x,λ) = φ(x,0) + λφ(0,1)) →
  apply(CharacterUnitalBanachAlgebra()) →
  assert(φ(0,1) = 1) →
  assert(φ(x,λ) = φ(x,0) + λ) →

  lemma Case1_TrivialCharacter() {
    let((x,λ),(y,μ) ∈ A₊, t ∈ ℂ) →
    assert(φ(x,λ) + tφ(y,μ) = λ + tμ = φ(x + ty, λ + tμ)) →
    assert(φ(x,λ)φ(y,μ) = λμ = φ(xy,λμ)) →
    conclude(character(φ) ∧ ∀x∈A: φ(x,0) = 0)
  } →

  lemma Case2_NonTrivialCharacter() {
    assume(∃x∈A: φ(x,0) ≠ 0) →
    let(φ̃(x) = φ(x,0)) →
    assert(φ̃(x) + tφ̃(y) = φ(x,0) + tφ(y,0) = φ(x + ty,0) = φ̃(x + ty)) →
    assert(φ̃(x)φ̃(y) = φ(x,0)φ(y,0) = φ(xy,0) = φ̃(xy)) →
    conclude(character(φ̃) ∧ φ(x,λ) = φ̃(x) + λ)
  } →

  lemma Converse() {
    let(φ̃: character(A)) →
    define(φ(x,λ) = φ̃(x) + λ) →
    let((x,λ),(y,μ) ∈ A₊, t ∈ ℂ) →
    assert(φ(x + ty, λ + tμ) = φ̃(x + ty) + (λ + tμ) = 
           (φ̃(x) + λ) + t(φ̃(y) + μ) = φ(x,λ) + tφ(y,μ)) →
    assert(φ(x,λ)φ(y,μ) = (φ̃(x) + λ)(φ̃(y) + μ) = 
           φ̃(xy + λy + μx) + λμ = φ((x,λ)(y,μ))) →
    conclude(character(φ))
  }
}