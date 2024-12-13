theorem Beta_Function_Property() {
  assert(
    ∀x,y ∈ ℝ ⇒ 
    Beta(x,y) = (Γ_m(y) * m^x / Γ_m(x+y)) * Beta(x, y+m+1)
    where Γ_m(y) = (m^y * m!) / y^(m+1)↑
  )
}

proof Beta_Function_Property() {
  setVar(x,y: ℝ, m: ℕ) →
  
  lemma Beta_Recurrence() {
    assert(Beta(x,y) = ((x+y)/y) * Beta(x,y+1))
  } →
  
  apply(Beta_Recurrence()) →
  assert(Beta(x,y) = ((x+y)/y) * Beta(x,y+1)) →
  
  recursiveStep() {
    assert(Beta(x,y) = ((x+y)/y * (x+y+1)/(y+1)) * Beta(x,y+2)) →
    assert(Beta(x,y) = ((x+y)^(m+1)↑)/(y^(m+1)↑) * Beta(x,y+m+1))
  } →
  
  lemma Beta_m_Identity() {
    assert(Beta(y,m+1) = (m!)/(y^(m+1)↑))
  } →
  
  lemma Beta_xy_m_Identity() {
    assert(Beta(x+y,m+1) = (m!)/((x+y)^(m+1)↑))
  } →
  
  apply(Beta_m_Identity(), Beta_xy_m_Identity()) →
  assert(Beta(x,y) = (Beta(y,m+1)/Beta(x+y,m+1)) * Beta(x,y+m+1)) →
  
  substitute() {
    assert(Beta(x,y) = ((m!/(y^(m+1)↑))/(m!/((x+y)^(m+1)↑))) * Beta(x,y+m+1)) →
    assert(Beta(x,y) = ((Γ_m(y)/m^y) * (m^(x+y)/Γ_m(x+y))) * Beta(x,y+m+1)) →
    assert(Beta(x,y) = (Γ_m(y) * m^x/Γ_m(x+y)) * Beta(x,y+m+1))
  }
}