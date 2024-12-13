theorem Area_Under_Sine_Arc() {
  assert(
    ∫[0,π] sin(x) dx = 2
  )
} ↔

proof Area_Under_Sine_Arc() {
  lemma Primitive_Of_Sine() {
    assert(
      ∀x: ℝ → ∫ sin(x) dx = -cos(x) + C
    )
  } →
  apply(Primitive_Of_Sine()) →
  assert(
    ∫[0,π] sin(x) dx = [-cos(x)]₀π
  ) →
  assert(
    [-cos(x)]₀π = -cos(π) - (-cos(0))
  ) →
  assert(
    -cos(π) - (-cos(0)) = -(-1) - (-1)
  ) →
  assert(
    -(-1) - (-1) = 1 + 1 = 2
  )
}