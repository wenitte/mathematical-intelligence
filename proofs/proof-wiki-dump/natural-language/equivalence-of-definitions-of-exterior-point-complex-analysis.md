# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Exterior_Point_(Complex_Analysis)



Theorem
The following definitions of the concept of exterior point in the context of Complex Analysis are equivalent:

Let $S \subseteq \C$ be a subset of the complex plane.
Let $z_0 \in \C$.

Definition 1
$z_0$ is an exterior point of $S$ if and only if $z_0$ has an $\epsilon$-neighborhood which is disjoint from $S$.

Definition 2
$z_0$ is an exterior point of $S$ if and only if:

$z_0$ is not an interior point of $S$
and:

$z_0$ is not a boundary point of $S$.


Proof
Let $S \subseteq \C$.


Definition 1 implies Definition 2
Let $z_0$ be an exterior point of $S$ by definition 1.
Let $\map {N_\epsilon} {z_0}$ be an $\epsilon$-neighborhood of $z_0$ such that $\map {N_\epsilon} {z_0} \cap S = \O$.
That is, $\map {N_\epsilon} {z_0}$ has no points which are also in $S$.
By definition, it follows that $z_0$ is not a boundary point of $S$.

Aiming for a contradiction, suppose $z_0$ is an interior point of $S$.
Let $\map {N_{\epsilon'} } {z_0}$ be an $\epsilon'$-neighborhood such that $\map {N_{\epsilon'} } {z_0} \subseteq S$.
By Empty Intersection iff Subset of Complement:

$\map {N_\epsilon} {z_0} \subseteq \relcomp \C S$

This article, or a section of it, needs explaining.In particular: Need a result to show that neighborhoods of a given point cannot be disjointYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Thus $z_0$ is an exterior point of $S$ by definition 2.
$\Box$


Definition 2 implies Definition 1
Let $z_0$ be an exterior point of $S$ by definition 2.
As $z_0$ is not an interior point of $S$ there exists no $\epsilon$-neighborhood of $z_0$ which is disjoint from $\relcomp \C S$.
That is, every $\epsilon$-neighborhood of $z_0$ contains points which are not in $S$.
As $z_0$ is not a boundary point of $S$, there exists at least one $\epsilon$-neighborhood of $z_0$ which does not contain both points in $S$ and points not in $S$.
But as every $\epsilon$-neighborhood of $z_0$ contains points which are not in $S$, it follows there must be at least one $\epsilon$-neighborhood of $z_0$ disjoint from $S$.
Thus $z_0$ is an exterior point of $S$ by definition 1.
$\blacksquare$





