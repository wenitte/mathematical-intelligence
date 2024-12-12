# 

Source: https://proofwiki.org/wiki/Discrete_Set/Examples/Rational_Numbers

Example of Discrete Set
Let $T = \struct {\R, \tau_d}$ be the real number line with the usual (Euclidean) topology.
The rational numbers $\Q$ do not form a discrete set within $T$.


Proof
Let $x \in \Q$ be an arbitrary rational number.
Let $\epsilon \in \R_{>0}$ be an arbitrary (strictly) positive rational number.
Let $\map {B_\epsilon} x \subseteq \R$ be the open ball of radius $\epsilon$ on $\R$ whose center is $x$.
That is:

$\map {B_\epsilon} x := \openint {x - \epsilon} {x + \epsilon}$
is the open interval as described.
Consider the rational number $y = x + \dfrac \epsilon 2$.
It is seen that $y \in \map {B_\epsilon} x$.
As $\epsilon$ is arbitrary, it follows that no such $\map {B_\epsilon} x$ contains only $x$ from $\Q$.
Hence by definition $x$ is not isolated in $\Q$.
As $x$ is arbitrary, the result follows.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): discrete set
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): discrete set




