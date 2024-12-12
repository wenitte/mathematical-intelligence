# 

Source: https://proofwiki.org/wiki/User:Cbrown91/Sandbox



Theorem
Let $G, H$ be groups.
Let $N \lhd G, K \lhd H$.
Let $G / N \cong H / K$, where $\cong$ denotes group isomorphism.
Let $\theta: G / N \to H / K$ be such a group isomorphism.

Let $G \times^\theta H$ be the pullback of $G$ and $H$ via $\theta$.

Then $G \times^\theta H$ is a subgroup of $G \times H$.


Proof
For brevity, suppress the symbol for the group operation (which may be $\circ$, or $+$).
Apply the Two-Step Subgroup Test:


Condition $(1)$
From the definition of pullback, $\left({e_G, e_H}\right) \in G \times^\theta H$ if and only if $\theta(e_G N) = e_H K$. Since $e_G N, e_H K$ are the identities of $G / N$ and $H / K$, $\theta(e_G N) = e_H K$ because Group Homomorphism Preserves Identity. So $\left({e_G, e_H}\right) \in G \times^\theta H$ and thus $G \times^\theta H$ is non-empty.
$\Box$

Condition $(2)$
Let $(g, h), (g', h') \in G \times^\theta H$. It follows that $\theta(gN) = hK$ and $\theta(g'N) = h'K$. By the morphism property, $\theta(gN)\theta(g'N) = \theta(gNg'N) = \theta((gg')N)$.














\(\ds (hh')K\)

\(=\)







\(\ds hKh'K\)




















\(\ds \)

\(=\)







\(\ds \theta(gN)\theta(g'N)\)




















\(\ds \)

\(=\)







\(\ds \theta((gg')N)\)









Thus, $(gg', hh') \in G \times^\theta H$ and so $G \times^\theta H$ is closed under the operation.
$\Box$

Condition $(3)$
Let $(g, h) \in G \times^\theta H$. Then, $\theta(gN) = hK$, so $\theta(gN)^{-1} = h^{-1}K$. By the Group Homomorphism Preserves Inverses, $\theta(gN)^{-1} = \theta(g^{-1}N)$, so $\theta(g^{-1}N) = h^{-1}K$, and so $(g^{-1}, h^{-1}) \in G \times^\theta H$. Thus, $G \times^\theta H$ is closed under inverses.
$\Box$
Therefore, $G \times^\theta H \le G \times H$.
$\blacksquare$





