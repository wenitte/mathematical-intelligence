theorem Circle_Segment_Area() {
  assert(
    ∀C: Circle, r: ℝ, S: Segment, θ: ℝ ⇒
    (radius(C) = r ∧ 
     S ⊂ C ∧
     subtends_angle(S, θ)) →
    area(S) = (1/2)r²(θ - sin(θ))
  )
}

proof Circle_Segment_Area() {
  setVar(B,D,C,E: Point) →
  setVar(S = segment(B,D,C,E)) →
  setVar(b = base_length(S)) →
  setVar(sector_BACE = circular_sector(B,A,C,E)) →
  
  lemma Area_Decomposition() {
    assert(
      area(S) = area(sector_BACE) - area(triangle(A,B,C))
    )
  } →

  lemma Sector_Area() {
    assert(
      area(sector_BACE) = (1/2)r²θ
    )
  } →

  lemma Isosceles_Triangle_Area() {
    assert(
      isosceles(triangle(A,B,C)) →
      area(triangle(A,B,C)) = (1/2)r²sin(θ)
    )
  } →

  apply(Area_Decomposition()) →
  apply(Sector_Area()) →
  apply(Isosceles_Triangle_Area()) →
  
  assert(
    area(S) = (1/2)r²θ - (1/2)r²sin(θ)
  ) →
  
  assert(
    area(S) = (1/2)r²(θ - sin(θ))
  )
}