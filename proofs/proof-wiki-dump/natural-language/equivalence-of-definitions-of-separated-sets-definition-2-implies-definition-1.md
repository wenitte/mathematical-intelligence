# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Separated_Sets/Definition_2_implies_Definition_1

Theorem
Let $T = \struct{S, \tau}$ be a topological space.
Let $A, B \subseteq S$.
Let $U, V \in \tau$ satisfy:

$A \subset U$ and $U \cap B = \O$
$B \subset V$ and $V \cap A = \O$
where $\O$ denotes the empty set.

Then

$A^- \cap B = A \cap B^- = \O$
where $A^-$ denotes the closure of $A$ in $T$.


Proof
Let $U \in \tau$ be an arbitrary open set of $T$ such that $A \subseteq U$ and $U \cap B = \O$.
From Empty Intersection iff Subset of Relative Complement:

$B \subseteq S \setminus U$
By the definition of a closed set, the relative complement $S \setminus U$ of $U$ is closed in $T$.
From Set Closure is Smallest Closed Set in Topological Space:

$B^- \subseteq S \setminus U$
From Empty Intersection iff Subset of Relative Complement:

$B^- \cap U = \O$
Then














\(\ds B^- \cap A\)

\(=\)







\(\ds B^- \cap \paren {U \cap A}\)





Intersection with Subset is Subset














\(\ds \)

\(=\)







\(\ds \paren {B^- \cap U} \cap A\)





Intersection is Associative














\(\ds \)

\(=\)







\(\ds \O \cap A\)





as $B^- \cap U = \O$














\(\ds \)

\(=\)







\(\ds \O\)





Intersection with Empty Set




Similarly:

$A^- \cap B = \O$
$\blacksquare$





