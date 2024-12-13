# 

Source: https://proofwiki.org/wiki/Image_of_Point_under_Open_Neighborhood_of_Diagonal_is_Open_Neighborhood_of_Point


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $T = \struct{X, \tau}$ be a topological space.
Let $\tau_{X \times X}$ denote the product topology on the cartesian product $X \times X$.

Let $U$ be an open neighborhood of the diagonal $\Delta_X$ of $X \times X$ in the product space $\struct {X \times X, \tau_{X \times X} }$.

Then:

$\forall x \in X : \map U x$ is an open neighborhood of $x$ in $T$
Proof
Let $x \in X$.

By definition of open neighborhood:

$U$ is a neighborhood of $\Delta_X$
From Image of Point under Neighborhood of Diagonal is Neighborhood of Point:

$\map U x$ is a neighborhood of $x$ in $T$

It remains to show that $\map U x$ is open in $T$, that is, $\map U x \in \tau$.

Let:

$\WW = \set{W \in \tau : \exists V \in \tau : x \in V, V \times W \subseteq U}$.

Let $y \in \map U x$.

By definition of image:

$\tuple {x, y} \in U$
By definition of product topology:

$\BB = \set{V \times W : V, W \in \tau}$ is a basis for  $\tau_{X \times X}$
By definition of basis:

$\exists V, W \in \tau : \tuple{x, y} \in V \times W \subseteq U$
By definition of $\WW$:

$W \in \WW$

Since $y$ was arbitrary:

$\forall y \in \map U x : \exists W \in \WW : y \in W$

Let $W \in \WW$.

By definition of $\WW$:

$\exists V \in \tau : x \in V, V \times W \subseteq U$
From Cartesian Product of Subsets:

$\set x \times W \subseteq V \times W$
From Subset Relation is Transitive:

$\set x \times W \subseteq U$
By definition of image:

$W \subseteq \map U x$

Since $W$ was arbitrary:

$\forall W \in \WW : W \subseteq \map U x$

From Characterization of Set Equals Union of Sets:

$\map U x = \bigcup \WW$
By Open Set Axiom $\paren {\text O 1 }$: Union of Open Sets:

$\map U x \in \tau$

Since $x$ was arbitrary:

$\forall x \in X : \map U x$ is an open neighborhood of $x$ in $T$
$\blacksquare$





