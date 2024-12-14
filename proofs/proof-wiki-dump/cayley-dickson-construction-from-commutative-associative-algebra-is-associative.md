theorem Cayley_Dickson_Associativity() {
  assert(
    ∀A(A_F, ⊕) [*-algebra] ∧
    ∀A'(A_F, ⊕') [Cayley-Dickson(A)] ⇒
    (isAssociative(A') ↔ (isCommutative(A) ∧ isAssociative(A)))
  )
}

proof Cayley_Dickson_Associativity() {
  setVar(* : conjugationOperator(A)) →
  setVar((a,b), (c,d), (e,f) ∈ A') →
  
  lemma Notation_Simplification() {
    assert(a ⊕ b := ab) ∧
    assert(x ⊕' y := xy)
  } →

  // Forward direction
  assume(isCommutative(A) ∧ isAssociative(A)) →
  
  assert(((a,b)(c,d))(e,f) = 
         (ac - db*, a*d + cb)(e,f)) →
         
  assert(= ((ac - db*)e - f(a*d + cb)*, 
            (ac - db*)*f + e(a*d + cb))) →
            
  assert(= ((ac)e - (db*)e - f(d*a) - f(b*c*),
            (c*a*)f - (bd*)f + e(a*d) + e(cb))) →
            
  lemma Apply_Commutativity() {
    assert(∀x,y ∈ A ⇒ xy = yx)
  } →
  
  assert(= (a(ce) - a(fd*) - (c*f)b* - (ed)b*,
            a*(c*f) + a*(ed) + (ce)b - (fd*)b)) →
            
  assert(= (a(ce - fd*) - (c*f + ed)b*,
            a*(c*f + ed) + (ce - fd*)b)) →
            
  assert(= (a,b)(ce - fd*, c*f + ed)) →
  
  assert(= (a,b)((c,d)(e,f))) →

  // Reverse direction
  assume(isAssociative(A')) →
  assert(
    ∀x,y,z ∈ A ⇒ 
    ((x,0)(y,0))(z,0) = (x,0)((y,0)(z,0)) ⇒
    isCommutative(A) ∧ isAssociative(A)
  )
}