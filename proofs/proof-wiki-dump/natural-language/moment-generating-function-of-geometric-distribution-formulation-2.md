# 

Source: https://proofwiki.org/wiki/Moment_Generating_Function_of_Geometric_Distribution/Formulation_2



Theorem
Let $X$ be a discrete random variable with a geometric distribution with parameter $p$ for some $0 < p < 1$. 

$\map X \Omega = \set {0, 1, 2, \ldots} = \N$
$\map \Pr {X = k} = p \paren {1 - p}^k$

Then the moment generating function $M_X$ of $X$ is given by: 

$\map {M_X} t = \dfrac p {1 - \paren {1 - p} e^t}$
for $t < -\map \ln {1 - p}$, and is undefined otherwise.



This article is complete as far as it goes, but it could do with expansion.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Proof
From the definition of the geometric distribution, $X$ has probability mass function:

$\map \Pr {X = k} = p \paren {1 - p}^k$
From the definition of a moment generating function:

$\ds \map {M_X} t = \expect {e^{t X} } = \sum_{k \mathop = 0}^\infty \map \Pr {X = k} e^{k t}$
So:














\(\ds \sum_{k \mathop = 0}^\infty \map \Pr {X = k} e^{k t}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty p \paren {1 - p}^k e^{k t}\)




















\(\ds \)

\(=\)







\(\ds p \sum_{k \mathop = 0}^\infty \paren {\paren {1 - p } e^t}^k\)









By Sum of Infinite Geometric Sequence, for this sum to be convergent we must have: 

$\size {\paren {1 - p} e^t} < 1$
In the case $p = 1$, this demand is satisfied immediately regardless of $t$.
Otherwise, as both $e^t$ and $p$ are positive: 

$e^t < \dfrac 1 {1 - p}$
So, by Logarithm of Power: 

$t < -\map \ln {1 - p}$
is the range of $t$ for which the expectation is well-defined.
Now applying Sum of Infinite Geometric Sequence, we have for this range of $t$: 

$\ds \map {M_X} t = p \sum_{k \mathop = 0}^\infty \paren {\paren {1 - p} e^t}^k = \frac p {1 - \paren {1 - p } e^t}$
$\blacksquare$


Examples
First Moment
The first moment generating function of $X$ is given by: 

$\map { {M_X}'} t = \dfrac {p \paren {1 - p} e^t } {\paren {1 - \paren {1 - p} e^t}^2 }$


Second Moment
The second moment generating function of $X$ is given by: 

$\map { {M_X}} t = p \paren {1 - p} e^t \paren {\dfrac {1  + \paren {1 - p} e^t } {\paren {1 - \paren {1 - p} e^t}^3 } }$


Third Moment
The third moment generating function of $X$ is given by: 

$\map { {M_X}} t = p \paren {1 - p} e^t \paren {\dfrac {1 + 4 \paren {1 - p} e^t + \paren {1 - p}^2 e^{2t} } {\paren {1 - \paren {1 - p} e^t}^4 } }$


Fourth Moment
The fourth moment generating function of $X$ is given by: 

$\map { {M_X}^{\paren 4} } t = p \paren {1 - p } e^t \paren {\dfrac {1 + 11 \paren {1 - p} e^t + 11 \paren {1 - p}^2 e^{2t} + \paren {1 - p}^3 e^{3t} } {\paren {1 - \paren {1 - p} e^t}^5 } }$




