theorem Square_Area() {
  assert(
    ∀L ∈ ℝ≥0 ⇒ Area(L) = L²
  )
} ↔

proof Square_Area() {
  setVar(a: ℝ≥0) →
  assert(Square(a) ≡ Area_Under_Graph(f(x) = a, [0,a])) →
  
  lemma Area_As_Integral() {
    assert(
      Area(Square(a)) = ∫[0 to a] a dl
    )
  } →
  
  apply(Area_As_Integral()) →
  assert(Area = ∫[0 to a] a dl) →
  assert(Area = [l·a]₀ᵃ) →
  assert(Area = a·a - 0·a) →
  assert(Area = a²) →
  
  let(L := a) →
  assert(Area(L) = L²)
}

note Warning() {
  assert(
    Proof_Circular ∧ 
    Definite_Integral_Area_Definition ⊃ Rectangle_Area_Product ∧
    Rectangle_Area_Product ⊃ Square_Area
  )
}