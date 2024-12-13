# 

Source: https://proofwiki.org/wiki/Open_and_Closed_Sets_in_Multiple_Pointed_Topology


This page has been identified as a candidate for refactoring of basic complexity.In particular: Multiple resultsUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $A$ be a finite set whose cardinality is greater than $1$.
Let $D = \struct {A, \set {\O, A} }$ be the indiscrete space on $A$.

Let $T \times D$ be a multiple pointed topological space generated from $T$ and $D$.

Let $H \subseteq T$.
Then:

$H \times A$ is open in $T \times D$ if and only if $H$ is open in $T$
$H \times A$ is closed in $T \times D$ if and only if $H$ is closed in $T$
$H \times \O$ is both open and closed in $T \times D$

Let $\O \subsetneqq H_A \subsetneqq A$, that is, let $H_A$ be a non-empty proper subset of $A$.
Then $H \times H_A$ is neither open nor closed in $T \times D$.


Proof
By definition of multiple pointed topology, $T \times D$ is the product space of $T$ with $D$:

$T \times D = \struct {S \times A, \tau}$
where $\tau$ is the product topology on $S \times A$.

Consider the set $H \times A$.
We have that:

$H \times A = \pr_1^{-1} \sqbrk H$
where $\pr_1: T \times D \to T$ is the first projection from $T \times D$ to $T$.

By definition of the product topology, $\pr_1: T \times D \to T$ is a continuous mapping.


Open Sets
By definition of product topology, if $H$ is open in $T$ then $H \times A$ is open in $T \times D$.
As the Product Topology is Coarsest Topology such that Projections are Continuous, it follows that if $H$ is not open in $T$ then $H \times A$ is not open in $T \times D$.
$\Box$


Closed Sets
Let $H \subseteq S$ be closed in $T$.
We have that $\pr_1: T \times D \to T$ is a continuous mapping.
By Continuity Defined from Closed Sets, it follows that $H \times A$ is closed in $T \times D$.
As the Product Topology is Coarsest Topology such that Projections are Continuous, it follows that if $H$ is not closed in $T$ then $H \times A$ is not closed in $T \times D$.
$\Box$


Cartesian Product with Empty Set
From Cartesian Product is Empty iff Factor is Empty, $H \times \O = \O$.
From Open and Closed Sets in Topological Space, $\O$ is both open and closed in $T \times D$.
$\Box$


Neither Open Nor Closed
Let $\O \subsetneqq H_A \subsetneqq A$.
That is, $H_A \ne \O$ and $H_A \ne A$.
So $H_A$ is neither open nor closed in the indiscrete topology on $A$
We have that:

$S \times H_A = \pr_2^{-1} \sqbrk {H_A}$
where $\pr_2: T \times D \to D$ is the second projection from $T \times D$ to $D$.
By definition of the product topology, $\pr_2: T \times D \to D$ is a continuous mapping.

We have that the Product Topology is Coarsest Topology such that Projections are Continuous.
So if $H_A$ is neither open nor closed in $D$ then $S \times H_A$ is neither open nor closed in $T \times D$.

Hence, by definition of the product topology, nor is $H \times H_A$.
$\blacksquare$





