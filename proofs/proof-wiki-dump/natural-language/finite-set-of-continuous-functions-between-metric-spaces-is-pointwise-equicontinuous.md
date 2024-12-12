# 

Source: https://proofwiki.org/wiki/Finite_Set_of_Continuous_Functions_between_Metric_Spaces_is_Pointwise_Equicontinuous

Theorem
Let $\struct {X, d}$ and $\struct {Y, d'}$ be metric spaces. 
Let $\map \CC {X, Y}$ be the set of continuous functions $X \to Y$.
Let $\FF = \set {f_1, f_2, \ldots, f_n}$ be a finite subset of $\map \CC {X, Y}$.

Then $\FF$ is pointwise equicontinuous.


Proof
Let $x \in X$.
Let $\epsilon \in \R_{>0}$.
Let $i$ be a natural number with $1 \le i \le n$. 

Since $f_i$ is continuous at $x$, there exists $\delta_i > 0$ such that whenever: 

$\map d {x, y} < \delta_i$
we have:

$\map {d'} {\map {f_i} x, \map {f_i} y} < \epsilon$
Let:

$\ds \delta = \min_i \set {\delta_i}$
so that: 

$\delta \le \delta_i$
for each $i$. 
Then, whenever:

$\map d {x, y} < \delta$
we have: 

$\map {d'} {\map {f_i} x, \map {f_i} y} < \epsilon$
for each $i$.
So $\FF$ is pointwise equicontinuous.
$\blacksquare$





