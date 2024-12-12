# 

Source: https://proofwiki.org/wiki/Composition_of_Sequentially_Computable_Real-Valued_Functions_is_Sequentially_Computable

Theorem
Let $D \subseteq \R^n$ and $E \subseteq \R^m$ be subsets of real cartesian space.
Let $f : D \to \R$ be sequentially computable.
Let $g_1, g_2, \dotsc, g_n : E \to \R$ be sequentially computable.
Suppose that, for every $\bsx \in E$:

$\tuple {\map {g_1} \bsx, \map {g_2} \bsx, \dotsc, \map {g_n} \bsx} \in D$

Then $h : E \to \R$ defined as:

$\map h {x_1, \dotsc, x_m} = \map f {\map {g_1} {x_1, \dotsc, x_m}, \dotsc, \map {g_n} {x_1, \dotsc, x_m}}$
is sequentially computable.


Proof
Let $\tuple {\sequence {x_{1,k}}_k, \dotsc, \sequence {x_{m,k}}_k}$ be an $m$-tuple of computable real sequences in $E$.
By definition of sequentially computable:

$\sequence {\map {g_i} {x_{1,k}, \dotsc, x_{m,k}}}_k$ is sequentially computable
for every $1 \le i \le n$
Additionally, for every $k$:

$\tuple {\map {g_1} {x_{1,k}, \dotsc, x_{m,k}}, \dotsc, \map {g_n} {x_{1,k}, \dotsc, x_{m,k}}} \in D$
by assumption.
Therefore:

$\tuple {\sequence {\map {g_1} {x_{1,k}, \dotsc, x_{m,k}}}_k, \dotsc, \sequence {\map {g_n} {x_{1,k}, \dotsc, x_{m,k}}}_k}$
is an $n$-tuple of computable real sequences in $D$.

Hence, by definition of sequentially computable:

$\sequence {\map f {\map {g_1} {x_{1,k}, \dotsc, x_{m,k}}, \dotsc, \map {g_n} {x_{1,k}, \dotsc, x_{m,k}}}}_k$
is computable.
But, for every $k \in \N$:

$\map f {\map {g_1} {x_{1,k}, \dotsc, x_{m,k}}, \dotsc, \map {g_n} {x_{1,k}, \dotsc, x_{m,k}}} = \map h {x_{1,k}, \dotsc, x_{m,k}}$
Therefore:

$\sequence {\map h {x_{1,k}, \dotsc, x_{m,k}}}_k$
is computable.

As $\tuple {\sequence {x_{1,k}}_k, \dotsc, \sequence {x_{m,k}}_k}$ was arbitrary, it follows that $h$ is sequentially computable by definition.
$\blacksquare$





