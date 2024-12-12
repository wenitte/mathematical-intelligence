# 

Source: https://proofwiki.org/wiki/Discrete_Random_Variable_is_Random_Variable

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ be a discrete random variable on $\struct {\Omega, \Sigma, \Pr}$.

Then $X$ fulfils the condition:

$\forall x \in \R: \set {\omega \in \Omega: \map X \omega \le x} \in \Sigma$

That is, $X$ fulfils the condition for it to be a random variable.


Proof
Let $X$ be a discrete random variable.
Then by definition:

$\forall x \in \R: \set {\omega \in \Omega: \map X \omega = x} \in \Sigma$

But see that:

$\ds \set {\omega \in \Omega: \map X \omega \le x} = \bigcup_{\substack {y \mathop \in \Omega_X \\ y \mathop \le x} } \set {\omega \in \Omega: \map X \omega = y}$
This is the countable union of events in $\Sigma$.
Hence, as $\Sigma$ is a sigma-algebra, $\set {\omega \in \Omega: \map X \omega \le x} \in \Sigma$ as required.
$\blacksquare$





