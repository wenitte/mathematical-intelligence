# 

Source: https://proofwiki.org/wiki/Cosets_of_Positive_Reals_in_Multiplicative_Group_of_Complex_Numbers

Theorem
Let $S$ be the positive real axis of the complex plane:

$S = \set {z \in \C: z = x + 0 i, x \in \R_{>0} }$
Consider the algebraic structure $\struct {S, \times}$ as a subgroup of the multiplicative group of complex numbers $\struct {\C_{\ne 0}, \times}$.

The cosets of $\struct {S, \times}$ are the sets of the form:

$\set {z \in \C: \exists r \in \R_{>0}: z = r e^{i \theta}}$ for some $\theta \in \hointr 0 {2 \pi}$
That is, the sets of all complex numbers with a constant argument.


Proof
Let $z_0 \in \C_{\ne 0}$.
Write $z_0 = r_0 e^{i \theta}$, where $r_0 > 0$ and $\theta \in \hointr 0 {2 \pi}$.
We will show that:

$z_0 S = \set {z \in \C: \exists r \in \R_{>0}: z = r e^{i \theta}}$

Pick any $w \in z_0 S$.
Then there exists some $x \in S$ such that $w = z_0 x$.
Note that $x \in \R_{>0}$ and $r_0 x \in \R_{>0}$.
Thus:

$w = z_0 x = r_0 x e^{i \theta} \in \set {z \in \C: \exists r \in \R_{>0}: z = r e^{i \theta}}$
This shows that:

$z_0 S \subseteq \set {z \in \C: \exists r \in \R_{>0}: z = r e^{i \theta}}$

Pick any $w \in \set {z \in \C: \exists r \in \R_{>0}: z = r e^{i \theta}}$.
Write $w = r e^{i \theta}$, where $r \in \R_{>0}$.
Note that $\dfrac r {r_0} \in \R_{>0}$.
Then:

$w = \paren {\dfrac r {r_0}} r_0 e^{i \theta} = \paren {\dfrac r {r_0}} z_0 \in z_0 S$
This shows that:

$z_0 S \supseteq \set {z \in \C: \exists r \in \R_{>0}: z = r e^{i \theta}}$

By definition of set equality:

$z_0 S = \set {z \in \C: \exists r \in \R_{>0}: z = r e^{i \theta}}$
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Exercise $\text{M}$




