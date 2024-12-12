# 

Source: https://proofwiki.org/wiki/Exterior_of_Finite_Union_equals_Intersection_of_Exteriors

Theorem
Let $T$ be a topological space.
Let $n \in \N$.

Let $\forall i \in \closedint 1 n: H_i \subseteq T$.

Then:

$\ds \paren {\bigcup_{i \mathop = 1}^n H_i}^e = \bigcap_{i \mathop = 1}^n H_i^e$
where $H_i^e$ denotes the exterior of $H_i$.


Proof
In the following, $H_i^\circ$ denotes the interior of the set $H_i$.















\(\ds \paren {\bigcup_{i \mathop = 1}^n H_i}^e\)

\(=\)







\(\ds \paren {T \setminus \bigcup_{i \mathop = 1}^n H_i}^\circ\)





Definition of Exterior














\(\ds \)

\(=\)







\(\ds \paren {\bigcap_{i \mathop = 1}^n \paren {T \setminus H_i} }^\circ\)





De Morgan's Laws: Difference with Union














\(\ds \)

\(=\)







\(\ds \bigcap_{i \mathop = 1}^n \paren {T \setminus H_i}^\circ\)





Interior of Finite Intersection equals Intersection of Interiors














\(\ds \)

\(=\)







\(\ds \bigcap_{i \mathop = 1}^n H_i^e\)





Definition of Exterior



$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Closures and Interiors




