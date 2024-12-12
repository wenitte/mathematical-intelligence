# 

Source: https://proofwiki.org/wiki/Expectation_of_Geometric_Distribution/Formulation_2/Proof_2

Theorem
$\map X \Omega = \set {0, 1, 2, \ldots} = \N$
$\map \Pr {X = k} = p \paren {1 - p}^k$

Then the expectation of $X$ is given by:

$\map E X = \dfrac {1-p} p$


Proof
By Moment Generating Function of Geometric Distribution, the moment generating function of $X$ is given by: 

$\map {M_X} t = \dfrac p {1 - \paren {1 - p} e^t}$
for $t < -\map \ln {1 - p}$, and is undefined otherwise.
From Moment in terms of Moment Generating Function: 

$\expect X = \map { {M_X}'} 0$
From Moment Generating Function of Geometric Distribution: First Moment: 

$\map { {M_X}'} t = \dfrac {p \paren {1 - p} e^t } {\paren {1 - \paren {1 - p} e^t}^2 }$
Hence setting $t = 0$:














\(\ds \map { {M_X}'} 0\)

\(=\)







\(\ds \dfrac {p \paren {1 - p} } {\paren {1 - \paren {1 - p} }^2 }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {p \paren {1 - p} } {p^2 }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1 - p} p\)









$\blacksquare$





