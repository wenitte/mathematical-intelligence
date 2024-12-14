theorem ChineseRemainderTheorem() {
  setVars(b[1..r]: ℤ, n[1..r]: ℤ>0) →
  assert(∀i,j ∈ [1..r], i≠j: gcd(n[i],n[j]) = 1) →
  define(N = ∏(i=1..r) n[i]) →
  assert(
    ∃!x ∈ ℤ: (∀i ∈ [1..r]: x ≡ b[i] (mod n[i])) ∧ 
    (x unique mod N)
  )
} ↔

proof ChineseRemainderTheorem() {
  // Construction
  setVars(i ∈ [1..r]) →
  define(y[i] = N/n[i]) →
  define(z[i] where z[i]y[i] ≡ 1 (mod n[i])) →
  define(x = ∑(i=1..r) b[i]y[i]z[i]) →
  
  // Prove x is solution
  lemma SolutionVerification() {
    assert(∀j ∈ [1..r]: n[j]|y[i] for i≠j) →
    assert(∀i ∈ [1..r]: y[i] ≡ 0 (mod n[j]) for i≠j) →
    assert(∀i ∈ [1..r]: b[i]y[i]z[i] ≡ 0 (mod n[j]) for i≠j) →
    assert(∀i ∈ [1..r]: x ≡ b[i]y[i]z[i] (mod n[i])) →
    assert(∀i ∈ [1..r]: x ≡ b[i] (mod n[i]))
  } →
  apply(SolutionVerification()) →

  // Prove uniqueness
  lemma UniquenessProof() {
    setVars(u,v: ℤ) →
    assume(∀i ∈ [1..r]: u ≡ b[i] (mod n[i]) ∧ v ≡ b[i] (mod n[i])) →
    assert(∀i ∈ [1..r]: u-v ≡ 0 (mod n[i])) →
    assert(∀i ∈ [1..r]: n[i]|(u-v)) →
    assert(N|(u-v)) →
    assert(u ≡ v (mod N))
  } →
  apply(UniquenessProof())
}