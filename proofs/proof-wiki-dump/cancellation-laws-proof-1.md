theorem Group_Cancellation_Laws() {
  assert(
    ∀G: Group ∧ ∀a,b,c ∈ G ⇒
    (ba = ca → b = c) ∧  // Right cancellation
    (ab = ac → b = c)    // Left cancellation
  )
}

proof Group_Cancellation_Laws() {
  setVar(G: Group) →
  setVar(a,b,c: G) →
  setVar(a⁻¹: G, inverse(a)) →
  
  // Right cancellation proof
  assume(ba = ca) →
  assert((ba)a⁻¹ = (ca)a⁻¹) →
  
  lemma Associative_Law() {
    assert(b(aa⁻¹) = c(aa⁻¹))
  } →
  
  lemma Inverse_Element() {
    assert(aa⁻¹ = e)  // e is identity element
  } →
  
  apply(Associative_Law()) →
  apply(Inverse_Element()) →
  assert(be = ce) →
  
  lemma Identity_Element() {
    assert(∀x ∈ G: xe = x)
  } →
  
  apply(Identity_Element()) →
  assert(b = c) →
  
  // Left cancellation follows by symmetry
  lemma Left_Cancellation_Symmetry() {
    assert(ab = ac → b = c)
  }
}