# 

Source: https://proofwiki.org/wiki/Linear_Transformation_of_Generated_Module



Theorem
Let $R$ be a ring.
Let $G$ and $H$ be $R$-modules.
Let $\phi$ and $\psi$ be linear transformations from $G$ into $H$. 
Let $S$ be a generator for $G$.
Suppose that:

$\forall x \in S: \map \phi x = \map \psi x$

Then $\phi = \psi$.


Proof 1
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


Proof 2
This proof assumes that $R$ is a ring with unity, so $G$ and $H$ become unitary modules.
Let $y \in G$ be arbitrary.
Then by definition of generator, $y$ is the linear combination of elements of $S$:

$\ds y = \sum_{k \mathop = 1}^n \lambda_k a_k$
for $a_1, a_2, \ldots, a_n \in S, \lambda_1, \lambda_2, \ldots, \lambda n \in R$

Then:














\(\ds \map \phi y\)

\(=\)







\(\ds \map \phi {\sum_{k \mathop = 1}^n \lambda_k a_k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \lambda_k \map \phi {a_k}\)





Definition of Linear Transformation














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \lambda_k \map \psi {a_k}\)





by hypothesis: $\forall a_k \in S: \map \phi {a_k} = \map \psi {a_k}$














\(\ds \)

\(=\)







\(\ds \map \psi {\sum_{k \mathop = 1}^n \lambda_k a_k}\)





Definition of Linear Transformation














\(\ds \)

\(=\)







\(\ds \map \psi y\)









$\blacksquare$


Also see
Homomorphism of Generated Group


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations: Theorem $28.3$




