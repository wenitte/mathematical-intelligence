# 

Source: https://proofwiki.org/wiki/Expectation_of_Pareto_Distribution

Theorem
Let $X$ be a continuous random variable with the Pareto distribution with $a, b \in \R_{> 0}$.
The expectation of $X$ is given by:

$\expect X = \begin {cases} \dfrac {a b} {a - 1} & 1 < a \\ \text {does not exist} & 1 \ge a \end {cases}$


Proof
From Raw Moment of Pareto Distribution, we have:
The $n$th raw moment $\expect {X^n}$ of $X$ is given by: 

$\expect {X^n} = \begin {cases} \dfrac {a b^n} {a - n} & n < a \\ \text {does not exist} & n \ge a \end {cases}$

Therefore, for $n = 1$ we have:

$\expect X = \begin {cases} \dfrac {a b} {a - 1} & 1 < a \\ \text {does not exist} & 1 \ge a \end {cases}$
$\blacksquare$





