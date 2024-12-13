theorem CircleChordArea() {
  assert(
    ∀O,r,A,B,C,D ∈ Circle ∧
    ∀α,θ ∈ ℝ ∧
    α = measure(∠COD) ∧
    θ = measure(∠AOB) ∧
    AB,CD = Chords ⇒
    (¬contains(O,Area) → Area = (r²/2)(θ - sin(θ) - α + sin(α))) ∧
    (contains(O,Area) → Area = r²(π - (1/2)(θ - sin(θ) + α - sin(α))))
  )
} ↔

proof CircleChordArea() {
  setVar(Sα: AreaSegment(α)) →
  setVar(Sθ: AreaSegment(θ)) →

  case(1) {
    assert(contains(O,Area)) →
    Area = CircleArea - Sα - Sθ →
    
    lemma CircleArea() {
      assert(CircleArea = πr²)
    } →
    
    lemma SegmentArea() {
      assert(
        ∀angle ∈ ℝ →
        AreaSegment(angle) = (r²/2)(angle - sin(angle))
      )
    } →
    
    apply(CircleArea()) →
    apply(SegmentArea()) →
    Area = πr² - (r²/2)(θ - sin(θ)) - (r²/2)(α - sin(α)) →
    Area = r²(π - (1/2)(θ - sin(θ) + α - sin(α)))
  } →
  
  case(2) {
    assert(¬contains(O,Area)) →
    assume(θ ≥ α) →
    Area = Sθ - Sα →
    
    apply(SegmentArea()) →
    Area = (r²/2)(θ - sin(θ)) - (r²/2)(α - sin(α)) →
    Area = (r²/2)(θ - sin(θ) - α + sin(α))
  }
}