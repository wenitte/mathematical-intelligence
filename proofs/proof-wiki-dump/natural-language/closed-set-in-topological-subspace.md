# 

Source: https://proofwiki.org/wiki/Closed_Set_in_Topological_Subspace



Theorem
Let $T$ be a topological space.
Let $T' \subseteq T$ be a subspace of $T$.

Then $V \subseteq T'$ is closed in $T'$ if and only if $V = T' \cap W$ for some $W$ closed in $T$.


Corollary
Let subspace $T'$ be closed in $T$.
Then $V \subseteq T'$ is closed in $T'$ if and only if $V$ is closed in $T$.


Proof
Necessary Condition
Suppose $V \subseteq T'$ is closed in $T'$.
Then $T' \setminus V$ is open in $T'$ by definition.
So, by definition of subspace topology, $T' \setminus V = T' \cap U$ for some $U$ open in $T$.
Then:














\(\ds V\)

\(=\)







\(\ds T' \setminus \paren {T' \setminus V}\)





Relative Complement of Relative Complement














\(\ds \)

\(=\)







\(\ds T' \setminus \paren {T' \cap U}\)





from above














\(\ds \)

\(=\)







\(\ds T' \setminus U\)





Set Difference with Intersection is Difference














\(\ds \)

\(=\)







\(\ds T' \cap \paren {T \setminus U}\)









Thus $V$ is closed in $T$.
$\Box$


Sufficient Condition
Conversely, suppose $V = T' \cap W$ where $W$ closed in $T$.
Then $T' \setminus V = T' \setminus \paren {T' \cap W} = T' \cap \paren {T \setminus W}$ which is open in $T'$.
So $V$ is closed in $T'$.
$\blacksquare$


Also see
Neighborhood in Topological Subspace


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.7$: Definitions: Proposition $3.7.6$




