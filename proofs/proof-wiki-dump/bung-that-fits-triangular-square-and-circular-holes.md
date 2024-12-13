theorem BungShapeFit() {
  assert(
    ∃B[shape] ∈ ℝ³ ⇒ (
      FitsCircle(B, r) ∧
      FitsSquare(B, 2r) ∧
      FitsTriangle(B, [2r, √5r, √5r])
    )
  )
} ↔

proof BungShapeFit() {
  setVar(r: ℝ) →
  setVar(B: RightCircularCylinder(r, 2r)) →
  
  assert(CircleFit: FitsCircle(B, r)) →
  
  lemma SquareFit() {
    assert(
      Height(B) = 2r ∧
      Width(B) = 2r ⇒
      FitsSquare(B, 2r)
    )
  } →
  
  setVar(D: Diameter(Base(B))) →
  
  lemma TangentPlanes() {
    assert(
      ∃P₁,P₂: Plane ⇒ (
        Contains(P₁, D) ∧
        Contains(P₂, D) ∧
        Tangent(P₁, OtherBase(B)) ∧
        Tangent(P₂, OtherBase(B))
      )
    )
  } →
  
  apply(TangentPlanes()) →
  setVar(B': SlicedCylinder(B, P₁, P₂)) →
  
  assert(
    CrossSection(B') = Triangle(2r, √5r, √5r) ⇒
    FitsTriangle(B', [2r, √5r, √5r])
  ) →
  
  conclude(
    FitsCircle(B', r) ∧
    FitsSquare(B', 2r) ∧
    FitsTriangle(B', [2r, √5r, √5r])
  )
}