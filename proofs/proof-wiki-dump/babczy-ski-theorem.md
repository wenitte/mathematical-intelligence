theorem Babczynski() {
  assert(
    ∀n ∈ ℤ, ∀x,y ∈ {0,1,...,9} →
    (n = xyxyxy) →
    (n ≡ 0 mod 3 ∧ n ≡ 0 mod 7 ∧ n ≡ 0 mod 13 ∧ n ≡ 0 mod 37)
  )
} ↔

proof Babczynski() {
  setVar(n: ℤ) →
  setVar(x,y: {0,1,...,9}) →
  
  assert(n = xyxyxy) →
  assert(xyxyxy = xy × 10101) →
  
  lemma Factor_10101() {
    assert(10101 = 3 × 7 × 13 × 37)
  } →
  
  apply(Factor_10101()) →
  assert(n = xy × (3 × 7 × 13 × 37)) →
  assert(n = (xy × 3 × 7 × 13 × 37)) →
  
  conclude(
    n ≡ 0 mod 3 ∧ 
    n ≡ 0 mod 7 ∧ 
    n ≡ 0 mod 13 ∧ 
    n ≡ 0 mod 37
  )
}

example Verify_121212() {
  setVar(x: 1, y: 2) →
  assert(121212 = 12 × 10101) →
  assert(121212 = 12 × 3 × 7 × 13 × 37)
}

example Verify_565656() {
  setVar(x: 5, y: 6) →
  assert(565656 = 56 × 10101) →
  assert(565656 = 56 × 3 × 7 × 13 × 37)
}

example Verify_989898() {
  setVar(x: 9, y: 8) →
  assert(989898 = 98 × 10101) →
  assert(989898 = 98 × 3 × 7 × 13 × 37)
}