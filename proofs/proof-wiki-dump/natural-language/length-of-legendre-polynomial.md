# 

Source: https://proofwiki.org/wiki/Length_of_Legendre_Polynomial

Theorem
Let $\map {P_n} x$ denote the Legendre polynomial of order $n$.
Let $\norm {\map {P_n} x}$ denote the length of $\map {P_n} x$.

Then:

$\norm {\map {P_n} x} := \sqrt {\dfrac 2 {2 n + 1} }$


Proof
Applying Bonnet's Recursion Formula for $n - 1$:

$n \map {P_n} x = \paren {2 n - 1} x \map {P_{n - 1} } x - \paren {n - 1} \map {P_{n - 2} } x$
so:

$\map {P_n} x = \dfrac {2 n - 1} n x \map {P_{n - 1} } x - \dfrac {n - 1} n \map {P_{n - 2} } x$

Substituting for $\map {P_n} x$:














\(\ds \norm {\map {P_n} x}^2\)

\(=\)







\(\ds \int_{-1}^1 \map {P_n} x \map {P_n} x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_{-1}^1 \map {P_n} x \paren {\frac {2 n - 1} n x \map {P_{n - 1} } x - \frac {n - 1} n \map {P_{n - 2} } x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {2 n - 1} n \int_{-1}^1 x \map {P_n} x \map {P_{n - 1} } x \rd x - \frac {n - 1} n \int_{-1}^1 \map {P_n} x \map {P_{n - 2} } x \rd x\)





Linear Combination of Definite Integrals




From Orthogonality of Legendre Polynomials:

$\ds \int_{-1}^1 \map {P_n} x \map {P_m} x \rd x = 0 \iff n \ne m$
so:

$\ds (1): \quad \norm {\map {P_n} x}^2 = \frac {2 n - 1} n \int_{-1}^1 x \map {P_n} x \map {P_{n - 1} } x \rd x$

From Bonnet's Recursion Formula:

$x \map {P_n} x = \dfrac {n + 1} {2 n + 1} \map {P_{n + 1} } x + \dfrac n {2 n + 1} \map {P_{n - 1} } x$

Substituting for $x \map {P_n} x$ in $(1)$:














\(\ds \norm {\map {P_n} x}^2\)

\(=\)







\(\ds \frac {2 n - 1} n \frac {n + 1} {2 n + 1} \int_{-1}^1 \map {P_{n + 1} } x \map {P_{n - 1} } x \rd x + \frac {2 n - 1} {2 n + 1} \int_{-1}^1 \map {P_{n - 1} } x \map {P_{n - 1} } x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac{2 n - 1} {2 n + 1} \int_{-1}^1 \map {P_{n - 1} } x \map {P_{n - 1} } x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {2 n - 1} {2 n + 1} \norm {\map {P_{n - 1} } x}^2\)










Thus:















\(\ds \norm {\map {P_n} x}^2\)

\(=\)







\(\ds \frac {2 n - 1} {2 n + 1} \norm {\map {P_{n - 1} } x}^2\)




















\(\ds \)

\(=\)







\(\ds \frac {2 n - 1} {2 n + 1} \frac {2 n - 3} {2 n - 1} \norm {\map {P_{n - 2} } x}^2\)




















\(\ds \)

\(=\)







\(\ds \cdots\)




















\(\ds \)

\(=\)







\(\ds \frac {2 n - 1} {2 n + 1} \frac {2 n - 3} {2 n - 1} \frac {2 n - 5} {2 n - 3} \dotsm \frac 3 5 \frac 1 3 \norm {\map {P_0} x}^2\)










Most of this cancels out, leaving:

$\norm {\map {P_n} x}^2 = \dfrac {\norm {\map {P_0} x}^2} {2 n + 1}$

It remains to compute the length of the first Legendre polynomial:














\(\ds \norm {\map {P_0} x}^2\)

\(=\)







\(\ds \int_{-1}^1 1 \rd x\)




















\(\ds \)

\(=\)







\(\ds \bigintlimits x {-1} 1\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds 2\)










Thus:

$\norm {\map {P_n} x}^2 = \dfrac 2 {2 n + 1}$
and so taking the square root:

$\norm {\map {P_n} x} = \sqrt {\dfrac 2 {2 n + 1} }$
$\blacksquare$





