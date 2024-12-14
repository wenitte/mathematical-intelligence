theorem Complement_Empty_Set_Is_Universal() {
  assert(
    ℂ(∅) = 𝕌
  )
} ↔

proof Complement_Empty_Set_Is_Universal() {
  lemma Relative_Complement_Empty() {
    assert(
      ∀S ∈ Set, S ∖ ∅ = S
    )
  } →
  
  let(S := 𝕌) →
  apply(Relative_Complement_Empty()) →
  assert(𝕌 ∖ ∅ = 𝕌) →
  assert(ℂ(∅) = 𝕌 ∖ ∅) →
  assert(ℂ(∅) = 𝕌)
}