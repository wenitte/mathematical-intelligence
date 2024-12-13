# 

Source: https://proofwiki.org/wiki/Moment_Generating_Function_of_Geometric_Distribution/Formulation_2/Examples/Third_Moment

Examples of Use of Moment Generating Function of Geometric Distribution/Formulation 2
Let $X \sim \Geometric p$ for some $0 < p < 1$, where $\Geometric p$ is the Geometric distribution.

$\map X \Omega = \set {0, 1, 2, \ldots} = \N$
$\map \Pr {X = k} = p \paren {1 - p}^k$

The third moment generating function of $X$ is given by: 

$\map { {M_X}} t = p \paren {1 - p} e^t \paren {\dfrac {1 + 4 \paren {1 - p} e^t + \paren {1 - p}^2 e^{2t} } {\paren {1 - \paren {1 - p} e^t}^4 } }$


Proof
We have:














\(\ds \map { {M_X}} t\)

\(=\)







\(\ds \frac \d {\d t} \map { {M_X}} t\)





Definition of Moment Generating Function














\(\ds \)

\(=\)







\(\ds \frac \d {\d t} p \paren {1 - p} e^t \paren {\dfrac {1  + \paren {1 - p} e^t } {\paren {1 - \paren {1 - p} e^t}^3 } }\)





Moment Generating Function of Geometric Distribution: Second Moment














\(\ds \)

\(=\)







\(\ds p \paren {1 - p} \paren {\frac \d {\d t} \paren {\paren { e^t  + \paren {1 - p} e^{2t} } \paren {1 - \paren {1 - p} e^t}^{-3} } }\)




















\(\ds \)

\(=\)







\(\ds p \paren {1 - p} \paren {\paren {e^t  + 2 \paren {1 - p} e^{2t} } \paren {1 - \paren {1 - p} e^t}^{-3} - 3 \paren {e^t  + \paren {1 - p} e^{2t} } \paren {1 - \paren {1 - p} e^t}^{-4} \paren {-\paren {1 - p} e^t} }\)





Product Rule for Derivatives, Chain Rule for Derivatives, Derivative of Power, Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds p \paren {1 - p} \paren {\dfrac {e^t + 2 \paren {1 - p} e^{2t} } {\paren {1 - \paren {1 - p} e^t}^3 } + \dfrac {3 \paren {1 - p} e^{2t} + 3 \paren {1 - p}^2 e^{3t}  } {\paren {1 - \paren {1 - p} e^t}^4 } }\)





gathering terms














\(\ds \)

\(=\)







\(\ds p \paren {1 - p} \paren {\dfrac {e^t + 2 \paren {1 - p} e^{2t} } {\paren {1 - \paren {1 - p} e^t}^3 } \dfrac {\paren {1 - \paren {1 - p} e^t} } {\paren {1 - \paren {1 - p} e^t} } + \dfrac {3 \paren {1 - p} e^{2t} + 3 \paren {1 - p}^2 e^{3t} } {\paren {1 - \paren {1 - p} e^t}^4 } }\)





multiplying by $1$














\(\ds \)

\(=\)







\(\ds p \paren {1 - p} e^t \paren {\dfrac {1 + 2 \paren {1 - p} e^t - \paren {1 - p} e^t - 2 \paren {1 - p}^2 e^{2t} + 3 \paren {1 - p} e^t + 3 \paren {1 - p}^2 e^{2t} } {\paren {1 - \paren {1 - p} e^t}^4 } }\)





simplifying














\(\ds \)

\(=\)







\(\ds p \paren {1 - p} e^t \paren {\dfrac {1 + 4 \paren {1 - p} e^t + \paren {1 - p}^2 e^{2t} } {\paren {1 - \paren {1 - p} e^t}^4 } }\)





simplifying



$\blacksquare$





