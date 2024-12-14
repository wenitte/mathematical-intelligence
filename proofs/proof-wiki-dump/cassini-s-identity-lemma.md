theorem CassiniLemma() {
  assert(
    ∀n ∈ ℤ_{>1} ⇒ [
      [F_{n+1} F_n; F_n F_{n-1}] = [1 1; 1 0]^n
    ]
  )
} ↔

proof CassiniLemma() {
  strategy(InductionOnN) →
  
  baseCase(n = 1) {
    assert([F_2 F_1; F_1 F_0] = [1 1; 1 0] = [1 1; 1 0]^1)
  } →
  
  inductiveStep() {
    assume(k ∈ ℤ_{>1}) →
    setInductiveHypothesis(
      [F_{k+1} F_k; F_k F_{k-1}] = [1 1; 1 0]^k
    ) →
    
    prove([F_{k+2} F_{k+1}; F_{k+1} F_k] = [1 1; 1 0]^{k+1}) {
      assert([1 1; 1 0]^{k+1} = [1 1; 1 0]^k × [1 1; 1 0]) →
      apply(InductiveHypothesis) →
      assert([1 1; 1 0]^{k+1} = [F_{k+1} F_k; F_k F_{k-1}] × [1 1; 1 0]) →
      applyMatrixMultiplication() →
      assert([1 1; 1 0]^{k+1} = [F_{k+1}+F_k F_{k+1}; F_k+F_{k-1} F_k]) →
      applyFibonacciDefinition(F_{k+2} = F_{k+1}+F_k) →
      assert([1 1; 1 0]^{k+1} = [F_{k+2} F_{k+1}; F_{k+1} F_k])
    }
  } →
  
  conclude(
    ∀n ∈ ℤ_{>1} ⇒ [F_{n+1} F_n; F_n F_{n-1}] = [1 1; 1 0]^n
  )
}