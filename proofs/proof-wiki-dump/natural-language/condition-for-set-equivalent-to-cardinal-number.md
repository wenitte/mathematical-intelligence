# 

Source: https://proofwiki.org/wiki/Condition_for_Set_Equivalent_to_Cardinal_Number



Theorem
Let $S$ be a set.
Let $\card S$ denote the cardinality of $S$.
That is, let $\card S$ be the intersection of all ordinals equivalent to $S$.


This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: This following statement needs to go somewhere else as it's a non-sequitur in this context.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
Note that in the absence of the Axiom of Choice, $\card S$ may be the class of all sets.

Then the following are equivalent:

$(1): \quad S \sim \card S$
$(2): \quad \exists x \in \On: S \sim x$
$(3): \quad \exists x \in \On: \exists y: \paren {y \subseteq x \land S \sim y}$
where $A \sim B$ means that there is a bijection from $A$ onto $B$, and the quantification over $y$ is unbounded (so $y$ may be any set).


Proof
$2 \implies 1$
If $\exists x \in \On: S \sim x$, then by Class of All Ordinals is Well-Ordered by Subset Relation there is a smallest ordinal $x$ such that $S \sim x$.
This smallest ordinal $x$ is the cardinal number of $S$, by definition.
$\Box$


$3 \implies 2$
Suppose that $y \subseteq x$ and $S \sim y$ for some ordinal $x$.
Since $y \subseteq x$, it follows that $y \sim z$ for some $z \in \On$ by Unique Isomorphism between Ordinal Subset and Unique Ordinal.
Therefore, by Set Equivalence behaves like Equivalence Relation, $S \sim z$.
$\Box$


$1 \implies 3$
Suppose that $3$ is not true.
It follows that $S \not \sim x$ for any ordinal $x$.














\(\ds \bigcap \set {x \in \On : S \sim x}\)

\(=\)







\(\ds \bigcap \O\)




















\(\ds \)

\(=\)







\(\ds \mathbb U\)





Intersection of Empty Set



But $S \not \sim \mathbb U$, so $S \not \sim \card S$ by the definition of cardinal number.
The result follows by contraposition.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 10.9$




