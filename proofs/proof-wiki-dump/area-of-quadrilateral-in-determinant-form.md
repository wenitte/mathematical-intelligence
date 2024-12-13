theorem QuadrilateralArea() {
  let A: Point2D = (x₁, y₁)
  let B: Point2D = (x₂, y₂)
  let C: Point2D = (x₃, y₃)
  let D: Point2D = (x₄, y₄)
  
  assert(
    Area(ABCD) = 1/2 * (|det([x₁ y₁ 1; x₂ y₂ 1; x₃ y₃ 1])| + 
                        |det([x₁ y₁ 1; x₄ y₄ 1; x₃ y₃ 1])|)
  )
} ↔

proof QuadrilateralArea() {
  assert(ABCD = Triangle(ABC) ∪ Triangle(ADC)) →
  assert(Area(ABCD) = Area(ABC) + Area(ADC)) →
  
  lemma TriangleArea() {
    assert(
      ∀ points P,Q,R ∈ ℝ² →
      Area(Triangle(PQR)) = 1/2 * |det([xₚ yₚ 1; xq yq 1; xᵣ yᵣ 1])|
    )
  } →
  
  apply(TriangleArea()) to Triangle(ABC) →
  assert(Area(ABC) = 1/2 * |det([x₁ y₁ 1; x₂ y₂ 1; x₃ y₃ 1])|) →
  
  apply(TriangleArea()) to Triangle(ADC) →
  assert(Area(ADC) = 1/2 * |det([x₁ y₁ 1; x₄ y₄ 1; x₃ y₃ 1])|) →
  
  assert(
    Area(ABCD) = Area(ABC) + Area(ADC) = 
    1/2 * (|det([x₁ y₁ 1; x₂ y₂ 1; x₃ y₃ 1])| + 
           |det([x₁ y₁ 1; x₄ y₄ 1; x₃ y₃ 1])|)
  )
}

example QuadrilateralArea_Example() {
  let A: Point2D = (2, -1)
  let B: Point2D = (4, 3)
  let C: Point2D = (-1, 2)
  let D: Point2D = (-3, -2)
  
  apply(QuadrilateralArea()) →
  compute() →
  assert(Area(ABCD) = 18)
}