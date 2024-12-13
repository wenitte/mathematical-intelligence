# 

Source: https://proofwiki.org/wiki/Integration_by_Partial_Fractions



Theorem
Let $\map R x = \dfrac {\map P x} {\map Q x}$ be a rational function over $\R$ such that the degree of the polynomial $P$ is strictly smaller than the degree of the polynomial $Q$.
Consider the primitive:

$\ds \int \map R x \rd x$
Let $\map R x$ be expressible by the partial fractions expansion:

$\map R x = \ds \sum_{k \mathop = 0}^n \dfrac {\map {p_k} x} {\map {q_k} x}$
where:

each of the $\map {p_k} x$ are polynomial functions
the degree of $\map {p_k} x$ is strictly less than the degree of $\map {q_k} x$ for all $k$.
Then:

$\ds \int \map R x \rd x = \sum_{k \mathop = 0}^n \int \dfrac {\map {p_k} x} {\map {q_k} x} \rd x$

This technique is known as Integration by Partial Fractions.


Proof













\(\ds \int \map R x \rd x\)

\(=\)







\(\ds \int \paren {\sum_{k \mathop = 0}^n \dfrac {\map {p_k} x} {\map {q_k} x} } \rd x\)





Definition of $\map R x$: by hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \int \dfrac {\map {p_k} x} {\map {q_k} x} \rd x\)





Linear Combination of Integrals



$\blacksquare$


Examples
Arbitrary Example $1$
Let $\map R x = \dfrac {\map P x} {\map Q x}$ be a rational function over $\R$ such that the degree of the polynomial $P$ is strictly smaller than the degree of the polynomial $Q$.
Let $\map Q x$ be expressible as:

$\map Q x = \paren {x - a} \paren {x - b}^2 \paren {x^2 + c x + d}$
Then:














\(\ds \int \map R x \rd x\)

\(=\)







\(\ds \int \paren {\dfrac A {x - a} + \dfrac {B_1} {x - b} + \dfrac {B_2} {\paren {x - b}^2} + \dfrac {C x + D} {x^2 + c x + d} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \dfrac A {x - a} \rd x + \int \dfrac {B_1} {x - b} \rd x + \int \dfrac {B_2} {\paren {x - b}^2} \rd x + \int \dfrac {C x + D} {x^2 + c x + d} \rd x\)









where $A$, $B_1$, $B_2$, $C$ and $D$ are constants dependent upon $a$, $b$, $c$ and $d$.


Arbitrary Example $2$
$\ds \int \dfrac {x + 3} {x^2 + 3 x + 2} = 2 \ln \size {x + 1} - \ln \size {x + 2} + C$


Also see
Integration by Substitution
Integration by Parts


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): integration
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): integration by partial fractions
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): integration
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): integration by partial fractions




