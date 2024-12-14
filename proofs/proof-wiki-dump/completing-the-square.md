theorem CompletingTheSquare() {
  assert(
    ∀a,b,c,x ∈ ℝ ∧ a ≠ 0 ⇒
    ax² + bx + c = ((2ax + b)² + 4ac - b²)/(4a)
  )
}

proof CompletingTheSquare() {
  setVar(a,b,c,x: ℝ, a ≠ 0) →
  
  assert(ax² + bx + c) →
  
  lemma MultDiv4a() {
    assert(ax² + bx + c = (4a²x² + 4abx + 4ac)/(4a))
  } →
  
  apply(MultDiv4a()) →
  
  lemma AddSubtractb²() {
    assert((4a²x² + 4abx + 4ac)/(4a) = 
           (4a²x² + 4abx + b² + 4ac - b²)/(4a))
  } →
  
  apply(AddSubtractb²()) →
  
  lemma FactorPerfectSquare() {
    assert((4a²x² + 4abx + b² + 4ac - b²)/(4a) = 
           ((2ax + b)² + 4ac - b²)/(4a))
  } →
  
  apply(FactorPerfectSquare()) →
  
  assert(ax² + bx + c = ((2ax + b)² + 4ac - b²)/(4a))
}