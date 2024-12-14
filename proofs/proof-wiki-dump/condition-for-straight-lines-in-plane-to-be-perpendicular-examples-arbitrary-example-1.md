theorem Perpendicular_Lines_Example() {
  assert(
    ∃L₁,L₂: Line ∧
    L₁: (3x - 4y = 7) ∧
    L₂ ⊥ L₁ ∧
    (1,2) ∈ L₂ →
    L₂: (4x + 3y = 10)
  )
}

proof Perpendicular_Lines_Example() {
  lemma Perpendicular_Line_Form() {
    assert(
      L₁: (3x - 4y = 7) →
      L₂ ⊥ L₁ →
      ∃C ∈ ℝ: L₂: (4x + 3y = C)
    )
  } →
  
  apply(Perpendicular_Line_Form()) →
  setVar(C: ℝ) →
  
  assert(
    (1,2) ∈ L₂ →
    4(1) + 3(2) = C
  ) →
  
  calc(
    C = 4(1) + 3(2)
    C = 4 + 6
    C = 10
  ) →
  
  substitute(C = 10) →
  assert(L₂: (4x + 3y = 10))
}