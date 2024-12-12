# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Complex_Natural_Logarithm



Theorem
The following definitions of the concept of Complex Natural Logarithm are equivalent:

Definition 1
Let $z = r e^{i \theta}$ be a complex number expressed in exponential form such that $z \ne 0$.
The complex natural logarithm of $z \in \C_{\ne 0}$ is the multifunction defined as:

$\map \ln z := \set {\map \ln r + i \paren {\theta + 2 k \pi}: k \in \Z}$
where $\map \ln r$ is the natural logarithm of the (strictly) positive real number $r$.

Definition 2
Let $z \in \C_{\ne 0}$ be a non-zero complex number.
The complex natural logarithm of $z$ is the multifunction defined as:

$\map \ln z := \set {w \in \C: e^w = z}$


Proof
Let $z = r e^{i \theta}$ such that $z \ne 0$.
Let $F = \set {\ln r + i \theta + 2 k \pi i: k \in \Z}$.
Let $G = \set {w \in \C: e^w = z}$.
We will demonstrate that $F = G$.


Definition 1 implies Definition 2
Let $w  = x + i y$ such that $w \in F$.
Then:

$x + i y = \ln r + i \theta + 2 k \pi i$
for some $k \in \Z$.

Equating real and imaginary parts:

$x = \ln r$
$y = \theta + 2 k \pi$
Then:














\(\ds e^w\)

\(=\)







\(\ds e^{x + i y}\)





Definition of $w$














\(\ds \)

\(=\)







\(\ds e^x e^{i y}\)





Exponential of Sum














\(\ds \)

\(=\)







\(\ds e^{\ln r} e^{i \paren {\theta + 2 k \pi} }\)





Definition of $w$














\(\ds \)

\(=\)







\(\ds e^{\ln r} e^{i \theta}\)





Periodicity of Complex Exponential Function














\(\ds \)

\(=\)







\(\ds r e^{i \theta}\)





Exponential of Natural Logarithm














\(\ds \)

\(=\)







\(\ds z\)





Definition of $z$



Thus:

$w \in G$
and so:

$f \subseteq G$
$\Box$


Definition 2 implies Definition 1
Let $w \in G$.
By definition:

$\exists z \in \C_{\ne 0}: z = e^w = r e^{i \theta}$

Thus:














\(\ds r e^{i \theta}\)

\(=\)







\(\ds e^{\ln r} e^{i \theta}\)





Exponential of Natural Logarithm














\(\ds \)

\(=\)







\(\ds e^{\ln r + i \theta}\)





Exponential of Sum














\(\ds \)

\(=\)







\(\ds e^w\)





Definition of $w$



Thus $w$ is of the form:

$\ln r + i \theta + k \pi i$
where $k = 0$.
Therefore:

$w \in F$
and so:

$G \subseteq F$
$\Box$

So by definition of set equality:

$F = G$
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4.6$. The Logarithm: $(4.24)$
1983: Ian Stewart and David Tall: Complex Analysis (The Hitchhiker's Guide to the Plane) ... (previous) ... (next): $0$ The origins of complex analysis, and a modern viewpoint: $1$. The origins of complex numbers




