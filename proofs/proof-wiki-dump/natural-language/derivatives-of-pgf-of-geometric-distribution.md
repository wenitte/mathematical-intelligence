# 

Source: https://proofwiki.org/wiki/Derivatives_of_PGF_of_Geometric_Distribution

Theorem
Let $X$ be a discrete random variable with the geometric distribution with parameter $p$.

Then the derivatives of the PGF of $X$ with respect to $s$ are:

$\dfrac {\d^n} {\d s^n} \map {\Pi_X} s = \dfrac {q p^n n!} {\paren {1 - p s}^{n + 1} }$
where $q = 1 - p$.


Proof
The Probability Generating Function of Geometric Distribution is:

$\map {\Pi_X} s = \dfrac q {1 - p s}$
where $q = 1 - p$.

From Derivatives of Function of $a x + b$, we have that:

$\map {\dfrac {\d^n} {\d s^n} } {\map f {1 - p s} } = \paren {-p}^n \map {\dfrac {\d^n} {\d z^n} } {\map f z}$
where $z = 1 - ps$.
Here we have that $\map f z = \dfrac q z$.

From Nth Derivative of Reciprocal of Mth Power:

$\dfrac {\d^n} {\d z^n} \dfrac q z = q \dfrac {\d^n} {\d z^n} \dfrac 1 z = q \dfrac {\paren {-1}^n n!} {z^{n + 1} }$
where $n!$ denotes $n$ factorial.

So putting it together:

$\dfrac {\d^n} {\d s^n} \map {\Pi_X} s = q \paren {-p}^n \dfrac {\paren {-1}^n n!} {\paren {1 - p s}^{n + 1} }$
whence (after algebra):

$\dfrac {\d^n} {\d s^n} \map {\Pi_X} s = \dfrac {q p^n n!} {\paren {1 - p s}^{n + 1} }$
$\blacksquare$





