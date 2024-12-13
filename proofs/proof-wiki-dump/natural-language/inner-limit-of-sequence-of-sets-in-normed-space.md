# 

Source: https://proofwiki.org/wiki/Inner_Limit_of_Sequence_of_Sets_in_Normed_Space

Theorem
Let $\struct {\XX, \norm {\, \cdot \, } }$ be a normed vector space.
Let $\sequence {C_n}_{n \mathop \in \N}$ be a sequence of sets in $\XX$.
The inner limit of $\sequence {C_n}_{n \mathop \in \N}$ is:

$\ds \liminf_n C_n = \set {x \in X: \lim_n \map d {x, C_n} = 0}$
where $d$ stands for the point-to-set distance mapping.


Proof
$(1): \quad$ We need to show that:

$\ds \limsup_n \ \map d {x, C_n} = 0$

Aiming for a contradiction, suppose that:

$\ds \limsup_n \ \map d {x, C_n} > 0$
that is, that there exists an increasing sequence of indices $\sequence {n_k}_{k \mathop \in \N}$ so that $\map d {x, C_{n_k} } \to_k a > 0$.
This suggests that there exists a $\epsilon_0 \in \R_{>0}$ such that:

$\forall k \in \N: \map d {x, C_{n_k} } > \epsilon_0$
However, according to Inner Limit in Hausdorff Space by Set Closures:

$\ds x \in \map \cl {\bigcup_{k \mathop \in \N} C_{n_k} }$
while:

$\ds \map d {x, \map \cl {\bigcup_{k \mathop \in \N} C_{n_k} } } \ge \epsilon_0$
which is a contradiction.
Hence:

$\ds \limsup_n \map d {x, C_n} = 0$
That is:

$\ds \lim_n \map d {x, C_n} = 0$
and thus we have proven that $x$ is in the set $\ds \set {x \in X: \lim_n \ \map d {x, C_n} = 0}$.

$(2): \quad$ Let $\ds x \in \set {x \in X : \lim_n \ \map d {x, C_n} = 0}$.
This is:

$\ds \lim_n \map d {x, C_n} = 0$
For any $\epsilon > 0$, we can find $n_0 \in \N$ such that:

$\forall n \ge n_0: \map d {x, C_n} \le \dfrac \epsilon 2$
By definition:

$\map d {x, C_n} = \inf \set {\norm {x - y}: y \in C_n}$
Thus we can find a $y_n \in C_n$ such that:

$\norm {y_n - x} < \map d {x, C_n} + \dfrac \epsilon 2 = \epsilon$
That is:

$\exists y_n \in C_n: \norm {y_n - x} < \epsilon$
Therefore:

$x \in C_n + \epsilon \BB$
where $\BB$ is the open unit ball of $\XX$.
That is:

$\BB := \set {x: \norm x < 1}$
Thus:

$\epsilon \BB = \set {x: \norm x < \epsilon}$
where $C_n + \epsilon \BB$ denotes the Minkowski sum of $C_n$ and $\epsilon \BB$.
From this observation, it follows from Inner Limit in Normed Spaces by Open Balls that:

$\ds x \in \liminf_n C_n$
$\blacksquare$


Also see
Inner Limit in Hausdorff Space by Open Neighborhoods




