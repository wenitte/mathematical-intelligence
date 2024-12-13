# 

Source: https://proofwiki.org/wiki/Natural_Number_is_Union_of_its_Successor

Theorem
Let $n \in \N$ be a natural number as defined by the von Neumann construction.
Then:

$\map \bigcup {n^+} = n$


Proof













\(\ds \)

\(\)







\(\ds \map \bigcup {n^+}\)




















\(\ds \)

\(=\)







\(\ds \map \bigcup {\set n \cup n}\)





Definition of Von Neumann Construction of Natural Numbers














\(\ds \)

\(=\)







\(\ds \bigcup \set n \cup \bigcup n\)





Set Union is Self-Distributive














\(\ds \)

\(=\)







\(\ds n \cup \bigcup n\)





Union of Singleton



From Natural Number is Superset of its Union we have:

$\bigcup n \subseteq n$
Then from Union with Superset is Superset‎:

$\bigcup n \subseteq n \iff \paren {n \cup \bigcup n} = n$
and the result follows.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 3$ Derivation of the Peano postulates and other results: Exercise $3.2 \ \text {(d)}$




