∀a,b,c∈ℝ(∀A,B,C∈ℝ²(
  RightTriangle(Δ(A, B, C)) ∧ Coordinates(C, (0, 0)) ∧ Coordinates(A, (a, 0)) ∧ Coordinates(B, (0, b)) →
  (Distance(A, B) = √(a² + b²) ∧ Distance(B, C) = b ∧ Distance(C, A) = a) →
  (Distance(A, B)² = Distance(B, C)² + Distance(C, A)²) →
  a² + b² = c²)).
