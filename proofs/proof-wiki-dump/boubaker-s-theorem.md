theorem Boubaker_Theorem() {
  assert(
    ∀R[CommutativeRing(R)] ∧
    ∀D[IntegralDomain(D, R)] ∧ 
    ∀X[Transcendental(X, D)] ∧
    ∀N[PositiveInteger(N)] ∧
    ∀pn[Polynomial(pn, D[X])] →
    Properties([1,2,3,4]) ↔ IsBoubaker4nSequence(pn)
  )
} where {
  Properties(p) := 
    Sum(k=1..N, pn(0)) = -2N ∧
    Sum(k=1..N, pn(αk)) = 0 ∧
    Sum(k=1..N, d/dx(pn(x))|x=0) = 0 ∧
    Sum(k=1..N, d²/dx²(pn²(x))|x=0) = 8/3*N*(N²-1)
}

proof Boubaker_Theorem() {
  // Validity proof
  setContext(
    R: CommutativeRing,
    D: IntegralDomain(R),
    X: Transcendental(D)
  ) →

  lemma Property1() {
    assert(B4n(x) = Sum(p=0..⌊n/2⌋, (n-4p)/(n-p) * Choose(n-p,p) * (-1)^p * x^(n-2p))) →
    assert(B4n(0) = -2) →
    assert(Sum(k=1..N, B4n(0)) = -2N)
  } →

  lemma Property2() {
    assert(∀k[1..N]: B4n(αk) = 0) →
    assert(Sum(k=1..N, B4n(αk)) = 0)
  } →

  lemma Property3() {
    assert(d/dx(B4n(x)) = Sum(p=0..⌊n/2⌋-1, Term(p))) →
    assert(d/dx(B4n(x))|x=0 = 0) →
    assert(Sum(k=1..N, d/dx(B4n(x))|x=0) = 0)
  } →

  lemma Property4() {
    assert(d²/dx²(B4n(x)) = Sum(p=0..⌊n/2⌋-2, Term(p))) →
    assert(d²/dx²(B4n(x))|x=0 = 8/3*N*(N²-1)) →
    assert(Sum(k=1..N, d²/dx²(B4n²(x))|x=0) = 8/3*N*(N²-1))
  } →

  // Uniqueness proof
  lemma Uniqueness() {
    setVar(q4n: AlternatePolynomial) →
    assert(B4n(x) = Sum(p=0..2n, a4n,p * x^(2(2n-p)))) →
    assert(q4n(x) = Sum(p=0..2n, b4n,p * x^(2(2n-p)))) →
    setVar(d4n,p := a4n,p - b4n,p) →
    assert(Properties(q4n)) →
    assert(LinearSystem(d4n,p)) →
    assert(∀p[0..2n]: d4n,p = 0) →
    assert(q4n(x) = B4n(x))
  }
}