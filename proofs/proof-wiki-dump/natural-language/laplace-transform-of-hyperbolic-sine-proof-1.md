# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Hyperbolic_Sine/Proof_1

Theorem
Let $\sinh t$ be the hyperbolic sine, where $t$ is real.
Let $\laptrans f$ denote the Laplace transform of the real function $f$.

Then:

$\laptrans {\sinh a t} = \dfrac a {s^2 - a^2}$
where $a \in \R_{>0}$ is constant, and $\map \Re s > a$.


Proof













\(\ds \laptrans {\sinh {a t} }\)

\(=\)







\(\ds \int_0^{\to +\infty} e^{-s t} \sinh {a t} \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \intlimits {\frac {e^{-s t} \paren {-s \sinh a t - a \cosh a t} } {\paren {-s}^2 - a^2} } {t \mathop = 0} {t \mathop \to +\infty}\)





Primitive of $e^{a x} \sinh b x$














\(\ds \)

\(=\)







\(\ds 0 - \frac {-s \, \map \sinh {0 \times a} - a \, \map \cosh {0 \times a} } {s^2 - a^2}\)





Exponential Tends to Zero, Exponential of Zero














\(\ds \)

\(=\)







\(\ds \frac {s \sinh 0 + a \cosh 0} {s^2 - a^2}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac a {s^2 - a^2}\)





Hyperbolic Sine of Zero is Zero, Hyperbolic Cosine of Zero is One



$\blacksquare$





