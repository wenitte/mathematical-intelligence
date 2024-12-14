theorem CofactorSumIdentity() {
  let(A: Matrix[n,n], Jn: Matrix[n,n], Aij: Cofactor) →
  assert(
    Jn = Matrix.ones(n,n) ∧
    det(A - Jn) = det(A) - ∑(i=1→n)∑(j=1→n)Aij
  )
} ↔

proof CofactorSumIdentity() {
  let(Pj: Matrix[n,n]) →
  assert(Pj = A.withColumn(j, ones)) →
  
  lemma ExpansionTheorem() {
    assert(∑(j=1→n)det(Pj) = ∑(j=1→n)∑(i=1→n)Aij)
  } →

  lemma EquivalentIdentity() {
    assert(det(A - Jn) = det(A) - ∑(j=1→n)det(Pj))
  } →

  let(Qm: Matrix[n,n]) →
  assert(Qm = Jn.withZeros(columns[1→m])) →

  lemma InductionIdentity() {
    assert(∀m ∈ [1,n]: 
      det(A - Jn) = det(A - Qm) - ∑(j=1→m)det(Pj)
    )
  } →

  proof InductionBase() {
    setVar(m = 1) →
    assert(det(A - Jn) = det(A - Q1) - det(P1)) →
    assert(det(P1 - Q1) = det(P1)) →
    conclude(InductionIdentity(m=1))
  } →

  proof InductionStep() {
    let(k < n) →
    assume(InductionIdentity(m=k)) →
    assert(det(A - Qk) = det(A - Q(k+1)) - det(P(k+1) - Q(k+1))) →
    assert(det(P(k+1) - Q(k+1)) = det(P(k+1))) →
    conclude(InductionIdentity(m=k+1))
  } →

  setVar(m = n) →
  assert(A - Qn = A) →
  apply(InductionIdentity()) →
  conclude(EquivalentIdentity()) →
  conclude(CofactorSumIdentity())
}