theorem Binomial_Coefficient_Infinite_Product() {
  assert(
    ∀a,b ∈ ℝ ⇒ 
    ∏_{n=1}^∞ [(n+b)/n × (n+a-b)/(n+a)] = (a b)
  )
} ↔

proof Binomial_Coefficient_Infinite_Product() {
  setVar(a,b: ℝ) →
  
  assert(
    ∏_{n=1}^∞ [(n+b)/n × (n+a-b)/(n+a)] = 
    Γ(1)Γ(a+1)/(Γ(b+1)Γ(a-b+1))
  ) →
  
  lemma Gamma_Factorial() {
    assert(
      ∀x ∈ ℝ⁺ ⇒ Γ(x+1) = x!
    )
  } →
  
  apply(Gamma_Factorial()) →
  
  assert(
    Γ(1)Γ(a+1)/(Γ(b+1)Γ(a-b+1)) = 
    a!/(b!(a-b)!)
  ) →
  
  lemma Binomial_Definition() {
    assert(
      (a b) = a!/(b!(a-b)!)
    )
  } →
  
  apply(Binomial_Definition()) →
  
  assert(
    a!/(b!(a-b)!) = (a b)
  )
}