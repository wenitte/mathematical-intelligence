# 

Source: https://proofwiki.org/wiki/Internal_Group_Direct_Product_Isomorphism

Theorem
Let $G$ be a group.
Let $H_1, H_2$ be subgroups of $G$.
Let $\phi: H_1 \times H_2 \to G$ be the mapping defined by $\map \phi {h_1, h_2} := h_1 h_2$.

If $\phi$ is a (group) isomorphism, then both $H_1$ and $H_2$ are normal subgroups of $G$.


Proof
$\phi$ is an isomorphism, so in particular a (group) homomorphism.
Thus by Induced Group Product is Homomorphism iff Commutative, every element of $H_1$ commutes with every element of $H_2$.

Now suppose $a \in G$.
As $\phi$ is an isomorphism, it follows that $\phi$ is surjective.
Thus by Subgroup Product is Internal Group Direct Product iff Surjective:

$\exists h_1 \in H_1, h_2 \in H_2: a = h_1 h_2$

Now any element of $a H_1 a^{-1}$ is in the form $a h a^{-1}$ for some $h \in H_1$.
Thus:














\(\ds a h a^{-1}\)

\(=\)







\(\ds \paren {h_1 h_2} h \paren {h_1 h_2}^{-1}\)




















\(\ds \)

\(=\)







\(\ds h_1 h_2 h h_2^{-1} h_1^{-1}\)




















\(\ds \)

\(=\)







\(\ds h_1 h h_2 h_2^{-1} h_1^{-1}\)





$h \in H_1$ and $h_2 \in H_2$ commute














\(\ds \)

\(=\)







\(\ds h_1 h h_1^{-1} \in H_1\)










Thus $a H_1 a^{-1} \subseteq H_1$, and $H_1$ is therefore a normal subgroup of $G$.

Similarly, any element of $a H_2 a^{-1}$ is in the form $a h a^{-1}$ for some $h \in H_2$.
Thus:














\(\ds a h a^{-1}\)

\(=\)







\(\ds \paren {h_1 h_2} h \paren {h_1 h_2}^{-1}\)




















\(\ds \)

\(=\)







\(\ds h_1 h_2 h h_2^{-1} h_1^{-1}\)




















\(\ds \)

\(=\)







\(\ds h_1 h' h_1^{-1}\)





as $h' = h_2 h h_2^{-1} \in H_2$














\(\ds \)

\(=\)







\(\ds h' h_1 h_1^{-1}\)





$h_1 \in H_1$ and $h' \in H_2$ commute














\(\ds \)

\(=\)







\(\ds h' \in H_2\)










Thus $a H_2 a^{-1} \subseteq H_2$ and $H_2$ is normal as well.
$\blacksquare$





