theorem Acceleration_Relative() {
  assert(
    ∀A,B ∈ Bodies ∧
    ∀𝐚_A,𝐚_B,𝐚_AB ∈ ℝ³ ∧
    isAcceleration(𝐚_A, A) ∧
    isAcceleration(𝐚_B, B) ∧
    isRelativeAcceleration(𝐚_AB, A, B) ⇒
    𝐚_A = 𝐚_AB + 𝐚_B
  )
} ↔

proof Acceleration_Relative() {
  setVar(A,B: Bodies) →
  setVar(𝐚_A,𝐚_B,𝐚_AB: ℝ³) →
  
  lemma RelativeAccel_Definition() {
    assert(
      𝐚_AB = 𝐚_A - 𝐚_B
    )
  } →
  
  apply(RelativeAccel_Definition()) →
  assert(𝐚_AB = 𝐚_A - 𝐚_B) →
  assert(𝐚_AB + 𝐚_B = 𝐚_A - 𝐚_B + 𝐚_B) →
  assert(𝐚_AB + 𝐚_B = 𝐚_A) →
  assert(𝐚_A = 𝐚_AB + 𝐚_B)
}