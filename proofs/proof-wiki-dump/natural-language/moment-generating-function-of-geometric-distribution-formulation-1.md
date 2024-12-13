# 

Source: https://proofwiki.org/wiki/Moment_Generating_Function_of_Geometric_Distribution/Formulation_1



Theorem
Let $X$ be a discrete random variable with a geometric distribution with parameter $p$ for some $0 < p < 1$. 

$\map X \Omega = \set {0, 1, 2, \ldots} = \N$
$\map \Pr {X = k} = \paren {1 - p} p^k$

Then the moment generating function $M_X$ of $X$ is given by: 

$\map {M_X} t = \dfrac {1 - p} {1 - p e^t}$
for $t < -\map \ln p$, and is undefined otherwise.


Proof
From the definition of the geometric distribution, $X$ has probability mass function:

$\map \Pr {X = k} = \paren {1 - p} p^k$
From the definition of a moment generating function:

$\ds \map {M_X} t = \expect {e^{t X} } = \sum_{k \mathop = 0}^\infty \map \Pr {X = k} e^{k t}$
So:














\(\ds \sum_{k \mathop = 0}^\infty \map \Pr {X = k} e^{k t}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {1 - p} p^k e^{k t}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 - p} \sum_{k \mathop = 0}^\infty \paren {p e^t}^k\)









By Sum of Infinite Geometric Sequence, for this sum to be convergent we must have: 

$\size {p e^t} < 1$
In the case $p = 0$, this demand is satisfied immediately regardless of $t$.
Otherwise, as both $e^t$ and $p$ are positive: 

$e^t < \dfrac 1 p$
So, by Logarithm of Power: 

$t < -\map \ln p$
is the range of $t$ for which the expectation is well-defined.
Now applying Sum of Infinite Geometric Sequence, we have for this range of $t$: 

$\ds \map {M_X} t = \paren {1 - p} \sum_{k \mathop = 0}^\infty \paren {p e^t}^k = \frac {1 - p} {1 - p e^t}$
$\blacksquare$


Examples
First Moment
The first moment generating function of $X$ is given by: 

$\map { {M_X}'} t = \dfrac {\paren {1 - p} p e^t} {\paren {1 - p e^t}^2}$


Second Moment
The second moment generating function of $X$ is given by: 

$\map { {M_X}} t = p \paren {1 - p} e^t \paren {\dfrac {1 + p e^t} {\paren {1 - p e^t}^3} }$


Third Moment
The third moment generating function of $X$ is given by: 

$\map { {M_X}} t = p \paren {1 - p } e^t \paren {\dfrac {1 + 4p e^t + p^2 e^{2t} } {\paren {1 - p e^t}^4 } }$


Fourth Moment
The fourth moment generating function of $X$ is given by: 

$\map { {M_X}^{\paren 4} } t = p \paren {1 - p } e^t \paren {\dfrac {1 + 11p e^t + 11 p^2 e^{2t} + p^3 e^{3t} } {\paren {1 - p e^t}^5 } }$




