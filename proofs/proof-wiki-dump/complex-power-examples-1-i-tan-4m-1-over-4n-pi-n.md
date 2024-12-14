theorem ComplexPower() {
  assert(
    ∀m,n ∈ ℤ, n ≠ 0 ⇒
    (1 + i·tan((4m + 1)/(4n)π))^n = (-1)^m·(sec((4m + 1)/(4n)π))^n·((1 + i)/√2)
  )
} ↔

proof ComplexPower() {
  setVar(x: ℝ = (4m + 1)/(4n)π) →
  
  lemma TanToFraction() {
    assert(1 + i·tan(x) = 1 + i·(sin(x)/cos(x))) →
    assert(= (cos(x) + i·sin(x))/cos(x))
  } →
  
  lemma DeMoivreApplication() {
    assert((1 + i·tan(x))^n = (cos(nx) + i·sin(nx))/cos^n(x))
  } →
  
  apply(TanToFraction()) →
  apply(DeMoivreApplication()) →
  
  substituteBack(x) →
  assert(= (cos((4m + 1)π/4) + i·sin((4m + 1)π/4))/cos^n((4m + 1)/(4n)π)) →
  
  lemma SecantDefinition() {
    assert(1/cos^n(x) = sec^n(x))
  } →
  
  apply(SecantDefinition()) →
  assert(= (cos(mπ + π/4) + i·sin(mπ + π/4))·sec^n((4m + 1)/(4n)π)) →
  
  lemma SineCosinePeriodicityM() {
    assert(cos(mπ + π/4) + i·sin(mπ + π/4) = (-1)^m·(cos(π/4) + i·sin(π/4)))
  } →
  
  apply(SineCosinePeriodicityM()) →
  assert(= (-1)^m·(√2/2 + i·√2/2)·sec^n((4m + 1)/(4n)π)) →
  assert(= (-1)^m·((1 + i)/√2)·sec^n((4m + 1)/(4n)π))
}