theorem Regular_Polygon_Area() {
  assert(
    ∀P(regular_polygon) ∧ sides(P) = n ∧ side_length(P) = b →
    area(P) = (1/4)nb²cot(π/n)
  )
}

proof Regular_Polygon_Area() {
  setVar(H: point, center(P)) →
  setVar(A,B: points, adjacent_vertices(P)) →
  setVar(G: point, foot_of_altitude(H,AB)) →
  
  lemma Isosceles_Triangle() {
    assert(
      center(P) = H ∧ regular(P) →
      AH = BH
    )
  } →
  
  apply(Isosceles_Triangle()) →
  
  assert(
    area(triangle(ABH)) = (b×h)/2
  ) →
  
  lemma Altitude_Cotangent() {
    assert(
      h = (b/2)cot(α) ∧
      α = π/n
    )
  } →
  
  apply(Altitude_Cotangent()) →
  
  assert(
    area(triangle(ABH)) = (b/2)×(b/2)cot(π/n) →
    area(triangle(ABH)) = (b²/4)cot(π/n)
  ) →
  
  assert(
    P = n×triangle(ABH) →
    area(P) = n×(b²/4)cot(π/n) →
    area(P) = (1/4)nb²cot(π/n)
  )
}