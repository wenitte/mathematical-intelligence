# 

Source: https://proofwiki.org/wiki/Group_Isomorphism_Preserves_Order_of_Group_Element

Theorem
Let $G$ and $H$ be groups whose identities are $e_G$ and $e_H$.
Let $\phi: G \to H$ be a group isomorphism.

Then:

$a \in G \implies \order {\map \phi a} = \order a$


Proof
First, suppose $a$ is of finite order.
By definition, $\phi$ is bijective, therefore injective.
The result then follows from Order of Homomorphic Image of Group Element.
$\Box$

Now suppose $a$ is of infinite order.
Suppose $\map \phi a$ is of finite order.
Consider the mapping $\phi^{-1}: H \to G$.
Let $b = \map \phi a$.
Let $\order b = m$.
Then:

$\order a = \order {\map {\phi^{-1} } b} = m$
and that would mean $a$ was of finite order.
The result follows by transposition.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 7.3$. Isomorphism: Example $138$




