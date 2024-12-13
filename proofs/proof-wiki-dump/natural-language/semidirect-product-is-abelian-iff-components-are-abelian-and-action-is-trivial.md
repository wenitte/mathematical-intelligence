# 

Source: https://proofwiki.org/wiki/Semidirect_Product_is_Abelian_iff_Components_are_Abelian_and_Action_is_Trivial



Theorem
Let $N$ and $H$ be groups.
Let $H$ act by automorphisms on $N$ via $\phi$.
Let $N \rtimes_\phi H$ be the corresponding semidirect product.

Then the following are equivalent:

$(1): \quad N \rtimes_\phi H$ is abelian
$(2): \quad N$ and $H$ are abelian and $H$ acts trivially


Proof
$(1)$ implies $(2)$
Let $n \in N$, $h \in H$.
From $\tuple {n, e} \tuple {e, h} = \tuple {e,h} \tuple {n, e}$ we have $n \map {\phi_e} e = e \map {\phi_h} n$.
Thus $H$ acts trivially.
By Semidirect Product with Trivial Action is Direct Product, $N \rtimes_\phi H = N \times H$.
By External Direct Product of Abelian Groups is Abelian Group, $N$ and $H$ are abelian.
$\Box$


$(2)$ implies $(1)$
By Semidirect Product with Trivial Action is Direct Product, $N \rtimes_\phi H = N \times H$.
By External Direct Product of Abelian Groups is Abelian Group, $N \rtimes_\phi H$ is abelian.
$\blacksquare$





