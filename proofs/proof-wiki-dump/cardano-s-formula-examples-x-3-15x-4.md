theorem CardanoFormula_Example() {
  assert(∀x ∈ ℝ: x³ - 15x - 4 = 0 ↔ 
    x ∈ {4, -2 + √3, -2 - √3}
  )
}

proof CardanoFormula_Example() {
  setVar(x: ℝ) →
  defineCoefficients() {
    assert(a = 1 ∧ b = 0 ∧ c = -15 ∧ d = -4)
  } →

  lemma ComputeQ() {
    assert(Q = (3ac - b²)/(9a²)) →
    assert(Q = (3(1)(-15) - 0²)/(9(1)²)) →
    assert(Q = -5)
  } →

  lemma ComputeR() {
    assert(R = (9abc - 27a²d - 2b³)/(54a³)) →
    assert(R = (9(1)(0)(-15) - 27(1)²(-4) - 2(0)³)/(54(1)³)) →
    assert(R = 2)
  } →

  lemma CardanoSolution() {
    assert(x = S + T) ∧
    assert(S = ∛(R + √(Q³ + R²))) ∧
    assert(T = ∛(R - √(Q³ + R²))) →
    assert(x = ∛(2 + √(-125 + 4)) + ∛(2 - √(-125 + 4))) →
    assert(x = ∛(2 + √(-121)) + ∛(2 - √(-121))) →
    assert(x = ∛(2 + 11i) + ∛(2 - 11i))
  } →

  lemma RootAnalysis() {
    assert(D = Q³ + R² = -121 < 0) →
    assert(∀roots ∈ ℝ ∧ roots are distinct) →
    
    define_cubeRoots() {
      assert(∛(2 + 11i) = {2 + i, -1 + (√3/2) + i(-1/2 - √3), 
                           -1 - (√3/2) + i(-1/2 + √3)}) ∧
      assert(∛(2 - 11i) = {2 - i, -1 + (√3/2) + i(1/2 + √3),
                           -1 - (√3/2) + i(1/2 - √3)})
    } →
    
    findRealSolutions() {
      assert((2 + i) + (2 - i) = 4) ∧
      assert((-1 + √3/2 + i(-1/2 - √3)) + (-1 + √3/2 + i(1/2 + √3)) = -2 + √3) ∧
      assert((-1 - √3/2 + i(-1/2 + √3)) + (-1 - √3/2 + i(1/2 - √3)) = -2 - √3)
    }
  } →

  conclude() {
    assert(x³ - 15x - 4 = (x - 4)(x - (-2 - √3))(x - (-2 + √3))) →
    assert(x³ - 15x - 4 = (x - 4)(x² + 4x + 1))
  }
}