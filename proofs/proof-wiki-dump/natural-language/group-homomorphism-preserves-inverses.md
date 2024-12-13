# 

Source: https://proofwiki.org/wiki/Group_Homomorphism_Preserves_Inverses



Theorem
Let $\struct {G, \circ}$ and $\struct {H, *}$ be groups.
Let $\phi: \struct {G, \circ} \to\struct {H, *}$ be a group homomorphism.
Let:

$e_G$ be the identity of $G$
$e_H$ be the identity of $H$

Then:

$\forall x \in G: \map \phi {x^{-1} } = \paren {\map \phi x}^{-1}$

Hence the notation $\map \phi x^{-1}$ can be used unambiguously.

This can be illustrated using the following commutative diagram:
$\quad\quad\begin{xy} \xymatrix@L+2mu@+1em{
G \ar[r]^*{\phi}
\ar[d]_*{\iota_G}
&
H \ar[d]^*{\iota_H}
\\
G  \ar[r]_*{\phi} &
H
}\end{xy}$
where $\iota_G$ and $\iota_H$ are the inversion mappings on $G$ and $H$ respectively.


Proof 1
Let $x \in G$.

Then:














\(\ds \map \phi x * \map \phi {x^{-1} }\)

\(=\)







\(\ds \map \phi {x \circ x^{-1} }\)





Definition of Group Homomorphism














\(\ds \)

\(=\)







\(\ds \map \phi {e_G}\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds e_H\)





Group Homomorphism Preserves Identity



So, by definition, $\map \phi {x^{-1} }$ is the right inverse of $\map \phi x$.
$\Box$

Similarly:














\(\ds \map \phi {x^{-1} } * \map \phi x\)

\(=\)







\(\ds \map \phi {x^{-1} \circ x}\)





Definition of Group Homomorphism














\(\ds \)

\(=\)







\(\ds \map \phi {e_G}\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds e_H\)





Group Homomorphism Preserves Identity



So, again by definition, $\map \phi {x^{-1} }$ is the left inverse of $\map \phi x$.
$\Box$

Finally, as $\map \phi {x^{-1} }$ is both:

a left inverse of $\map \phi x$
and:

a right inverse of $\map \phi x$
it is by definition an inverse.
From Inverse in Group is Unique, $\map \phi {x^{-1} }$ is the only such element.
Hence the result.
$\blacksquare$


Proof 2
A direct application of Homomorphism to Group Preserves Inverses.
$\blacksquare$


Proof 3
From Group Homomorphism of Product with Inverse, we have:

$\forall x, y \in G: \map \phi {x \circ y^{-1} } = \map \phi x * \paren {\map \phi y}^{-1}$
Putting $x = e_G$ and $y = x$ we have:














\(\ds \map \phi {x^{-1} }\)

\(=\)







\(\ds \map \phi {e_G \circ x^{-1} }\)




















\(\ds \)

\(=\)







\(\ds \map \phi {e_G} * \paren {\map \phi x}^{-1}\)




















\(\ds \)

\(=\)







\(\ds e_H * \paren {\map \phi x}^{-1}\)





Group Homomorphism Preserves Identity














\(\ds \)

\(=\)







\(\ds \paren {\map \phi x}^{-1}\)









$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Morphisms
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 60 \alpha$




