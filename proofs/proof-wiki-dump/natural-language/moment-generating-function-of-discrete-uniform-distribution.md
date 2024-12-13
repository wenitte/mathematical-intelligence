# 

Source: https://proofwiki.org/wiki/Moment_Generating_Function_of_Discrete_Uniform_Distribution

Theorem
Let $X$ be a discrete random variable with a discrete uniform distribution with parameter $n$ for some $n \in \N$.
Then the moment generating function $M_X$ of $X$ is given by: 

$\map {M_X} t = \dfrac {e^t \paren {1 - e^{n t} } } {n \paren {1 - e^t} }$


Proof
From the definition of the discrete uniform distribution, $X$ has probability mass function:

$\map \Pr {X = N} = \dfrac 1 n$
From the definition of a moment generating function:

$\ds \map {M_X} t = \expect {e^{t X} } = \sum_{N \mathop = 1}^n \map \Pr {X = N} e^{N t}$
So: 














\(\ds \map {M_X} t\)

\(=\)







\(\ds \frac 1 n \sum_{N \mathop = 1}^n \paren {e^t}^N\)




















\(\ds \)

\(=\)







\(\ds \frac {e^t} n \sum_{N \mathop = 0}^{n - 1} \paren {e^t}^N\)




















\(\ds \)

\(=\)







\(\ds \frac {e^t \paren {1 - e^{n t} } } {n \paren {1 - e^t} }\)





Sum of Geometric Sequence with $r = e^t$



$\blacksquare$





