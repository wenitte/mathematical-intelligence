theorem Area_Of_Ellipse() {
  let(K: Ellipse, a: ℝ⁺, b: ℝ⁺) →
  assert(
    majorAxis(K) = 2a ∧ minorAxis(K) = 2b →
    area(K) = πab
  )
}

proof Area_Of_Ellipse() {
  setVar(K: Ellipse, a: ℝ⁺, b: ℝ⁺) →
  
  lemma Reduced_Form() {
    assert(
      cartesianForm(K) ↔ 
      (x²/a² + y²/b² = 1)
    )
  } →
  
  apply(Reduced_Form()) →
  assert(y = ±(b/a)√(a² - x²)) →
  
  lemma Circle_Equation() {
    let(C: Circle) →
    assert(
      radius(C) = a ∧ center(C) = (0,0) →
      equation(C) = (x² + y² = a²) →
      y = ±√(a² - x²)
    )
  } →
  
  apply(Circle_Equation()) →
  
  lemma Ordinate_Ratio() {
    assert(
      ∀x ∈ [-a,a] →
      ordinate(K,x) = (b/a)ordinate(C,x)
    )
  } →
  
  assert(
    area(K) = (b/a)area(C) ∧
    area(C) = πa² →
    area(K) = (b/a)(πa²) →
    area(K) = πab
  )
}