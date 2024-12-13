# 

Source: https://proofwiki.org/wiki/Set_Difference_Union_Intersection



Theorem
$S = \paren {S \setminus T} \cup \paren {S \cap T}$


Proof 1













\(\ds \paren {S \setminus T} \cup \paren {S \cap T}\)

\(=\)







\(\ds \paren {\paren {S \setminus T} \cup S} \cap \paren {\paren {S \setminus T} \cup T}\)





Union Distributes over Intersection














\(\ds \)

\(=\)







\(\ds S \cap \paren {\paren {S \setminus T} \cup T}\)





Set Difference Union First Set is First Set














\(\ds \)

\(=\)







\(\ds S \cap \paren {S \cup T}\)





Set Difference Union Second Set is Union














\(\ds \)

\(=\)







\(\ds S\)





Intersection Absorbs Union



$\blacksquare$


Proof 2













\(\ds \paren {S \setminus T} \cup \paren {S \cap T}\)

\(=\)







\(\ds S \setminus \paren {T \setminus T}\)





Set Difference with Set Difference is Union of Set Difference with Intersection














\(\ds \)

\(=\)







\(\ds S \setminus \O\)





Set Difference with Self is Empty Set














\(\ds \)

\(=\)







\(\ds S\)





Set Difference with Empty Set is Self



$\blacksquare$


Proof 3
By Set Difference is Subset:

$S \setminus T \subseteq S$
By Intersection is Subset:

$S \cap T \subseteq S$
Hence from Union is Smallest Superset:

$\paren {S \setminus T} \cup \paren {S \cap T} \subseteq S$

Let $s \in S$.
Either:

$s \in T$, in which case $s \in S \cap T$ by definition of set intersection
or

$s \notin T$, in which case $s \in S \setminus T$ by definition of set difference.

That is, by definition of set union:

$s \in \paren {S \setminus T} \cup \paren {S \cap T}$
and so by definition of subset:

$S \subseteq \paren {S \setminus T} \cup \paren {S \cap T}$

Hence the result by definition of set equality.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Exercise $\text{B ix}$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 1$: Fundamental Concepts: Exercise $1.2 \ \text{(i)}$
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): Appendix $\text{A}.2$: Theorem $\text{A}.11$




