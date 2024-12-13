# 

Source: https://proofwiki.org/wiki/Product_of_Absolute_Values_on_Ordered_Integral_Domain

Theorem
Let $\struct {D, +, \times, \le}$ be an ordered integral domain whose zero is denoted by $0_D$.
For all $a \in D$, let $\size a$ denote the absolute value of $a$.

Then:

$\size a \times \size b = \size {a \times b}$


Proof
Let $P$ be the (strict) positivity property on $D$.
Let $<$ be the (strict) total ordering defined on $D$ as:

$a < b \iff a \le b \land a \ne b$
Let $N$ be the strict negativity property on $D$.

We consider all possibilities in turn.

$(1): \quad a = 0_D$ or $b = 0_D$
In this case, both the left hand side $\size a \times \size b$ and the right hand side are equal to zero.
So:

$\size a \times \size b = \size {a \times b}$

$(2): \quad \map P a, \map P b$
First:














\(\ds \map P a, \map P b\)

\(\leadsto\)







\(\ds \size a = a, \size b = b\)





Definition of Absolute Value on Ordered Integral Domain














\(\ds \)

\(\leadsto\)







\(\ds \size a \times \size b = a \times b\)









Then:














\(\ds \map P a, \map P b\)

\(\leadsto\)







\(\ds \map P {a \times b}\)





Strict Positivity Property: $(\text P 2)$














\(\ds \)

\(\leadsto\)







\(\ds \size {a \times b} = a \times b\)





Definition of Absolute Value on Ordered Integral Domain



So:

$\size a \times \size b = \size {a \times b}$

$(3): \quad \map P a, \map N b$
First:














\(\ds \map P a, \map N b\)

\(\leadsto\)







\(\ds \size a = a, \size b = -b\)





Definition of Absolute Value on Ordered Integral Domain














\(\ds \)

\(\leadsto\)







\(\ds \size a \times \size b = -a \times b\)





Product with Ring Negative



Then:














\(\ds \map P a, \map N b\)

\(\leadsto\)







\(\ds \map N {a \times b}\)





Properties of Strict Negativity: $(5)$














\(\ds \)

\(\leadsto\)







\(\ds \map P {-a \times b}\)





Definition of Strict Negativity Property














\(\ds \)

\(\leadsto\)







\(\ds \size {a \times b} = -a \times b\)





Definition of Absolute Value on Ordered Integral Domain



So:

$\size a \times \size b = \size {a \times b}$
Similarly $\map N a, \map P b$.

$(4): \quad \map N a, \map N b$
First:














\(\ds \map N a, \map N b\)

\(\leadsto\)







\(\ds \size a = -a, \size b = -b\)





Definition of Absolute Value on Ordered Integral Domain














\(\ds \)

\(\leadsto\)







\(\ds \size a \times \size b = a \times b\)





Product of Ring Negatives



Then:














\(\ds \map N a, \map N b\)

\(\leadsto\)







\(\ds \map P {a \times b}\)





Properties of Strict Negativity: $(4)$














\(\ds \)

\(\leadsto\)







\(\ds \map P {a \times b}\)





Definition of Strict Negativity Property














\(\ds \)

\(\leadsto\)







\(\ds \size {a \times b} = a \times b\)





Definition of Absolute Value on Ordered Integral Domain



So:

$\size a \times \size b = \size {a \times b}$

In all cases the result holds.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $2$: Ordered and Well-Ordered Integral Domains: $\S 7$. Order: Theorem $11 \ \text{(i)}$




