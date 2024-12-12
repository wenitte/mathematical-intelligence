# 

Source: https://proofwiki.org/wiki/Finite_Orbit_under_Group_of_Automorphisms_of_Field_implies_Separable_over_Fixed_Field

Theorem
Let $E$ be a field.
Let $G \le \Aut E$ be a subgroup of its automorphism group.
Let $F = \map {\operatorname {Fix}_E} G$ be its fixed field.
Let $\alpha \in E$ have a finite orbit under $G$.

Then $\alpha$ is separable over $F$.


Proof
Let $\Lambda$ be the orbit of $\alpha$ under $G$.
By:

Minimal Polynomial of Element with Finite Orbit under Group of Automorphisms over Fixed Field in terms of Orbit
the product:

$\map p x = \ds \prod_{\beta \in \Lambda} \paren {x - \beta}$
is the minimal polynomial of $\alpha$ over $F$.
By Product of Distinct Monic Linear Polynomials is Separable, $p$ is separable.
Thus $\alpha$ is separable over $F$.
$\blacksquare$





