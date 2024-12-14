theorem ComplexLimitSum() {
  let(S: subset(ℂ, open)) →
  let(c: element(S)) →
  let(f,g: function(S → ℂ)) →
  assert(
    (lim[z→c] f(z) = l) ∧
    (lim[z→c] g(z) = m)
  ) →
  assert(
    lim[z→c] (f(z) + g(z)) = l + m
  )
}

proof ComplexLimitSum() {
  let({zₙ}: sequence(S)) →
  assume(
    ∀n∈ℕ₊: zₙ ≠ c ∧
    lim[n→∞] zₙ = c
  ) →
  
  lemma ComplexSeqLimit() {
    assert(
      lim[n→∞] f(zₙ) = l ∧
      lim[n→∞] g(zₙ) = m
    )
  } →
  
  lemma ComplexSeqSum() {
    assert(
      lim[n→∞] (f(zₙ) + g(zₙ)) = l + m
    )
  } →
  
  apply(ComplexSeqLimit()) →
  apply(ComplexSeqSum()) →
  
  theorem ComplexFuncBySeq() {
    assert(
      (lim[n→∞] (f(zₙ) + g(zₙ)) = l + m) →
      (lim[z→c] (f(z) + g(z)) = l + m)
    )
  } →
  
  apply(ComplexFuncBySeq()) →
  assert(lim[z→c] (f(z) + g(z)) = l + m)
}