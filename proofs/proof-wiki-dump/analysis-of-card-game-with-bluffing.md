theorem CardGameBluffing() {
  assert(
    ∃ players(A,B) ∧
    ∃ cards(high,low) ∧
    ∃ strategies(A₁,A₂,B₁,B₂) ∧
    ∀ game → ∃ payoff(A)
  )
} ↔

proof CardGameBluffing() {
  // Game mechanics definition
  def GameRules() {
    setVar(A: player, B: player) →
    setVar(card: {high,low}) →
    assert(A.receives(card)) →
    assert(
      card = high → A.bid(2) ∧
      card = low → (A.pay(1) ∨ A.bid(2))
    ) →
    assert(
      A.bid(2) → (B.pay(1) ∨ B.challenge())
    ) →
    assert(
      B.challenge() → (
        A.card = high → B.pay(2) ∧
        A.card = low → A.pay(2)
      )
    )
  } →

  // Strategy definitions
  def Strategies() {
    assert(A₁ ≡ A.pay(1)) →
    assert(A₂ ≡ A.bid(2)) →
    assert(B₁ ≡ B.challenge()) →
    assert(B₂ ≡ B.pay(1))
  } →

  // Payoff calculations
  def PayoffMatrix() {
    assert(
      prob(high) = prob(low) = 0.5
    ) →
    assert(
      payoff(A₁,B₁) = (2-1)/2 = 0.5 ∧
      payoff(A₁,B₂) = (1-1)/2 = 0 ∧
      payoff(A₂,B₁) = (2-2)/2 = 0 ∧
      payoff(A₂,B₂) = 1
    )
  } →
  
  // Final result
  apply(GameRules()) →
  apply(Strategies()) →
  apply(PayoffMatrix()) →
  conclude()
}