theorem CompleteTotallyBoundedIsSequentiallyCompact() {
  assert(
    ∀M: MetricSpace(M=(A,d)) ∧ Complete(M) ∧ TotallyBounded(M) ⇒ 
    SequentiallyCompact(M)
  )
} ↔

proof CompleteTotallyBoundedIsSequentiallyCompact() {
  lemma ReductionToCompact() {
    assert(
      Compact(M) → CountablyCompact(M) ∧
      (CountablyCompact(M) ∧ MetricSpace(M)) → SequentiallyCompact(M)
    )
  } →

  byContradiction() {
    assume(¬Compact(M)) →
    setVar(C: OpenCover(A)) →
    assert(¬∃S⊆C: Finite(S) ∧ Covers(S,A)) →
    
    constructSequence(Fn: ℕ→FiniteSet(A)) {
      assert(∀n∈ℕ: Fn is 2^(-n)-net for M)
    } →
    
    define(B'n(a) := OpenBall(a,2^(-n))) →
    
    constructSequence(Gn: ℕ→Set(A)) {
      assert(∀n∈ℕ: Gn = {y∈Fn: ¬∃S⊆C: Finite(S) ∧ Covers(S,B'n(y))}) →
      assert(∀n∈ℕ: Gn ≠ ∅)
    } →
    
    define(Tn(y) := {z∈G(n+1): ¬∃S⊆C: Finite(S) ∧ 
                     Covers(S,B'n(y)∩B'(n+1)(z))}) →
    
    constructSequence(φn: Gn→G(n+1)) {
      assert(∀n∈ℕ: ∀y∈Gn: φn(y)∈Tn(y))
    } →
    
    constructSequence(xn: ℕ→A) {
      setVar(x0∈G0) →
      assert(∀n∈ℕ: x(n+1) = (φn∘...∘φ0)(x0))
    } →
    
    prove(CauchySequence(xn)) {
      define(An := B'n(xn)∩B'(n+1)(x(n+1))) →
      assert(∀n∈ℕ: d(xn,x(n+1)) < 3/2^(n+1)) →
      assert(∀i,j∈ℕ: i<j ⇒ d(xi,xj) < 3/2^i)
    } →
    
    applyComplete(M) {
      setVar(x := lim(xn)) →
      setVar(U∈C: x∈U) →
      setVar(ε>0: Ball(x,ε)⊆U) →
      setVar(n∈ℕ: 2^(-n)<ε/2) →
      setVar(m>n: d(xm,x)<2^(-n)) →
      
      prove(Am⊆U) →
      contradiction()
    }
  } →
  
  assert(Compact(M)) →
  conclude(SequentiallyCompact(M))
}