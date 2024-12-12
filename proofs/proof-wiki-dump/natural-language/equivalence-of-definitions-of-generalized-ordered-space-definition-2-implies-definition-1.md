# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Generalized_Ordered_Space/Definition_2_implies_Definition_1


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct {S, \preceq, \tau}$ be a generalized ordered space by Definition 2:
$\struct {S, \preceq, \tau}$ is a generalized ordered space if and only if:

$(1): \quad$ there exists a linearly ordered space $\struct {S', \preceq', \tau'}$
$(2): \quad$ there exists a mapping $\phi: S \to S'$ such that $\phi$ is both an order embedding and a topological embedding.

Then $\struct {S, \preceq, \tau}$ is a generalized ordered space by Definition 1:
$\struct {S, \preceq, \tau}$ is a generalized ordered space if and only if:

$(1): \quad \struct {S, \tau}$ is a Hausdorff space
$(2): \quad$ there exists a basis for $\struct {S, \tau}$ whose elements are convex in $S$.


Proof
Let $x \in U \in \tau$.
Then by the definition of topological embedding:

$\map \phi U$ is an open neighborhood of $\map \phi x$ in $\map \phi S$ with the subspace topology.
Thus by Basis for Topological Subspace and the definition of the order topology, there is an open interval or open ray $I' \in \tau'$ such that:

$\map \phi x \in I' \cap \map \phi S \subseteq \map \phi U$
Since $I'$ is an interval or ray, it is convex in $S'$ by Interval of Ordered Set is Convex or Ray is Convex, respectively.
Then:














\(\ds x \in \phi^{-1} \sqbrk {I'}\)

\(=\)







\(\ds \phi^{-1} \sqbrk {I' \cap \phi \sqbrk S}\)




















\(\ds \)

\(\subseteq\)







\(\ds \phi^{-1} \sqbrk {\phi \sqbrk U}\)










Because $\phi$ is a topological embedding, it is injective by definition.
So:

$\phi^{-1} \sqbrk {\phi \sqbrk U} = U$
Thus:

$x \in \phi^{-1} \sqbrk {I'} \subseteq U$
By Inverse Image of Convex Set under Monotone Mapping is Convex:

$\phi^{-1} \sqbrk {I'}$ is convex.
Thus $\tau$ has a basis consisting of convex sets.
$\blacksquare$





