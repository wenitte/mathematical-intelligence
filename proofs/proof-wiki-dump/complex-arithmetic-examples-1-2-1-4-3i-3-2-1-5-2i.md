theorem Complex_Arithmetic_Example() {
  assert(
    ∀z₁,z₂ ∈ ℂ: (z₁ = ½(4-3i) ∧ z₂ = (3/2)(5+2i)) → 
    (z₁ + z₂ = 19/2 + (3/2)i)
  )
}

proof Complex_Arithmetic_Example() {
  // Algebraic proof
  setVar(z₁: ℂ = ½(4-3i)) →
  setVar(z₂: ℂ = (3/2)(5+2i)) →
  
  assert(z₁ = (2 - (3/2)i)) →
  assert(z₂ = (15/2 + 3i)) →
  
  assert(z₁ + z₂ = (2 - (3/2)i) + (15/2 + 3i)) →
  assert(z₁ + z₂ = (2 + 15/2) + (-3/2 + 3)i) →
  assert(z₁ + z₂ = 19/2 + (3/2)i)
}

proof Complex_Arithmetic_Example_Geometric() {
  setVar(P₁: Point(ℂ) = ½(4-3i)) →
  setVar(P₂: Point(ℂ) = (3/2)(5+2i)) →
  setVar(O: Point(ℂ) = 0) →
  
  lemma Complex_Addition_Parallelogram() {
    assert(
      ∀a,b ∈ ℂ: sum(a,b) = endpoint(parallelogram(O,a,b))
    )
  } →
  
  apply(Complex_Addition_Parallelogram()) →
  assert(endpoint(parallelogram(O,P₁,P₂)) = 19/2 + (3/2)i) →
  assert(P₁ + P₂ = 19/2 + (3/2)i)
}