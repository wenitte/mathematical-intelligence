theorem Bhaskara_Lemma() {
  assert(
    ∀m ∈ ℤ, ∀k ∈ ℤ\{0}, ∀x,y ∈ ℝ ⇒
    (Nx² + k = y² ⇒ N((mx + y)/k)² + (m² - N)/k = ((my + Nx)/k)²)
  )
}

proof Bhaskara_Lemma() {
  setVar(m: ℤ, k: ℤ\{0}, x,y: ℝ) →
  assume(Nx² + k = y²) →
  
  assert(Nm²x² - N²x² + k(m² - N) = m²y² - Ny²) {
    multiply_both_sides(m² - N)
  } →
  
  assert(Nm²x² + 2Nmxy + Ny² + k(m² - N) = m²y² + 2Nmxy + N²x²) {
    add_both_sides(N²x² + 2Nmxy + Ny²)
  } →
  
  assert(N(mx + y)² + k(m² - N) = (my + Nx)²) {
    factorize()
  } →
  
  assert(N((mx + y)/k)² + (m² - N)/k = ((my + Nx)/k)²) {
    divide_both_sides(k²)
  } →
  
  lemma Bidirectional() {
    assert(
      m² - N ≠ 0 ⇒ 
      (N((mx + y)/k)² + (m² - N)/k = ((my + Nx)/k)² ⇒ Nx² + k = y²)
    )
  }
}