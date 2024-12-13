# 

Source: https://proofwiki.org/wiki/Moment_Generating_Function_of_Geometric_Distribution/Formulation_1/Examples/Fourth_Moment

Examples of Use of Moment Generating Function of Geometric Distribution/Formulation 1
Let $X \sim \Geometric p$ for some $0 < p < 1$, where $\Geometric p$ is the Geometric distribution.

$\map X \Omega = \set {0, 1, 2, \ldots} = \N$
$\map \Pr {X = k} = \paren {1 - p} p^k$

The fourth moment generating function of $X$ is given by: 

$\map { {M_X}^{\paren 4} } t = p \paren {1 - p } e^t \paren {\dfrac {1 + 11p e^t + 11 p^2 e^{2t} + p^3 e^{3t} } {\paren {1 - p e^t}^5 } }$


Proof
We have:














\(\ds \map { {M_X}^{\paren 4} } t\)

\(=\)







\(\ds \frac \d {\d t} \map { {M_X}} t\)





Definition of Moment Generating Function














\(\ds \)

\(=\)







\(\ds \frac \d {\d t} p \paren {1 - p} \paren {\dfrac {e^t + 4 p e^{2t} + p^2 e^{3t} } {\paren {1 - p e^t}^4 } }\)





Moment Generating Function of Geometric Distribution: Third Moment














\(\ds \)

\(=\)







\(\ds p \paren {1 - p} \frac \d {\d t} \paren {e^t + 4 p e^{2t} + p^2 e^{3t} } \paren {1 - p e^t}^{-4}\)





factoring out the $p \paren {1 - p}$














\(\ds \)

\(=\)







\(\ds p \paren {1 - p } \paren {\paren {e^t + 8p e^{2t} + 3 p^2 e^{3t} } \paren {1 - p e^t}^{-4} + \paren {e^t + 4 p e^{2t} + p^2 e^{3t} } \paren {-4 \paren {1 - p e^t}^{-5} } \paren {-p e^t } }\)





Product Rule for Derivatives, Chain Rule for Derivatives, Derivative of Power, Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds p \paren {1 - p } \paren {\dfrac {e^t + 8p e^{2t} + 3 p^2 e^{3t} } {\paren {1 - p e^t}^4 } + \dfrac {4 p e^{2t} + 16 p^2 e^{3t} + 4 p^3 e^{4t} } {\paren {1 - p e^t}^5 } }\)





gathering terms














\(\ds \)

\(=\)







\(\ds p \paren {1 - p } \paren {\dfrac {e^t + 8p e^{2t} + 3 p^2 e^{3t} } {\paren {1 - p e^t}^4 } \dfrac {\paren {1 - p e^t} } {\paren {1 - p e^t} } + \dfrac {4 p e^{2t} + 16 p^2 e^{3t} + 4 p^3 e^{4t} } {\paren {1 - p e^t}^5 } }\)





multiplying by $1$














\(\ds \)

\(=\)







\(\ds p \paren {1 - p } \dfrac {e^t + 8p e^{2t} + 3 p^2 e^{3t} - p e^{2t} - 8 p^2 e^{3t} - 3 p^3 e^{4t} + 4 p e^{2t} + 16 p^2 e^{3t} + 4 p^3 e^{4t} } {\paren {1 - p e^t}^5 }\)





simplifying














\(\ds \)

\(=\)







\(\ds p \paren {1 - p } e^t \paren {\dfrac {1 + 11p e^t + 11 p^2 e^{2t} + p^3 e^{3t} } {\paren {1 - p e^t}^5 } }\)





simplifying



$\blacksquare$





