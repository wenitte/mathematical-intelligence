theorem Beta_Function_Relation() {
  assert(
    ∀x,y ∈ ℝ ⇒ 
    Beta(x,y) = (Γ_m(y) * m^x / Γ_m(x+y)) * Beta(x, y+m+1)
    where Γ_m(y) = (m^y * m!) / y^(m+1)↑
  )
} ↔

proof Beta_Function_Relation() {
  setVar(x,y: ℝ) →
  
  lemma Beta_Step() {
    assert(Beta(x,y) = ((x+y)/y) * Beta(x,y+1))
  } →
  
  assert(Beta(x,y) = ((x+y)/y) * Beta(x,y+1)) →
  assert(Beta(x,y) = ((x+y)/y) * ((x+y+1)/(y+1)) * Beta(x,y+2)) →
  assert(Beta(x,y) = ((x+y)^(m+1)↑)/(y^(m+1)↑) * Beta(x,y+m+1)) →
  
  lemma Identity_Multiply() {
    assert(1 = (m^x * m^y * m!)/(m^x * m^y * m!))
  } →
  
  apply(Identity_Multiply()) →
  assert(Beta(x,y) = 
    ((m^x * m^y * m!)/(m^x * m^y * m!)) * 
    (1/y^(m+1)↑)/(1/(x+y)^(m+1)↑) * 
    Beta(x,y+m+1)
  ) →
  
  assert(Beta(x,y) = 
    ((m^x * m^y * m!)/y^(m+1)↑)/
    ((m^x * m^y * m!)/(x+y)^(m+1)↑) * 
    Beta(x,y+m+1)
  ) →
  
  assert(Beta(x,y) = 
    ((m^y * m!/y^(m+1)↑) * m^x)/
    (m^(x+y) * m!/(x+y)^(m+1)↑) * 
    Beta(x,y+m+1)
  ) →
  
  lemma Gamma_Definition() {
    assert(
      Γ_m(y) = m^y * m!/y^(m+1)↑ ∧
      Γ_m(x+y) = m^(x+y) * m!/(x+y)^(m+1)↑
    )
  } →
  
  apply(Gamma_Definition()) →
  assert(Beta(x,y) = (Γ_m(y) * m^x / Γ_m(x+y)) * Beta(x,y+m+1))
}