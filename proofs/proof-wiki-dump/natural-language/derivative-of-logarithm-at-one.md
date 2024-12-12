# 

Source: https://proofwiki.org/wiki/Derivative_of_Logarithm_at_One



Theorem
Let $\ln x$ be the natural logarithm of $x$ for real $x$ where $x > 0$.

Then:

$\ds \lim_{x \mathop \to 0} \frac {\map \ln {1 + x} } x = 1$


Proof 1
L'Hôpital's Rule gives:

$\ds \lim_{x \mathop \to c} \frac {\map f x} {\map g x} = \lim_{x \mathop \to c} \frac {\map {f'} x} {\map {g'} x}$
(provided the appropriate conditions are fulfilled).

Here we have:














\(\ds \map \ln {1 + 0}\)

\(=\)







\(\ds 0\)




















\(\ds \map {D_x} {\map \ln {1 + x} }\)

\(=\)







\(\ds \dfrac 1 {1 + x}\)





Chain Rule for Derivatives














\(\ds \map {D_x} x\)

\(=\)







\(\ds 1\)





Derivative of Identity Function




Thus:

$\ds \lim_{x \mathop \to 0} \frac {\map \ln {1 + x} } x = \lim_{x \mathop \to 0} \frac {\paren {1 + x}^{-1} } 1 = \frac 1 {1 + 0} = 1$
$\blacksquare$


Proof 2













\(\ds \lim_{x \mathop \to 0} \frac {\map \ln {1 + x} } x\)

\(=\)







\(\ds \lim_{x \mathop \to 0} \frac {\map \ln {1 + x} - \ln 1} x\)





subtract $\ln 1 = 0$ from the numerator, from Logarithm of 1 is 0














\(\ds \)

\(=\)







\(\ds \intlimits {\dfrac {\d} {\d x} \ln x} {x \mathop = 1} {}\)





Definition of Derivative of Real Function at Point














\(\ds \)

\(=\)







\(\ds \frac 1 1\)





Derivative of Natural Logarithm Function














\(\ds \)

\(=\)







\(\ds 1\)









$\blacksquare$


Proof 3
Note that this proof does not presuppose Derivative of Natural Logarithm Function.














\(\ds \lim_{x \mathop \to 0} \frac {\map \ln {1 + x} } x\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac {\map \ln {1 + \frac 1 n} } {\frac 1 n}\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} n \, \map \ln {1 + \frac 1 n}\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map \ln {\paren {1 + \frac 1 n}^n}\)




















\(\ds \)

\(=\)







\(\ds \ln e\)





Definition of Euler's Number as Limit of Sequence














\(\ds \)

\(=\)







\(\ds 1\)





Natural Logarithm of e is 1



$\blacksquare$





