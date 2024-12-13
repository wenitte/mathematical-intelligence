theorem Bretschneider_Formula() {
  assert(
    ∀ABCD(IsQuadrilateral(ABCD) ⇒
      let a,b,c,d = SideLengths(ABCD) ∧
      let s = (a + b + c + d)/2 ∧ 
      let α,γ = OppositeAngles(ABCD) →
      Area(ABCD) = √((s-a)(s-b)(s-c)(s-d) - abcd·cos²((α+γ)/2))
    )
  )
} ↔

proof Bretschneider_Formula() {
  setVar(ABCD: Quadrilateral) →
  let A₁ = Area(Triangle(DAB)) →
  let A₂ = Area(Triangle(BCD)) →
  
  lemma Triangle_Area() {
    assert(A₁ = (ab·sinα)/2 ∧ A₂ = (cd·sinγ)/2)
  } →
  
  assert(Area(ABCD) = A₁ + A₂) →
  assert(Area(ABCD)² = (1/4)(a²b²sin²α + 2abcd·sinα·sinγ + c²d²sin²γ)) →

  lemma Diagonal_Law_Cosines() {
    let p = Diagonal(ABCD) →
    assert(p² = a² + b² - 2ab·cosα ∧ p² = c² + d² - 2cd·cosγ) →
    assert(a² + b² - 2ab·cosα = c² + d² - 2cd·cosγ)
  } →

  apply(Diagonal_Law_Cosines()) →
  assert((a² + b² - c² - d²)² = 4a²b²cos²α - 8abcd·cosα·cosγ + 4c²d²cos²γ) →
  
  lemma Final_Step() {
    assert(Area(ABCD)² = (1/16)((s-a)(s-b)(s-c)(s-d) - 
           (1/2)abcd(1 + cos(α+γ))) →
    apply(Half_Angle_Cosine()) →
    assert(Area(ABCD)² = (s-a)(s-b)(s-c)(s-d) - abcd·cos²((α+γ)/2))
  } →
  
  apply(Final_Step()) →
  assert(Area(ABCD) = √((s-a)(s-b)(s-c)(s-d) - abcd·cos²((α+γ)/2)))
}