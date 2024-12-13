# 

Source: https://proofwiki.org/wiki/Order_of_Homomorphic_Image_of_Group_Element

Theorem
Let $G$ and $H$ be groups whose identities are $e_G$ and $e_H$ respectively.
Let $\phi: G \to H$ be a homomorphism.
Let $g \in G$ be of finite order.

Then:

$\forall g \in G: \order {\map \phi g} \divides \order g$
where $\divides$ denotes divisibility.


Proof
Let $\phi: G \to H$ be a homomorphism.
Let $\order g = n, \order {\map \phi g} = m$.














\(\ds \paren {\map \phi g}^n\)

\(=\)







\(\ds \map \phi {g^n}\)





Homomorphism of Power of Group Element














\(\ds \)

\(=\)







\(\ds \map \phi {e_G}\)




















\(\ds \)

\(=\)







\(\ds e_H\)





Homomorphism to Group Preserves Identity




It follows from Element to Power of Multiple of Order is Identity that $m \divides n$.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $4 \ \text{(ii)}$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $8$: The Homomorphism Theorem: Exercise $4$




