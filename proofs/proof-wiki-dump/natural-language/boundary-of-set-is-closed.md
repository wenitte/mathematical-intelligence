# 

Source: https://proofwiki.org/wiki/Boundary_of_Set_is_Closed

Theorem
Let $T$ be a topological space, and let $H \subseteq T$.
Let $\partial H$ denote the boundary of $H$.

Then $\partial H$ is closed in $T$.


Proof
From Boundary is Intersection of Closure with Closure of Complement:

$\partial H = H^- \cap \paren {T \setminus H}^-$
where $H^-$ is the closure of $H$
From Topological Closure is Closed, both $H^-$ and $\paren {T \setminus H}^-$ are closed in $T$.
From Topology Defined by Closed Sets, the intersection of arbitrarily many (in particular two) closed sets of $T$ is a closed set of $T$.
As $\partial H$ is the intersection of $H^-$ and $\paren {T \setminus H}^-$ the result follows.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 29$
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Closures and Interiors




