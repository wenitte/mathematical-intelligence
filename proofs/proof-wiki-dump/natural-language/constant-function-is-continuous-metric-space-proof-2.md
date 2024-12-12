# 

Source: https://proofwiki.org/wiki/Constant_Function_is_Continuous/Metric_Space/Proof_2

Theorem
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.

Let $f_c: A_1 \to A_2$ be the constant mapping from $A_1$ to $A_2$:

$\exists c \in A_2: \forall a \in A_1: \map {f_c} a = c$
That is, every point in $A_1$ maps to the same point $c$ in $A_2$.

Then $f_c$ is continuous throughout $A_1$ with respect to $d_1$ and $d_2$.


Proof
Let $f_c: A_1 \to A_2$ be the constant mapping between two metric spaces $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$.
Let $\epsilon \in \R_{>0}$.
Let $x \in A_1$.
Pick any $\delta \in \R_{>0}$.
Let $y \in A_1$ such that $\map {d_1} {x, y} < \delta$.
Now we have:

$\map {f_c} x = c = \map {f_c} y$
Hence:

$\map {d_2} {\map {f_c} x, \map {f_c} y} = \map {d_2} {c, c}$
By definition of a metric:

$\map {d_2} {c, c} = 0 < \epsilon$
Thus we have that:

$\forall \epsilon > 0: \forall x \in A_1: \exists \delta \in \R: \map {d_1} {x, y} < \delta \implies \map {d_2} {\map {f_c} x, \map {f_c} y} < \epsilon$

Hence by definition of continuity on a metric space, $f_c$ is continuous throughout $A_1$ with respect to $d_1$ and $d_2$.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 3$: Continuity: Theorem $3.3$




