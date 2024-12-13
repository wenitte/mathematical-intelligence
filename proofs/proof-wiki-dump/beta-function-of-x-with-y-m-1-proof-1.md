theorem BetaFunction_Identity() {
  assert(
    ∀x,y ∈ ℝ ⇒ 
    B(x,y) = (Γₘ(y)mˣ / Γₘ(x+y)) * B(x,y+m+1)
    where Γₘ(y) = (mʸm!) / (y(y+1)(y+2)...(y+m))
  )
} ↔

proof BetaFunction_Identity() {
  setVar(x,y: ℝ) →
  
  lemma Beta_Recursion() {
    assert(B(x,y) = ((x+y)/y) * B(x,y+1))
  } →
  
  assert(B(x,y) = ((x+y)/y) * B(x,y+1)) →
  assert(B(x,y) = ((x+y)/y) * ((x+y+1)/(y+1)) * B(x,y+2)) →
  assert(B(x,y) = ((x+y)⁽ᵐ⁺¹⁾/y⁽ᵐ⁺¹⁾) * B(x,y+m+1)) →
  
  lemma Beta_M_Recursion() {
    assert(B(y,m+1) = (m!)/y⁽ᵐ⁺¹⁾) ∧
    assert(B(x+y,m+1) = (m!)/(x+y)⁽ᵐ⁺¹⁾)
  } →
  
  apply(Beta_M_Recursion()) →
  assert(B(x,y) = (B(y,m+1)/B(x+y,m+1)) * B(x,y+m+1)) →
  assert(B(x,y) = ((m!/y⁽ᵐ⁺¹⁾)/(m!/(x+y)⁽ᵐ⁺¹⁾)) * B(x,y+m+1)) →
  
  lemma Gamma_Relation() {
    assert(m!/y⁽ᵐ⁺¹⁾ = Γₘ(y)/mʸ) ∧
    assert((x+y)⁽ᵐ⁺¹⁾/m! = mˣ⁺ʸ/Γₘ(x+y))
  } →
  
  apply(Gamma_Relation()) →
  assert(B(x,y) = ((Γₘ(y)/mʸ) * (mˣ⁺ʸ/Γₘ(x+y))) * B(x,y+m+1)) →
  assert(B(x,y) = (Γₘ(y)mˣ/Γₘ(x+y)) * B(x,y+m+1))
}