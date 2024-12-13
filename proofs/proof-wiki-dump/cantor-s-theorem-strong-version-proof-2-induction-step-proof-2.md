theorem Cantors_Strong_No_Surjection() {
  assert(
    ∀S ∈ Set ∧ ∀n ∈ ℕ₊ ⇒
    (PP^n(S) := match n with {
      0 → S
      n → P(PP^(n-1)(S))
    }) ⇒
    ¬∃f: S → PP^n(S) [surjective(f)]
  )
} ↔

proof Cantors_Strong_Induction_Step() {
  setVar(k: ℕ) →
  setVar(S: Set) →
  
  assume(IH: ¬∃f: S → PP^k(S) [surjective(f)]) →
  
  assert(PP^(k+1)(S) = P(PP^k(S))) →
  assert(P(PP^k(S)) ≠ ∅) →
  
  branch {
    case S = ∅:
      apply(Image_Empty_Set_Corollary()) →
      assert(¬∃f: S → PP^(k+1)(S) [surjective(f)])
    
    case S ≠ ∅:
      assume(∃f: S → PP^(k+1)(S) [surjective(f)]) →
      
      lemma Injection_Power_Set() {
        assert(∃g: PP^k(S) → P(PP^k(S)) [injective(g)])
      } →
      
      lemma Surjective_Left_Inverse() {
        assert(∃h: P(PP^k(S)) → PP^k(S) [surjective(h)])
      } →
      
      apply(Injection_Power_Set()) →
      apply(Surjective_Left_Inverse()) →
      
      assert(h ∘ f: S → PP^k(S)) →
      assert(surjective(h ∘ f)) →
      
      contradiction(IH, surjective(h ∘ f))
  } →
  
  conclude(¬∃f: S → PP^(k+1)(S) [surjective(f)])
}