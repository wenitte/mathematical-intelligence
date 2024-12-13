# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_Root_of_a_squared_minus_x_squared

Theorem
$\ds \int \paren {\sqrt {a^2 - x^2} }^n \rd x = \dfrac {x \paren {\sqrt {a^2 - x^2} }^n} {n + 1} - \dfrac {n a^2} {n + 1} \int \paren {\sqrt {a^2 - x^2} }^{n - 2} \rd x$
for $n \ne -1$.


Proof
Let:














\(\ds x\)

\(=\)







\(\ds a \sin \theta\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d \theta}\)

\(=\)







\(\ds a \cos \theta\)





Derivative of Sine Function




Also:














\(\ds x\)

\(=\)







\(\ds a \sin \theta\)














\(\ds \leadsto \ \ \)





\(\ds \sqrt {a^2 - x^2}\)

\(=\)







\(\ds \sqrt {a^2 \paren {1 - \sin^2 \theta} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {a^2 \cos^2 \theta}\)





Sum of Squares of Sine and Cosine




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds a \cos \theta\)










Thus:














\(\ds \int \paren {\sqrt {a^2 - x^2} }^n \rd x\)

\(=\)







\(\ds \int \paren {a \cos \theta}^n \cdot a \cos \theta \rd \theta\)





Integration by Substitution from $(1)$ and $(2)$














\(\ds \)

\(=\)







\(\ds a^{n + 1} \int \cos^{n + 1} \theta \rd \theta\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds a^{n + 1} \paren {\frac {\sin \theta \cos^n \theta} {n + 1} - \frac n {n + 1} \int \cos^{n - 1} \theta \rd \theta}\)





Primitive of $\cos^{n + 1} \theta$ for $n \ne -1$














\(\ds \)

\(=\)







\(\ds \frac {a \sin \theta \cdot a^n \cos^n \theta} {n + 1} - a^2 \frac n {n + 1} \int a^{n - 2} \cos^{n - 2} \theta \cdot a \cos \theta \rd \theta\)





rearranging














\(\ds \)

\(=\)







\(\ds \frac {x \paren {\sqrt {a^2 - x^2} }^n} {n + 1} - \frac {n a^2} {n + 1} \int \paren {\sqrt {a^2 - x^2} }^{n - 2} \rd x\)





substituting for $\sinh \theta$ and $\cosh \theta$



$\blacksquare$


Also see
For $n = -1$, use Primitive of Reciprocal of Root of a squared minus x squared





