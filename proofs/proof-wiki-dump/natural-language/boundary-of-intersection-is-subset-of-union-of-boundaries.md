# 

Source: https://proofwiki.org/wiki/Boundary_of_Intersection_is_Subset_of_Union_of_Boundaries

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $A, B$ be subsets of $S$.
Then:

$\map \partial {A \cap B} \subseteq \partial A \cup \partial B$
where $\partial A$ denotes the boundary of $A$.


Proof
By Intersection is Subset:

$A \cap B \subseteq A \land A \cap B \subseteq B$
Then by Topological Closure of Subset is Subset of Topological Closure:

$\paren {A \cap B}^- \subseteq A^- \land \paren {A \cap B}^- \subseteq B^-$
Hence by Boundary is Intersection of Closure with Closure of Complement:

$\paren {A \cap B}^- \cap \paren {\relcomp S A}^- \subseteq \partial A \land \paren {A \cap B}^- \cap \paren {\relcomp S B}^- \subseteq \partial B$

Thus














\(\ds \map \partial {A \cap B}\)

\(=\)







\(\ds \paren {A \cap B}^- \cap \paren {\relcomp S {A \cap B} }^-\)





Boundary is Intersection of Closure with Closure of Complement














\(\ds \)

\(=\)







\(\ds \paren {A \cap B}^- \cap \paren {\relcomp S A \cup \relcomp S B}^-\)





Complement of Intersection














\(\ds \)

\(=\)







\(\ds \paren {A \cap B}^- \cap \paren {\paren {\relcomp S A}^- \cup \paren {\relcomp S B}^-}\)





Closure of Finite Union equals Union of Closures














\(\ds \)

\(=\)







\(\ds \paren {A \cap B}^- \cap \paren {\relcomp S A}^- \cup \paren {A \cap B}^- \cap \paren {\relcomp S B}^-\)





Intersection Distributes over Union














\(\ds \)

\(\subseteq\)







\(\ds \partial A \cup \partial B\)





Set Union Preserves Subsets



$\blacksquare$


Sources
Mizar article TOPS_1:32




