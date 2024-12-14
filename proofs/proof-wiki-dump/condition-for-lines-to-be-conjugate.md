theorem ConjugateLines() {
  assert(
    ∀C(0,0,r) ∈ Circle ∧ 
    ∀P(l₁x + m₁y + n₁ = 0) ∈ Line ∧ 
    ∀Q(l₂x + m₂y + n₂ = 0) ∈ Line ∧ 
    isConjugate(P,Q,C) ⇒
    l₁l₂ + m₁m₂ = (n₁n₂)/(r²)
  )
}

proof ConjugateLines() {
  lemma PolarPoints() {
    assert(
      isConjugate(P,Q,C) ⇔ 
      ∃point_P,point_Q ∈ C : 
        (isPolar(P,point_Q) ∧ isPolar(Q,point_P) ∧
         point_P ∈ Q ∧ point_Q ∈ P)
    )
  } →

  lemma PoleCoordinates() {
    assert(
      isPolar(P,point_Q) ⇒
      point_Q = (-l₁r²/n₁, -m₁r²/n₁)
    )
  } →

  apply(PolarPoints()) →
  apply(PoleCoordinates()) →

  setVar(
    x = -l₁r²/n₁,
    y = -m₁r²/n₁
  ) →

  assert(
    point_Q ∈ Q ⇒
    l₂(-l₁r²/n₁) + m₂(-m₁r²/n₁) + n₂ = 0
  ) →

  assert(
    -l₁l₂r²/n₁ - m₁m₂r²/n₁ + n₂ = 0
  ) →

  assert(
    l₁l₂r² + m₁m₂r² = n₁n₂
  ) →

  conclude(
    l₁l₂ + m₁m₂ = n₁n₂/r²
  )
}