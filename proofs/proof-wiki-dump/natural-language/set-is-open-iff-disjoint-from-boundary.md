# 

Source: https://proofwiki.org/wiki/Set_is_Open_iff_Disjoint_from_Boundary

Theorem
Let $T$ be a topological space.
Let $H \subseteq T$.

Then $H$ is open in $T$ if and only if:

$\partial H \cap H = \O$
where $\partial H$ is the boundary of $H$.


Proof
From Boundary is Intersection of Closure with Closure of Complement:

$\partial H = H^- \cap \paren {T \setminus H}^-$
where $H^-$ is the closure of $H$.
Hence from Intersection is Subset we have that:

$\partial H \subseteq \paren {T \setminus H}^-$
But from Closed Set Equals its Closure, $\paren {T \setminus H}^- = T \setminus H$ if and only if $T \setminus H$ is closed in $T$.
That is, if and only if $H$ is open in $T$.
So $\partial H \subseteq T \setminus H$ if and only if $H$ is open in $T$.
From Intersection with Complement is Empty iff Subset it follows that $\partial H \cap H = \O$ if and only if $H$ is open in $T$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Closures and Interiors




