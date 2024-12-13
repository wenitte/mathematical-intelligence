theorem Four_Pints_Measurement() {
  let j₃, j₅ ∈ ℝ // 3-pint and 5-pint jars
  assert(
    (capacity(j₃) = 3 ∧ capacity(j₅) = 5) →
    ∃sequence(steps) : final(j₅) = 4
  )
}

proof Four_Pints_Measurement() {
  defineStep(s₁) {
    fill(j₃) →
    pour(j₃, j₅) →
    assert(j₃ = 0 ∧ j₅ = 3)
  } →
  
  defineStep(s₂) {
    fill(j₃) →
    pour(j₃, j₅) →
    assert(j₃ = 1 ∧ j₅ = 5)
  } →
  
  defineStep(s₃) {
    empty(j₅) →
    pour(j₃, j₅) →
    assert(j₃ = 0 ∧ j₅ = 1)
  } →
  
  defineStep(s₄) {
    fill(j₃) →
    pour(j₃, j₅) →
    assert(j₃ = 0 ∧ j₅ = 4)
  } →
  
  sequence(s₁, s₂, s₃, s₄) →
  assert(final(j₅) = 4)
}

lemma Historical_Note() {
  assert(
    first_appearance = "Triparty en la Science des Nombres" ∧
    year = 1484 ∧
    author = "Nicolas Chuquet"
  )
}