# 

Source: https://proofwiki.org/wiki/Set_Complement_inverts_Subsets



Theorem
Let $S$ and $T$ be sets.
Then:

$S \subseteq T \iff \map \complement T \subseteq \map \complement S$
where:

$S \subseteq T$ denotes that $S$ is a subset of $T$
$\complement$ denotes set complement.


Corollary
$S \subseteq \map \complement T \iff T \subseteq \map \complement S$


Proof 1













\(\ds S\)

\(\subseteq\)







\(\ds T\)














\(\ds \leadstoandfrom \ \ \)





\(\ds S \cap T\)

\(=\)







\(\ds S\)





Intersection with Subset is Subset‎








\(\ds \leadstoandfrom \ \ \)





\(\ds \map \complement {S \cap T}\)

\(=\)







\(\ds \map \complement S\)





Complement of Complement








\(\ds \leadstoandfrom \ \ \)





\(\ds \map \complement S \cup \map \complement T\)

\(=\)







\(\ds \map \complement S\)





De Morgan's Laws: Complement of Intersection








\(\ds \leadstoandfrom \ \ \)





\(\ds \map \complement T\)

\(\subseteq\)







\(\ds \map \complement S\)





Union with Superset is Superset



$\blacksquare$


Proof 2













\(\ds S\)

\(\subseteq\)







\(\ds T\)














\(\ds \leadstoandfrom \ \ \)





\(\ds (x \in S\)

\(\implies\)







\(\ds x \in T)\)





Definition of Subset








\(\ds \leadstoandfrom \ \ \)





\(\ds (x \notin T\)

\(\implies\)







\(\ds x \notin S)\)





Rule of Transposition








\(\ds \leadstoandfrom \ \ \)





\(\ds (x \in \map \complement T\)

\(\implies\)







\(\ds x \in \map \complement S)\)





Definition of Set Complement














\(\ds \map \complement T\)

\(\subseteq\)







\(\ds \map \complement S\)





Definition of Subset



$\blacksquare$


Proof 3
By definition of set complement:

$\map \complement T := \relcomp {\mathbb U} T$
where:

$\mathbb U$ is the universal set
$\relcomp {\mathbb U} T$ denotes the complement of $T$ relative to $\mathbb U$.

Thus the statement can be expressed as:

$S \subseteq T \iff \relcomp {\mathbb U} T \subseteq \relcomp {\mathbb U} S$

The result then follows from Relative Complement inverts Subsets.
$\blacksquare$


Proof 4













\(\ds S\)

\(\subseteq\)







\(\ds T\)














\(\ds \leadstoandfrom \ \ \)





\(\ds S\)

\(=\)







\(\ds S \cup T\)





Union with Superset is Superset‎








\(\ds \leadstoandfrom \ \ \)





\(\ds \map \complement S\)

\(=\)







\(\ds \map \complement {S \cup T}\)





Complement of Complement














\(\ds \)

\(=\)







\(\ds \map \complement S \cap \map \complement T\)





De Morgan's Laws: Complement of Union








\(\ds \leadstoandfrom \ \ \)





\(\ds \map \complement S\)

\(\subseteq\)







\(\ds \map \complement T\)





Intersection with Subset is Subset



$\blacksquare$


Sources
1955: John L. Kelley: General Topology ... (previous) ... (next): Chapter $0$: Subsets and Complements; Union and Intersection: Theorem $1$
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 5$: Complements and Powers
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Exercise $\text{B x}$
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.6$: Set Identities and Other Set Relations: Exercise $1 \ \text{(b)}$
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 3$: Set Operations: Union, Intersection and Complement: Exercise $1 \ \text{(e)}$




