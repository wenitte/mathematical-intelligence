# 

Source: https://proofwiki.org/wiki/Bounded_Metric_Space_is_not_necessarily_Totally_Bounded

Theorem
Let $M = \struct {A, d}$ be a bounded metric space.

Then it is not necessarily the case that $M$ is totally bounded.


Proof 1
Let $M = \struct {\R, d}$ be the real number line with the Euclidean metric.
Let $M' = \struct {\R, \delta}$ be the unity-bounded metric space on $M$ where $\delta$ is defined as:

$\delta = \dfrac d {1 + d}$
From Unity-Bounded Metric Space is Bounded, $M'$ is a bounded metric space.
From Unity-Bounded Metric Space on Real Number Line is not Totally Bounded, $M'$ is not a totally bounded metric space.
$\blacksquare$


Proof 2
Let $d$ be a discrete metric on the open unit interval $\Bbb I := \openint 0 1 \subseteq \R$.
We have that for all $x \in \openint 0 1$ and for all $r \in \R_{> 1}$:

$\map {B_r} x = \openint 0 1$
where $\map {B_r} x$ denotes the open $r$-ball of $x$.
Thus $\struct {\Bbb I, d}$ is bounded.
Let $\epsilon \in \R_{>0}$ be a strictly positive real number such that $\epsilon < 1$.
Let $x \in \openint 0 1$ be arbitrary.
Then $\map {B_\epsilon} x$ contains $x$ alone.
So, there is no finite $\epsilon$-net for $\openint 0 1$.
By definition of totally bounded metric space, $\struct {\Bbb I, d}$ is not totally bounded.
$\blacksquare$





