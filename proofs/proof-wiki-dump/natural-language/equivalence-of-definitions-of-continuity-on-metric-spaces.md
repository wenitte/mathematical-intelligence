# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Continuity_on_Metric_Spaces



Theorem
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $f: A_1 \to A_2$ be a mapping from $A_1$ to $A_2$.

The following definitions of the concept of continuity in the context of metric spaces are equivalent:


Definition 1
$f$ is continuous from $\struct {A_1, d_1}$ to $\struct {A_2, d_2}$ if and only if it is continuous at every point $x \in A_1$.

Definition 2
$f$ is continuous from $\struct {A_1, d_1}$ to $\struct {A_2, d_2}$ if and only if:

for every $U \subseteq A_2$ which is open in $M_2$, $f^{-1} \sqbrk U$ is open in $M_1$.


Proof
Definition by Points implies Definition by Open Sets
Suppose that $f$ is continuous at every point $x \in A_1$.

Let $U \subseteq M_2$ be open in $M_2$.
Let $x \in f^{-1} \sqbrk U$.
Since $U$ is open in $M_2$:

$\exists \epsilon \in \R_{>0}: \map {B_\epsilon} {\map f x; d_2} \subseteq U$
where $\map {B_\epsilon} {\map f x; d_2}$ denotes the open $\epsilon$-ball of $\map f x$ in $M_2$.
By the definition of continuity at a point:

$\exists \delta \in \R_{>0}: f \sqbrk {\map {B_\delta} {x; d_1} } \subseteq \map {B_\epsilon} {\map f x; d_2}$
So:

$f \sqbrk {\map {B_\delta} {x; d_1} } \subseteq U$
and so:

$\map {B_\delta} {x; d_1} \subseteq f^{-1} \sqbrk U$
Thus $f^{-1} \sqbrk U$ is open in $M_1$.
$\Box$


Definition by Open Sets implies Definition by Points
Suppose $f$ is defined to be continuous in the sense that:

for every $U \subseteq A_2$ which is open in $M_2$, $f^{-1} \sqbrk U$ is open in $M_1$.

Let $x \in A_1$.
Then by Open Ball of Point Inside Open Ball:

$\exists \epsilon \in \R_{>0}: \map {B_\epsilon} {\map f x; d_2}$ is open in $M_2$
So by hypothesis, $f^{-1} \sqbrk {\map {B_\epsilon} {\map f x; d_2} }$ is open in $M_1$.
As $\map f x \in \map {B_\epsilon} {\map f x; d_2}$, it follows that:

$x \in f^{-1} \sqbrk {\map {B_\epsilon} {\map f x; d_2} }$
So by hypothesis:

$\exists \delta \in \R_{>0}: \map {B_\delta} {x; d_1} \subseteq f^{-1} \sqbrk {\map {B_\epsilon} {\map f x; d_2} }$
Then:

$f \sqbrk {\map {B_\delta} {x; d_1} } \subseteq \map {B_\epsilon} {\map f x; d_2}$
Thus by the $\epsilon$-Ball definition, $f$ is continuous at $x$.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{III}$: Metric Spaces: More About Continuity
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 6$: Open Sets and Closed Sets: Theorem $6.3$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.3$: Open sets in metric spaces: Proposition $2.3.13$

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: Check flow of Rudin citation -- note the combination theorem does not exist here yet for metric spacesIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1953: Walter Rudin: Principles of Mathematical Analysis ... (previous) ... (next): $4.8$




