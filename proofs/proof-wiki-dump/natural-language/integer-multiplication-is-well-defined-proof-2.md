# 

Source: https://proofwiki.org/wiki/Integer_Multiplication_is_Well-Defined/Proof_2

Theorem
Integer multiplication is well-defined.


Proof
Consider the formal definition of the integers: $x = \eqclass {a, b} {}$ is an equivalence class of ordered pairs of natural numbers.

Consider the mapping $\phi: \N_{>0} \to \Z_{>0}$ defined as:

$\forall u \in \N_{>0}: \map \phi u = u'$
where $u' \in \Z$ be the (strictly) positive integer $\eqclass {b + u, b} {}$.
Let $v' = \eqclass {c + v, c} {}$.
Then:














\(\ds u' v'\)

\(=\)







\(\ds \eqclass {b + u, b} {} \times \eqclass {c + v, c} {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {\paren {b + u} \paren {c + v} + b c, \paren {b + u} c + b \paren {c + v} } {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {b c + b v + c u + u v + b c, b c + u c + b c + b v} {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {b c + u v, b c} {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {b + u v, b} {}\)




















\(\ds \)

\(=\)







\(\ds \paren {u v}'\)









$\blacksquare$


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 5$: The system of integers




