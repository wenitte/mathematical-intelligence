# 

Source: https://proofwiki.org/wiki/Exponential_of_Zero



Theorem
Let $\exp x$ be the exponential of $x$.

Then:

$\exp 0 = 1$


Proof 1
We have that the exponential function is the inverse of the natural logarithm function:

$\ln 1 = 0$
Hence the result.
$\blacksquare$


Proof 2
Using the definition of the exponential as a limit of a sequence:














\(\ds \exp 0\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \left({1 + \frac 0 n}\right)^n\)




















\(\ds \)

\(=\)







\(\ds 1\)









$\blacksquare$


Proof 3
This proof assumes the power series definition of $\exp$.
That is, let:

$\ds \exp x = \sum_{k \mathop = 0}^\infty \frac {x^k} {k!}$

Then:














\(\ds \exp 0\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {0^k} {k!}\)




















\(\ds \)

\(=\)







\(\ds 1\)





Definition of Power of Zero



$\blacksquare$


Proof 4
This proof assumes the Definition of $\exp x$ as the unique continuous extension of $e^x$.














\(\ds \exp 0\)

\(=\)







\(\ds e^0\)




















\(\ds \)

\(=\)







\(\ds 1\)





Definition of $x^0$, where $x \ne 0$



$\blacksquare$


Proof 5













\(\ds \map \exp {z + \paren {-z} }\)

\(=\)







\(\ds \exp z \, \map \exp {-z}\)





Exponential of Sum








\(\ds \leadsto \ \ \)





\(\ds \map \exp {z - z}\)

\(=\)







\(\ds \dfrac {\exp z} {\exp z}\)














\(\ds \leadsto \ \ \)





\(\ds \exp 0\)

\(=\)







\(\ds 1\)









$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 14.4$




