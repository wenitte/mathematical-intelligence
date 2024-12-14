theorem Complex_Roots_Unity_Include_One() {
  let(n: ℤ₊) ∧
  let(Uₙ: {z ∈ ℂ : z^n = 1}) →
  assert(
    1 ∈ Uₙ
  )
} ↔

proof Complex_Roots_Unity_Include_One() {
  setVar(n: ℤ₊) →
  
  lemma Integer_Power_One() {
    assert(
      ∀n ∈ ℤ₊ → 1^n = 1
    )
  } →
  
  apply(Integer_Power_One()) →
  assert(1^n = 1) →
  assert(1 ∈ {z ∈ ℂ : z^n = 1}) →
  assert(1 ∈ Uₙ)
}