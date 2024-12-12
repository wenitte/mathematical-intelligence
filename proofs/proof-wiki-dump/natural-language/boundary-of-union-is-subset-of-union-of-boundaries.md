# 

Source: https://proofwiki.org/wiki/Boundary_of_Union_is_Subset_of_Union_of_Boundaries

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $A, B$ be subsets of $S$.
Then:

$\map \partial {A \cup B} \subseteq \partial A \cup \partial B$
where $\partial A$ denotes the boundary of $A$.


Proof
By Intersection is Subset:

$\relcomp S A \cap \relcomp S B \subseteq \relcomp S A \land \relcomp S A \cap \relcomp S B \subseteq \relcomp S B$
Then by Topological Closure of Subset is Subset of Topological Closure:

$\paren {\relcomp S A \cap \relcomp S B}^- \subseteq \paren {\relcomp S A}^- \land \paren {\relcomp S A \cap \relcomp S B}^- \subseteq \paren {\relcomp S B}^-$
Hence by Boundary is Intersection of Closure with Closure of Complement:

$\paren {\relcomp S A \cap \relcomp S B}^- \cap A^- \subseteq \partial A \land \paren {\relcomp S A \cap \relcomp S B}^- \cap B^- \subseteq \partial B$
Thus














\(\ds \map \partial {A \cup B}\)

\(=\)







\(\ds \paren {\relcomp S {A \cup B} }^- \cap \paren {A \cup B}^-\)





Boundary is Intersection of Closure with Closure of Complement














\(\ds \)

\(=\)







\(\ds \paren {\relcomp S A \cap \relcomp S B}^- \cap \paren {A \cup B}^-\)





Complement of Union














\(\ds \)

\(=\)







\(\ds \paren {\relcomp S A \cap \relcomp S B}^- \cap \paren {A^- \cup B^-}\)





Closure of Finite Union equals Union of Closures














\(\ds \)

\(=\)







\(\ds \paren {\relcomp S A \cap \relcomp S B}^- \cap A^- \cup \paren {\relcomp S A \cap \relcomp S B}^- \cap B^-\)





Intersection Distributes over Union














\(\ds \)

\(\subseteq\)







\(\ds \partial A \cup \partial B\)





Set Union Preserves Subsets



$\blacksquare$


Sources
Mizar article TOPS_1:33




