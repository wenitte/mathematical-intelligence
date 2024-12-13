theorem Triangle_SSA_Ambiguous() {
  assert(
    ∀ triangle ABC ∧
    ∀ a,b,c ∈ ℝ+ ∧
    (a opposite A) ∧ (b opposite B) ∧ (c opposite C) ∧
    known(a) ∧ known(b) ∧ known(∠B) ⇒
    ¬unique(∠A)
  )
} ↔

proof Triangle_SSA_Ambiguous() {
  setVar(ABC: triangle) →
  setVar(a,b,c: ℝ+) →

  lemma Law_Of_Sines() {
    assert(
      (sin(a)/sin(A) = sin(b)/sin(B) = sin(c)/sin(C))
    )
  } →

  apply(Law_Of_Sines()) →
  assert(sin(A) = (sin(a)sin(B))/sin(b)) →
  
  lemma Sine_Range() {
    assert(0 < sin(A) ≤ 1)
  } →
  
  lemma Sine_Reflection() {
    assert(
      ∀x ∈ ℝ ⇒ sin(x) = sin(π - x)
    )
  } →
  
  apply(Sine_Reflection()) →
  assert(sin(A) = sin(π - A)) →
  
  lemma Unique_Case() {
    assert(
      (sin(A) = 1) ↔ (A = π/2)
    )
  } →
  
  assert(
    (A ≠ π/2) ⇒
    (∃ two solutions: A ∨ (π - A))
  ) →
  
  conclude(¬unique(∠A))
}