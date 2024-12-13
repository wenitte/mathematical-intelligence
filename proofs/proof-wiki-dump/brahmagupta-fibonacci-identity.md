theorem BrahmaguptaFibonacci() {
  assert(
    ∀a,b,c,d ∈ ℝ ⇒ 
    (a² + b²)(c² + d²) = (ac + bd)² + (ad - bc)²
  )
}

proof BrahmaguptaFibonacci() {
  setVar(a,b,c,d: ℝ) →
  
  let RHS = (ac + bd)² + (ad - bc)² →
  
  expand(RHS) {
    assert((ac)² + 2(ac)(bd) + (bd)² + (ad)² - 2(ad)(bc) + (bc)²) →
    assert(a²c² + 2abcd + b²d² + a²d² - 2abcd + b²c²) →
    assert(a²c² + a²d² + b²c² + b²d²) →
    assert((a² + b²)(c² + d²))
  } →
  
  conclude(RHS = (a² + b²)(c² + d²))
}

theorem BrahmaguptaFibonacci_Complex() {
  assert(
    ∀a,b,c,d ∈ ℝ ⇒
    let z₁ = a - bi ∧ 
    let z₂ = c + di ⇒
    |z₁z₂| = |z₁||z₂| ⇒
    (a² + b²)(c² + d²) = (ac + bd)² + (ad - bc)²
  )
}

proof BrahmaguptaFibonacci_Complex() {
  setVar(a,b,c,d: ℝ) →
  setVar(z₁ = a - bi, z₂ = c + di: ℂ) →
  
  assert(z₁z₂ = (ac + bd) + (ad - bc)i) →
  
  apply(ComplexModulusProduct) {
    assert(|z₁z₂| = |z₁||z₂|) →
    assert(|(ac + bd) + (ad - bc)i|² = |a - bi|²|c + di|²) →
    assert((ac + bd)² + (ad - bc)² = (a² + b²)(c² + d²))
  }
}

corollary BrahmaguptaFibonacci_Alt() {
  assert(
    ∀a,b,c,d ∈ ℝ ⇒
    (a² + b²)(c² + d²) = (ac - bd)² + (ad + bc)²
  )
}

theorem BrahmaguptaFibonacci_General() {
  assert(
    ∀a,b,c,d,n ∈ ℝ ⇒
    (a² + nb²)(c² + nd²) = (ac + nbd)² + n(ad - bc)²
  )
}