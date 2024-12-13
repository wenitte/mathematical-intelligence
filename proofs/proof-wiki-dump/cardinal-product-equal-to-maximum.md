theorem Cardinal_Product_Maximum() {
  assert(
    ∀S,T: Set × Set ∧ 
    (S ∼ card(S)) ∧ 
    (T ∼ card(T)) ∧
    isInfinite(S) ∧ 
    card(T) > 0 
    ⇒ card(S × T) = max(card(S), card(T))
  )
} ↔

proof Cardinal_Product_Maximum() {
  setVar(x := max(card(S), card(T))) →
  
  lemma Forward_Inequality() {
    apply(Cartesian_Product_Preserves_Cardinality) →
    assert(S × T ∼ card(S) × card(T)) →
    setVar(f: S × T → card(S) × card(T), isBijection(f)) →
    assert(f: S × T → x × x, isInjection(f)) →
    
    assert(card(S × T) ≤ card(x × x)) by(Injection_iff_Cardinal_Inequality) →
    assert(card(x × x) = card(x)) by(Non_Finite_Cardinal_Product) →
    assert(card(x) ≤ x) by(Cardinal_Number_Less_Than_Ordinal) →
    
    conclude(card(S × T) ≤ x)
  } →
  
  lemma Reverse_Inequality() {
    assert(
      (x = card(S) when card(T) ≤ card(S)) ∧
      (x = card(T) when card(S) ≤ card(T))
    ) →
    apply(Relation_Between_Two_Ordinals) →
    assert(x = card(S) ∨ x = card(T)) →
    apply(Set_Less_Than_Cardinal_Product) →
    conclude(x ≤ card(S × T))
  } →
  
  apply(Forward_Inequality()) →
  apply(Reverse_Inequality()) →
  assert(card(S × T) ≤ x ∧ x ≤ card(S × T)) →
  conclude(card(S × T) = x)
}