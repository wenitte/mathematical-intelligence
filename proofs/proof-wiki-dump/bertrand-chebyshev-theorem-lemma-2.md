theorem BertrandChebyshevLemma2() {
  assert(
    ∀m ∈ ℕ ⇒ ∏(p≤m) p ≤ 2^(2m)
  )
} ↔

proof BertrandChebyshevLemma2() {
  // Strong induction base cases
  let P(m) := (∏(p≤m) p ≤ 2^(2m)) →
  
  // m = 0 case
  assert(∏(p≤0) p = 1) →
  assert(1 ≤ 2^(2×0)) →
  
  // m = 1 case
  assert(∏(p≤1) p = 1) →
  assert(1 ≤ 2^(2×1) = 4) →
  
  // m = 2 case
  assert(∏(p≤2) p = 2) →
  assert(2 ≤ 2^(2×2) = 16) →

  // Induction step
  lemma EvenCase() {
    setVar(m: ℕ, m > 2, m ≡ 0 (mod 2)) →
    assert(∏(p≤m) p = ∏(p≤m-1) p) →
    assert(∏(p≤m-1) p ≤ 2^(2(m-1))) →  // Induction hypothesis
    assert(2^(2(m-1)) < 2^(2m))
  } →

  lemma OddCase() {
    setVar(k: ℕ, m = 2k+1) →
    assert(∑(r=0 to 2k+1) C(2k+1,r) = 2^(2k+1)) →
    assert(C(2k+1,k) + C(2k+1,k+1) ≤ 2^(2k+1)) →
    assert(C(2k+1,k) + C(2k+1,k) ≤ 2^(2k+1)) →  // By symmetry
    assert(C(2k+1,k) ≤ 2^(2k)) →

    setVar(p: ℙ, k+2 ≤ p ≤ 2k+1) →
    assert(p | C(2k+1,k)) →
    
    assert(∏(p≤m) p = ∏(p≤k+1) p × ∏(k+2≤p≤2k+1) p) →
    assert(∏(p≤m) p ≤ 2^(2k) × ∏(p≤k+1) p) →
    assert(∏(p≤m) p ≤ 2^(2k) × 2^(2(k+1))) →  // Induction hypothesis
    assert(∏(p≤m) p ≤ 2^(2(2k+1)) = 2^(2m))
  } →

  apply(StrongInduction(P)) →
  assert(∀m ∈ ℕ ⇒ ∏(p≤m) p ≤ 2^(2m))
}