# 

Source: https://proofwiki.org/wiki/Non-Abelian_Order_8_Group_with_One_Order_2_Element_is_Quaternion_Group/Lemma_1

Lemma
$\set {\pm 1}$ is a normal subgroup of $G$.


Proof









\(\ds \forall g \in G: \, \)



\(\ds g \circ 1 \circ g^{-1}\)

\(=\)







\(\ds g \circ g^{-1}\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds 1\)





Definition of Inverse Element














\(\ds \forall g \in G: \, \)



\(\ds \paren {g \circ \paren {-1} \circ g^{-1} }^2\)

\(=\)







\(\ds g \circ \paren {-1} \circ g^{-1} \circ g \circ \paren {-1} \circ g^{-1}\)




















\(\ds \)

\(=\)







\(\ds g \circ \paren {-1} \circ \paren {-1} \circ g^{-1}\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds g \circ g^{-1}\)





Order of $-1$ is $2$














\(\ds \)

\(=\)







\(\ds 1\)





Definition of Inverse Element



So:

$g \circ \paren {-1} \circ g^{-1} = 1$
or:

$g \circ \paren {-1} \circ g^{-1} = -1$

Suppose $g \circ \paren {-1} \circ g^{-1} = 1$.
Then:














\(\ds g \circ \paren {-1} \circ g^{-1}\)

\(=\)







\(\ds 1\)




















\(\ds g^{-1} \circ g \circ \paren {-1} \circ g^{-1} \circ g\)

\(=\)







\(\ds g^{-1} \circ 1 \circ g\)





applying same action on both sides














\(\ds -1\)

\(=\)







\(\ds 1\)





Definition of Inverse Element, Definition of Identity Element



which is a contradiction.
So it is the other case:

$g \circ \paren {-1} \circ g^{-1} = -1$
Therefore:

$\forall g \in G: g \circ \set {\pm 1} \circ g^{-1} = \set {\pm 1}$
By definition, $\set {\pm 1}$ is a normal subgroup.
$\blacksquare$





