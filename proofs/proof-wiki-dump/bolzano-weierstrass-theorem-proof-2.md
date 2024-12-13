theorem BolzanoWeierstrass() {
  assert(
    ∀s: Sequence(ℝ) ∧ bounded(s) ⇒ ∃t: Sequence(ℝ) ∧ subsequence(t,s) ∧ convergent(t)
  )
} ↔

proof BolzanoWeierstrass() {
  setVar(x[n]: Sequence(ℝ)) →
  assume(bounded(x[n])) →
  assert(∃a,b ∈ ℝ: ∀n ∈ ℕ: x[n] ∈ (a,b)) →
  
  construct(subsequence) {
    setVar(a[0] = a) →
    setVar(b[0] = b) →
    
    forall(i ∈ ℕ) {
      assert(
        infinite(S₁ = {x[n]: n > n[i-1] ∧ a[i] < x[n] < (a[i] + b[i])/2}) ∨
        infinite(S₂ = {x[n]: n > n[i-1] ∧ (a[i] + b[i])/2 < x[n] < b[i]}) ∨
        infinite(S₃ = {x[n]: n > n[i-1] ∧ x[n] = (a[i] + b[i])/2})
      )
    } →
    
    case S₃_infinite {
      assert(∃t: subsequence(t,x[n]) ∧ convergent(t, (a[i] + b[i])/2)) →
      return(proof_complete)
    } →
    
    case S₁_infinite {
      setVar(x[n[i]] = min_index(S₁)) →
      setVar(a[i+1] = a[i]) →
      setVar(b[i+1] = (a[i] + b[i])/2)
    } →
    
    case S₂_infinite {
      setVar(x[n[i]] = min_index(S₂)) →
      setVar(a[i+1] = (a[i] + b[i])/2) →
      setVar(b[i+1] = b[i])
    }
  } →
  
  assert(∀i,j ∈ ℕ: j < i ⇒ |x[n[j]] - x[n[i]]| < (b-a)/2^j) →
  
  lemma CauchySequence() {
    assert(∀ε > 0: ∃N ∈ ℕ: ∀i,i' ≥ N: |x[n[i]] - x[n[i']]| < ε)
  } →
  
  apply(CauchyConvergenceCriterion) →
  assert(convergent(subsequence(x[n[i]])))
}