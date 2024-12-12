# 

Source: https://proofwiki.org/wiki/Closure_of_Infinite_Union_may_not_equal_Union_of_Closures

Theorem
Let $T$ be a topological space.
Let $I$ be an infinite indexing set.
Let $\family {H_i}_{i \mathop \in I}$ be an indexed family of subsets of a set $S$.

Let $\ds H = \bigcup_{i \mathop \in I} H_i$ be the union of $\family {H_i}_{i \mathop \in I}$.

Then it is not always the case that:

$\ds \bigcup_{i \mathop \in I} \map \cl {H_i} = \map \cl {\bigcup_{i \mathop \in I} H_i}$
where $\map \cl {H_i}$ denotes the closure of $H_i$.


Proof 1
Proof by Counterexample:
Consider the real number line $\struct {\R, \tau_d}$ with the usual (Euclidean) topology $\tau_d$.
Let:

$H_n \subseteq \R: H_n = \closedint {\dfrac 1 n} 1$ for $n \ge 2$
where $\closedint {\dfrac 1 n} 1$ denotes the closed real interval from $\dfrac 1 n$ to $1$.
From Closed Real Interval is Closed Set, $\closedint {\dfrac 1 n} 1$ is a closed set of $\struct {\R, \tau_d}$.
Then from Set is Closed iff Equals Topological Closure:

$\map \cl {H_n} = H_n$
Also:

$\ds \bigcup_{n \mathop \ge 2} \map \cl {H_n} = \bigcup_{n \mathop \ge 2} H_n = \hointl 0 1$
However:

$\ds \map \cl {\bigcup_{n \mathop \ge 2} H_n} = \closedint 0 1$
So:

$\ds \bigcup_{n \mathop \ge 2} \map \cl {H_n} \ne \map \cl {\bigcup_{n \mathop \ge 2} H_n}$


Proof 2
Proof by Counterexample:
Let $\struct {\R, \tau_d}$ denote the real number line with the usual (Euclidean) topology $\tau_d$.
Let $\struct {\Q, \tau_d}$ be the rational number space, also under the usual (Euclidean) topology $\tau_d$.
For a rational number $\alpha \in \Q$, let $B_\alpha$ denote the singleton containing $\alpha$.

From Union of Closures of Singleton Rationals is Rational Space:

$\ds \bigcup_{\alpha \mathop \in \Q} \map \cl {B_\alpha} = \Q$
From Closure of Union of Singleton Rationals is Real Number Line:

$\ds \map \cl {\bigcup_{\alpha \mathop \in \Q} B_\alpha} = \R$

So it is seen that:

$\ds \bigcup_{\alpha \mathop \in \Q} \map \cl {B_\alpha} \subset \ds \map \cl {\bigcup_{\alpha \mathop \in \Q} B_\alpha}$
but it is not the case that:

$\ds \bigcup_{\alpha \mathop \in \Q} \map \cl {B_\alpha} = \ds \map \cl {\bigcup_{\alpha \mathop \in \Q} B_\alpha}$
and the result is apparent.
$\blacksquare$





