# 

Source: https://proofwiki.org/wiki/Integer_Multiplication_is_Well-Defined/Proof_1

Theorem
Integer multiplication is well-defined.


Proof
Let us define $\eqclass {\tuple {a, b} } \boxtimes$ as in the formal definition of integers.
That is, $\eqclass {\tuple {a, b} } \boxtimes$ is an equivalence class of ordered pairs of natural numbers under the congruence relation $\boxtimes$.
$\boxtimes$ is the congruence relation defined on $\N \times \N$ by $\tuple {x_1, y_1} \boxtimes \tuple {x_2, y_2} \iff x_1 + y_2 = x_2 + y_1$.

In order to streamline the notation, we will use $\eqclass {a, b} {}$ to mean $\eqclass {\tuple {a, b} } \boxtimes$, as suggested.
We need to show that $\eqclass {a, b} {} = \eqclass {p, q} {} \land \eqclass {c, d} {} = \eqclass {r, s} {} \implies \eqclass {a, b} {} \times \eqclass {c, d} {} = \eqclass {p, q} {} \times \eqclass {r, s} {}$.

We have $\eqclass {a, b} {} = \eqclass {p, q} {} \land \eqclass {c, d} {} = \eqclass {r, s} {} \iff a + q = b + p \land c + s = d + r$ by the definition of $\boxtimes$.

From the definition of integer multiplication, we have:

$\forall a, b, c, d \in \N: \eqclass {a, b} {} \times \eqclass {c, d} {} = \eqclass {a c + b d, a d + b c} {}$

So, suppose that $\eqclass {a, b} {} = \eqclass {p, q} {}$ and $\eqclass {c, d} {} = \eqclass {r, s} {}$.

Both $+$ and $\times$ are commutative and associative on $\N$. Thus:














\(\ds \)

\(\)







\(\ds \paren {a c + b d + p s + q r} + \paren {p c + q c + p d + q d}\)




















\(\ds \)

\(=\)







\(\ds \paren {a + q} c + \paren {b + p} d + p \paren {c + s} + q \paren {d + r}\)




















\(\ds \)

\(=\)







\(\ds \paren {b + p} c + \paren {a + q} d + p \paren {d + r} + q \paren {c + s}\)





as $a + q = b + p, c + s = d + r$














\(\ds \)

\(=\)







\(\ds b c + p c + q d + a d + p d + p r + q c + q s\)




















\(\ds \)

\(=\)







\(\ds \paren {a d + b c + p r + q s} + \paren {p c + q c + p d + q d}\)










So we have $a c + b d + p s + q r = a d + b c + p r + q s$ and so, by the definition of $\boxtimes$, we have:

$\eqclass {a c + b d, a d + b c} {} = \eqclass {p r + q s, p s + q r} {}$

So, by the definition of integer multiplication, this leads to:

$\eqclass {a, b} {} \times \eqclass {c, d} {} = \eqclass {p, q} {} \times \eqclass {r, s} {}$

Thus integer multiplication has been shown to be well-defined.
$\blacksquare$


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 5$: The system of integers




