# 

Source: https://proofwiki.org/wiki/Cumulative_Distribution_Function_is_Increasing

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ be a random variable on $\struct {\Omega, \Sigma, \Pr}$.
Let $F_X$ be the cumulative distribution function.

Then:

$F_X$ is an increasing function.


Proof
Let $x, y \in \R$ have $x \le y$. 
Note that if $\omega \in \Omega$ is such that: 

$\map X \omega \le x$
then: 

$\map X \omega \le y$
so:

$\set {\omega \in \Omega : \map X \omega \le x} \subseteq \set {\omega \in \Omega : \map X \omega \le y}$
From Measure is Monotone, we then have: 

$\map \Pr {X \le x} \le \map \Pr {X \le y}$
That is, from the definition of cumulative distribution function, we have: 

$\map {F_X} x \le \map {F_X} y$
whenever $x \le y$. 
So:

$F_X$ is an increasing function.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): distribution function
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): distribution function




