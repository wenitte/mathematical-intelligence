theorem Alexandroff_Extension_T1() {
  assert(
    ∀T(T = ⟨S,τ⟩ ∧ T ≠ ∅) ∧
    ∀p(p ∉ S) ∧
    let S* = S ∪ {p} ∧
    let T* = ⟨S*,τ*⟩ ∧
    isAlexandroffExtension(T*, T) →
    (isT1Space(T*) ↔ isT1Space(T))
  )
}

proof Alexandroff_Extension_T1() {
  // Necessary condition (→)
  branch_necessary() {
    assume(isT1Space(T)) →
    assert(∀x ∈ S → isClosed({x}, T)) →
    assert(isOpen(S, T)) →
    assert(isOpen(S, T*)) →
    assert(S = S* ∖ {p}) →
    assert(isClosed({p}, T*)) →
    
    setVar(x: S*, x ≠ p) →
    assert(isClosed({x}, T)) →
    lemma Finite_Space_Compact() {
      assert(isCompact({x}, T))
    } →
    apply(Finite_Space_Compact()) →
    assert(isOpen(S* ∖ {x}, T*)) →
    assert(isClosed({x}, T*)) →
    
    assert(∀x ∈ S* → isClosed({x}, T*)) →
    assert(isT1Space(T*))
  }

  // Sufficient condition (←)
  branch_sufficient() {
    assume(isT1Space(T*)) →
    assert(isSubspace(T, T*)) →
    lemma T1_Property_Hereditary() {
      assert(isSubspace(X, Y) ∧ isT1Space(Y) → isT1Space(X))
    } →
    apply(T1_Property_Hereditary()) →
    assert(isT1Space(T))
  }
}