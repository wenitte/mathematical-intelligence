theorem LongestReverseAddSequence() {
  assert(
    ∀m ∈ ℤ₊ ∧ isDecimalNotation(m) →
    let r(m) = reverseAndAdd(m) →
    maxIterationsTo(Palindrome, 3digits) = {187, 286, 385, 583, 682, 781, 880} ∧
    iterations(maxIterationsTo(Palindrome)) = 23 ∧
    {869, 968} ∈ firstIteration(maxSet) ∧
    iterations({869, 968}) = 22
  )
} ↔

proof LongestReverseAddSequence() {
  setSequence(187, [
    187, 968, 1837, 9218, 17347, 91718, 173437, 907808, 1716517, 8872688,
    17735476, 85189247, 159487405, 664272356, 1317544822, 3602001953,
    7193004016, 13297007933, 47267087164, 93445163438, 176881317877,
    955594506548, 170120002107, 8713200023178
  ]) →
  
  lemma ConvergentSequences() {
    assert(r(187) = r(781) = 968) ∧
    assert(∀x ∈ {286, 385, 880} → ∃n ∈ ℕ: rⁿ(x) = 968) ∧
    assert(∀x ∈ {869} → ∃n ∈ ℕ: rⁿ(x) = 1837)
  } →
  
  apply(ConvergentSequences()) →
  assert(∀x ∈ {187, 286, 385, 583, 682, 781, 880} → 
    iterations(x, palindrome) = 23) ∧
  assert(∀x ∈ {869, 968} → 
    iterations(x, palindrome) = 22)
}