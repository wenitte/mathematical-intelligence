theorem Canonical_Bijection() {
  let(L: Locale[∨,∧,⪯]) →
  let(Sp(L) = ⟨pt(L), {Σₐ : a ∈ L}⟩) where {
    pt(L) := {ϕ : ϕ is frame homomorphism of L}
    Σₐ := {ϕ ∈ pt(L) : ϕ(a) = ⊤}
  } →
  let(Sp'(L) = ⟨pt'(L), {Σ'ₐ : a ∈ L}⟩) where {
    pt'(L) := {g : g is continuous map of L}
    Σ'ₐ := {g ∈ pt'(L) : g₍ₗ₎(a) = ⊤}
    g₍ₗ₎ : L → 2 is frame homomorphism s.t. ⟨g,g₍ₗ₎⟩ is Galois connection
  } →
  let(f: pt(L) → pt'(L)) where {
    ∀ϕ ∈ pt(L): f(ϕ) = ϕ₍ᵤ₎
    ⟨ϕ₍ᵤ₎,ϕ⟩ is Galois connection
  } →
  assert(
    (f is bijective) ∧
    (f→|_{Σ_L} is surjection from Σ_L to Σ'_L)
  )
} ↔

proof Canonical_Bijection() {
  # Prove f is bijection
  lemma Bijection() {
    assert(∀ϕ ∈ pt(L) ⇒ ∃!⟨ϕ₍ᵤ₎,ϕ⟩: Galois_Connection(ϕ₍ᵤ₎,ϕ)) →
    assert(∀ϕ ∈ pt(L) ⇒ ∃!ϕ₍ᵤ₎: Continuous_Map(ϕ₍ᵤ₎)) →
    assert(f is well-defined) →
    apply(Galois_Connection_Unique_Lower_Adjoint()) →
    assert(f is injective) →
    assert(f is surjective by continuous map definition) →
    conclude(f is bijective)
  } →

  # Prove f→|_{Σ_L} is surjection
  lemma Image_Surjection() {
    let(a ∈ L) →
    assert(f→(Σₐ) = {f(ϕ) : ϕ ∈ Σₐ}) →
    assert({f(ϕ) : ϕ ∈ Σₐ} = {f(ϕ) : ϕ(a) = ⊤}) →
    assert({f(ϕ) : ϕ(a) = ⊤} = {g ∈ pt'(L) : g₍ₗ₎ ∈ pt(L) : g₍ₗ₎(a) = ⊤}) →
    assert({g ∈ pt'(L) : g₍ₗ₎ ∈ pt(L) : g₍ₗ₎(a) = ⊤} = Σ'ₐ) →
    conclude(f→|_{Σ_L} is surjection onto Σ'_L)
  }
}