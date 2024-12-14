theorem Ord_Exp_Membership_Compat() {
  assert(
    ∀x,y,z ∈ Ord ∧
    ∃w ∈ Ord: (z = succ(w)) →
    (x < y ↔ x^z < y^z)
  )
}

proof Ord_Exp_Membership_Compat() {
  setVar(x,y,z,w: Ord) →
  assert(z = succ(w)) →
  
  // Sufficient direction
  block Sufficient() {
    assume(x < y) →
    apply(Subset_Right_Compat_Ord_Exp) →
    assert(x^w ≤ y^w) →
    
    assert(x^z = x^w × x) by(Def_Ord_Exp) →
    assert(y^z = y^w × y) by(Def_Ord_Exp) →
    
    assert(x^w × x ≤ y^w × x) by(Subset_Right_Compat_Ord_Exp) →
    assert(y^w × x < y^w × y) by(Membership_Left_Compat_Ord_Exp) →
    
    conclude(x^z < y^z) by(Trans_Ord_Lt)
  }

  // Necessary direction
  block Necessary() {
    assume(x^z < y^z) →
    apply(Subset_Right_Compat_Ord_Exp) →
    assert(y ≤ x → y^z ≤ x^z) →
    
    lemma Contradiction() {
      assume(y ≤ x) →
      assert(y^z ≤ x^z) →
      assert(x^z < y^z) →
      conclude(false) by(Ord_Lt_Asymm)
    } →
    
    assert(y ≰ x) by(Contradiction) →
    apply(Ord_Trichotomy) →
    conclude(x < y)
  }
  
  conclude(x < y ↔ x^z < y^z)
}