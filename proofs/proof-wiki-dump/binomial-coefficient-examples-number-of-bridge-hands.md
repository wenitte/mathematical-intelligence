theorem Bridge_Hand_Count() {
  assert(
    N = (52!)/(13! × 39!) = 635013559600 ∧
    N = (52 choose 13) ∧ 
    N = 2^4 × 5^2 × 7^2 × 17 × 23 × 41 × 43 × 47
  )
} ↔

proof Bridge_Hand_Count() {
  setVar(total_cards: ℕ = 52) →
  setVar(hand_size: ℕ = 13) →
  
  lemma Combination_Count() {
    assert(
      N = (total_cards choose hand_size) ↔
      N represents ways to choose hand_size from total_cards
    )
  } →
  
  apply(Combination_Count()) →
  
  lemma Binomial_Definition() {
    assert(
      (total_cards choose hand_size) = 
      total_cards!/(hand_size! × (total_cards - hand_size)!)
    )
  } →
  
  apply(Binomial_Definition()) →
  
  assert(
    N = 52!/(13! × (52-13)!) →
    N = 52!/(13! × 39!) →
    N = 635013559600
  ) →
  
  lemma Prime_Factorization() {
    assert(
      635013559600 = 2^4 × 5^2 × 7^2 × 17 × 23 × 41 × 43 × 47
    )
  } →
  
  apply(Prime_Factorization())
}