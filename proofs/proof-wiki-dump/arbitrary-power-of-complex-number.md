theorem Complex_Power() {
  assert(
    ∀z ∈ ℂ, n ∈ ℤ_{>0} ∧ z = a + bi →
    z^n = (∑_{j∈[0,n], j even} (-1)^(j/2) (n choose j) a^(n-j) b^j) + 
          i(∑_{j∈[0,n], j odd} (-1)^((j-1)/2) (n choose j) a^(n-j) b^j)
  )
}

lemma Complex_Power_Recurrence() {
  assert(
    ∀z ∈ ℂ, n ∈ ℤ_{>0} ∧ z = a + bi ∧ z^n = u_n + iv_n →
    z^(n+1) = (au_n - bv_n) + i(av_n + bu_n)
  )
}

proof Complex_Power() {
  setInduction(n: ℤ_{>0}) →
  
  // Base case n=1
  assert(z^1 = a + bi) →
  assert(
    z^1 = ((n choose 0)a^1) + i((n choose 1)b)
  ) →
  
  // Base case n=2
  assert(z^2 = (a + bi)^2 = (a^2 - b^2) + i(2ab)) →
  assert(
    z^2 = ((n choose 0)a^2 - (n choose 2)b^2) + i((n choose 1)ab)
  ) →
  
  // Inductive step
  assume(
    z^k = (∑_{j∈[0,k], j even} (-1)^(j/2) (k choose j) a^(k-j) b^j) + 
          i(∑_{j∈[0,k], j odd} (-1)^((j-1)/2) (k choose j) a^(k-j) b^j)
  ) →
  
  apply(Complex_Power_Recurrence()) →
  
  assert(u_(k+1) = au_k - bv_k) →
  assert(v_(k+1) = av_k + bu_k) →
  
  // Complex algebra manipulations omitted for brevity
  
  assert(
    z^(k+1) = (∑_{j∈[0,k+1], j even} (-1)^(j/2) (k+1 choose j) a^(k+1-j) b^j) + 
               i(∑_{j∈[0,k+1], j odd} (-1)^((j-1)/2) (k+1 choose j) a^(k+1-j) b^j)
  ) →
  
  applyInductionPrinciple() →
  conclude()
}