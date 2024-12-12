# 

Source: https://proofwiki.org/wiki/Characterization_of_Even_Cover


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $\UU$ be a cover of $S$.

Let $\tau_{S \times S}$ denote the product topology on the cartesian product $S \times S$.

Then $\UU$ is an even cover of $T$ if and only if there exists an open neighborhood $V$ of the diagonal $\Delta_S$ of $S \times S$ in the product space $\struct {S \times S, \tau_{S \times S} }$:

$\set{\map V x : x \in S}$ is a refinement of $\UU$
where:

$V$ is seen as a relation on $S \times S$
$\map V x$ denotes the image of $x$ under $V$.
Proof
Necessary Condition
Let $\UU$ be an even cover of $T$.
By definition of even cover, there exists a neighborhood $N$ of the diagonal $\Delta_S$ of $S \times S$ in the product space $\struct {S \times S, \tau_{S \times S} }$:

$\set{\map N x : x \in S}$ is a refinement of $\UU$

By definition of a neighborhood, there exists an open set $V$ of $\struct {S \times S, \tau_{S \times S} }$:

$\Delta_S \subseteq V \subseteq N$
From Set is Open iff Neighborhood of all its Points and Set is Neighborhood of Subset iff Neighborhood of all Points of Subset:

$V$ is an open neighborhood of the $\Delta_S$

It remains to show that $\set{\map V x : x \in S}$ is a refinement of $\UU$.

Let $x \in S$.

We have:

$\tuple{x, x} \in \Delta_S \subseteq V$
By definition of image:

$x \in \map V x$

From Corollary to Image under Subset of Relation is Subset of Image under Relation:

$\map V x \subseteq \map N x$
By definition of refinement:

$\exists U \in \UU : \map N x \subseteq U$
From Subset Relation is Transitive:

$\map V x \subseteq U$

Since $x$ was arbitrary, we have:

$\forall x \in S : x \in \map V x$
and

$\forall x \in S : \exists U \in \UU : \map V x \subseteq U$

It follows that $\set{\map V x : x \in S}$ is a cover of $S$ and a refinement of $\UU$ by definition.
$\Box$

Sufficient Condition
Let $V$ be an open neighborhood of the diagonal $\Delta_S$ of $S \times S$ in the product space $\struct {S \times S, \tau_{S \times S} }$:

$\set{\map V x : x \in S}$ is a refinement of $\UU$

By definition of open neighborhood:

$V$ is a neighborhood of $\Delta_S$ in $\struct {S \times S, \tau_{S \times S}}$

It follows that $\UU$ is an even cover of $T$ by definition.
$\blacksquare$





