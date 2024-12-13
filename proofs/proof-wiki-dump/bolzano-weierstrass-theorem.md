theorem Bolzano_Weierstrass() {
  assert(
    ∀s: Sequence(ℝ) ∧ Bounded(s) ⇒ 
    ∃t: Sequence(ℝ) ∧ Subsequence(t,s) ∧ Convergent(t)
  )
} ↔

proof Bolzano_Weierstrass_Proof1() {
  setVar(s: Sequence(ℝ)) →
  assume(Bounded(s)) →
  
  lemma Peak_Point() {
    assert(
      ∀seq: Sequence(ℝ) ⇒ 
      ∃subseq: Sequence(ℝ) ∧ Monotone(subseq) ∧ Subsequence(subseq,seq)
    )
  } →
  
  apply(Peak_Point(), s) →
  setVar(m: Sequence(ℝ), Monotone(m) ∧ Subsequence(m,s)) →
  assert(Bounded(m)) →
  
  lemma Monotone_Convergence() {
    assert(
      ∀seq: Sequence(ℝ) ∧ Monotone(seq) ∧ Bounded(seq) ⇒ 
      Convergent(seq)
    )
  } →
  
  apply(Monotone_Convergence(), m) →
  conclude(Convergent(m))
}

proof Bolzano_Weierstrass_Proof2() {
  setVar(s: Sequence(ℝ)) →
  assume(Bounded(s)) →
  setVar(a,b: ℝ, ∀n∈ℕ: s[n]∈(a,b)) →
  
  construct Nested_Intervals() {
    setVar(i: ℕ) →
    setVar(a[0]=a, b[0]=b) →
    assert(
      (∃n>n[i-1]: s[n]=(a[i]+b[i])/2) ∨
      (∃n>n[i-1]: a[i]<s[n]<(a[i]+b[i])/2) ∨
      (∃n>n[i-1]: (a[i]+b[i])/2<s[n]<b[i])
    ) →
    buildSubsequence(conditions) →
    assert(|s[n[j]]-s[n[i]]| < (b-a)/2^j)
  } →
  
  lemma Cauchy_Convergence() {
    assert(
      ∀seq: Sequence(ℝ) ∧ Cauchy(seq) ⇒ 
      Convergent(seq)
    )
  } →
  
  apply(Cauchy_Convergence()) →
  conclude(Convergent(subsequence))
}