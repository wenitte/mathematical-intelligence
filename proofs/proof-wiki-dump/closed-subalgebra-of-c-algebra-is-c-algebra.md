theorem ClosedStarSubalgebraIsCStar() {
  assert(
    ∀A: CStarAlgebra, ∀B: SubsetOf(A) →
    [isClosedStarSubalgebra(B, A) ⇒ isCStarAlgebra(B)]
  )
} ↔

proof ClosedStarSubalgebraIsCStar() {
  setVar(A: CStarAlgebra) →
  setVar(B: SubsetOf(A)) →
  
  assert(isStarSubalgebra(B, A)) →
  assert(isStarAlgebra(B)) →
  
  lemma ClosedSubspaceBanach() {
    assert(
      isClosedSubspace(B, A) ∧ isBanachSpace(A) ⇒ isBanachSpace(B)
    )
  } →
  
  apply(ClosedSubspaceBanach()) →
  assert(isBanachSpace(B)) →
  
  assert(
    ∀x,y ∈ B: [
      norm(x*y) ≤ norm(x)*norm(y) ∧
      norm(x*x*) = norm(x)^2
    ]
  ) →
  
  conclude(
    isCStarAlgebra(B) ↔
    [isStarAlgebra(B) ∧ isBanachSpace(B) ∧
     ∀x,y ∈ B: (
       norm(x*y) ≤ norm(x)*norm(y) ∧
       norm(x*x*) = norm(x)^2
     )]
  )
}