# 

Source: https://proofwiki.org/wiki/Asymmetric_Relation_is_Antireflexive

Theorem
Let $S$ be a set.
Let $\RR \subseteq S \times S$ be a relation on $S$.
Let $\RR$ be asymmetric.

Then $\RR$ is also antireflexive.


Proof
Let $\RR$ be asymmetric.
Then, by definition:

$\tuple {x, y} \in \RR \implies \tuple {y, x} \notin \RR$

Aiming for a contradiction, suppose $\tuple {x, x} \in \RR$.
Then:














\(\ds \tuple {x, x} \in \RR\)

\(\implies\)







\(\ds \tuple {x, x} \notin \RR\)





Definition of Asymmetric Relation








\(\ds \leadsto \ \ \)





\(\ds \tuple {x, x} \notin \RR\)

\(\)







\(\ds \)





Proof by Contradiction



Thus $\RR$ is antireflexive.
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $4$: The Predicate Calculus $2$: $5$ Properties of Relations: $163$
1979: John E. Hopcroft and Jeffrey D. Ullman: Introduction to Automata Theory, Languages, and Computation ... (previous) ... (next): Chapter $1$: Preliminaries: $1.5$ Relations: Properties of Relations




