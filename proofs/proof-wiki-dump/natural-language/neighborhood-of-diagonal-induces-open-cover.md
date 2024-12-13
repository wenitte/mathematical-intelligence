# 

Source: https://proofwiki.org/wiki/Neighborhood_of_Diagonal_induces_Open_Cover


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $T = \struct{X, \tau}$ be a topological space.
Let $X \times X$ denote the cartesian product of $X$ with itself.
Let $\tau_{X \times X}$ denote the product topology on $X \times X$.
Let $T \times T$ denote the product space $\struct {X \times X, \tau_{X \times X} }$. 

Let $U$ be a neighborhood of the diagonal $\Delta_X$ of $X \times X$ in $T \times T$.
Let $\VV = \set{V \in \tau : V \times V \subseteq U}$

Then:

$\VV$ is an open cover of $T$
Proof
By definition of product topology:

$\BB = \set {V_1 \times V_2: V_1, V_2 \in \tau}$ is a basis on $T \times T$

Let $x \in X$.
From Set is Neighborhood of Subset iff Neighborhood of all Points of Subset:

$U$ is a neighborhood of the point $\tuple{x,x}$
From Characterization of Neighborhood by Basis:

$\exists V_1, V_2 \in \tau : \tuple{x, x} \in V_1 \times V_2 : V_1 \times V_2 \subseteq U$
By definition of Cartesian product:

$x \in V_1$ and $x \in V_2$

Let $V = V_1 \cap V_2$.

By definition of set intersection:

$x \in V$

By Open Set Axiom $\paren {\text O 2 }$: Pairwise Intersection of Open Sets:

$V \in \tau$

From Intersection is Subset:

$V \subseteq V_1$ and $V \subseteq V_2$
From Cartesian Product of Subsets:

$V \times V \subseteq V_1 \times V2$
From Subset Relation is Transitive:

$V \times V \subseteq U$

Hence:

$\exists V \in \VV : x \in V$

Since $x$ was arbitrary, it follows that:

$\forall x \in X : \exists V \in \VV : x \in V$

By definition, $\VV$ is an open cover of $T$. 
$\blacksquare$





