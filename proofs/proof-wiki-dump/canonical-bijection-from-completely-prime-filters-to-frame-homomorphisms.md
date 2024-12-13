theorem CanonicalBijectionLocale() {
  assert(
    ∀L[Locale] ∧
    let(Sp(L) = ⟨pt(L), {Σₐ : a ∈ L}⟩) ∧
    let(pt(L) = {p : p is completely prime filter of L}) ∧
    let(Σₐ = {p ∈ pt(L) : a ∈ p}) ∧
    let(Sp'(L) = ⟨pt'(L), {Σ'ₐ : a ∈ L}⟩) ∧
    let(pt'(L) = {φ : φ is frame homomorphism of L}) ∧
    let(Σ'ₐ = {φ ∈ pt'(L) : φ(a) = ⊤}) ∧
    let(f : pt(L) → pt'(L)) ∧
    ∀p ∈ pt(L) ⇒ f(p)(a) = {
      ⊤ if a ∈ p
      ⊥ if a ∉ p
    } ⇒
    (f is bijective ∧ f→|ΣL is surjection onto Σ'L)
  )
} ↔

proof CanonicalBijectionLocale() {
  block BijectivityProof {
    assert(f is well-defined) →
    setVar(g : pt'(L) → pt(L)) →
    assert(∀φ ∈ pt'(L) ⇒ g(φ) = φ⁻¹(⊤)) →
    assert(g is well-defined) →
    assert(g ∘ f = idpt(L)) →
    assert(f ∘ g = idpt'(L)) →
    conclude(f is bijective)
  } ∧

  block SurjectionProof {
    assert(∀a ∈ L ⇒
      f→(Σₐ) = {f(p) : p ∈ Σₐ} →
      = {f(p) : a ∈ p} →
      = {f(p) : f(p)(a) = ⊤} →
      = {φ ∈ pt'(L) : φ(a) = ⊤} →
      = Σ'ₐ
    ) →
    conclude(f→|ΣL is surjection onto Σ'L)
  }
}