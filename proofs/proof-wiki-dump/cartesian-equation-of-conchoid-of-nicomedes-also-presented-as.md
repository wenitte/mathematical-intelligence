theorem Conchoid_Cartesian_Equation() {
  assert(
    ∀a,b,x,y ∈ ℝ ⇒ 
    ((a-b-x)(a+b-x)x² + (a-x)²y² = 0) ↔ 
    ((x-a)²(x²+y²) = b²x²)
  )
}

proof Conchoid_Cartesian_Equation() {
  setVar(a,b,x,y: ℝ) →
  
  assert((a-b-x)(a+b-x)x² + (a-x)²y²) →
  
  lemma Factoring_Step1() {
    assert(((a-x)-b)((a-x)+b)x² + (a-x)²y²)
  } →
  
  lemma Difference_Of_Squares() {
    assert(((a-x)² - b²)x² + (a-x)²y²)
  } →
  
  lemma Rearrange_Terms1() {
    assert((x-a)²x² - b²x² + (x-a)²y²)
  } →
  
  lemma Factor_Common_Terms() {
    assert((x-a)²(x²+y²) - b²x²)
  } →
  
  assert((x-a)²(x²+y²) - b²x² = 0) →
  assert((x-a)²(x²+y²) = b²x²)
}