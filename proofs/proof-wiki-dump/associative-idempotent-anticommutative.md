theorem AssociativeIdempotentAnticommutative() {
  setDomain(S: Set, ∅ ⊂ S) →
  setBinaryOperation(∘: S × S → S) →
  assert(
    isAssociative(∘) ∧
    (isAnticommutative(∘) ↔ 
      (isIdempotent(∘) ∧ 
       ∀a,b ∈ S: a∘b∘a = a))
  )
}

proof AssociativeIdempotentAnticommutative() {
  // Necessary Direction
  proof NecessaryCondition() {
    assume(isAnticommutative(∘)) →
    setVar(a: S) →
    assert(a∘a = a∘a ↔ a = a) →
    assert(wellDefined(a∘a)) →
    
    setVar(w: S) →
    assert((a∘a)∘w = w∘(a∘a) ↔ a∘a = w) →
    assert(a∘a ∈ S) →
    
    substitute(w := a) →
    assert((a∘a)∘a = a∘(a∘a) ↔ a∘a = a) →
    assert(isIdempotent(∘)) →
    
    setVar(b: S) →
    assert(∀a,b ∈ S: a∘b = b∘a ↔ a = b) →
    
    setVar(x,y,z: S) →
    assert((a∘b)∘x = x∘(a∘b) ↔ a∘b = x) →
    assert((b∘a)∘y = y∘(b∘a) ↔ b∘a = y) →
    assert((a∘b∘a)∘z = z∘(a∘b∘a) ↔ a∘b∘a = z) →
    
    assert((a∘a)∘b∘a = a∘b∘a) by(isIdempotent) →
    assert(a∘b∘(a∘a) = a∘(a∘b∘a)) by(isAssociative) →
    assert((a∘b∘a)∘a = a) by(isAnticommutative) →
    assert(a∘b∘a = a)
  }

  // Sufficient Direction
  proof SufficientCondition() {
    assume(isIdempotent(∘) ∧ ∀a,b ∈ S: a∘b∘a = a) →
    setVar(a,b: S) →
    assume(a∘b = b∘a) →
    
    assert(a∘(b∘a) = a∘(a∘b)) by(hypothesis) →
    assert(a∘b∘a = (a∘a)∘b) by(isAssociative) →
    assert(a∘b = a) by(isIdempotent) →
    
    assert((a∘b)∘a = (b∘a)∘a) by(hypothesis) →
    assert(b∘(a∘a) = b∘a) by(isIdempotent) →
    assert(b∘a = a) by(hypothesis) →
    
    assert(b∘(a∘b) = b∘(b∘a)) by(hypothesis) →
    assert(b∘a∘b = (b∘b)∘a) by(isAssociative) →
    assert(b∘a = b) by(isIdempotent) →
    
    assert(a = b) by(transitivity) →
    assert(isAnticommutative(∘))
  }
}