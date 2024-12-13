# 

Source: https://proofwiki.org/wiki/Limit_with_Epsilon_Powers_of_2

Theorem
Let $\openint a b$ be an open real interval.
Let $c \in \openint a b$.
Let $f: \openint a b \setminus \set c \to \R$ be a real function.
Let $L \in \R$.
Suppose that:

$\forall n > 0 \in \N: \exists \delta \in \R_{>0}: \forall x \in \R: 0 < \size {x - c} < \delta \implies \size {\map f x - L} < 2^{-n} $
Then the limit of $f$ exists as $x$ tends to $c$, and is equal to $L$.


Proof
Denote by $\map P {2^{-n},\delta}$ the proposition considered in the theorem exposition:

$\forall \in \N: \exists \delta \in \R_{>0}: \forall x \in \R: 0 < \size {x - c} < \delta \implies \size {\map f x - L} < 2^{-n} $
Let the limit of $f$ as $x \to c$ exist and equal $L$, as described in the definition of limit:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \forall x \in \R: 0 < \size {x - c} < \delta \implies \size {\map f x - L} < \epsilon$.
Denote by $\map P {\epsilon,\delta}$ the proposition that the above statement holds.
From the Axiom of Archimedes:

$\forall \epsilon > 0: \exists n \in \N: n > \dfrac 1 \epsilon$.
As $2^n > n$ for all $n$, we have that $2^n > \dfrac 1 \epsilon$.
By Ordering of Reciprocals, $2^{-n} < \epsilon$.
Therefore $\size {\map f x - L} < \epsilon$ is implied by $\size {\map f x - L} < 2^{-n}$.
Thus $\map P {\epsilon,\delta}$ is a weaker statement $\map P {2^{-n},\delta}$ 
$\blacksquare$


Also see
Limit with Rational Epsilon and Delta




