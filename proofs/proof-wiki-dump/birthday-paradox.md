theorem Birthday_Paradox() {
  assert(
    ∀n ≥ 23 ∧ n ∈ ℕ ⇒ 
    P(shared_birthday(n)) > 0.5
  )
} ↔

proof Birthday_Paradox() {
  setVar(n: ℕ) →
  setVar(p(n): ℝ → [0,1]) →
  assert(p(n) = P(no_shared_birthdays(n))) →
  
  lemma Birthday_Probability() {
    assert(
      ∀k ∈ {1,...,n-1} ⇒
      P(person_k+1_unique) = (365-k)/365
    )
  } →
  
  apply(Birthday_Probability()) →
  assert(
    p(n) = ∏(k=0 to n-1)(365-k)/365
  ) →
  
  assert(
    p(n) = (365!)/((365-n)! × 365^n)
  ) →
  
  assert(
    p(n) = (n! × 365!)/(n! × (365-n)! × 365^n)
  ) →
  
  assert(
    p(n) = (n! × binom(365,n))/365^n
  ) →
  
  setVar(n = 23) →
  assert(p(23) ≈ 0.493) →
  
  assert(
    P(shared_birthday(23)) = 1 - p(23)
  ) →
  
  assert(
    P(shared_birthday(23)) ≈ 0.507 > 0.5
  )
}

theorem General_Birthday_Paradox() {
  assert(
    ∀n ≥ 88 ∧ n ∈ ℕ ⇒
    P(≥3_shared_birthday(n)) > 0.5
  )
}