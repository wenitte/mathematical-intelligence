# 

Source: https://proofwiki.org/wiki/Division_Theorem_for_Polynomial_Forms_over_Field/Proof_2

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
Suppose $\map \deg f < \map \deg d$.
Then we take $\map q X = 0$ and $\map r X = \map a X$ and the result holds.

Otherwise, $\map \deg f \ge \map \deg d$.
Let:

$\map f X = a_0 + a_1 X + a_2 x^2 + \cdots + a_m X^m$
$\map d X = b_0 + b_1 X + b_2 x^2 + \cdots + b_n X^n$
We can subtract from $f$ a suitable multiple of $d$ so as to eliminate the highest term in $f$:

$\map f X - \map d X \cdot \dfrac {a_m} {b_n} x^{m - n} = \map p X$
where $\map p X$ is some polynomial whose degree is less than that of $f$.
If $\map p X$ still has degree higher than that of $d$, we do the same thing again.
Eventually we reach:

$\map f X - \map d X \cdot \paren {\dfrac {a_m} {b_n} x^{m - n} + \dotsb} = \map r X$
where either $r = 0_F$ or $r$ has degree that is less than $n$.

This approach can be formalised using the Principle of Complete Induction.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: Polynomials and Euclidean Rings: $\S 27$. Euclidean Rings: Theorem $52$




