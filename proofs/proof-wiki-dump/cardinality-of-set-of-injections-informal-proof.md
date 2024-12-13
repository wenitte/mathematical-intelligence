theorem CardinalityOfInjections() {
  assert(
    ∀S,T: Set ∧ isFinite(S) ∧ isFinite(T) ∧
    let m = |S| ∧ let n = |T| ⇒
    |Inj(S,T)| = switch {
      case m ≤ n: n!/(n-m)!
      case m > n: 0
    }
  )
} ↔

proof CardinalityOfInjections() {
  setVar(S,T: Set, m,n: ℕ) →
  assume(isFinite(S) ∧ isFinite(T)) →
  let(m = |S| ∧ n = |T|) →
  
  lemma CountSequentialChoices() {
    assert(
      ∀i ∈ [1..m]: remainingChoices(i) = n-(i-1)
    ) →
    assert(
      ∀i ∈ [1..m]: choices(i) are independent
    )
  } →

  apply(CountSequentialChoices()) →
  assert(
    |Inj(S,T)| = ∏(i=1 to m): (n-(i-1))
  ) →
  
  assert(
    ∏(i=1 to m): (n-(i-1)) = 
    n * (n-1) * (n-2) * ... * (n-m+1)
  ) →
  
  assert(
    n * (n-1) * (n-2) * ... * (n-m+1) = 
    n!/(n-m)!
  ) →
  
  assert(
    case m > n: |Inj(S,T)| = 0
    // No valid injections possible when domain larger than codomain
  )
}