theorem Complex_Function_Quotient_Continuity() {
  assert(
    ∀f,g: Functions(ℂ) ∧
    ∀S ⊆ ℂ [S is open] ∧
    isContinuous(f, S) ∧
    isContinuous(g, S) ⇒
    isContinuous(f/g, S\{z ∈ S: g(z) = 0})
  )
} ↔

proof Complex_Function_Quotient_Continuity() {
  setVar(f,g: Functions(ℂ)) →
  setVar(S: OpenSet(ℂ)) →
  
  lemma Continuity_Definition() {
    assert(
      isContinuous(f, S) ↔ 
      ∀c ∈ S: lim[z→c] f(z) = f(c)
    ) ∧
    assert(
      isContinuous(g, S) ↔ 
      ∀c ∈ S: lim[z→c] g(z) = g(c)
    )
  } →
  
  setVar(c: S) →
  setVar(l: ℂ | l = lim[z→c] f(z)) →
  setVar(m: ℂ | m = lim[z→c] g(z)) →
  
  lemma Complex_Quotient_Limit() {
    assert(
      ∀c ∈ S: m ≠ 0 ⇒
      lim[z→c] (f(z)/g(z)) = l/m
    )
  } →
  
  apply(Continuity_Definition()) →
  apply(Complex_Quotient_Limit()) →
  
  assert(
    ∀z ∈ S: g(z) ≠ 0 ⇒
    isContinuous(f/g, z)
  )
}