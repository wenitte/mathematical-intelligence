# 

Source: https://proofwiki.org/wiki/Probability_Generating_Function_of_Bernoulli_Distribution

Theorem
Let $X$ be a discrete random variable with the Bernoulli distribution with parameter $p$.

Then the p.g.f. of $X$ is:

$\map {\Pi_X} s = q + p s$
where $q = 1 - p$.


Proof
From the definition of p.g.f:

$\ds \map {\Pi_X} s = \sum_{x \mathop \ge 0} \map {p_X} x s^x$
From the definition of the Bernoulli distribution:

$\map {p_X} x = \begin{cases}
p & : x = a \\
1 - p & : x = b \\
0 & : x \notin \set {a, b} \\
\end{cases}$
So:














\(\ds \map {\Pi_X} s\)

\(=\)







\(\ds \map {p_X} 0 s^0 + \map {p_X} 1 s^1\)




















\(\ds \)

\(=\)







\(\ds \paren {1 - p} + p s\)









Hence the result.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 4.2$: Integer-valued random variables: $(10)$




