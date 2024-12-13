# 

Source: https://proofwiki.org/wiki/Probability_Generating_Function_of_Degenerate_Distribution

Theorem
Let $X$ be the degenerate distribution:

$\forall x \in \N: \map {p_X} x = \begin{cases}
1 & : x = k \\
0 & : x \ne k
\end{cases}$
where $k \in \N$.

Then the p.g.f. of $X$ is:

$\map {\Pi_X} x = s^k$


Proof
Follows directly from the definition:

$\ds \map {\Pi_X} s = \sum_{x \mathop \ge 0} \map {p_X} x s^x$
As $\map {p_X} x \ne 0$ for only one value of $x$, all the terms vanish except that one.
Hence the result.
$\blacksquare$





