# 

Source: https://proofwiki.org/wiki/Order_of_Monomorphic_Image_of_Group_Element

Theorem
Let $G$ and $H$ be groups whose identities are $e_G$ and $e_H$ respectively.
Let $\phi: G \to H$ be a monomorphism.
Let $g \in G$ be of finite order.

Then:

$\forall g \in G: \order {\map \phi g} = \order g$


Proof
By definition of monomorphism, $\phi$ is a homomorphism which is also an injection.
From Order of Homomorphic Image of Group Element:

$\forall g \in G: \order {\map \phi g} \divides \order g$















\(\ds \map \phi {g^m}\)

\(=\)







\(\ds \paren {\map \phi g}^m\)





Homomorphism of Power of Group Element














\(\ds \)

\(=\)







\(\ds e_H\)




















\(\ds \)

\(=\)







\(\ds \map \phi {e_G}\)





Homomorphism to Group Preserves Identity



So $g^m = e$, as $\phi$ is injective.
From the definition of order of group element, that means $n \le m$ since $n$ is the smallest such power.
Thus $m = n$ and the result holds.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $4 \ \text{(ii)}$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $8$: The Homomorphism Theorem: Exercise $4$




