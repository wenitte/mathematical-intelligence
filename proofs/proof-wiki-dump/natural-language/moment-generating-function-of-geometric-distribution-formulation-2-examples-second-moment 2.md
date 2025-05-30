# 

Source: https://proofwiki.org/wiki/Moment_Generating_Function_of_Geometric_Distribution/Formulation_2/Examples/Second_Moment

Examples of Use of Moment Generating Function of Geometric Distribution
Let $X \sim \Geometric p$ for some $0 < p < 1$, where $\Geometric p$ is the Geometric distribution.

$\map X \Omega = \set {0, 1, 2, \ldots} = \N$
$\map \Pr {X = k} = p \paren {1 - p}^k$

The second moment generating function of $X$ is given by: 

$\map { {M_X}} t = p \paren {1 - p} e^t \paren {\dfrac {1  + \paren {1 - p} e^t } {\paren {1 - \paren {1 - p} e^t}^3 } }$


Proof
We have:














\(\ds \map { {M_X}} t\)

\(=\)







\(\ds \frac \d {\d t} \map { {M_X}'} t\)





Definition of Moment Generating Function














\(\ds \)

\(=\)







\(\ds \frac \d {\d t} \dfrac {p \paren {1 - p} e^t } {\paren {1 - \paren {1 - p} e^t}^2 }\)





Moment Generating Function of Geometric Distribution: First Moment














\(\ds \)

\(=\)







\(\ds p \paren {1 - p} \frac \d {\d t} \paren {\paren {e^t } \paren {\paren {1 - \paren {1 - p} e^t}^{-2} } }\)





factoring out the $p \paren {1 - p}$














\(\ds \)

\(=\)







\(\ds p \paren {1 - p} \paren {\paren {e^t } \paren {\paren {1 - \paren {1 - p} e^t}^{-2} } + \paren {e^t } \paren {-2 \paren {1 - \paren {1 - p} e^t}^{-3} } \paren {-\paren {1 - p} e^t} }\)





Product Rule for Derivatives, Chain Rule for Derivatives, Derivative of Power, Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds p \paren {1 - p} \paren {\dfrac {\paren {e^t } } {\paren {1 - \paren {1 - p} e^t}^2 } \dfrac {\paren {1 - \paren {1 - p} e^t} } {\paren {1 - \paren {1 - p} e^t} } + \dfrac {2 \paren {1 - p} e^{2t} } {\paren {1 - \paren {1 - p} e^t}^3 } }\)





multiplying by $1$














\(\ds \)

\(=\)







\(\ds p \paren {1 - p} \paren {\dfrac {e^t  - \paren {1 - p} e^{2t} + 2 \paren {1 - p} e^{2t} } {\paren {1 - \paren {1 - p} e^t}^3 } }\)





simplifying














\(\ds \)

\(=\)







\(\ds p \paren {1 - p} e^t \paren {\dfrac {1  + \paren {1 - p} e^t } {\paren {1 - \paren {1 - p} e^t}^3 } }\)









$\blacksquare$





