# 

Source: https://proofwiki.org/wiki/Complex_Integration_by_Substitution

Theorem
Let $\closedint a b$ be a closed real interval.
Let $\phi: \closedint a b \to \R$ be a real function which has a derivative on $\closedint a b$.
Let $f: A \to \C$ be a continuous complex function, where $A$ is a subset of the image of $\phi$.

If $\map \phi a \le \map \phi b$, then:

$\ds \int_{\map \phi a}^{\map \phi b} \map f t \rd t = \int_a^b \map f {\map \phi u} \map {\phi'} u \rd u$

If $\map \phi a > \map \phi b$, then:

$\ds \int_{\map \phi b}^{\map \phi a} \map f t \rd t = -\int_a^b \map f {\map \phi u} \map {\phi'} u \rd u$


Proof
Let $\Re$ and $\Im$ denote real parts and imaginary parts respectively.

Let $\map \phi a \le \map \phi b$.
Then:














\(\ds \int_{\map \phi a}^{\map \phi b} \map f t \rd t\)

\(=\)







\(\ds \int_{\map \phi a}^{\map \phi b} \map \Re {\map f t} \rd t + i \int_{\map \phi a}^{\map \phi b} \map \Im {\map f t} \rd t\)





Definition of Complex Riemann Integral














\(\ds \)

\(=\)







\(\ds \int_a^b \map \Re {\map f {\map \phi u} } \map {\phi'} u \rd u + i \int_a^b \map \Im {\map f {\map \phi u} } \map {\phi'} u \rd u\)





Integration by Substitution/Definite Integral














\(\ds \)

\(=\)







\(\ds \int_a^b \map \Re {\map f {\map \phi u} \map {\phi'} u} \rd u + i \int_a^b \map \Im {\map f {\map \phi u} \map {\phi'} u} \rd u\)





Multiplication of Real and Imaginary Parts














\(\ds \)

\(=\)







\(\ds \int_a^b \map f {\map \phi u} \map {\phi'} u \rd u\)










Let $\map \phi a > \map \phi b$.
Then:














\(\ds \int_{\map \phi b}^{\map \phi a} \map f t \rd t\)

\(=\)







\(\ds \int_{\map \phi b}^{\map \phi a} \map \Re {\map f t} \rd t + i \int_{\map \phi b}^{\map \phi a} \map \Im {\map f t} \rd t\)





Definition of Complex Riemann Integral














\(\ds \)

\(=\)







\(\ds -\int_a^b \map \Re {\map f {\map \phi u} } \map {\phi'} u \rd u - i \int_a^b \map \Im {\map f {\map \phi u} } \map {\phi'} u \rd u\)





Integration by Substitution/Definite Integral














\(\ds \)

\(=\)







\(\ds - \paren{ \int_a^b \map \Re {\map f {\map \phi u} \map {\phi'} u} \rd u + i \int_a^b \map \Im {\map f {\map \phi u} \map {\phi'} u} \rd u }\)





Multiplication of Real and Imaginary Parts














\(\ds \)

\(=\)







\(\ds -\int_a^b \map f {\map \phi u} \map {\phi'} u \rd u\)









$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori $\S 2.2$




