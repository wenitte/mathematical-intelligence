theorem Cauchy_Group() {
  assert(
    ∀G: Group, ∀p: Prime ⇒
    (|G| < ∞ ∧ p divides |G|) →
    ∃H ⊆ G: |H| = p
  )
} ↔

lemma Abelian_Case() {
  assert(
    ∀G: AbelianGroup, ∀p: Prime ⇒
    (|G| < ∞ ∧ p divides |G|) →
    ∃H ⊆ G: |H| = p
  )
} ↔

proof Abelian_Case() {
  setVar(G: AbelianGroup, p: Prime) →
  case |G| is_prime {
    apply(Prime_Group_Is_Cyclic) →
    assert(∃g ∈ G: ⟨g⟩ = G ∧ |g| = p)
  } →
  case g ≠ e {
    setVar(n = |g|) →
    if p divides n {
      apply(Subgroup_Of_Finite_Cyclic_Group) →
      assert(∃h ∈ ⟨g⟩: |h| = p)
    } →
    if p not_divides n {
      assert(⟨g⟩ ◁ G) →
      setVar(G' = G/⟨g⟩) →
      assert(|G'| < |G|) →
      apply(induction_hypothesis, G') →
      assert(∃h' ∈ G': |h'| = p) →
      setVar(h = φ⁻¹(h')) →
      assert(h^p ∈ ⟨g⟩ ∧ (h^p)^n = e) →
      assert(|h| = p)
    }
  }
}

proof Cauchy_Group() {
  setVar(G: Group, p: Prime) →
  induct(|G|) {
    base_cases: assert(|G| ∈ {1,2,3}) →
    step {
      setVar(class_equation: |G| = 1 + |C₂| + ... + |C_r|) →
      assert(∃j ≥ 2: p not_divides |C_j|) →
      setVar(x ∈ C_j) →
      assert(p divides |C_G(x)|) →
      if C_G(x) ≠ G {
        apply(induction_hypothesis, C_G(x)) →
        assert(∃h ∈ C_G(x): |h| = p)
      } →
      if C_G(x) = G {
        assert(x ∈ Z(G) ∧ Z(G) ≠ {e}) →
        case p divides |Z(G)| {
          apply(Abelian_Case, Z(G))
        } →
        case p not_divides |Z(G)| {
          apply(induction_hypothesis, G/Z(G)) →
          assert(∃x ∈ G: x^p ∈ Z(G) ∧ x ∉ Z(G)) →
          setVar(X = ⟨x⟩) →
          assert(XZ(G) is_abelian) →
          apply(Abelian_Case, XZ(G))
        }
      }
    }
  }
}