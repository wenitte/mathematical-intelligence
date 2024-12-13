theorem BesselsInequality() {
  let(V: InnerProductSpace, ⟨·,·⟩: InnerProduct, ∥·∥: InnerProductNorm) →
  let(E: Set = {eₙ: n ∈ ℕ}, orthonormal(E)) →
  assert(
    ∀h ∈ V ⇒ ∑_{n=1}^∞ |⟨h,eₙ⟩|² ≤ ∥h∥²
  )
}

proof BesselsInequality() {
  setVar(h: V) →
  setVar(n: ℕ) →
  
  lemma NormExpansion() {
    assert(
      ∥h - ∑_{k=1}^n ⟨h,eₖ⟩eₖ∥² = 
      ⟨h - ∑_{k=1}^n ⟨h,eₖ⟩eₖ, h - ∑_{j=1}^n ⟨h,eⱼ⟩eⱼ⟩
    )
  } →

  lemma InnerProductExpansion() {
    assert(
      ⟨h,∑_{j=1}^n ⟨h,eⱼ⟩eⱼ⟩ = ∑_{j=1}^n |⟨h,eⱼ⟩|²
    )
  } →

  apply(NormExpansion(), InnerProductExpansion()) →
  assert(∥h - ∑_{k=1}^n ⟨h,eₖ⟩eₖ∥² = ∥h∥² - ∑_{k=1}^n |⟨h,eₖ⟩|²) →
  
  lemma NonNegativeNorm() {
    assert(∥h - ∑_{k=1}^n ⟨h,eₖ⟩eₖ∥² ≥ 0) →
    assert(∑_{k=1}^n |⟨h,eₖ⟩|² ≤ ∥h∥²)
  } →

  lemma MonotoneConvergence() {
    assert(∀k. |⟨h,eₖ⟩|² ≥ 0) →
    assert(increasing(sequence(∑_{k=1}^n |⟨h,eₖ⟩|²))) →
    assert(bounded(sequence(∑_{k=1}^n |⟨h,eₖ⟩|²))) →
    assert(converges(sequence(∑_{k=1}^n |⟨h,eₖ⟩|²)))
  } →

  apply(MonotoneConvergence()) →
  assert(∥h∥² ≥ lim_{n→∞} ∑_{k=1}^n |⟨h,eₖ⟩|² = ∑_{k=1}^∞ |⟨h,eₖ⟩|²)
}

theorem BesselsInequalityCorollary1() {
  let(V: InnerProductSpace, E: OrthonormalSet) →
  assert(
    ∀h ∈ V ⇒ countable({e ∈ E: ⟨h,e⟩ ≠ 0})
  )
}

theorem BesselsInequalityCorollary2() {
  let(V: InnerProductSpace, E: OrthonormalSet) →
  assert(
    ∀h ∈ V ⇒ ∑_{e∈E} |⟨h,e⟩|² ≤ ∥h∥²
  )
}