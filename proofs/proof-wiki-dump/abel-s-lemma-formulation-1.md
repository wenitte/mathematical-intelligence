theorem Abels_Lemma() {
  assert(
    ∀(a[k], b[k]: Sequence[R]) where R: Ring ∧ k ∈ [m..n] ⇒
    ∑[k=m..n](a[k](b[k+1] - b[k])) = 
    a[n+1]b[n+1] - a[m]b[m] - ∑[k=m..n]((a[k+1] - a[k])b[k+1])
  )
}

proof Abels_Lemma() {
  setVar(a[k], b[k]: Sequence[R]) →
  
  assert(
    ∑[k=m..n](a[k](b[k+1] - b[k])) = 
    ∑[k=m..n](a[k]b[k+1]) - ∑[k=m..n](a[k]b[k])
  ) →

  lemma Sum_Rearrangement() {
    assert(
      ∑[k=m..n](a[k]b[k]) = 
      a[m]b[m] + ∑[k=m..n](a[k+1]b[k+1]) - a[n+1]b[n+1]
    )
  } →

  apply(Sum_Rearrangement()) →
  
  assert(
    ∑[k=m..n](a[k]b[k+1]) - ∑[k=m..n](a[k]b[k]) =
    ∑[k=m..n](a[k]b[k+1]) - (a[m]b[m] + ∑[k=m..n](a[k+1]b[k+1]) - a[n+1]b[n+1])
  ) →

  assert(
    = a[n+1]b[n+1] - a[m]b[m] + ∑[k=m..n](a[k]b[k+1]) - ∑[k=m..n](a[k+1]b[k+1])
  ) →

  assert(
    = a[n+1]b[n+1] - a[m]b[m] - ∑[k=m..n]((a[k+1] - a[k])b[k+1])
  )
}

corollary Abels_Lemma_Special() {
  assert(
    ∀(a[k], b[k]: Sequence[R]) where R: Ring ∧ k ∈ [1..n] ⇒
    ∑[k=1..n](a[k](b[k+1] - b[k])) = 
    a[n+1]b[n+1] - a[1]b[1] - ∑[k=1..n]((a[k+1] - a[k])b[k+1])
  )
}