# 

Source: https://proofwiki.org/wiki/Characterization_of_Paracompactness_in_T3_Space/Lemma_20


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $T = \struct{X, \tau}$ be a topological space.

Let every open cover of $T$ be even.

Let $\tau_{X \times X}$ denote the product topology on the cartesian product $X \times X$.

Let $N$ be a neighborhood of the diagonal $\Delta_X$ of $X \times X$ in the product space $\struct {X \times X, \tau_{X \times X} }$.

Then there exists an open neighborhood $W$ of the diagonal $\Delta_X$ in $\struct {X \times X, \tau_{X \times X} }$:

$W$ is symmetric as a relation on $X \times X$, that is, $W = W^{-1}$
the composite relation $W \circ W$ is a subset of $N$, that is, $W \circ W \subseteq N$
Proof
Let:

$\VV = \set{V \in \tau : V \times V \subseteq N}$

From Neighborhood of Diagonal induces Open Cover:

$\VV$ is an open cover of $T$

We have by hypothesis, $\VV$ is even.

From Characterization of Even Cover, there exists an open neighborhood $R$ of the diagonal $\Delta_X$ in $\struct {X \times X, \tau_{X \times X} }$:

$\set{\map R x : x \in S}$ is a refinement of $\VV$
where:

$R$ is seen as a relation on $X \times X$
$\map R x$ denotes the image of $x$ under $R$.

By definition of refinement of cover:

$\forall x \in X : \exists V \in \VV : \map R x \subseteq V$

From Cartesian Product of Subsets:

$\forall x \in X : \exists V \in \VV : \map R x \times \map R x \subseteq V \times V$

From Subset Relation is Transitive:

$\forall x \in X : \map R x \times \map R x \subseteq N$

Let $W = R \cap R^{-1}$, where $R^{-1}$ is the inverse relation of $R$ on $X \times X$.

From Inverse of Open Set in Product Space is Open in Inverse Product Space:

$R^{-1}$ is open in $\struct {X \times X, \tau_{X \times X}}$

By Open Set Axiom $\paren {\text O 2 }$: Pairwise Intersection of Open Sets:

$W$ is open in $\struct {X \times X, \tau_{X \times X}}$

From Inverse of Reflexive Relation is Reflexive:

$R^{-1}$ is reflexive

From Intersection of Reflexive Relations is Reflexive:

$W$ is reflexive

By definition of reflexive:

$W$ is an open neighborhood of the diagonal $\Delta_X$.

From Intersection of Relation with Inverse is Symmetric Relation:

$W$ is a symmetric relation on $X \times X$

We have:










\(\ds \forall x, y, z \in X: \, \)



\(\ds \tuple{y,z} \in \map W x \times \map W x\)

\(\leadsto\)







\(\ds y, z \in \map W x\)





Definition of Cartesian Product














\(\ds \)

\(\leadsto\)







\(\ds \tuple{x, y}, \tuple{x, z} \in W\)





Definition of Image of Element under Relation














\(\ds \)

\(\leadsto\)







\(\ds \tuple{x, y}, \tuple{x, z} \in R\)





Intersection is Subset and Definition of Subset














\(\ds \)

\(\leadsto\)







\(\ds y, z \in \map R x\)





Definition of Image of Element under Relation














\(\ds \)

\(\leadsto\)







\(\ds \tuple{y, z} \in \map R x \times \map R x\)





Definition of Cartesian Product














\(\ds \)

\(\leadsto\)







\(\ds \tuple{y, z} \in N\)





Definition of Subset




By definition of subset:

$\forall x \in X : \map W x \times \map W x \subseteq N$

From Composition of Symmetric Relation with Itself is Union of Products of Images:

$W \circ W = \ds \bigcup_{x \in X} \map W x \times \map W x$

From Union of Subsets is Subset:

$W \circ W \subseteq N$
$\blacksquare$

Sources
1955: John L. Kelley: General Topology: Chapter $5$: Compact Spaces: $\S$Paracompactness: Lemma $30$




