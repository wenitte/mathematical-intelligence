theorem Parallel_Lines_Example() {
  assert(
    ∀L₁,L₂[lines] ∧ 
    (L₁: 3x - 4y = 7) ∧
    (L₂ || L₁) ∧
    (⟨1,2⟩ ∈ L₂) ⇒
    L₂: 3x - 4y = -5
  )
}

proof Parallel_Lines_Example() {
  setVar(L₁: line, L₂: line) →
  lemma Parallel_Lines_Form() {
    assert(
      L₂ || L₁ ⇒ L₂: 3x - 4y = C[∃C ∈ ℝ]
    )
  } →
  assert(⟨1,2⟩ ∈ L₂) →
  substitute(x=1, y=2) {
    3(1) - 4(2) = C →
    3 - 8 = C →
    -5 = C
  } →
  assert(L₂: 3x - 4y = -5)
}