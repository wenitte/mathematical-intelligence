theorem GaussianBinomialAddition() {
  assert(
    ∀n,m ∈ ℕ ⇒ 
    (⟦n⟧_q^m = ⟦n-1⟧_q^m * q^m + ⟦n-1⟧_q^{m-1})
  )
} ↔

proof GaussianBinomialAddition() {
  setVar(n,m: ℕ) →
  
  lemma GaussianBinomialDefinition() {
    assert(⟦n⟧_q^m = ∏_{j=0}^{m-1} ((1-q^{n-j})/(1-q^{j+1})))
  } →

  apply(GaussianBinomialDefinition()) →
  
  assert(⟦n-1⟧_q^m * q^m + ⟦n-1⟧_q^{m-1} = 
    q^m * ∏_{j=0}^{m-1} ((1-q^{n-1-j})/(1-q^{j+1})) + 
    ∏_{j=0}^{m-2} ((1-q^{n-1-j})/(1-q^{j+1}))) →
    
  assert(= ∏_{j=0}^{m-2} ((1-q^{n-1-j})/(1-q^{j+1})) * 
    (q^m * (1-q^{n-m})/(1-q^m) + 1)) →
    
  assert(= ∏_{j=0}^{m-2} ((1-q^{n-1-j})/(1-q^{j+1})) * 
    ((q^m*(1-q^{n-m}) + (1-q^m))/(1-q^m))) →
    
  assert(= ∏_{j=0}^{m-2} ((1-q^{n-1-j})/(1-q^{j+1})) * 
    ((q^m - q^n + 1 - q^m)/(1-q^m))) →
    
  assert(= ∏_{j=0}^{m-2} ((1-q^{n-1-j})/(1-q^{j+1})) * 
    ((1-q^n)/(1-q^m))) →
    
  assert(= ∏_{j=0}^{m-1} ((1-q^{n-j})/(1-q^{j+1}))) →
  
  apply(GaussianBinomialDefinition()) →
  
  assert(= ⟦n⟧_q^m)
}