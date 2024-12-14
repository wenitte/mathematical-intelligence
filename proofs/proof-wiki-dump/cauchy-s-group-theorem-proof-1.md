theorem CauchyGroupTheorem() {
  letSet(G: FiniteGroup, e: Identity(G)) →
  letVar(p: Prime) →
  assert(p | |G|) →
  claimExistence(H: Subgroup(G)) →
  assert(|H| = p)
} ↔

proof CauchyGroupTheorem() {
  lemma AbelianCase() {
    letSet(G: FiniteGroup ∧ Abelian, e: Identity(G)) →
    letVar(p: Prime) →
    assert(p | |G|) →
    cases {
      case1(|G| = p) {
        apply(PrimeGroupIsCyclic) →
        exists(g: G) → assert(⟨g⟩ = G ∧ |g| = p)
      } →
      case2(g ∈ G ∧ g ≠ e) {
        letVar(n: |g|) →
        cases {
          case2a(p | n) {
            apply(SubgroupOfFiniteCyclicGroup) →
            exists(h: ⟨g⟩) → assert(|h| = p)
          } →
          case2b(p ∤ n) {
            apply(SubgroupOfAbelianGroupIsNormal) →
            letSet(G': G/⟨g⟩) →
            assert(|G'| < |G| ∧ p | |G|) →
            applyInduction() →
            exists(h': G') → assert(|h'| = p) →
            letVar(h: PreImage(h', φ)) →
            assert(h^p ∈ ⟨g⟩ ∧ (h^p)^n = (h^n)^p = e) →
            assert(|h^n| = p ∨ h^n = e) →
            assert(h^n ≠ e) // By contradiction with p ∤ n
          }
        }
      }
    }
  } →

  induction(|G|) {
    base(|G| ∈ {1,2,3}) {
      assert(Trivial)
    } →
    step() {
      apply(ClassEquation) →
      assert(|G| = 1 + |C₂| + ... + |Cᵣ|) →
      exists(j ≥ 2) → assert(p ∤ |Cⱼ|) →
      letVar(x ∈ Cⱼ) →
      assert(p | |CG(x)|) →
      cases {
        case1(CG(x) ≠ G) {
          applyInduction(CG(x)) →
          exists(h: CG(x)) → assert(|h| = p)
        } →
        case2(CG(x) = G) {
          assert(x ∈ Z(G) ∧ Z(G) ≠ {e}) →
          cases {
            case2a(p | |Z(G)|) {
              apply(AbelianCase, Z(G))
            } →
            case2b(p ∤ |Z(G)|) {
              letSet(G': G/Z(G)) →
              applyInduction(G') →
              exists(x: G) → assert(x^p ∈ Z(G) ∧ x ∉ Z(G)) →
              letSet(X: ⟨x⟩) →
              assert(IsAbelian(X·Z(G)) ∧ p | |X·Z(G)|) →
              apply(AbelianCase, X·Z(G))
            }
          }
        }
      }
    }
  }
}