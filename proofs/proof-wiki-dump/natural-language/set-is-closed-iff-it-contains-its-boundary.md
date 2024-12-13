# 

Source: https://proofwiki.org/wiki/Set_is_Closed_iff_it_Contains_its_Boundary

Theorem
Let $T$ be a topological space, and let $H \subseteq T$.

Then $H$ is closed in $T$ if and only if:

$\partial H \subseteq H$
where $\partial H$ is the boundary of $H$.


Proof
From Boundary is Intersection of Closure with Closure of Complement:

$\partial H = H^- \cap \paren {T \setminus H}^-$
where $H^-$ is the closure of $H$.
Hence from Intersection is Subset we have that:

$\partial H \subseteq H^-$
Then from Closed Set Equals its Closure, $H$ is closed in $T$ if and only if $H = H^-$.
Hence the result.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 30 \ \text {(i)}$
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Closures and Interiors




