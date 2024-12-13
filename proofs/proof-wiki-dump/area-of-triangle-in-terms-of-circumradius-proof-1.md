theorem Area_Triangle_Circumradius() {
  assert(
    ∀triangle(ABC) ∧ ∀sides(a,b,c) ∧ ∀vertices(A,B,C) ∧
    sides_opposite_vertices(a↔A, b↔B, c↔C) ∧
    ∃R(circumradius(ABC,R)) →
    Area(ABC) = (a*b*c)/(4*R)
  )
}

proof Area_Triangle_Circumradius() {
  setVar(O: circumcenter(ABC)) →
  setVar(E: perpendicular_foot(C,AB)) →
  setVar(h: length(CE)) →
  
  assert(Area(ABC) = (c*h)/2) →  // Area formula with height
  
  assert(h = 2*Area(ABC)/c) →     // Solve for h
  
  setVar(D: diameter_point(C,O)) →
  assert(length(CD) = 2*R) →      // Diameter equals 2R
  
  assert(right_angle(CAD)) →      // By Thales' Theorem
  assert(angle(ADC) = angle(ABC)) → // Angles on equal arcs
  assert(angle(ACD) = angle(ECB)) → // Sum of triangle angles
  
  lemma Similar_Triangles() {
    assert(similar(triangle(DAC), triangle(BEC)))
  } →
  
  apply(Similar_Triangles()) →
  assert(CA/CD = CE/CB) →         // Similar triangles ratio
  assert(b/(2*R) = h/a) →         // Substitute known lengths
  
  assert(b/(2*R) = (2*Area(ABC))/(a*c)) → // Substitute h
  
  assert(Area(ABC) = (a*b*c)/(4*R)) // Final result
}