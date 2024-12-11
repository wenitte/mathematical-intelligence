# 

Source: https://proofwiki.org/wiki/Abstract_Model_of_Algebraic_Extensions

Theorem
Let $K$ be a field and $\alpha \in \overline{K}$ be an element of the algebraic closure of $K$ which is algebraic over $K$.
Let $m_\alpha$ be the minimal polynomial of $\alpha$ over $K$.
Then:

$K[\alpha] \cong K[x]/ \langle m_\alpha\rangle$


Proof
Let $\phi: K[x] \to K [\alpha]$ be the homomorphism which fixes $K$ and maps $x$ to $\alpha$.
The kernel of $\phi$ consists of all polynomials which vanish at $\alpha$, which is precisely the ideal $\langle m_\alpha\rangle$.
The result follows by the First Fundamental Theorem on Ring Homomorphisms.
$\blacksquare$





