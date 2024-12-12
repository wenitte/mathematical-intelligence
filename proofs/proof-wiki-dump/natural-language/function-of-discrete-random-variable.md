# 

Source: https://proofwiki.org/wiki/Function_of_Discrete_Random_Variable

Theorem
Let $X$ be a discrete random variable on the probability space $\struct {\Omega, \Sigma, \Pr}$.
Let $g: \R \to \R$ be any real function.
Then $Y = g \sqbrk X$, defined as:

$\forall \omega \in \Omega: \map Y \omega = g \sqbrk {\map X \omega}$
is also a discrete random variable.


Proof
As $\Img X$ is countable, then so is $\Img {g \sqbrk X}$.

Now consider $g^{-1} \sqbrk Y$.
We have that:

$\forall x \in \R: \map {X^{-1} } x \in \Sigma$
We also have that:

$\ds \forall y \in \R: \map {g^{-1} } y = \bigcup_{x: \map g x = y} \set x$
But $\Sigma$ is a sigma-algebra and therefore closed for unions.
Thus:

$\forall y \in \R: \map {X^{-1} } {\map {g^{-1} } y} \in \Sigma$
Hence the result.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 2.3$: Functions of discrete random variables




