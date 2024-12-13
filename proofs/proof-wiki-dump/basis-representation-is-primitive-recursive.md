theorem Basis_Representation_Is_Primitive_Recursive() {
  assert(
    ∀b,n,i ∈ ℕ ⇒ basis(b,n,i) := {
      1 if b = 1 ∧ i < n,
      rᵢ if b > 1 ∧ i ≤ m,
      0 otherwise
    } is_primitive_recursive()
  )
  where([rm...r1r0]b represents n in base-b)
} ↔

proof Basis_Representation_Is_Primitive_Recursive() {
  define(f(b,n,i) := {
    n if i = 0,
    quot(f(b,n,i-1), b) if i > 0
  }) →
  
  lemma F_Is_Primitive_Recursive() {
    assert(constant_function_is_primitive_recursive()) ∧
    assert(quotient_is_primitive_recursive()) →
    assert(f_is_primitive_recursive())
  } →

  lemma F_Base_Case() {
    assert(f(b,n,0) = n) →
    assert(n = [rm...r1r0]b)
  } →

  lemma F_Inductive_Step() {
    assume(f(b,n,i) = [rm...ri+1ri]b) →
    assert(f(b,n,i+1) = quot([rm...ri+1ri]b, b)) →
    assert(quot(∑(j=0 to m-i)rj+i·bʲ, b)) →
    assert(quot(ri + ∑(j=0 to m-i-1)rj+i+1·bʲ⁺¹, b)) →
    assert(quot(ri + b·∑(j=0 to m-i-1)rj+i+1·bʲ, b)) →
    assert(∑(j=0 to m-i-1)rj+i+1·bʲ) →
    assert([rm...ri+2ri+1]b)
  } →

  apply(Mathematical_Induction()) →
  assert(∀i: f(b,n,i) = [rm...ri+1ri]b) →

  define(g(b,n,i) := rem(f(b,n,i), b)) →
  assert(g_is_primitive_recursive()) →
  
  lemma G_Computes_Digits() {
    assert(g(b,n,i) = rem(f(b,n,i), b)) →
    assert(rem([rm...ri+1ri]b, b)) →
    assert(rem(∑(j=0 to m-i)rj+i·bʲ, b)) →
    assert(rem(ri + b·∑(j=0 to m-i-1)rj+i+1·bʲ, b)) →
    assert(ri)
  } →

  assert(definition_by_cases_is_primitive_recursive()) ∧
  assert(ordering_relations_are_primitive_recursive()) ∧
  assert(set_operations_on_primitive_recursive_relations()) ∧
  assert(constant_function_is_primitive_recursive()) →
  assert(basis_is_primitive_recursive())
}