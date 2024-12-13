theorem AbsoluteConvergenceImpliesNetConvergence() {
  let(V: BanachSpace,
      {vₙ}_{n∈ℕ}: Sequence(V),
      r: ℝ₊)
  assert(
    isAbsolutelyConvergent(∑_{n=1}^∞ vₙ, r) →
    isAbsolutelyNetConvergent(∑{vₙ: n∈ℕ}, r)
  )
} ↔

proof AbsoluteConvergenceImpliesNetConvergence() {
  setVar(ε: ℝ₊) →
  
  lemma AbsoluteConvergenceDef() {
    assert(∃N∈ℕ: ∀m≥N: |∑_{n=0}^m ‖vₘ‖ - r| < ε/3)
  } →
  
  setVar(F = [0,N],
         E ⊆ ℕ: E ⊇ F ∧ isFinite(E),
         m = max{n: n∈E},
         G = [0,m]) →
         
  assert(F ⊆ E ⊆ G) →
  assert(E = F ∪ (E∖F) ∧ G = F ∪ (G∖F)) →
  assert(F ∩ (E∖F) = ∅ ∧ F ∩ (G∖F) = ∅) →
  assert(E∖F ⊆ G∖F) →
  
  calc {
    |∑_{n∈E} ‖vₙ‖ - r|
    = |∑_{n∈F} ‖vₙ‖ + ∑_{n∈E∖F} ‖vₙ‖ - r|
    ≤ |∑_{n∈F} ‖vₙ‖ - r| + |∑_{n∈E∖F} ‖vₙ‖|
    ≤ |∑_{n∈F} ‖vₙ‖ - r| + |∑_{n∈G∖F} ‖vₙ‖|
    = |∑_{n∈F} ‖vₙ‖ - r| + |∑_{n∈G} ‖vₙ‖ - ∑_{n∈F} ‖vₙ‖|
    = |∑_{n∈F} ‖vₙ‖ - r| + |∑_{n∈G} ‖vₙ‖ - r + r - ∑_{n∈F} ‖vₙ‖|
    ≤ |∑_{n∈F} ‖vₙ‖ - r| + |∑_{n∈G} ‖vₙ‖ - r| + |r - ∑_{n∈F} ‖vₙ‖|
    < ε/3 + ε/3 + ε/3
    = ε
  } →
  
  assert(∀ε>0: ∃F⊂ℕ: isFinite(F) ∧ 
         ∀E⊇F: isFinite(E) → |∑_{n∈E} ‖vₙ‖ - r| < ε) →
         
  apply(CharacterizationOfConvergentNet()) →
  conclude(isAbsolutelyNetConvergent(∑{vₙ: n∈ℕ}, r))
}