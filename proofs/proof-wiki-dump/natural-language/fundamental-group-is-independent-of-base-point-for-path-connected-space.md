# 

Source: https://proofwiki.org/wiki/Fundamental_Group_is_Independent_of_Base_Point_for_Path-Connected_Space

Theorem
Let $X$ be a path-connected space.
For $x \in X$, let $\map {\pi_1}{X, x}$ denote the fundamental group.
For $x, y \in X$, there is an isomorphism:

$\phi: \map {\pi_1} {X, x} \to \map {\pi_1} {X, y}$


Proof
Since $X$ is path-connected there exists a path $f$ connecting $y$ and $x$.
We define $\phi_f: \map {\pi_1} {X, x} \to \map {\pi_1} {X, y}$ by $\map {\phi_f} {\sqbrk g} =\sqbrk {f^{-1} g f}$.
$\phi$ is a homomorphism of groups, as is seen from:

$\ds \map {\phi_f} {\sqbrk {g h} } = \sqbrk {f^{-1} g h f} = \sqbrk {f^{-1} g f f^{-1} h f} = \sqbrk {f^{-1} g f} \sqbrk {f^{-1} h f} = \map {\phi_f} {\sqbrk g} \map {\phi_f} {\sqbrk h}$

Also, $f^{-1}$ is a path from $x$ to $y$. Then by the same argument as before, $\phi_{f^{-1} }: \map {\pi_1} {X, y} \to \map {\pi_1} {X, x}$ where $\map {\phi_{f^{-1} } } {\sqbrk g} = \sqbrk {f g f^{-1} }$, is a homomorphism of groups.
Trivially, $\phi_f \circ \phi_{f^{-1} } = I_{\map {\pi_1} {X, y} }$ and $\phi_{f^{-1} } \circ \phi_f = I_{\map {\pi_1} {X, x} }$.
Then $\phi_f^{-1} = \phi_{f^{-1} }$, so $\phi_f$ is bijective and thus an isomorphism.
$\blacksquare$





