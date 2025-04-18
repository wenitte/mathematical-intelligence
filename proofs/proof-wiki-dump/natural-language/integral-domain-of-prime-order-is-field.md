# 

Source: https://proofwiki.org/wiki/Integral_Domain_of_Prime_Order_is_Field

Theorem
Let $\struct {\Z_p, +_p, \times_p}$‎ be the ring of integers modulo $p$.
The following statements are equivalent:

$(1): \quad p$ is a prime.
$(2): \quad \struct {\Z_p, +_p, \times_p}$ is an integral domain.
$(3): \quad \struct {\Z_p, +_p, \times_p}$ is a field.


Proof
By Prime Number iff Generates Principal Maximal Ideal and Maximal Ideal iff Quotient Ring is Field, $(1)$ implies $(3)$, and from Field is Integral Domain, $(3)$ implies $(2)$.

By definition of Integral Domain, $\Z_p$ is an integral domain if and only if $\struct {\Z_p^*, \times_p}$ is a semigroup.
Let $\ideal p$ be the principal ideal of $\struct {\Z, +, \times}$ generated by $p$.
From Quotient Epimorphism from Integers by Principal Ideal:

$\struct {\Z_p, +_p, \times_p}$ is isomorphic to $\struct {\Z, +, \times} / \ideal p$.
So, we can let $\map {q_p} m: \Z \to \Z_p$ be the quotient mapping from $\struct {\Z, +, \times}$ to $\struct {\Z_p, +_p, \times_p}$.

Let $0_p$ denote the zero of $\Z_p$.
Suppose $p = m n$ where $1 < m < p, 1 < n < p$.
Then in the ring $\Z_p$ we have $\map {q_p} m \ne 0_p, \map {q_p} n \ne 0_p$.
But as $q_p$ is an epimorphism and therefore obeys the morphism property, $\map {q_p} m \times_p \map {q_p} n = \map {q_p} {m n} = \map {q_p} p = 0_p$.
But by definition, $0_p \notin \Z_p^*$.
Thus if $p = m n$, then $\struct {\Z_p^*, \times_p}$ is not a semigroup.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $24$. The Division Algorithm: Theorem $24.6$




