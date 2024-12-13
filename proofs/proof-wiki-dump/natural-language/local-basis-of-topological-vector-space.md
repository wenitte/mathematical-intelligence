# 

Source: https://proofwiki.org/wiki/Local_Basis_of_Topological_Vector_Space


This article needs to be linked to other articles.In particular: including categoryYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\struct {\XX, \tau}$ be a topological vector space.
Let $0_\XX$ denote the zero vector of $\XX$.

Then there exists a local basis $\BB$ of $0_\XX$ with the following properties:

$(1): \quad \forall W \in \BB: \exists V \in \BB$ such that $V + V \subseteq W$ (where the addition $V + V$ is meant in the sense of the Minkowski sum)
$(2): \quad$ Every $W \in \BB$ is star-shaped (balanced)
$(3): \quad$ Every $W \in \BB$ is absorbent.
$(4): \quad \ds \bigcap_\BB W = \set {0_\XX}$.


Proof
The proof will be carried out in various steps.
We will construct a collection of star-shaped neighborhoods of $0_\XX$.
Then we will show that it is indeed a local basis with the required properties.

Firstly we define the following set:

$\BB_0 := \set {W \in \tau: 0 \in W, W \text{ is star-shaped} }$


$\BB_0$ is a local basis for $0_\XX$
Let $U \ni 0_\XX$ be an open set.
Notice that:

$0 \cdot 0_\XX = 0_\XX$
This way we have proved that $\BB_0$ is a local basis for $0_\XX$.

Since $\cdot: K \times \XX \to \XX$ is a continuous mapping, there is a neighborhood of $\tuple {0, 0_\XX} \in K \times \XX$ in the form:

$\openint {-\epsilon} \epsilon \times W$
such that:

$\map \cdot {\openint {-\epsilon} \epsilon \times W} \subseteq U$
which means that

$\openint {-\epsilon} \epsilon \cdot W \subseteq U$
Let:

$\ds G := \bigcup_{\lambda \mathop \in \openint {-\epsilon} \epsilon, \lambda \mathop \ne 0} \lambda W \subseteq U$
We have that:

$(1): \quad$ For every $\lambda \ne 0$, the set $\lambda \cdot W$ is open.
Hence $G$ is open as union of open sets.

$(2): \quad 0_\XX \in G$ since $0 \in W$.
$(3): \quad$ If $x \in G$ then $-x \in G$.
Therefore, $G$ is open, star-shaped, contains $0_\XX$ and $G \subseteq U$.
$\Box$


Condition $(1)$ is satisfied by $\BB_0$
Let $V \in \BB_0$.
We have that $+\tuple {0_\XX, 0_\XX} = 0_\XX \in W$.
Since $+$ is a continuous mapping and $\BB_0$ is a local basis of $0_\XX$, there exists a $V \in \BB_0$ such that:

$+\tuple {V, V} = V + V \subseteq W$
$\Box$


$\BB_0$ consists of Absorbent Sets
We notice that:

$\tuple {\dfrac 1 n, x} \overset n \to \tuple {0, x}$
and:

$\map \cdot {\dfrac 1 n, x} \overset n \to \map \cdot {0, x} = 0_\XX$
Thus, there is a $n \in \N$ such that:

$\frac 1 n x \in V$
or what amounts to the same thing:

$x \in n V$
$\Box$


Condition $(4)$ is satisfied by $\BB_0$
It suffices that we find a $V \in \BB_0$ such that $x \notin V$.
This is possible since $\tau$ is a Hausdorff topology.
$\Box$

The proof is now complete.
$\blacksquare$





