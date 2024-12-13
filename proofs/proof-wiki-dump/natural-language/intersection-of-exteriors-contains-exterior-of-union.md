# 

Source: https://proofwiki.org/wiki/Intersection_of_Exteriors_contains_Exterior_of_Union

Theorem
Let $T$ be a topological space.

Let $\mathbb H$ be a set of subsets of $T$.
That is, let $\mathbb H \subseteq \powerset T$ where $\powerset T$ is the power set of $T$.

Then:

$\ds \paren {\bigcup_{H \mathop \in \mathbb H} H}^e \subseteq \bigcap_{H \mathop \in \mathbb H} H^e $
where $H^e$ denotes the exterior of $H$.


Proof
In the following, $H^\circ$ denotes the interior of the set $H$.














\(\ds \paren {\bigcup_{H \mathop \in \mathbb H} H}^e\)

\(=\)







\(\ds \paren {T \setminus \bigcup_{H \mathop \in \mathbb H} H}^\circ\)





Definition of Exterior














\(\ds \)

\(=\)







\(\ds \paren {\bigcap_{H \mathop \in \mathbb H} \paren {T \setminus H} }^\circ\)





De Morgan's Laws: Difference with Union














\(\ds \)

\(\subseteq\)







\(\ds \bigcap_{H \mathop \in \mathbb H} \paren {T \setminus H}^\circ\)





Intersection of Interiors contains Interior of Intersection














\(\ds \)

\(=\)







\(\ds \bigcap_{H \mathop \in \mathbb H} H^e\)





Definition of Exterior



$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Closures and Interiors




