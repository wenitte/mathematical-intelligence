theorem Clavius_Law_2() {
  assert(
    (¬p ⟹ p) ⟹ p
  )
} ↔

proof Clavius_Law_2() {
  setVar(p: 𝔹) →
  lemma Truth_Table() {
    assert(
      [(¬p ⟹ p) ⟹ p] = [
        case(p = F):
          (T ⟹ F) ⟹ F →
          F ⟹ F →
          T
        case(p = T):
          (F ⟹ T) ⟹ T →
          T ⟹ T →
          T
      ]
    )
  } →
  apply(Truth_Table()) →
  assert(∀p ∈ 𝔹: [(¬p ⟹ p) ⟹ p] = T)
}