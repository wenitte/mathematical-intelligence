# 

Source: https://proofwiki.org/wiki/Range_of_Idempotent_is_Kernel_of_Complementary_Idempotent



Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space.
Let $A$ be an idempotent operator.

Then:

$\Rng A = \map \ker {I - A}$



This article, or a section of it, needs explaining.In particular: what is $I$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Corollary 1
$\ker A = \Rng {I - A}$


Corollary 2
Then:

$\Rng A$ is a closed linear subspace of $\HH$.


Proof
If $h \in \map \ker {I - A}$, we have:

$\map {\paren {I - A} } h = {\mathbf 0}_\HH$
That is:

$h - A h = {\mathbf 0}_\HH$
so that:

$A h = h$
and so:

$h \in \Rng A$
So we have:

$\map \ker {I - A} \subseteq \Rng A$
Now let $h \in \Rng A$.
Then there exists $k \in \HH$ such that $h = A k$. 
Then we have $h - A h = h - A^2 k$.
Since $A$ is an idempotent operator, we have:

$A^2 k = A k = h$
Hence:

$h - A h = {\mathbf 0}_\HH$
So:

$h \in \map \ker {I - A}$
We therefore obtain:

$\Rng A \subseteq \map \ker {I - A}$
So:

$\Rng A = \map \ker {I - A}$
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\text {II}.3.2 \ \text {(b)}$




