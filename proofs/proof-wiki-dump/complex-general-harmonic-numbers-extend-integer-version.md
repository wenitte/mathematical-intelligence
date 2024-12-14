theorem Complex_General_Harmonic_Numbers() {
  assert(
    ∀r ∈ ℝ_{>0}, ∀z ∈ ℂ\ℤ_{<0}, ∀n ∈ ℕ_{>0} ⇒
    (H^{(r)}_n = ∑_{k=1}^n \frac{1}{k^r}) ↔
    (H^{(r)}_z = ∑_{k=1}^∞ (\frac{1}{k^r} - \frac{1}{(k+z)^r}))
  )
}

proof Complex_General_Harmonic_Numbers() {
  setVar(r: ℝ_{>0}) →
  setVar(x: ℂ) →
  
  lemma Definition() {
    assert(
      H^{(r)}_x = ∑_{k=1}^∞ (\frac{1}{k^r} - \frac{1}{(k+x)^r})
    )
  } →

  lemma Integer_Case() {
    assert(x ∈ ℤ_{>0}) →
    expand(∑) →
    assert(
      H^{(r)}_x = (\frac{1}{1^r} - \frac{1}{(1+x)^r}) + 
                  (\frac{1}{2^r} - \frac{1}{(2+x)^r}) + ⋯
    ) →
    combine_terms() →
    assert(
      H^{(r)}_x = ∑_{k=1}^x \frac{1}{k^r}
    )
  } →

  apply(Definition()) →
  apply(Integer_Case()) →
  assert(
    ∀x ∈ ℤ_{>0}: H^{(r)}_x = ∑_{k=1}^x \frac{1}{k^r}
  )
}