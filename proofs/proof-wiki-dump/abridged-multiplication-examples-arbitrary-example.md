theorem Abridged_Multiplication_Example() {
  assert(
    ∀x,y,z ∈ ℝ where 
    x = 5.6982 ∧
    y = 23 ∧
    z = x × y ⇒
    round(z,2) = round(truncate_multiply(x,y,4),2)
  )
} ↔

proof Abridged_Multiplication_Example() {
  setVar(x: ℝ = 5.6982) →
  setVar(y: ℝ = 23) →
  setVar(z: ℝ) →

  lemma Full_Multiplication() {
    assert(
      z = (5.6982 × 3) + (5.6982 × 20) →
      z = 17.0946 + 113.9640 →
      z = 131.0586
    )
  } →

  lemma Truncated_Multiplication() {
    assert(
      truncate(5.6982, 4) = 5.6982 →
      z_trunc = (5.6982 × 3) + (5.6982 × 20) →
      z_trunc = 17.094 + 113.964 →
      z_trunc = 131.058
    )
  } →

  apply(Full_Multiplication()) →
  apply(Truncated_Multiplication()) →
  
  assert(
    round(131.0586, 2) = 131.06 ∧
    round(131.058, 2) = 131.06 →
    round(z,2) = round(truncate_multiply(x,y,4),2)
  )
}