theorem Abels_Lemma_Corollary() {
  let(R: Ring)
  let(a[k], b[k]: Sequence(R))
  assert(
    ∀n ∈ ℕ⁺ ⇒ 
    ∑[k=1→n](a[k](b[k+1] - b[k])) = 
    a[n+1]b[n+1] - a[1]b[1] - ∑[k=1→n]((a[k+1] - a[k])b[k+1])
  )
} ↔

proof Abels_Lemma_Corollary() {
  lemma Abels_Lemma() {
    assert(
      ∀m,n ∈ ℕ⁺, m ≤ n ⇒
      ∑[k=m→n](a[k](b[k+1] - b[k])) = 
      a[n+1]b[n+1] - a[m]b[m] - ∑[k=m→n]((a[k+1] - a[k])b[k+1])
    )
  } →
  
  setVar(m: ℕ⁺) →
  apply(Abels_Lemma()) →
  substitute(m = 1) →
  assert(
    ∑[k=1→n](a[k](b[k+1] - b[k])) = 
    a[n+1]b[n+1] - a[1]b[1] - ∑[k=1→n]((a[k+1] - a[k])b[k+1])
  )
}

alternate_form1() {
  assert(
    ∀n ∈ ℕ⁺ ⇒
    ∑[k=1→n]((a[k+1] - a[k])b[k]) = 
    a[n+1]b[n+1] - a[1]b[1] - ∑[k=1→n](a[k+1](b[k+1] - b[k]))
  )
}

alternate_form2() {
  assert(
    ∀n ∈ ℕ⁺ ⇒
    ∑[k=1→n-1]((a[k+1] - a[k])b[k]) = 
    a[n]b[n] - a[1]b[1] - ∑[k=1→n-1](a[k+1](b[k+1] - b[k]))
  )
}