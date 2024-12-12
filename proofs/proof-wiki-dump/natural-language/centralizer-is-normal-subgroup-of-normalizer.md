# 

Source: https://proofwiki.org/wiki/Centralizer_is_Normal_Subgroup_of_Normalizer

Theorem
Let $G$ be a group.
Let $H \le G$ be a subgroup of $G$. 
Let $\map {C_G} H$ be the centralizer of $H$ in $G$.
Let $\map {N_G} H$ be the normalizer of $H$ in $G$.
Let $\Aut H$ be the automorphism group of $H$.

Then:

$(1): \quad \map {C_G} H \lhd \map {N_G} H$
$(2): \quad \map {N_G} H / \map {C_G} H \cong K$
where:

$\map {N_G} H / \map {C_G} H$ is the quotient group of $\map {N_G} H$ by $\map {C_G} H$
$K$ is a subgroup of $\Aut H$.


Proof
In order to invoke the First Isomorphism Theorem for Groups, we must construct a group homomorphism $\phi: \map {N_G} H \to \Aut H$.
Consider the mapping $\phi: x \mapsto \paren {g \mapsto x g x^{-1}}$.
From Inner Automorphism is Automorphism, $g \mapsto x g x^{-1}$ is an automorphism of $G$, so $\phi$ is well-defined.

To see that $\phi$ is a homomorphism, notice that for any $x, y \in \map {N_G} H$:














\(\ds \map \phi x \map \phi y\)

\(=\)







\(\ds \paren {g \mapsto x g x^{-1} } \circ \paren {g \mapsto y g y^{-1} }\)





where $\circ$ denote composition of maps














\(\ds \)

\(=\)







\(\ds g \mapsto x \paren {y g y^{-1} } x^{-1}\)




















\(\ds \)

\(=\)







\(\ds g \mapsto \paren {x y} g \paren {x y}^{-1}\)





Inverse of Group Product














\(\ds \)

\(=\)







\(\ds \map \phi {x y}\)









Hence $\phi$ is a homomorphism.

Now we prove that $\ker \phi = \map {C_G} H$.
Note that for $x \in \map {N_G} H$:














\(\ds x\)

\(\in\)







\(\ds \ker \phi\)














\(\ds \leadstoandfrom \ \ \)





\(\ds g\)

\(=\)







\(\ds x g x^{-1}\)

\(\ds \forall g \in H\)



$g \mapsto g$ is the identity of $\Aut H$








\(\ds \leadstoandfrom \ \ \)





\(\ds g x\)

\(=\)







\(\ds x g\)

\(\ds \forall g \in H\)












\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds \map {C_G} H\)





Definition of Centralizer of Subgroup



Hence $\ker \phi = \map {C_G} H$.

By Kernel is Normal Subgroup of Domain:

$\map {C_G} H \lhd \map {N_G} H$
By First Isomorphism Theorem for Groups:

$\map {N_G} H / \map {C_G} H \cong \Img \phi$
By Image of Group Homomorphism is Subgroup:

$\Img \phi \le \Aut H$
Hence the result.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $10$: The Orbit-Stabiliser Theorem: Proposition $10.26$




