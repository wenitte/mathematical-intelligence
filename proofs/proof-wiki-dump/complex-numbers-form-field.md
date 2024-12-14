theorem Complex_Numbers_Field() {
  assert(
    let S = ⟨ℂ, +, ×⟩ ⇒
    isField(S)
  )
} ↔

proof Complex_Numbers_Field() {
  let S = ⟨ℂ, +, ×⟩ →
  
  lemma Addition_Group() {
    assert(⟨ℂ, +⟩ isAbelianGroup)
  } →

  lemma Multiplication_Group() {
    assert(⟨ℂ\{0}, ×⟩ isAbelianGroup)
  } →

  lemma Distribution() {
    assert(
      ∀a,b,c ∈ ℂ ⇒
      a × (b + c) = (a × b) + (a × c)
    )
  } →

  apply(Addition_Group()) ∧
  apply(Multiplication_Group()) ∧
  apply(Distribution()) →

  assert(
    isAbelianGroup(⟨ℂ, +⟩) ∧
    isAbelianGroup(⟨ℂ\{0}, ×⟩) ∧
    hasDistributiveProperty(×, +) ⇒
    isField(S)
  )
}