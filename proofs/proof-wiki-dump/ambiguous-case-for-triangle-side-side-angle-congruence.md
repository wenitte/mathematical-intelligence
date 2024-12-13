theorem AmbiguousCase_SSA() {
  assert(
    ∀ABC ∈ Triangle ∧
    let(a,b,c: Triangle_Sides) ∧
    opposite(a,A) ∧ opposite(b,B) ∧ opposite(c,C) ∧
    known(a) ∧ known(b) ∧ known(∠B) ⇒
    ¬unique(∠A)
  )
} ↔

proof AmbiguousCase_SSA() {
  setVar(ABC: Triangle) →
  apply(LawOfSines) →
  assert(
    (sin(a)/sin(A) = sin(b)/sin(B) = sin(c)/sin(C))
  ) →
  solve(sin(A)) →
  assert(
    sin(A) = (sin(a)sin(B))/sin(b)
  ) →
  assert(
    0 < sin(A) ≤ 1
  ) →
  lemma SineSupplementaryAngles() {
    assert(
      ∀x ∈ ℝ ⇒ sin(x) = sin(π - x)
    )
  } →
  apply(SineSupplementaryAngles()) →
  assert(
    sin(A) = sin(π - A)
  ) →
  conclude(
    A ≠ π/2 ⇒ [A, π - A] are valid solutions
  ) →
  assert(
    ¬unique(∠A)
  )
}