# 

Source: https://proofwiki.org/wiki/Division_Theorem_for_Polynomial_Forms_over_Field/Proof_1

Theorem
Let $\struct {F, +, \circ}$ be a field whose zero is $0_F$ and whose unity is $1_F$.
Let $X$ be transcendental over $F$.
Let $F \sqbrk X$ be the ring of polynomials in $X$ over $F$.
Let $d$ be an element of $F \sqbrk X$ of degree $n \ge 1$.

Then $\forall f \in F \sqbrk X: \exists q, r \in F \sqbrk X: f = q \circ d + r$ such that either:

$(1): \quad r = 0_F$
or:

$(2): \quad r \ne 0_F$ and $r$ has degree that is less than $n$.


Proof
From the equation $0_F = 0_F \circ d + 0_F$, the theorem is true for the trivial case $f = 0_F$.
So, if there is a counterexample to be found, it will have a degree.

Aiming for a contradiction, suppose there exists at least one counterexample.
By a version of the Well-Ordering Principle, we can assign a number $m$ to the lowest degree possessed by any counterexample.
So, let $f$ denote a counterexample which has that minimum degree $m$.

If $m < n$, the equation $f = 0_F \circ d + f$ would show that $f$ was not a counterexample.
Therefore $m \ge n$.

Suppose $d \divides f$ in $F \sqbrk X$.
Then:

$\exists q \in F \sqbrk X: f = q \circ d + 0_F$
and $f$ would not be a counterexample.
So $d \nmid f$ in $F \sqbrk X$.

So, suppose that:














\(\ds f\)

\(=\)







\(\ds \sum_{k \mathop = 0}^m {a_k \circ X^k}\)




















\(\ds d\)

\(=\)







\(\ds \sum_{k \mathop = 0}^n {b_k \circ X^k}\)




















\(\ds m\)

\(\ge\)







\(\ds n\)










We can create the polynomial $\paren {a_m \circ b_n^{-1} \circ X^{m - n} } \circ d$ which has the same degree and leading coefficient as $f$.
Thus $f_1 = f - \paren {a_m \circ b_n^{-1} \circ X^{m - n} } \circ d$ is a polynomial of degree less than $m$.
Since $d \nmid f$, $f_1$ is a non-zero polynomial.

There is no counterexample of degree less than $m$.
Therefore:

$f_1 = q_1 \circ d + r$
for some $q_1, r \in F \sqbrk X$, where either:

$r = 0_F$
or:

$r$ is non-zero with degree strictly less than $n$.
Hence:














\(\ds f\)

\(=\)







\(\ds f_1 + \paren {a_m \circ b_n^{-1} \circ X^{m - n} } \circ d\)




















\(\ds \)

\(=\)







\(\ds \paren {q_1 + a_m \circ b_n^{-1} \circ X^{m - n} } \circ d + r\)









Thus $f$ is not a counterexample.
From this contradiction follows the result.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 65.1$ Some properties of $F \sqbrk X$, where $F$ is a field




