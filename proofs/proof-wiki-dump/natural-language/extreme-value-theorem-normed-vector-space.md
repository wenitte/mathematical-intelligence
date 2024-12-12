# 

Source: https://proofwiki.org/wiki/Extreme_Value_Theorem/Normed_Vector_Space



Theorem
Let $X$ be a normed vector space.
Let $K \subseteq X$ be a compact subset.
Suppose $f : X \to \R$ is a continuous mapping at each $x \in K$.

Then:

$\ds \exists c \in K : \map f c = \sup_{x \mathop \in K} \map f x = \max_{x \mathop \in K} \map f x$
$\ds \exists d \in K : \map f d = \inf_{x \mathop \in K} \map f x = \min_{x \mathop \in K} \map f x$


Proof
Let $K$ be compact.
By Continuous Mappings preserve Compact Subsets, $\map f K$ is compact.
By Compact Subset of Normed Vector Space is Closed and Bounded, $K$ is bounded.
Hence, $\map f K$ is bounded.
$K$ is nonempty, so $\map f K$ is non-empty.
By Characterizing Property of Supremum of Subset of Real Numbers, non-empty bounded subset of $\R$ has least upper bound.
Let $\ds M := \sup_{x \mathop \in K} \map f x$.
Then $M \in \R$.
Let $n \in \N$.
We have that:
$\ds M - \frac 1 n < M$
However, $M$ is the least upper bound.
Hence, $\ds M - \frac 1 n$ cannot be an upper bound for $\map f K$.
Therefore:

$\ds \exists x_n \in K : \map f {x_n} > M - \frac 1 n$
Thus we have a sequence $\sequence {x_n}_{n \mathop \in \N}$ contained in $K$.
$K$ is compact.
By definition, there is a convergent subsequence $\sequence {x_{n_k}}_{k \mathop \in \N}$ with a limit $c \in K$.
$f$ is continuous.
By Continuous Mappings preserve Convergent Sequences, $\sequence {\map f {x_{n_k}}}_{k \mathop \in \N}$ converges with a limit $\map f c$.
But from $\ds \map f {x_n} > M - \frac 1 n$ it follows that $\map f c \ge M$.
On the other hand, by definition of $M$, $\map f c \le M$.
Therefore, $\map f c = M$.
Finally, since $c \in K$:

$\ds \map f c \in \set {\map f x : x \in K}$.
Hence, $M$ is a maximum.
$\Box$

For the second part, let $g : X \to \R$ be such that:

$\forall x \in X : \map g x := - \map f x$
Then above arguments apply, if infima, lower bounds and minimum are replaced with suprema, upper bounds and maximum.
$\blacksquare$


Historical Note
The Extreme Value Theorem in its application to real functions is usually attributed to Karl Weierstrass, as an example of what has been referred to as Weierstrassian rigor.
Hence this result's soubriquet the Weierstrass Extreme Value Theorem.


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.2$: Continuous and linear maps. Continuous maps




