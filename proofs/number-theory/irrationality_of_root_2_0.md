∀p∀q(
(Assume(Rational(2)) ∧ (√2 = p/q) ∧ p∈ℤ ∧ q∈ℤ ∧ RelativelyPrime(p,q))
→
(∃m(p = 2m) ∧ ∃n(q = 2n)
 ∧ ¬RelativelyPrime(p,q)
 ∧ ¬(∃p∃q(√2 = p/q) ∧ p∈ℤ ∧ q∈ℤ ∧ RelativelyPrime(p,q)))
∧ Irrational(2)
)
