# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Hyperbolic_Cosine



Theorem
Let $\cosh t$ be the hyperbolic cosine, where $t$ is real.
Let $\laptrans f$ denote the Laplace transform of the real function $f$.

Then:

$\laptrans {\cosh a t} = \dfrac s {s^2 - a^2}$
where $a \in \R_{>0}$ is constant, and $\map \Re s > a$.


Proof 1













\(\ds \laptrans {\cosh {a t} }\)

\(=\)







\(\ds \int_0^{\to +\infty} e^{-s t} \cosh {a t} \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \intlimits {\frac {e^{-s t} \paren {-s \cosh a t + a \sinh a t} } {\paren {-s}^2 - a^2} } {t \mathop = 0} {t \mathop \to +\infty}\)





Primitive of $e^{a x} \cosh b x$














\(\ds \)

\(=\)







\(\ds 0 - \frac {-s \, \map \cosh {0 \times a} + a \, \map \sinh {0 \times a} } {s^2 - a^2}\)





Exponential Tends to Zero, Exponential of Zero














\(\ds \)

\(=\)







\(\ds \frac {s \cosh 0 - a \sinh 0} {s^2 - a^2}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac s {s^2 - a^2}\)





Hyperbolic Sine of Zero is Zero, Hyperbolic Cosine of Zero is One





Proof 2













\(\ds \laptrans {\cosh at}\)

\(=\)







\(\ds \laptrans {\frac {e^{at} + e^{-at} } 2}\)





Definition of Hyperbolic Cosine














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\laptrans {e^{at} } + \laptrans {e^{-at} } }\)





Linear Combination of Laplace Transforms














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\frac 1 {s - a} + \frac 1 {s + a} }\)





Laplace Transform of Exponential














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\frac {s + a + s - a} {\paren {s - a} \paren {s + a} } }\)




















\(\ds \)

\(=\)







\(\ds \frac s {s^2 - a^2}\)









$\blacksquare$


Proof 3













\(\ds \laptrans {\cosh a t}\)

\(=\)







\(\ds \laptrans {\frac {e^{a t} + e^{-a t} } 2}\)





Definition of Hyperbolic Cosine














\(\ds \)

\(=\)







\(\ds \int_0^{\to +\infty} e^{-s t} \paren {\frac {e^{a t} + e^{-a t} } 2} \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \int_0^{\to +\infty} e^{-s t} e^{a t} \rd t + \dfrac 1 2 \int_0^{\to +\infty} e^{-s t} e^{-a t} \rd t\)





Linear Combination of Laplace Transforms














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \laptrans {e^{a t} } + \dfrac 1 2 \laptrans {e^{-a t} }\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\frac 1 {s - a} + \frac 1 {s + a} }\)





Laplace Transform of Exponential














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\frac {s + a + s - a} {\paren {s - a} \paren {s + a} } }\)




















\(\ds \)

\(=\)







\(\ds \frac s {s^2 - a^2}\)









$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Laplace Transforms of some Elementary Functions: $8$.
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 32$: Table of Special Laplace Transforms: $32.37$




