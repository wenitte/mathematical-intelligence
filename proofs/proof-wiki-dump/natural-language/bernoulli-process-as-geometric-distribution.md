# 

Source: https://proofwiki.org/wiki/Bernoulli_Process_as_Geometric_Distribution



Theorem
Let $\sequence {X_i}$ be a Bernoulli process with parameter $p$.
Let $\EE$ be the experiment which consists of performing the Bernoulli trial $X_i$ until a failure occurs, and then stop.
Let $k$ be the number of successes before a failure is encountered.
Then $k$ is modelled by a geometric distribution with parameter $p$.


Shifted Geometric Distribution
Let $\sequence {Y_i}$ be a Bernoulli process with parameter $p$.
Let $\EE$ be the experiment which consists of performing the Bernoulli trial $Y_i$ as many times as it takes to achieve a success, and then stop.
Let $k$ be the number of Bernoulli trials to achieve a success.
Then $k$ is modelled by a shifted geometric distribution with parameter $p$.


Proof
Follows directly from the definition of geometric distribution.
Let $X$ be the discrete random variable defined as the number of successes before a failure is encountered.
Thus the last trial (and the last trial only) will be a failure, and the others will be successes.
The probability that $k$ successes are followed by a failure is:

$\map \Pr {X = k} = p^k \paren {1 - p}$
Hence the result.
$\blacksquare$


Also presented as
This proof uses as its model the first formulation of the geometric distribution.
However, if the second formulation is used, $k$ is then the number of failures before a success is encountered.
Hence this bears similarity to the shifted geometric distribution.


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): geometric distribution
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): geometric distribution




