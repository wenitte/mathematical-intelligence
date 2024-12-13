# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Power_of_Root_of_x_squared_minus_a_squared



Theorem
$\ds \int \dfrac {\d x} {\paren {\sqrt {x^2 - a^2} }^n} = \dfrac {x \paren {\sqrt {x^2 - a^2} }^{2 - n} } {\paren {2 - n} a^2} - \dfrac {n - 3} {\paren {n - 2} a^2}  \int \dfrac {\d x} {\paren {\sqrt {x^2 - a^2} }^{n - 2} }$
for $n \ne 2$.


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










and:














\(\ds x\)

\(=\)







\(\ds a \cosh \theta\)










\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \theta\)

\(=\)







\(\ds \cosh^{-1} \frac x a\)





Definition 1 of Real Inverse Hyperbolic Cosine




Thus:














\(\ds \int \dfrac {\d x} {\paren {\sqrt {x^2 - a^2} }^n}\)

\(=\)







\(\ds \int \dfrac {a \sinh \theta \rd \theta} {\paren {\sqrt {x^2 - a^2} }^n}\)





Integration by Substitution from $(1)$














\(\ds \)

\(=\)







\(\ds \int \dfrac {a \sinh \theta \rd \theta} {a^n \sinh^n \theta}\)





substituting for $\paren {\sqrt {x^2 - a^2} }^n$ from $(2)$














\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^{n - 1} } \int \dfrac {\d \theta} {\sinh^{n - 1} \theta}\)





Primitive of Constant Multiple of Function and simplification














\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^{n - 1} } \paren {\frac {-\cosh \theta} {\paren {n - 2} \sinh^{n - 2} \theta} - \frac {n - 3} {n - 2} \int \frac {\d \theta} {\sinh^{n - 3} \theta} }\)





Primitive of $\dfrac 1 {\sinh^{n - 1} \theta}$ for $n \ne 2$














\(\ds \)

\(=\)







\(\ds \frac {-a \cosh \theta} {\paren {n - 2} a^{n - 2} \sinh^{n - 2} \theta} - \frac {n - 3} {\paren {n - 2} a^2} \int \frac {a \sinh \theta \rd \theta} {a^{n - 2} \sinh^{n - 2} \theta}\)





rearranging














\(\ds \)

\(=\)







\(\ds \frac {-x} {\paren {n - 2} \paren {\sqrt {x^2 - a^2} }^{n - 2} } - \frac {n - 3} {\paren {n - 2} a^2} \int \frac {\d x} {\paren {\sqrt {x^2 - a^2} }^{n - 2} }\)





substituting for $\sinh \theta$ and $\cosh \theta$














\(\ds \)

\(=\)







\(\ds \dfrac {x \paren {\sqrt {x^2 - a^2} }^{2 - n} } {\paren {2 - n} a^2} - \frac {n - 3} {\paren {n - 2} a^2} \int \frac {\d x} {\paren {\sqrt {x^2 - a^2} }^{n - 2} }\)





rearranging into given form



$\blacksquare$


Also see
For $n = -2$, use Primitive of $\dfrac 1 {x^2 - a^2}$.


Sources
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $39$.




