theorem GaussianBinomialAdditionRule() {
  assert(
    ∀n,m ∈ ℕ ∧ ∀q ∈ ℝ ⇒
    (n m)_q = (n-1 m)_q + (n-1 m-1)_q * q^(n-m)
  )
} ↔

proof GaussianBinomialAdditionRule() {
  setDef(GaussBinom, (n m)_q := ∏_{j=0}^{m-1} (1-q^{n-j})/(1-q^{j+1})) →
  
  assert(LHS := (n-1 m)_q + (n-1 m-1)_q * q^(n-m)) →
  assert(
    LHS = ∏_{j=0}^{m-1} (1-q^{n-1-j})/(1-q^{j+1}) + 
          q^(n-m) * ∏_{j=0}^{m-2} (1-q^{n-1-j})/(1-q^{j+1})
  ) →
  
  lemma CommonFactor() {
    assert(
      ∏_{j=0}^{m-2} (1-q^{n-1-j})/(1-q^{j+1}) can be factored out
    )
  } →
  
  apply(CommonFactor()) →
  assert(
    LHS = ∏_{j=0}^{m-2} (1-q^{n-1-j})/(1-q^{j+1}) * 
          ((1-q^{n-m})/(1-q^m) + q^(n-m))
  ) →
  
  assert(
    = ∏_{j=0}^{m-2} (1-q^{n-1-j})/(1-q^{j+1}) * 
      ((1-q^{n-m} + q^{n-m}(1-q^m))/(1-q^m))
  ) →
  
  assert(
    = ∏_{j=0}^{m-2} (1-q^{n-1-j})/(1-q^{j+1}) * 
      ((1-q^n)/(1-q^m))
  ) →
  
  assert(
    = ∏_{j=0}^{m-1} (1-q^{n-j})/(1-q^{j+1})
  ) →
  
  assert(
    = (n m)_q
  )
}