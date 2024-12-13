# 

Source: https://proofwiki.org/wiki/Linear_Transformation_of_Generated_Module/Proof_1

Theorem
Let $R$ be a ring.
Let $G$ and $H$ be $R$-modules.
Let $\phi$ and $\psi$ be linear transformations from $G$ into $H$. 
Let $S$ be a generator for $G$.
Suppose that:

$\forall x \in S: \map \phi x = \map \psi x$

Then $\phi = \psi$.


Proof
By definitions of generator of module and generated submodule, it follows that:

$\ds G := \bigcap \set { M' \subseteq G : S \subseteq M', \textrm {$M'$ is a submodule of $G$} }$

Set $S' := \set {x \in G: \map \phi x = \map \psi x}$.
From Elements of Module with Equal Images under Linear Transformations form Submodule, it follows that $S'$ is a submodule of $G$.
By hypothesis, $S \subseteq S'$.
It follows that $S'$ is one of the submodules $M'$.
From Intersection is Subset:Family of Sets, it follows that $G \subseteq S'$.
As $S' \subseteq G$, it follows that $S' = G$.
It follows that for all $x \in G$, we have:

$\map \phi x = \map \psi x$
which proves that $\phi = \psi$.
$\blacksquare$





