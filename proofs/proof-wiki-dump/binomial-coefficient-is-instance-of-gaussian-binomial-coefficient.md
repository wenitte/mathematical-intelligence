theorem Gaussian_Binomial_Limit() {
  assert(
    ∀r,m ∈ ℕ ⇒ lim[q→1⁻] (⟨r⟩[m])_q = (⟨r⟩[m])
  )
} ↔

proof Gaussian_Binomial_Limit() {
  setDef(GaussianBinomial: (⟨r⟩[m])_q = ∏[k=0][m-1] ((1-q^(r-k))/(1-q^(k+1)))) →
  
  lemma Factor_Transformation() {
    assert(
      ((1-q^(r-k))/(1-q^(k+1))) = 
      (((1-q^(r-k))/(1-q))/(((1-q^(k+1))/(1-q))))
    )
  } →
  
  lemma Geometric_Sum() {
    assert(
      (1-q^n)/(1-q) = ∑[j=0][n-1] q^j
    )
  } →
  
  apply(Factor_Transformation()) →
  apply(Geometric_Sum()) →
  
  assert(
    ((1-q^(r-k))/(1-q^(k+1))) = 
    (∑[j=0][r-k-1] q^j)/(∑[j=0][k] q^j)
  ) →
  
  lemma Limit_Evaluation() {
    assert(
      lim[q→1⁻] (∑[j=0][n-1] q^j) = n
    )
  } →
  
  apply(Limit_Evaluation()) →
  
  assert(
    lim[q→1⁻] ((1-q^(r-k))/(1-q^(k+1))) = (r-k)/(k+1)
  ) →
  
  assert(
    lim[q→1⁻] (⟨r⟩[m])_q = ∏[k=0][m-1] ((r-k)/(k+1))
  ) →
  
  lemma Index_Translation() {
    assert(
      ∏[k=0][m-1] ((r-k)/(k+1)) = ∏[k=1][m] ((r+1-k)/k)
    )
  } →
  
  apply(Index_Translation()) →
  
  setDef(BinomialCoefficient: (⟨r⟩[m]) = ∏[k=1][m] ((r+1-k)/k)) →
  
  assert(
    lim[q→1⁻] (⟨r⟩[m])_q = (⟨r⟩[m])
  )
}