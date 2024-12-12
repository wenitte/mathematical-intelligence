# 

Source: https://proofwiki.org/wiki/Finite_Union_of_Regular_Closed_Sets_is_Regular_Closed

Theorem
Let $T$ be a topological space.
Let $n \in \N$.

Suppose that:

$\forall i \in \set {1, 2, \dotsc, n}: H_i \subseteq T$
where all the $H_i$ are regular closed in $T$.
That is:

$\forall i \in \set {1, 2, \dotsc, n}: H_i = H_i^{\circ -}$
where $H_i^{\circ -}$ denotes the closure of the interior of $H_i$

Then $\ds \bigcup_{i \mathop = 1}^n H_i$ is regular closed in $T$.
That is:

$\ds \bigcup_{i \mathop = 1}^n H_i = \paren {\bigcup_{i \mathop = 1}^n H_i}^{\circ -}$


Proof













\(\ds \paren {\bigcup_{i \mathop = 1}^n H_i}^{\circ -}\)

\(=\)







\(\ds \paren {T \setminus \paren {T \setminus \bigcup_{i \mathop = 1}^n H_i}^-}^-\)





Complement of Interior equals Closure of Complement














\(\ds \)

\(=\)







\(\ds \paren {T \setminus \paren {\bigcap_{i \mathop = 1}^n \paren {T \setminus H_i} }^-}^-\)





De Morgan's Laws: Difference with Union














\(\ds \)

\(=\)







\(\ds \paren {\paren {T \setminus \bigcap_{i \mathop = 1}^n \paren {T \setminus H_i} }^\circ}^-\)





Complement of Interior equals Closure of Complement














\(\ds \)

\(=\)







\(\ds \paren {\bigcup_{i \mathop = 1}^n \paren {T \setminus \paren {T \setminus H_i} }^\circ}^-\)





De Morgan's Laws: Difference with Intersection














\(\ds \)

\(=\)







\(\ds \paren {\bigcup_{i \mathop = 1}^n H_i^\circ}^-\)





Relative Complement of Relative Complement














\(\ds \)

\(=\)







\(\ds \bigcup_{i \mathop = 1}^n H_i^{\circ -}\)





Closure of Finite Union equals Union of Closures














\(\ds \)

\(=\)







\(\ds \bigcup_{i \mathop = 1}^n H_i\)





as all $H_i$ are regular closed in $T$



$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Closures and Interiors




