# 

Source: https://proofwiki.org/wiki/Power_of_Product_of_Commutative_Elements_in_Monoid

Theorem
Let $\struct {S, \circ}$ be a monoid whose identity is $e_S$.
Let $a, b \in S$ be invertible elements for $\circ$ that also commute.
Then:

$\forall n \in \Z: \paren {a \circ b}^n = a^n \circ b^n$


Proof
From Power of Product of Commutative Elements in Semigroup, this result holds if $n \ge 0$.
Since $a$ and $b$ commute, then so do $a^{-1}$ and $b^{-1}$ by Commutation of Inverses in Monoid.
Hence, if $n > 0$:














\(\ds \paren {a \circ b}^{-n}\)

\(=\)







\(\ds \paren {\paren {a \circ b}^{-1} }^n\)




















\(\ds \)

\(=\)







\(\ds \paren {b^{-1} \circ a^{-1} }^n\)





Inverse of Product














\(\ds \)

\(=\)







\(\ds \paren {a^{-1} \circ b^{-1} }^n\)





Commutation of Inverses in Monoid














\(\ds \)

\(=\)







\(\ds \paren {a^{-1} }^n \circ \paren {b^{-1} }^n\)




















\(\ds \)

\(=\)







\(\ds a^{-n} \circ b^{-n}\)









The result follows.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $20$. The Integers: Theorem $20.11 \ (4)$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.1$: Monoids




