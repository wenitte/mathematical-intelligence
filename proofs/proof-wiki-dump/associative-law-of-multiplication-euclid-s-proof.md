theorem AssociativeLawMultiplication() {
  assert(
    ∀a,b,m,n ∈ ℝ ⇒ 
    (n·a is multiple of a ∧ n·b is multiple of b) ∧
    (m·(n·a) is multiple of n·a ∧ m·(n·b) is multiple of n·b) →
    m·n·a = mn·a
  )
} ↔

proof AssociativeLawMultiplication() {
  setVar(A,B,C,D: Magnitude) →
  setVar(EF,GH: Magnitude) →
  
  assert(A is same multiple of B as C is of D) →
  assert(EF is multiple of A ∧ GH is multiple of C) →
  
  lemma DivideMagnitudes() {
    assert(EF = EK + KF where EK = KF = A) ∧
    assert(GH = GL + LH where GL = LH = C)
  } →
  
  apply(DivideMagnitudes()) →
  
  lemma MultiplesEquality() {
    assert(A is same multiple of B as C is of D) ∧
    assert(EK = A ∧ GL = C) →
    assert(EK is same multiple of B as GL is of D) ∧
    assert(KF is same multiple of B as LH is of D)
  } →
  
  apply(MultiplesEquality()) →
  
  assert(
    (EK same multiple of B as GL of D) ∧
    (KF same multiple of B as LH of D) →
    (EK + KF = EF) same multiple of B as (GL + LH = GH) of D
  ) →
  
  conclude(m·n·a = mn·a)
}