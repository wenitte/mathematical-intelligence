theorem Extended_Chu_Vandermonde() {
  let(r,s,α,β: ℂ) →
  assert(
    ∀k ∈ ℤ: Σ(binom(r,α+k) * binom(s,β-k)) = binom(r+s,α+β)
  )
} ↔

proof Extended_Chu_Vandermonde() {
  lemma Standard_Chu_Vandermonde() {
    assert(
      ∀k ∈ ℤ: Σ(binom(r,k) * binom(s,n-k)) = binom(r+s,n)
    )
  } →
  
  let(n = α+β) →
  let(k' = α+k) →
  
  assert(
    Σ(binom(r,α+k) * binom(s,(α+β)-(α+k))) = binom(r+s,α+β)
  ) →
  
  assert(
    Σ(binom(r,α+k) * binom(s,β-k)) = binom(r+s,α+β)
  ) →
  
  apply(Standard_Chu_Vandermonde()) →
  conclude()
}

note(validity) {
  assert(
    "Extension from ℝ to ℂ requires additional justification"
  )
}