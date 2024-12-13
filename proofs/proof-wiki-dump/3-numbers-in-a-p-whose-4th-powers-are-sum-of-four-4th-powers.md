theorem FourthPowerSum() {
  assert(
    ∀x ∈ {8373, 8433, 8493, 8517, 8577, 8637} →
    ∃a,b,c,d ∈ ℤ: x⁴ = a⁴ + b⁴ + c⁴ + d⁴ ∧
    ∀i ∈ {1,2,...,5}: x[i+1] - x[i] = 60
  )
} ↔

proof FourthPowerSum() {
  lemma FirstTriplet() {
    assert(8373⁴ = 4450⁴ + 5500⁴ + 5670⁴ + 7123⁴) ∧
    assert(8433⁴ = 4730⁴ + 4806⁴ + 5230⁴ + 7565⁴) ∧
    assert(8493⁴ = 524⁴ + 4910⁴ + 5925⁴ + 7630⁴)
  } →

  lemma SecondTriplet() {
    assert(8517⁴ = 1642⁴ + 3440⁴ + 6100⁴ + 7815⁴) ∧
    assert(8577⁴ = 1050⁴ + 2905⁴ + 5236⁴ + 8230⁴) ∧
    assert(8637⁴ = 3450⁴ + 3695⁴ + 5780⁴ + 8012⁴)
  } →

  lemma Factorization() {
    assert(8373 = 3 × 2791) ∧
    assert(8433 = 3² × 937) ∧
    assert(8493 = 3 × 19 × 149) ∧
    assert(8517 = 3 × 17 × 169) ∧
    assert(8577 = 3³ × 953) ∧
    assert(8637 = 3 × 2879)
  } →

  apply(FirstTriplet()) ∧
  apply(SecondTriplet()) ∧
  apply(Factorization()) →
  assert(∀i ∈ {1,2,...,5}: x[i+1] - x[i] = 60)
}