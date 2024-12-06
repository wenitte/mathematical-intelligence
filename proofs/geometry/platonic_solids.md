theorem_definition(PlatonicSolids) ↔
∀P [P ∈ PlatonicSolids ↔ ∃F, V, E [Faces(P) = F ∧ Vertices(P) = V ∧ Edges(P) = E ∧ ∀f ∈ F [f ∈ RegularPolygons ∧ ∀v ∈ V [∃A ⊆ PlaneAngles(v) [|A| ≥ 3 ∧ ΣA < 4 × RightAngle]]]]].

proof(PlatonicSolids) ↔
∀P [P ∈ PlatonicSolids →
∀v ∈ Vertices(P) [SolidAngle(v) = Σ PlaneAngles(v) ∧
Proposition_21(SolidAngle(v)) ↔ [Σ PlaneAngles(v) < 4 × RightAngle]]
∧
[∀F ⊆ RegularPolygons [[
F = [f ∈ RegularPolygons | f = EquilateralTriangle] →
∃n ∈ ℕ [n ∈ [3, 4, 5] ∧ n Triangles/Vertex ∧ ΣAngles(v) < 4 × RightAngle] ∧
Result_Triangles ↔ ∃P₁, P₂, P₃ [P₁, P₂, P₃ ⊆ PlatonicSolids ∧ Faces(P₁) = Faces(P₂) = Faces(P₃) = EquilateralTriangles]]]
∧
[F = [f ∈ RegularPolygons | f = Square] →
∃n ∈ ℕ [n = 3 ∧ ΣAngles(v) = 3 × RightAngle] ∧
Result_Squares ↔ ∃P₄ [P₄ ⊆ PlatonicSolids ∧ Faces(P₄) = Squares]]]
∧
[F = [f ∈ RegularPolygons | f = RegularPentagon] →
∃n ∈ ℕ [n = 3 ∧ ΣAngles(v) < 4 × RightAngle] ∧
Result_Pentagons ↔ ∃P₅ [P₅ ⊆ PlatonicSolids ∧ Faces(P₅) = RegularPentagons]]]
∧
[F = [f ∈ RegularPolygons | f ∉ [EquilateralTriangle, Square, RegularPentagon]] →
∄n ∈ ℕ [n ≥ 3 ∧ ΣAngles(v) < 4 × RightAngle] ∧
Result_Exclusion ↔ [P ∉ PlatonicSolids ↔ Faces(P) ∈ [Hexagon ∪ HigherPolygons]]]]]]].

conclusion(PlatonicSolids) ↔
PlatonicSolids = [Tetrahedron, Cube, Octahedron, Dodecahedron, Icosahedron]
∧ ∀P [P ∈ PlatonicSolids ↔ Faces(P) ∈ [EquilateralTriangles, Squares, RegularPentagons]]
∧ ∀v ∈ Vertices(P) [SolidAngle(v) < 4 × RightAngle].
∴ Proved.