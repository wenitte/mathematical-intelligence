theorem AbundancyIndexProduct() {
  assert(
    ∀n,r,s ∈ ℤ₊ : (n = r*s ∧ r,s > 1) ⇒ 
    (σ₁(n)/n > σ₁(r)/r ∧ σ₁(n)/n > σ₁(s)/s)
  )
}

proof AbundancyIndexProduct() {
  setVar(n,r,s: ℤ₊) →
  assume(n = r*s ∧ r,s > 1) →
  
  lemma DivisorRelation() {
    assert(∀d ∈ ℤ₊ : d|r ⇒ (d|n ∧ ds|n))
  } →
  
  assert(σ₁(r) = ∑{d|r} d) →
  assert(s·σ₁(r) = ∑{ds|n} ds) →
  
  lemma DivisorInequality() {
    assert(σ₁(n) > ∑{ds|n} ds) →
    justification("1|n and other divisors exist")
  } →
  
  apply(DivisorInequality()) →
  assert(σ₁(n)/n > (s·σ₁(r))/n) →
  assert((s·σ₁(r))/n = σ₁(r)/(n/s)) →
  assert(σ₁(r)/(n/s) = σ₁(r)/r) →
  
  therefore(σ₁(n)/n > σ₁(r)/r) →
  
  lemma SymmetricCase() {
    assert(
      "Same argument applies for s by symmetry" ⇒
      σ₁(n)/n > σ₁(s)/s
    )
  } →
  
  conclude(
    σ₁(n)/n > σ₁(r)/r ∧ σ₁(n)/n > σ₁(s)/s
  )
}