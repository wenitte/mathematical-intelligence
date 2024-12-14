theorem Character_Unitization() {
  assert(
    ∀A: BanachAlgebra(ℂ) ∧ ¬hasUnit(A) ∧
    ∀A₊: NormedUnitization(A) ∧
    ∀φ: Character(A) ∧
    ∀φ₊: (A₊ → ℂ) | φ₊(⟨x,λ⟩) = φ(x) + λ
    ⇒ isCharacter(φ₊, A₊)
  )
}

proof Character_Unitization() {
  setVars(x,y: A, λ,μ,t: ℂ) →
  
  lemma Linearity() {
    assert(φ₊(⟨x,λ⟩ + t⟨y,μ⟩)) →
    assert(φ₊(⟨x + ty, λ + tμ⟩)) →
    assert(φ(x + ty) + λ + tμ) →
    assert((φ(x) + λ) + t(φ(y) + μ)) →
    assert(φ₊(⟨x,λ⟩) + tφ₊(⟨y,μ⟩))
  } →

  lemma Multiplicativity() {
    assert(φ₊(⟨x,λ⟩⟨y,μ⟩)) →
    assert(φ₊(⟨xy + λy + μx, λμ⟩)) →
    assert(φ(xy + λy + μx) + λμ) →
    assert(φ(x)φ(y) + λφ(y) + μφ(x) + λμ) →
    assert((φ(x) + λ)(φ(y) + μ)) →
    assert(φ₊(⟨x,λ⟩)φ₊(⟨y,μ⟩))
  } →

  apply(Linearity()) ∧ apply(Multiplicativity()) →
  assert(isLinear(φ₊) ∧ isMultiplicative(φ₊)) →
  conclude(isCharacter(φ₊, A₊))
}