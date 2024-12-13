# 

Source: https://proofwiki.org/wiki/Pseudometric_Space_is_Metric_Space_iff_Kolmogorov



Theorem
Let $M = \struct {S, d}$ be a pseudometric space.
Let $T = \struct {S, \tau}$ be the topological space over $S$ induced by $d$.

Then $M$ is a metric space if and only if $T$ is a $T_0$ (Kolmogorov} space.


Proof
Necessary Condition
Let $M$ be a metric space.
From Metric Space is Hausdorff, $M$ is a Hausdorff space.
From:

$T_2$ (Hausdorff) Space is $T_1$ Space
and:

$T_1$ Space is $T_0$ (Kolmogorov) Space
it follows that $M$ is a Kolmogorov space.
$\Box$


Sufficient Condition
Suppose now that $M$ is a Kolmogorov space.
Let $a, b \in S$ such that $a \ne b$.
Then $\exists U \in \tau$ such that:

$\paren {a \in U \land b \notin U} \lor \paren {b \in U \land a \notin U}$
Without loss of generality, suppose that $a \in U$ and $b \notin U$.
Then by the definition of the induced topology:

$\exists \epsilon \in \R_{>0}: \map {B_\epsilon} a \subset U$
where $\map {B_\epsilon} a$ denotes the open $\epsilon$-ball of $a$ in $M$.
Since $b \notin U$:

$\map d {a, b} \ge \epsilon$
Since $\epsilon > 0$:

$\map d {a, b} > 0$
Since this holds for any pair of distinct points, $M$ is a metric space.
$\blacksquare$





