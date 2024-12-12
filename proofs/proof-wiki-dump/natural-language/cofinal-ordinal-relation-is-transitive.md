# 

Source: https://proofwiki.org/wiki/Cofinal_Ordinal_Relation_is_Transitive

Theorem
Let $x$, $y$, and $z$ be ordinals.
Let $\operatorname {cof}$ denote the cofinal relation.

Then:

$\map {\operatorname {cof} } {x, y} \land \map {\operatorname {cof} } {y, z} \implies \map {\operatorname {cof} } {x, z}$


Proof

This article needs to be tidied.In particular: Clarify and structurePlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
The conditions for $z$ being cofinal with $x$ shall be verified individually.
Let $\le$ denote the subset relation.
Since $x \le y$ and $y \le z$, it follows that $x \le z$ by Subset Relation is Transitive

Let $f : y \to x$ be the strictly increasing mapping that satisfies:

$\forall a \in x: \exists b \in y: \map f b \ge a$
Let $g : z \to y$ be the strictly increasing mapping that satisfies:

$\forall a \in y: \exists b \in z: \map g b \ge a$

By Composite of Strictly Increasing Mappings is Strictly Increasing:

$f \circ g$ is a strictly increasing mapping.

Moreover, take any $a \in x$.
There is some $b \in y$ such that:

$\map f b \ge a$
But $b \in y$, so there is some $c \in z$ such that:

$\map g c \ge b$















\(\ds \map f {\map g c}\)

\(\ge\)







\(\ds \map f b\)





$f$ is strictly increasing














\(\ds \)

\(\ge\)







\(\ds a\)





Inequality above



Therefore:

$\map {f \circ g} c \ge a$
for some $c \in z$.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 10.52 \ (2)$




