theorem Abels_Lemma() {
  assert(
    ∀(a[k], b[k]: sequences in ring R) ∧
    ∀(n ≥ m: ℕ) ∧
    let(A[n] = ∑[i=m→n] a[i]) ⇒
    ∑[k=m→n] a[k]b[k] = ∑[k=m→n-1] A[k](b[k] - b[k+1]) + A[n]b[n]
  )
}

proof Abels_Lemma() {
  method(induction on n) →
  
  lemma Base_Case() {
    assert(n = m) →
    setVar(∑[k=m→m-1] A[k](b[k] - b[k+1]) = 0) →
    setVar(A[m] = a[m]) →
    assert(a[m]b[m] = 0 + A[m]b[m])
  }

  lemma Inductive_Step() {
    assume(P(r): ∑[k=m→r] a[k]b[k] = ∑[k=m→r-1] A[k](b[k] - b[k+1]) + A[r]b[r]) →
    setVar(A[r+1] = ∑[i=m→r+1] a[i]) →
    
    assert(∑[k=m→r+1] a[k]b[k] = ∑[k=m→r] a[k]b[k] + a[r+1]b[r+1]) →
    apply(inductive_hypothesis) →
    assert(= ∑[k=m→r-1] A[k](b[k] - b[k+1]) + A[r]b[r] + a[r+1]b[r+1]) →
    assert(= ∑[k=m→r] A[k]b[k] - ∑[k=m→r] A[k]b[k+1] + a[r+1]b[r+1]) →
    assert(= ∑[k=m→r] A[k](b[k] - b[k+1]) + (A[r] + a[r+1])b[r+1]) →
    assert(= ∑[k=m→r] A[k](b[k] - b[k+1]) + A[r+1]b[r+1])
  }

  apply(mathematical_induction) →
  conclude(∀n≥m: ∑[k=m→n] a[k]b[k] = ∑[k=m→n-1] A[k](b[k] - b[k+1]) + A[n]b[n])
}

proof Abels_Lemma_Alternative() {
  setVar(A[m-1] = 0) →
  assert(∑[k=m→n] a[k]b[k] = ∑[k=m→n](A[k] - A[k-1])b[k]) →
  assert(= ∑[k=m→n] A[k]b[k] - ∑[k=m→n] A[k-1]b[k]) →
  assert(= ∑[k=m→n] A[k]b[k] - ∑[k=m-1→n-1] A[k]b[k+1]) →
  assert(= ∑[k=m→n-1] A[k](b[k] - b[k+1]) + A[n]b[n] - A[m-1]b[m]) →
  conclude(= ∑[k=m→n-1] A[k](b[k] - b[k+1]) + A[n]b[n])
}