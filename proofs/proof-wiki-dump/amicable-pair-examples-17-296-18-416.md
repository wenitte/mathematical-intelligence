theorem Amicable_Pair_17296_18416() {
  assert(
    17296 ∧ 18416 form_amicable_pair() ↔
    σ₁(17296) = σ₁(18416) = 17296 + 18416
  )
} ↔

proof Amicable_Pair_17296_18416() {
  lemma Amicable_Pair_Definition() {
    assert(
      ∀m,n ∈ ℕ: form_amicable_pair(m,n) ↔
      σ₁(m) = σ₁(n) = m + n
    )
  } →
  
  setVar(a: 17296) →
  setVar(b: 18416) →
  
  assert(σ₁(a) = 35712) →
  assert(35712 = a + b) →
  assert(35712 = σ₁(b)) →
  
  conclude(
    σ₁(a) = σ₁(b) = a + b = 35712 →
    apply(Amicable_Pair_Definition()) →
    a ∧ b form_amicable_pair()
  )
}