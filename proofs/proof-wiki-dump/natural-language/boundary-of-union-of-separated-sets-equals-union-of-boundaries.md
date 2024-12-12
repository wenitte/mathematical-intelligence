# 

Source: https://proofwiki.org/wiki/Boundary_of_Union_of_Separated_Sets_equals_Union_of_Boundaries

Theorem
Let $T$ be a topological space.
Let $A, B$ be subsets of $T$.
Let $A$ and $B$ are separated.
Then:

$\map \partial {A \cup B} = \partial A \cup \partial B$
where:

$\partial A$ denotes the boundary of $A$
$A \cup B$ denotes the union of $A$ and $B$.


Proof
By definition of separated sets:

$(1): \quad A^- \cap B = A \cap B^- = \O$
By Separated Sets are Disjoint:

$A \cap B = \O$













\(\ds \partial A \cup \partial B\)

\(=\)







\(\ds \map \partial {A \cup B} \cup \map \partial {A \cap B} \cup \paren {\partial A \cap \partial B}\)





Union of Boundaries














\(\ds \)

\(=\)







\(\ds \map \partial {A \cup B}\cup \O \cup \paren {\partial A \cap \partial B}\)





Boundary of Empty Set is Empty














\(\ds \)

\(=\)







\(\ds \map \partial {A \cup B} \cup \paren {\partial A \cap \partial B}\)





Union with Empty Set



We will prove that:

$\partial A \cap \partial B \subseteq \map \partial {A \cup B}$
Let $x \in \partial A \cap \partial B$.
Then by definition of intersection:

$x \in \partial A \land x \in \partial B$
Hence by Boundary is Intersection of Closure with Closure of Complement:

$x \in A^- \cap \paren {\relcomp T A}^- \land x \in B^- \cap \paren {\relcomp T B}^-$
where:

$A^-$ denotes the closure of $A$
$\relcomp T A = T \setminus A$ denotes the relative complement of $A$ in $T$.
Then by definition of intersection:

$x \in A^- \land x \in B^-$
Therefore by definition of empty set, intersection, and $(1)$:

$x \notin B \land x \notin A$
Then by definition of union:

$x \notin A \cup B$
By definition of relative complement:

$x \in \relcomp T {A \cup B}$
By definition of closure:

$\relcomp T {A \cup B} \subseteq \paren {\relcomp T {A \cup B} }^-$
Then by definition of subset:

$x \in \paren {\relcomp T {A \cup B} }^-$
By Closure of Finite Union equals Union of Closures:

$A^- \cup B^- = \paren {A \cup B}^-$
By definition of union:

$x \in \paren {A \cup B}^-$
Then by definition of intersection:

$x \in \paren {A \cup B}^- \cap \paren {\relcomp T {A \cup B} }^-$
Thus  by Boundary is Intersection of Closure with Closure of Complement:

$x \in \map \partial {A \cup B}$
This ends the proof of inclusion.
Thus by Union with Superset is Superset the result:

$\partial A \cup \partial B = \map \partial {A \cup B}$
$\blacksquare$


Sources
1989: Ryszard Engelking: General Topology (revised and completed ed.)
Mizar article TOPGEN_4:8




