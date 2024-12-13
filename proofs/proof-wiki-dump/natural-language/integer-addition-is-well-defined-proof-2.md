# 

Source: https://proofwiki.org/wiki/Integer_Addition_is_Well-Defined/Proof_2

Theorem
Let $\struct {\N, +}$ be the semigroup of natural numbers under addition.
Let $\struct {\N \times \N, \oplus}$ be the (external) direct product of $\struct {\N, +}$ with itself, where $\oplus$ is the operation on $\N \times \N$ induced by $+$ on $\N$.

Let $\boxtimes$ be the cross-relation defined on $\N \times \N$ by:

$\tuple {x_1, y_1} \boxtimes \tuple {x_2, y_2} \iff x_1 + y_2 = x_2 + y_1$

Let $\eqclass {x, y} {}$ denote the equivalence class of $\tuple {x, y}$ under $\boxtimes$.
The operation $\oplus$ on these equivalence classes is well-defined, in the sense that:














\(\ds \eqclass {a_1, b_1} {}\)

\(=\)







\(\ds \eqclass {a_2, b_2} {}\)




















\(\ds \eqclass {c_1, d_1} {}\)

\(=\)







\(\ds \eqclass {c_2, d_2} {}\)














\(\ds \leadsto \ \ \)





\(\ds \eqclass {a_1, b_1} {} \oplus \eqclass {c_1, d_1} {}\)

\(=\)







\(\ds \eqclass {a_2, b_2} {} \oplus \eqclass {c_2, d_2} {}\)











Proof
Consider the formal definition of the integers: $x = \eqclass {a, b} {}$ is an equivalence class of ordered pairs of natural numbers.

Consider the mapping $\phi: \N_{>0} \to \Z_{>0}$ defined as:

$\forall u \in \N_{>0}: \map \phi u = u'$
where $u' \in \Z$ be the (strictly) positive integer $\eqclass {b + u, b} {}$.
Let $v' = \eqclass {c + v, c} {}$.
Then:














\(\ds u' + v'\)

\(=\)







\(\ds \eqclass {b + u, b} {} + \eqclass {c + v, c} {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {b + c + u + v, b + c} {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {b + u + v, b} {}\)




















\(\ds \)

\(=\)







\(\ds \paren {u + v}'\)









$\blacksquare$


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 5$: The system of integers




