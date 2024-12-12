# 

Source: https://proofwiki.org/wiki/Contour_Integral_along_Reversed_Contour

Theorem
Let $C$ be a contour in the complex plane $\C$.
Let $f: \Img C \to \C$ be a continuous complex functions, where $\Img C$ denotes the image of $C$.

Then the contour integral of $f$ along the reversed contour $-C$ is:

$\ds \int_{-C} \map f z \rd z = -\int_C \map f z \rd z$


Proof
First, suppose that $C$ is a directed smooth curve in $\C$.
Let $C$ be parameterized by the smooth path $\gamma: \closedint a b \to \C$.
By definition of reversed directed smooth curve, $-C$ is parameterized by a smooth path $\rho: \closedint a b \to \C$ with $\rho = \gamma \circ \psi$.
Here, $\psi: \closedint a b \to \closedint a b$ is defined by $\map \psi t = a + b - t$.
From Derivatives of Function of $a x + b$:

$\map {\psi'} t = -1$ for all $t \in \closedint a b$
Then:














\(\ds \int_C \map f z \rd z\)

\(=\)







\(\ds \int_a^b \map f {\map \rho t} \map {\rho'} t \rd t\)





Definition of Complex Contour Integral














\(\ds \)

\(=\)







\(\ds \int_a^b \map f {\map \gamma {\map \psi t} } \map {\gamma'} {\map \psi t} \map {\psi'} t \rd t\)





Derivative of Complex Composite Function














\(\ds \)

\(=\)







\(\ds -\int_a^b \map f {\map \gamma u} \map {\gamma'} u \rd u\)





substitution with $u = \map \psi t$, where $\map \psi a > \map \psi b$














\(\ds \)

\(=\)







\(\ds -\int_C \map f z \rd z\)









$\Box$

Next, suppose that $C$ is a contour.
Then $C$ is a concatenation of a finite sequence $C_1, \ldots, C_n$ of directed smooth curves.
By definition of reversed contour, $-C$ is a concatenation of the finite sequence $-C_n, \ldots, -C_1$ of directed smooth curves.
Then:














\(\ds \int_C \map f z \rd z\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \int_{-C_k} \map f z \rd z\)





Contour Integral of Concatenation of Contours














\(\ds \)

\(=\)







\(\ds -\sum_{k \mathop = 1}^n \int_{C_k} \map f z \rd z\)





from the result above, as each $C_k$ is a directed smooth curve














\(\ds \)

\(=\)







\(\ds -\int_C \map f z \rd z\)









$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori $\S 2.2$




