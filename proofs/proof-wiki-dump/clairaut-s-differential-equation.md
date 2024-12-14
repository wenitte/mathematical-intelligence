theorem Clairaut_Differential_Equation() {
  assert(
    ∀y,y' ∈ ℝ: y = xy' + f(y') ⇒ 
    ∃C ∈ ℝ: y = Cx + f(C)
  )
}

proof Clairaut_Differential_Equation() {
  setVar(y,x,y': ℝ) →
  assume(y = xy' + f(y')) →
  
  lemma Differentiate_Both_Sides() {
    assert(
      d/dx(y) = d/dx(xy' + f(y')) →
      y' = y' + xy'' + f'(y')y''
    )
  } →
  
  apply(Differentiate_Both_Sides()) →
  assert(0 = xy'' + f'(y')y'') →
  assert(y''(x + f'(y')) = 0) →
  
  lemma Solution_Cases() {
    assert(
      y'' = 0 ∨ (x + f'(y')) = 0
    )
  } →
  
  lemma First_Solution() {
    assume(y'' = 0) →
    assert(y' = C₁) →
    assert(y = C₁x + C₂) →
    substitute(y = C₁x + C₂ into y = xy' + f(y')) →
    assert(C₁x + C₂ = xC₁ + f(C₁)) →
    assert(C₂ = f(C₁))
  } →
  
  apply(First_Solution()) →
  assert(y = C₁x + f(C₁)) →
  setVar(C ≔ C₁) →
  assert(y = Cx + f(C))
}