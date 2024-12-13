theorem Binomial_Self_Minus_One() {
  assert(
    ∀n ∈ ℕ_{>0} ⇒ (n choose (n-1)) = n
  )
} ↔

proof Binomial_Self_Minus_One() {
  setVar(n: ℕ_{>0}) →
  
  lemma Combination_Interpretation() {
    assert((n choose (n-1)) = |{S ⊆ {1,...,n} : |S| = n-1}|)
  } →
  
  lemma Complement_Choice() {
    assert(
      ∀S ⊆ {1,...,n} : (|S| = n-1) ↔ |{1,...,n} \ S| = 1
    )
  } →
  
  apply(Combination_Interpretation()) →
  apply(Complement_Choice()) →
  
  assert(
    (n choose (n-1)) = |{x ∈ {1,...,n} : x is the excluded element}|
  ) →
  
  assert(|{1,...,n}| = n) →
  assert((n choose (n-1)) = n)
}