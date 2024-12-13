# 

Source: https://proofwiki.org/wiki/Membership_is_Left_Compatible_with_Ordinal_Addition



Theorem
Let $x$, $y$, and $z$ be ordinals.
Let $<$ denote membership relation $\in$, since $\in$ is a strict well-ordering on the ordinals.

Then:

$x < y \implies \paren {z + x} < \paren {z + y}$


Proof
The proof proceeds by transfinite induction on $y$.
In the proof, we shall use $\in$, $\subsetneq$, and $<$ interchangeably.
We are justified in this by Transitive Set is Proper Subset of Ordinal iff Element of Ordinal.


Base Case













\(\ds \neg x\)

\(=\)







\(\ds \O\)





Definition of Empty Set



The conclusion:

$x < \O \implies \paren {z + x} < \paren {z + \O}$
follows from propositional logic.


This article, or a section of it, needs explaining.In particular: ... how?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Inductive Case













\(\ds x < y\)

\(\leadsto\)







\(\ds \paren {z + x} < \paren {z + y}\)





by hypothesis














\(\ds x < y^+\)

\(\leadsto\)







\(\ds x < y \lor x = y\)





Definition of Successor Set














\(\ds \paren {z + y^+} = \paren {z + y}^+\)

\(\)







\(\ds \)





Definition of Ordinal Addition














\(\ds \paren {z + y} < \paren {z + y^+}\)

\(\)







\(\ds \)





Ordinal is Less than Successor














\(\ds x < y\)

\(\leadsto\)







\(\ds \paren {z + x} < \paren {z + y^+}\)





Hypothetical Syllogism














\(\ds x = y\)

\(\leadsto\)







\(\ds \paren {z + x} < \paren {z + y^+}\)





Substitutivity of Equality














\(\ds x < y^+\)

\(\leadsto\)







\(\ds \paren {z + x} < \paren {z + y^+}\)





Proof by Cases





Limit Case













\(\ds \)

\(\)







\(\ds \forall w < y: \paren {x < w \implies \paren {z + x} < \paren {z + w} }\)




















\(\ds \)

\(\leadsto\)







\(\ds \paren {\exists w < y: x < w \implies \exists w < y \paren {z + x} < \paren {z + w} }\)





Predicate Logic Manipulation














\(\ds \)

\(\leadsto\)







\(\ds \paren {x < y \implies \paren {z + x} < \bigcup_{w \mathop \in y} \paren {z + w} }\)





Membership of Indexed Union














\(\ds \)

\(\leadsto\)







\(\ds \paren {x < y \implies \paren {z + x} < \paren {z + y} }\)





Definition of Ordinal Addition



$\blacksquare$


This article needs to be linked to other articles.In particular: "base case", "inductive case" and "limit case".You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.4$




