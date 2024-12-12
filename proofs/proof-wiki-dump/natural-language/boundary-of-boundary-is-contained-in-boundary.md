# 

Source: https://proofwiki.org/wiki/Boundary_of_Boundary_is_Contained_in_Boundary

Theorem
Let $T$ be a topological space.
Let $H \subseteq T$.

Then:

$\map \partial {\partial H} \subseteq \partial H$
where $\partial H$ is the boundary of $H$.

That is, the boundary of the boundary of $H$ is contained in the boundary of $H$.


Proof
Let $B = \partial H$.
From Boundary of Set is Closed we have that $B$ is closed in $T$.
Let $B^-$ denote the closure of $B$.
From Boundary is Intersection of Closure with Closure of Complement:

$\partial B = B^- \cap \paren {T \setminus B}^-$
and so from Intersection is Subset:

$\partial B \subseteq B^-$
But from Closed Set Equals its Closure:

$B = B^-$
and so:

$\partial B \subseteq B$
That is:

$\map \partial {\partial H} \subseteq \partial H$
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Closures and Interiors




