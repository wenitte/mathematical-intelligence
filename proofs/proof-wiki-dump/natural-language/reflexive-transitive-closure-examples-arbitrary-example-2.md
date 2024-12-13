# 

Source: https://proofwiki.org/wiki/Reflexive_Transitive_Closure/Examples/Arbitrary_Example_2

Example of Reflexive Transitive Closure
Let $S = \set {1, 2, 3, 4, 5}$ be a set.
Let $\RR$ be the relation on $S$ defined as:

$\RR = \set {\tuple {1, 2}, \tuple {2, 3}, \tuple {3, 4}, \tuple {5, 4} }$
The reflexive transitive closure $\RR^*$ of $\RR$ is given by:

$\RR^* = \set {\tuple {1, 2}, \tuple {1, 3}, \tuple {1, 4}, \tuple {2, 3}, \tuple {2, 4}, \tuple {3, 4}, \tuple {5, 4}, \tuple {1, 1}, \tuple {2, 2}, \tuple {3, 3}, \tuple {4, 4}, \tuple {5, 5} }$


Proof
From Transitive Closure of Relation: Arbitrary Example $2$, the transitive closure $\RR^+$ of $\RR$ is given by:

$\RR^+ = \set {\tuple {1, 2}, \tuple {1, 3}, \tuple {1, 4}, \tuple {2, 3}, \tuple {2, 4}, \tuple {3, 4}, \tuple {5, 4} }$
By definition of reflexive transitive closure:

$\RR^* = \paren {\RR^+}^=$
where $\paren {\RR^+}^=$ denotes the reflexive closure of $\RR^+$.
The diagonal relation on $S$ is given by:

$\Delta_S = \set {\tuple {1, 1}, \tuple {2, 2}, \tuple {3, 3}, \tuple {4, 4}, \tuple {5, 5} }$
The result then follows by definition of reflexive closure:

$\paren {\RR^+}^= := \RR^+ \cup \Delta_S$
$\blacksquare$


Sources
1979: John E. Hopcroft and Jeffrey D. Ullman: Introduction to Automata Theory, Languages, and Computation ... (previous) ... (next): Chapter $1$: Preliminaries: Exercises: $1.7$




