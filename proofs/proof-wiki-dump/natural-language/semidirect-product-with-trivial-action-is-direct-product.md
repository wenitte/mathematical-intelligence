# 

Source: https://proofwiki.org/wiki/Semidirect_Product_with_Trivial_Action_is_Direct_Product

Theorem
Let $H$ and $N$ be groups.
Let $\Aut N$ denote the automorphism group of $N$.
Let $\phi: H \to \Aut N$ be defined as:

$\forall h \in H: \map \phi h = I_N$ for all $h \in H$
where $I_N$ denotes the identity mapping on $N$.
Let $N \rtimes_\phi H$ be the corresponding semidirect product.

Then $N \rtimes_\phi H$ is the direct product of $N$ and $H$.


Proof
Pick arbitrary $\tuple {n_1, h_1}, \tuple {n_2, h_2} \in N \rtimes_\phi H$.














\(\ds \tuple {n_1, h_1} \tuple {n_2, h_2}\)

\(=\)







\(\ds \tuple {n_1 \cdot \map \phi {h_1} \paren {n_2}, h_1 h_2}\)





Definition of Semidirect Product














\(\ds \)

\(=\)







\(\ds \tuple {n_1 \cdot \map {I_N} {n_2}, h_1 h_2}\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \tuple {n_1 n_2, h_1 h_2}\)









which meets the definition of direct product.
$\blacksquare$





