# 

Source: https://proofwiki.org/wiki/Metric_on_Shift_of_Finite_Type_is_Non-Archimedean

Theorem
Let $\struct {X_\mathbf A, \sigma_\mathbf A}$ be a shift of finite type.
Let $\theta \in \openint 0 1$.
Then the metric $d_\theta$ on $X_\mathbf A$ is non-archimedean metric.

That is, $\struct {X_\mathbf A, d _\theta} $ is an ultrametric space.


Proof
Let $x, y, z \in X_\mathbf A$.
Let:

$N_1 := \sup \set {n \in \N \cup \set \infty : x_i = y_i \text { for all } i \in \openint {-n} n}$
and:

$N_2 := \sup \set {n \in \N \cup \set \infty : y_i = z_i \text { for all } i \in \openint {-n} n}$
so that:

$\map {d_\theta} {x, y} = \theta^{N_1}$
and:

$\map {d_\theta} {y, z} = \theta^{N_2}$
Let $M := \min \set {N_1, N_2}$.
Then for all $i \in \openint {-M} M$:

$x_i = y_i = z_i$
Hence:

$\sup \set {n \in \N \cup \set \infty : x_i = z_i \text { for all } i \in \openint {-n} n} \ge M$
so that:

$\map {d_\theta} {x, z} \le \theta ^M$
On the other hand:

$\theta^M = \theta^{\min \set {N_1, N_2} } = \max \set {\theta^{N_1}, \theta^{N_2} }$
Therefore:

$\map {d_\theta} {x, z} \le \max \set {\theta^{N_1}, \theta^{N_2} } = \max \set {\map {d_\theta} {x, y}, \map {d_\theta} {y, z} }$
$\blacksquare$





