# 

Source: https://proofwiki.org/wiki/Empty_Intersection_iff_Subset_of_Complement



Corollary to Intersection with Complement is Empty iff Subset
$S \cap T = \O \iff S \subseteq \relcomp {} T$
where:

$S \cap T$ denotes the intersection of $S$ and $T$
$\O$ denotes the empty set
$\complement$ denotes set complement
$\subseteq$ denotes subset.


Corollary
Let $A, B, S$ be sets such that $A, B \subseteq S$.
Then:

$\exists X \in \powerset S: \paren {A \cap X} \cup \paren {B \cap \complement_S \paren X} = \O \iff A \cap B = \O$
where $\overline X$ denotes the relative complement of $X$ in $S$.


Proof 1













\(\ds S \cap T\)

\(=\)







\(\ds \O\)














\(\ds \leadstoandfrom \ \ \)





\(\ds S \cap \relcomp {} {\relcomp {} T}\)

\(=\)







\(\ds \O\)





Complement of Complement








\(\ds \leadstoandfrom \ \ \)





\(\ds S\)

\(\subseteq\)







\(\ds \relcomp {} T\)





Intersection with Complement is Empty iff Subset



$\blacksquare$


Proof 2
From Intersection with Complement is Empty iff Subset

$S \subseteq T \iff S \cap \relcomp {} T = \O$

Then we have:














\(\ds \)

\(\)







\(\ds S \nsubseteq \relcomp {} T\)




















\(\ds \)

\(\leadstoandfrom\)







\(\ds \neg \paren {\forall x \in S: x \in \relcomp {} T}\)





Definition of Subset














\(\ds \)

\(\leadstoandfrom\)







\(\ds \exists x \in S: x \notin \relcomp {} T\)





Denial of Universality














\(\ds \)

\(\leadstoandfrom\)







\(\ds \exists x \in S: x \in T\)





Definition of Set Complement














\(\ds \)

\(\leadstoandfrom\)







\(\ds x \in S \cap T\)





Definition of Set Intersection














\(\ds \)

\(\leadstoandfrom\)







\(\ds S \cap T \ne \O\)





Definition of Disjoint Sets




Thus:














\(\ds \)

\(\)







\(\ds S \cap T = \O\)




















\(\ds \)

\(\leadstoandfrom\)







\(\ds \forall x \in S: x \in \relcomp {} T\)




















\(\ds \)

\(\leadstoandfrom\)







\(\ds S \subseteq \relcomp {} T\)









$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 1$. Sets; inclusion; intersection; union; complementation; number systems: Exercise $11 \ \text{(b)}$
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 3$: Set Operations: Union, Intersection and Complement: Exercise $1 \ \text{(c)}$




