# 

Source: https://proofwiki.org/wiki/Metric_on_Shift_of_Finite_Type_is_Metric


This article needs to be linked to other articles.In particular: investigate how we use categories on $\mathsf{Pr} \infty \mathsf{fWiki}$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\struct {X _\mathbf A, \sigma_\mathbf A}$ be a shift of finite type.
Let $\theta \in \openint 0 1$.
Then the metric $d_\theta$ is indeed a metric on $X_\mathbf A$.

That is, $\struct {X _\mathbf A, d _\theta} $ is a metric space.


Proof
M1
Let $x\in X _\mathbf A$
Obviously, $x_i = x_i$ for all $i \in \openint {-\infty} \infty$.
Therefore:

$\map {d _\theta} {x,x} = \theta ^\infty = 0$.
$\Box$

M3
This is clear from the definition.
$\Box$

M4
Let $x,y\in X _\mathbf A$ such that $x\ne y$.
That is:

$\exists k\in\Z : x_k\ne y_k$.
Thus:

$N:=\sup \set {n \in \N \cup \set \infty : x_i = y_i \text { for all } i \in \openint {-n} n}\leq \size k$
Therefore:

$\map {d _\theta} {x,x} = \theta ^N > 0$.
$\Box$

M2
Let $x,y,z\in X _\mathbf A$.
Let:

$N_1 := \sup \set {n \in \N \cup \set \infty : x_i = y_i \text { for all } i \in \openint {-n} n}$
and:

$N_2 := \sup \set {n \in \N \cup \set \infty : y_i = z_i \text { for all } i \in \openint {-n} n}$
so that:

$\map {d _\theta} {x,y} = \theta ^{N_1}$
and:

$\map {d _\theta} {y,z} = \theta ^{N_2}$
Without loss of generality, say $N_1 \leq N_2$.
Then for all $i \in \openint {-N_1} {N_1}$:

$x_i = y_i = z_i$
Hence:

$\sup \set {n \in \N \cup \set \infty : x_i = z_i \text { for all } i \in \openint {-n} n} \geq N_1$
so that:

$\map {d _\theta} {x,z} \leq \theta ^{N_1}$
Therefore:

$\map {d _\theta} {x,z} \leq \theta ^{N_1} \leq \theta ^{N_1} + \theta ^{N_2} = \map {d _\theta} {x,y}  + \map {d _\theta} {y,z}$
$\blacksquare$





