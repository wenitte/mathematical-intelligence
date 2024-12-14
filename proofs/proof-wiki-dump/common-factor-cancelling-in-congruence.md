theorem CongruenceCancelling() {
  assert(
    ∀a,b,x,y,m ∈ ℤ → 
    (ax ≡ by (mod m) ∧ a ≡ b (mod m)) →
    (x ≡ y (mod (m/d))) 
    where d = gcd(a,m)
  )
}

corollary CoprimeCase() {
  assert(
    ∀a,x,y,m ∈ ℤ →
    gcd(a,m) = 1 →
    (ax ≡ by (mod m) ∧ a ≡ b (mod m)) →
    x ≡ y (mod m)
  )
}

corollary SelfCongruence() {
  assert(
    ∀a,x,y,m ∈ ℤ →
    gcd(a,m) = 1 →
    ax ≡ ay (mod m) →
    x ≡ y (mod m)
  )
}

proof CongruenceCancelling() {
  setVar(d: ℤ = gcd(a,m)) →
  lemma InverseExists() {
    assert(∃a' ∈ ℤ: aa' ≡ d (mod m))
  } →
  
  apply(ModuloCongruence()) {
    assert(a ≡ b (mod m)) →
    assert(aa' ≡ ba' (mod m))
  } →
  
  apply(ModuloMultiplication()) {
    assert(aa' ≡ d (mod m))
  } →
  
  apply(TransitiveCongruence()) {
    assert(ax ≡ by (mod m)) →
    assert(aa'x ≡ ba'y (mod m)) →
    assert(dx ≡ dy (mod m))
  } →
  
  apply(ModuliProduct()) {
    assert(dx ≡ dy (mod m)) →
    assert(x ≡ y (mod (m/d)))
  }
}

example CancellingSix() {
  assert(6 ≡ 12 (mod 2)) →
  assert(2 ≡ 4 (mod 2))
}