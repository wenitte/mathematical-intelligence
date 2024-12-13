# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_Root_of_x_squared_minus_a_squared



Theorem
$\ds \int \paren {\sqrt {x^2 - a^2} }^n \rd x = \dfrac {x \paren {\sqrt {x^2 - a^2} }^n} {n + 1} - \dfrac {n a^2} {n + 1} \int \paren {\sqrt {x^2 - a^2} }^{n - 2} \rd x$
for $n \ne -1$


Proof
Let:














\(\ds x\)

\(=\)







\(\ds a \cosh \theta\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d \theta}\)

\(=\)







\(\ds a \sinh \theta\)





Derivative of Hyperbolic Cosine




Also:














\(\ds x\)

\(=\)







\(\ds a \cosh \theta\)














\(\ds \leadsto \ \ \)





\(\ds x^2 - a^2\)

\(=\)







\(\ds a^2 \cosh^2 \theta - a^2\)




















\(\ds \)

\(=\)







\(\ds a^2 \paren {\cosh^2 \theta - 1}\)




















\(\ds \)

\(=\)







\(\ds a^2 \sinh^2 \theta\)





Difference of Squares of Hyperbolic Cosine and Sine




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \paren {\sqrt {x^2 - a^2} }^n\)

\(=\)







\(\ds a^n \sinh^n \theta\)










Thus:














\(\ds \int \paren {\sqrt {x^2 - a^2} }^n \rd x\)

\(=\)







\(\ds \int \paren {\sqrt {x^2 - a^2} }^n \, a \sinh \theta \rd \theta\)





Integration by Substitution from $(1)$














\(\ds \)

\(=\)







\(\ds \int a^{n + 1} \sinh^{n + 1} \theta \rd \theta\)





substituting for $\paren {\sqrt {x^2 - a^2} }^n$ from $(2)$














\(\ds \)

\(=\)







\(\ds a^{n + 1} \int \sinh^{n + 1} \theta \rd \theta\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds a^{n + 1} \paren {\frac {\sinh^n \theta \cosh \theta} {n + 1} - \frac n {n + 1} \int \sinh^{n - 1} \theta \rd \theta}\)





Primitive of $\sinh^{n + 1} \theta$ for $n \ne -1$














\(\ds \)

\(=\)







\(\ds \frac {a^n \sinh^n \theta \cdot a \cosh \theta} {n + 1} - a^2 \frac n {n + 1} \int a^{n - 2} \sinh^{n - 2} \theta \cdot a \sinh \theta \rd \theta\)





rearranging














\(\ds \)

\(=\)







\(\ds \frac {x \paren {\sqrt {x^2 - a^2} }^n} {n + 1} - \frac {n a^2} {n + 1} \int \paren {\sqrt {x^2 - a^2} }^{n - 2} \rd x\)





substituting for $\sinh \theta$ and $\cosh \theta$



$\blacksquare$


Also see
For $n = -1$, use Primitive of Reciprocal of Root of x squared minus a squared


Sources
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $38$.




