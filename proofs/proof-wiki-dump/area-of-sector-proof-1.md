theorem Area_of_Circle_Sector() {
  assert(
    ∀C(circle), ∀A,B(points) where {
      center(C) = A ∧
      radius(C) = r ∧
      B,C ∈ circumference(C) ∧
      θ = angle(BAC)
    } ⇒
    area(sector(BAC)) = (r²θ)/2
  )
} ↔

proof Area_of_Circle_Sector() {
  setVar(C: circle, A,B: points) →
  assert(center(C) = origin(0,0)) →
  assert(C_equation: x² + y² = r²) →
  
  setCoords(B: (x₀, √(r² - x₀²))) →
  assert(right_triangle(ADB)) →
  
  lemma Sin_Relationship() {
    assert(sin(θ) = x₀/r) →
    assert(θ = arcsin(x₀/r))
  } →
  
  lemma Line_Equation() {
    assert(Δy = √(r² - x₀²)) →
    assert(Δx = x₀) →
    assert(m = Δy/Δx = √(r² - x₀²)/x₀) →
    assert(line_eq: y = (√(r² - x₀²)/x₀)x)
  } →
  
  let(K = region_between(C,AC,AB)) →
  assert(area(K) = ∫₀^x₀[√(r² - x²) - (√(r² - x₀²)/x₀)x]dx) →
  
  compute_integral(
    step1: split_integral() →
    step2: evaluate_primitive() →
    step3: substitute_bounds() →
    step4: simplify() →
    result: area(K) = (r²/2)arcsin(x₀/r)
  ) →
  
  apply(Sin_Relationship()) →
  assert(area(K) = r²θ/2)
}