# 

Source: https://proofwiki.org/wiki/Bernoulli_Process_as_Geometric_Distribution/Shifted

Theorem
Let $\sequence {Y_i}$ be a Bernoulli process with parameter $p$.
Let $\EE$ be the experiment which consists of performing the Bernoulli trial $Y_i$ as many times as it takes to achieve a success, and then stop.
Let $k$ be the number of Bernoulli trials to achieve a success.
Then $k$ is modelled by a shifted geometric distribution with parameter $p$.


Proof
Follows directly from the definition of shifted geometric distribution.
Let $Y$ be the discrete random variable defined as the number of trials for the first success to be achieved.
Thus the last trial (and the last trial only) will be a success, and the others will be failures.
The probability that $k-1$ failures are followed by a success is:

$\map \Pr {Y = k} = \paren {1 - p}^{k - 1} p$
Hence the result.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 2.2$: Examples: Example $14$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): geometric distribution
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): geometric distribution




