theorem Power_Complex_Lemma() {
  assert(
    ∀z ∈ ℂ, ∀n ∈ ℤ₊ ∧ 
    let(z = a + bi) ∧
    let(zⁿ = uₙ + i·vₙ) ⇒
    zⁿ⁺¹ = uₙ₊₁ + i·vₙ₊₁ ∧
    uₙ₊₁ = a·uₙ - b·vₙ ∧
    vₙ₊₁ = a·vₙ + b·uₙ
  )
}

proof Power_Complex_Lemma() {
  setVar(z: ℂ, n: ℤ₊) →
  let(z = a + bi) →
  let(zⁿ = uₙ + i·vₙ) →
  
  assert(zⁿ⁺¹ = zⁿ × z) →
  
  lemma Complex_Multiplication() {
    assert((uₙ + i·vₙ)(a + bi) = (a·uₙ - b·vₙ) + i(a·vₙ + b·uₙ))
  } →
  
  apply(Complex_Multiplication()) →
  
  assert(
    zⁿ⁺¹ = (uₙ + i·vₙ)(a + bi) = (a·uₙ - b·vₙ) + i(a·vₙ + b·uₙ)
  ) →
  
  let(uₙ₊₁ = a·uₙ - b·vₙ) →
  let(vₙ₊₁ = a·vₙ + b·uₙ) →
  
  assert(zⁿ⁺¹ = uₙ₊₁ + i·vₙ₊₁)
}