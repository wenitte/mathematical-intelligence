theorem CartesianProduct_Bijection() {
  given(
    I: Set,  // indexing set
    Si: Family[Set, I],  // {S_i}_{i∈I}
    Ti: Family[Set, I],  // {T_i}_{i∈I}
    S: CartesianProduct(Si),  // ∏_{i∈I} S_i
    T: CartesianProduct(Ti),  // ∏_{i∈I} T_i
    fi: Family[Function, I]    // family of bijections f_i: S_i → T_i
  ) →
  assert(
    ∀i ∈ I: (fi[i]: Si[i] → Ti[i] ∧ isBijection(fi[i])) →
    ∃F: S → T where
    ∀s ∈ S: F(s) = ∏_{i∈I}(fi[i](s[i])) →
    isBijection(F)
  )
}

proof CartesianProduct_Bijection() {
  // Prove F is surjective
  lemma Surjectivity() {
    given(t ∈ T) →
    assert(∀i ∈ I: isSurjective(fi[i])) →
    assert(∀i ∈ I: ∃si ∈ Si[i]: fi[i](si) = t[i]) →
    assert(∃s ∈ S: F(s) = t) →
    conclude(isSurjective(F))
  } →

  // Prove F is injective
  lemma Injectivity() {
    given(
      s1, s2 ∈ S,
      t1 = F(s1),
      t2 = F(s2)
    ) →
    assume(t1 = t2) →
    assert(∀i ∈ I: isInjective(fi[i])) →
    assert(∀i ∈ I: t1[i] = t2[i]) →
    assert(∀i ∈ I: fi[i](s1[i]) = fi[i](s2[i])) →
    assert(∀i ∈ I: s1[i] = s2[i]) →
    conclude(s1 = s2) →
    conclude(isInjective(F))
  } →

  // Combine results
  apply(Surjectivity()) ∧
  apply(Injectivity()) →
  conclude(isBijection(F))
}