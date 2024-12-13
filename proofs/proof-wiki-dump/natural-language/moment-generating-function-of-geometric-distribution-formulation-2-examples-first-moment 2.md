# 

Source: https://proofwiki.org/wiki/Moment_Generating_Function_of_Geometric_Distribution/Formulation_2/Examples/First_Moment

Examples of Use of Moment Generating Function of Geometric Distribution/Formulation 2
Let $X \sim \Geometric p$ for some $0 < p < 1$, where $\Geometric p$ is the Geometric distribution.

$\map X \Omega = \set {0, 1, 2, \ldots} = \N$
$\map \Pr {X = k} = p \paren {1 - p}^k$

The first moment generating function of $X$ is given by: 

$\map { {M_X}'} t = \dfrac {p \paren {1 - p} e^t } {\paren {1 - \paren {1 - p} e^t}^2 }$


Proof
We have:














\(\ds \map { {M_X}'} t\)

\(=\)







\(\ds \map {\frac \d {\d t} } {\dfrac p {1 - \paren {1 - p} e^t} }\)





Moment Generating Function of Geometric Distribution














\(\ds \)

\(=\)







\(\ds \dfrac {-p \paren {-\paren {1 - p} e^t } } {\paren {1 - \paren {1 - p} e^t}^2 }\)





Quotient Rule for Derivatives, Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds \dfrac {p \paren {1 - p} e^t } {\paren {1 - \paren {1 - p} e^t}^2 }\)









$\blacksquare$





