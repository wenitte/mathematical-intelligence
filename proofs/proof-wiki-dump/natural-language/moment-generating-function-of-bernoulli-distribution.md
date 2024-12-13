# 

Source: https://proofwiki.org/wiki/Moment_Generating_Function_of_Bernoulli_Distribution

Theorem
Let $X$ be a discrete random variable with a Bernoulli distribution with parameter $p$ for some $0 \le p \le 1$. 
Then the moment generating function $M_X$ of $X$ is given by: 

$\map {M_X} t = q + p e^t$
where $q = 1 - p$. 


Proof
From the definition of the Bernoulli distribution, $X$ has probability mass function:

$\map \Pr {X = n} = \begin{cases}
q & : n = 0 \\
p & : n = 1 \\
0 & : n \notin \set {0, 1} \\
\end{cases}$
From the definition of a moment generating function:

$\ds \map {M_X} t = \expect {e^{t X} } = \sum_{n \mathop = 0}^1 \map \Pr {X = n} e^{t n}$
So:














\(\ds \map {M_X} t\)

\(=\)







\(\ds \map \Pr {X = 0} e^0 + \map \Pr {X = 1} e^t\)




















\(\ds \)

\(=\)







\(\ds q + p e^t\)





Exponential of Zero



$\blacksquare$





