theorem Chu_Vandermonde_Identity() {
  assert(
    ∀r,s ∈ ℝ, ∀n ∈ ℤ ⇒ 
    Σ(k=0 to n)[binom(r,k) * binom(s,n-k)] = binom(r+s,n)
  )
} ↔

proof Chu_Vandermonde_Identity() {
  setVar(r,s,t: ℝ) →
  setVar(n: ℤ) →
  
  lemma General_Identity() {
    assert(
      Σ(k≥0)[binom(r-t*k,k) * binom(s-t*(n-k),n-k) * (r/(r-t*k))] = 
      binom(r+s-t*n,n)
    )
  } →
  
  apply(General_Identity()) →
  
  step1: {
    substitute(t=0) →
    assert(
      Σ(k≥0)[binom(r,k) * binom(s,n-k) * (r/r)] = 
      binom(r+s,n)
    )
  } →
  
  step2: {
    simplify(r/r = 1) →
    assert(
      Σ(k=0 to n)[binom(r,k) * binom(s,n-k)] = binom(r+s,n)
    )
  } →
  
  conclude(QED)
}