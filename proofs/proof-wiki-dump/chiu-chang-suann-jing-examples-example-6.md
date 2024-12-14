theorem Pool_Depth() {
  assert(
    ∀pool: square(10) ∧ reed_center() ∧ reed_above(1) ∧ reaches_brink() →
    depth(pool) = 12
  )
}

proof Pool_Depth() {
  setVar(d: ℝ) →
  assert(reed_length = d + 1) →
  
  lemma Right_Triangle() {
    assert(
      hypotenuse = d + 1 ∧
      leg1 = d ∧
      leg2 = 5
    )
  } →
  
  apply(Pythagorean_Theorem) →
  assert((d + 1)² = d² + 5²) →
  
  expand() →
  assert(d² + 2d + 1 = d² + 25) →
  
  subtract(d²) →
  assert(2d + 1 = 25) →
  
  subtract(1) →
  assert(2d = 24) →
  
  divide(2) →
  assert(d = 12) →
  
  verify(triangle_5_12_13) →
  conclude(depth = 12)
}