# 

Source: https://proofwiki.org/wiki/Dini%27s_Theorem

Theorem
Let $K \subseteq \R$ be compact.
Let $\sequence {f_n}$ be a sequence of continuous real functions defined on $K$.
Let $\sequence {f_n}$ converge pointwise to a continuous function $f$.
Suppose that:

$\forall x \in K : \sequence {\map {f_n} x}$ is monotone.

Then the convergence of $\sequence {f_n}$ to $f$ is uniform.


Proof
For each $n$, define $d_n : K \to \R$ by:

$d_n := \size {f_n - f}$
We have:

$(1): \quad \sequence {d_n}$ converge pointwise to $0$
since $\sequence {f_n}$ converges pointwise to $f$.
We also have:

$(2): \quad \forall x \in K : \sequence {\map {d_n} x}$ is monotonically decreasing
since $\sequence {\map {f_n} x}$ is monotone.

Let $\epsilon > 0$.
Consider $\sequence {A_n}$ defined by:

$A_n := \set {x \in K : \map {d_n} x < \epsilon}$
As $d_n$ are continuous, $A_n$ are open sets.
In view of $(1)$, we have:

$K = \bigcup A_n$
Since $K$ is compact, there exists a finite subcover:

$K = A_{n_1} \cup \cdots \cup A_{n_m}$
for some $m \in \N_{>0}$.
Let $N := \max \set {n_1, \ldots, n_m}$ be the maximum element among $n_1, \ldots, n_m$.
Then, since $\sequence {A_n}$ is increasing in view of $(2)$, we have:

$\forall n \ge N : K = A_n$
That is:

$\forall n \ge N : \forall x \in K :\quad \map {d_n} x = \size{\map {f_n} x - \map f x} < \epsilon$
$\blacksquare$


Source of Name
This entry was named for Ulisse Dini.





