# 

Source: https://proofwiki.org/wiki/Limit_Points_in_Uncountable_Fort_Space

Theorem
Let $T = \struct {S, \tau_p}$ be an uncountable Fort space.
Let $U \subseteq S$ be a countably infinite subset of $S$.

Then $p$ is the only limit point of $U$.


Proof
Suppose $y \in S, y \ne p$.
We have by definition of Fort space that $\set y$ is open in $T$.
So there is no $z \in \set y: z \ne y, z \in U$. 
Hence $y$ can not be a limit point of $U$.

Suppose $p \in V \in \tau_p$ for some $V \subseteq S$.
From Definition of Fort Space, $\relcomp S V$ is finite.
Then:














\(\ds \relcomp S {V \setminus \set p}\)

\(=\)







\(\ds \paren {\relcomp S V} \cup \paren {V \cap \set p}\)





Set Difference with Set Difference is Union of Set Difference with Intersection














\(\ds \)

\(\subseteq\)







\(\ds \paren {\relcomp S V} \cup \set p\)





Set Union Preserves Subsets: $V \cap \set p \subset \set p$: Intersection is Subset



Thus $\relcomp S {V \setminus \set p}$ is also finite.
Since $U$ is countably infinite:

$U \nsubseteq \relcomp S {V \setminus \set p}$.
From Empty Intersection iff Subset of Complement:

$U \cap \paren {V \setminus \set p} \ne \O$.

Since $V$ is arbitrary, every open neighborhood of $p$ has non-empty intersection with $U$.
Thus $p$ is the only limit point of $U$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $24$. Uncountable Fort Space: $4$




