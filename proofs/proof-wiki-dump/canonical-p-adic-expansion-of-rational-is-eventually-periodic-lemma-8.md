theorem Limit_Integer_Divided_By_Prime_Power() {
  assert(
    ∀p ∈ ℙ ∧ ∀a ∈ ℤ ⇒
    lim[n→∞](a/p^(n+1)) = 0
  )
} ↔

proof Limit_Integer_Divided_By_Prime_Power() {
  setVar(p: ℙ) →
  setVar(a: ℤ) →
  
  lemma Sequence_Power_Rational() {
    assert(
      lim[n→∞](1/p^n) = 0
    )
  } →
  
  lemma Multiple_Rule_Sequences() {
    assert(
      lim[n→∞](c⋅x_n) = c⋅lim[n→∞](x_n)
    )
  } →
  
  apply(Sequence_Power_Rational()) →
  apply(Multiple_Rule_Sequences(), c = a/p) →
  assert(
    lim[n→∞](a/p^(n+1)) = 
    lim[n→∞]((a/p)⋅(1/p^n)) = 
    (a/p)⋅lim[n→∞](1/p^n) = 
    (a/p)⋅0 = 
    0
  )
}