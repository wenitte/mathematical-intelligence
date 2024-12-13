theorem Canonical_Bijection() {
  assert(
    ∀L[locale(L)] ∧
    let(Sp(L) = ⟨pt(L), {Σₐ : a ∈ L}⟩) ∧
    let(pt(L) = {p : prime_filter(p, L)}) ∧
    let(Σₐ = {p ∈ pt(L) : a ∈ p}) ∧
    let(ΣL = {Σₐ : a ∈ L}) ∧
    let(Sp'(L) = ⟨pt'(L), {Σ'ₐ : a ∈ L}⟩) ∧
    let(pt'(L) = {p : meet_irreducible(p, L)}) ∧
    let(Σ'ₐ = {p ∈ pt'(L) : a ⋢ p}) ∧
    let(Σ'L = {Σ'ₐ : a ∈ L}) ∧
    let(f: pt(L) → pt'(L)) ∧
    ∀p ∈ pt(L)[f(p) = ⋁{a ∈ L : a ∉ p}] ⇒
    (bijective(f) ∧ surjective(f^→|ΣL, Σ'L))
  )
}

proof Canonical_Bijection() {
  section Bijective_Proof() {
    setMap(g: pt'(L) → pt(L)) →
    ∀m ∈ pt'(L)[g(m) = {a ∈ L : a ⋢ m}] →
    
    lemma Well_Defined() {
      assert(well_defined(f) ∧ well_defined(g))
    } →
    
    lemma Composition_Identity() {
      assert(g ∘ f = idₚₜ(L)) ∧
      assert(f ∘ g = idₚₜ'(L))
    } →
    
    apply(Well_Defined()) →
    apply(Composition_Identity()) →
    assert(bijective(f))
  } →

  section Surjective_Proof() {
    setVar(a: L) →
    assert(f^→(Σₐ) = {f(p) : p ∈ Σₐ}) →
    assert({f(p) : p ∈ Σₐ} = {f(p) : p ∈ pt(L) : a ∈ p}) →
    assert({f(p) : p ∈ pt(L) : a ∈ p} = {⋁(L∖p) : p ∈ pt(L) : a ∈ p}) →
    assert({⋁(L∖p) : p ∈ pt(L) : a ∈ p} = {⋁(L∖p) : p ∈ pt(L) : a ⋢ ⋁(L∖p)}) →
    assert({⋁(L∖p) : p ∈ pt(L) : a ⋢ ⋁(L∖p)} = {m ∈ pt'(L) : a ⋢ m}) →
    assert({m ∈ pt'(L) : a ⋢ m} = Σ'ₐ) →
    assert(surjective(f^→|ΣL, Σ'L))
  }
}