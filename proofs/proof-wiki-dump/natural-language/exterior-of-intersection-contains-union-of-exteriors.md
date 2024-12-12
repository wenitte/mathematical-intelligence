# 

Source: https://proofwiki.org/wiki/Exterior_of_Intersection_contains_Union_of_Exteriors



Theorem
Let $T$ be a topological space.

Let $\mathbb H$ be a set of subsets of $T$.
That is, let $\mathbb H \subseteq \powerset T$ where $\powerset T$ is the power set of $T$.

Then:

$\ds \bigcup_{H \mathop \in \mathbb H} H^e \subseteq \paren {\bigcap_{H \mathop \in \mathbb H} H}^e$
where $H^e$ denotes the exterior of $H$.


Proof
We have:














\(\ds \bigcup_{H \mathop \in \mathbb H} H^e\)

\(=\)







\(\ds \bigcup_{H \mathop \in \mathbb H} \paren {T \setminus H^-})\)





Definition of Exterior














\(\ds \)

\(=\)







\(\ds T \setminus \bigcap_{H \mathop \in \mathbb H} H^-\)





De Morgan's Laws: Difference with Intersection




From Closure of Intersection is Subset of Intersection of Closures:

$\ds \paren {\bigcap_{H \mathop \in \mathbb H} H^-} \subseteq \bigcap_{H \mathop \in \mathbb H} H^-$
From Set Complement inverts Subsets:

$\ds T \setminus \paren {\bigcap_{H \mathop \in \mathbb H} H^-} \supseteq T \setminus \bigcap_{H \mathop \in \mathbb H} H^-$
From the definition of exterior:

$\ds T \setminus \paren {\bigcup_{H \mathop \in \mathbb H} H}^- = \paren {\bigcup_{H \mathop \in \mathbb H} H}^e$

Putting this together:

$\ds \bigcup_{H \mathop \in \mathbb H} H^e \subseteq \paren {\bigcap_{H \mathop \in \mathbb H} H}^e$
$\blacksquare$


Mistakes in Sources
Union of Exteriors contains Exterior of Intersection
See 1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Closures and Interiors, where it is stated that:

The exterior of the union of sets is always contained in the intersection of the exteriors, and similarly, the exterior of the intersection is contained in the union of the exteriors; equality holds only for finite unions and intersections.


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Closures and Interiors




