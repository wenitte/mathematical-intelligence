# 

Source: https://proofwiki.org/wiki/Set_Closure_is_Smallest_Closed_Set/Topology

Theorem
Let $T$ be a topological space.
Let $H \subseteq T$.
Let $H^-$ denote the closure of $H$ in $T$.

Then $H^-$ is the smallest superset of $H$ that is closed in $T$.


Proof
Define:

$\mathbb K := \leftset {K \supseteq H: K}$ is closed in $\rightset T$
That is, let $\mathbb K$ be the set of all supersets of $H$ that are closed in $T$.
The claim is that $H^-$ is the smallest set of $\mathbb K$.

From Set is Subset of its Topological Closure:

$H \subseteq H^-$
From Topological Closure is Closed, $H^-$ is closed in $T$.
Thus $H^- \in \mathbb K$.

Let $K \in \mathbb K$.
From Set Closure as Intersection of Closed Sets:

$\ds H^- = \bigcap \mathbb K$
Therefore, from Intersection is Subset: General Result:

$H^- \subseteq K$
Thus by definition $H^-$ is the smallest set of $\mathbb K$.
$\blacksquare$


Sources
1953: Walter Rudin: Principles of Mathematical Analysis ... (previous) ... (next): $2.27 c$
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Closures and Interiors




