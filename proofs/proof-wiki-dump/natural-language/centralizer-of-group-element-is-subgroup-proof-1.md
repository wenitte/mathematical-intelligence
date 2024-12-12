# 

Source: https://proofwiki.org/wiki/Centralizer_of_Group_Element_is_Subgroup/Proof_1

Theorem
Let $\struct {G, \circ}$ be a group and let $a \in G$.
Then $\map {C_G} a$, the centralizer of $a$ in $G$, is a subgroup of $G$.


Proof
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


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 37.1$. Some important general examples of subgroups




