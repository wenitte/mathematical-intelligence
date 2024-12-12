# 

Source: https://proofwiki.org/wiki/Centralizer_of_Group_Element_is_Subgroup



Theorem
Let $\struct {G, \circ}$ be a group and let $a \in G$.
Then $\map {C_G} a$, the centralizer of $a$ in $G$, is a subgroup of $G$.


Proof 1
Let $\struct {G, \circ}$ be a group.
We have that:

$\forall a \in G: e \circ a = a \circ e \implies e \in C_G \paren a$
Thus $C_G \paren a \ne \O$.

Let $x, y \in C_G \paren a$.
Then:














\(\ds x \circ a\)

\(=\)







\(\ds a \circ x\)




















\(\ds y \circ a\)

\(=\)







\(\ds a \circ y\)














\(\ds \leadsto \ \ \)





\(\ds x \circ y \circ a\)

\(=\)







\(\ds x \circ a \circ y\)




















\(\ds \)

\(=\)







\(\ds a \circ x \circ y\)














\(\ds \leadsto \ \ \)





\(\ds x \circ y\)

\(\in\)







\(\ds C_G \paren a\)










Thus $C_G \paren a$ is closed under $\circ$.

Let $x \in C_G \paren a$.
Then:














\(\ds x \circ a\)

\(=\)







\(\ds a \circ x\)














\(\ds \leadsto \ \ \)





\(\ds x^{-1} \circ x \circ a \circ x^{-1}\)

\(=\)







\(\ds x^{-1} \circ a \circ x \circ x^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds a \circ x^{-1}\)

\(=\)







\(\ds x^{-1} \circ a\)










So:

$x \in C_G \paren a \implies x^{-1} \in C_G \paren a$

Thus, by the Two-Step Subgroup Test, the result follows.
$\blacksquare$


Proof 2
Let $\struct {G, \circ}$ be a group.
We have that:

$\forall a \in G: e \circ a = a \circ e \implies e \in \map {C_G} a$
Thus $\map {C_G} a \ne \O$.

Let $x, y \in \map {C_G} a$.
Then from Commutation with Group Elements implies Commuation with Product with Inverse:

$a \circ x \circ y^{-1} = x \circ y^{-1} \circ a$
so:

$x \circ y^{-1} \in\map {C_G} a$
The result follows by the One-Step Subgroup Test, the result follows.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets: Exercise $8.9$
1978: John S. Rose: A Course on Group Theory ... (previous) ... (next): $1$: Introduction to Finite Group Theory: $1.13$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $10$: The Orbit-Stabiliser Theorem: Exercise $4$




