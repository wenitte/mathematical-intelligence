# 

Source: https://proofwiki.org/wiki/Conjugates_of_Elements_in_Centralizer

Theorem
Let $G$ be a group.
Let $\map {C_G} a$ be the centralizer of $a$ in $G$.

Then $\forall g, h \in G: g a g^{-1} = h a h^{-1}$ if and only if $g$ and $h$ belong to the same left coset of $\map {C_G} a$.


Proof
The centralizer of $a$ in $G$ is defined as:

$\map {C_G} a = \set {x \in G: x \circ a = a \circ x}$

Let $g, h \in G$.
Then:














\(\ds g a g^{-1}\)

\(=\)







\(\ds h a h^{-1}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds g^{-1} \paren {g a g^{-1} } h\)

\(=\)







\(\ds g^{-1} \paren {h a h^{-1} } h\)














\(\ds \leadstoandfrom \ \ \)





\(\ds a g^{-1} h\)

\(=\)







\(\ds g^{-1} h a\)














\(\ds \leadstoandfrom \ \ \)





\(\ds g^{-1} h\)

\(\in\)







\(\ds \map {C_G} a\)





Definition of Centralizer of Group Element



By Elements in Same Left Coset iff Product with Inverse in Subgroup:

$g$ and $h$ belong to the same left coset of $\map {C_G} a$ if and only if $g^{-1} h \in \map {C_G} a$.
The result follows.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 42$. Another approach to cosets: Worked Example $2$




