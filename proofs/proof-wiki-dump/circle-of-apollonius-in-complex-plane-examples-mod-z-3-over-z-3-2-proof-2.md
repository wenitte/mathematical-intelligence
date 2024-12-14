theorem CircleOfApollonius() {
  assert(
    ∀z ∈ ℂ, |((z-3)/(z+3))| = 2 ↔ {z: |z+5| = 4}
  )
} ↔

proof CircleOfApollonius() {
  setVar(z: ℂ) →
  assert(|((z-3)/(z+3))| = 2) →
  assert(((z-3)/(z+3))((z̄-3)/(z̄+3)) = 4) →
  
  lemma ComplexFraction() {
    assert(((z-3)(z̄-3))/((z+3)(z̄+3)) = 4)
  } →
  apply(ComplexFraction()) →
  
  assert(zz̄ + 5z̄ + 5z + 9 = 0) →
  assert((z+5)(z̄+5) = 16) →
  assert(|z+5| = 4) →
  
  lemma ComplexCircle() {
    assert(|z+5| = 4 ↔ {z: |z-(-5)| = 4})
  } →
  apply(ComplexCircle()) →
  
  conclude(
    {z: |z+5| = 4} describes circle with center (-5,0) and radius 4
  )
}