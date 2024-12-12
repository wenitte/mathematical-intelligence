# 

Source: https://proofwiki.org/wiki/Equivalence_Relation_Induced_by_Preordering/Examples/Finite_Set_Difference_on_Natural_Numbers

Example of Equivalence Relation Induced by Preordering
Consider the preordering $\RR$ on the powerset of the natural numbers:

$\forall a, b \in \powerset \N: a \mathrel \RR b \iff a \setminus b \text { is finite}$
where $\setminus$ denotes set difference.
Let $\sim_\RR$ denote the equivalence relation on $\powerset \N$ induced by $\RR$.

Then the $\sim_\RR$-equivalence class of an element $a$ of $\powerset \N$ is defined as:

$\eqclass a {\sim_\RR} = \set {b \in \powerset \N: a \symdif b \text { is finite} }$
where $\symdif$ denotes symmetric difference.


Proof
We have that:














\(\ds \)

\(\)







\(\ds a \sim_\RR b\)




















\(\ds \)

\(\leadstoandfrom\)







\(\ds a \mathrel \RR b \land b \mathrel \RR a\)





Definition of Equivalence Relation Induced by Preordering














\(\ds \)

\(\leadstoandfrom\)







\(\ds a \setminus b \text { is finite } \land b \setminus  a \text { is finite }\)





Definition of $\RR$














\(\ds \)

\(\leadstoandfrom\)







\(\ds \paren {a \setminus b} \cup \paren {b \setminus a} \text { is finite }\)





Definition of Finite Set














\(\ds \)

\(\leadstoandfrom\)







\(\ds a \symdif b \text { is finite }\)





Definition of Symmetric Difference



The result follows by definition of $\sim_\RR$-equivalence class.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $39 \ \text{(b)}$




