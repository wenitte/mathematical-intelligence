# 

Source: https://proofwiki.org/wiki/Powers_of_Element_form_Subgroup

Theorem
Let $\struct {G, \circ}$ be a group.

Then:

$\forall a \in G: H = \set {a^n: n \in \Z} \le G$
That is, the subset of $G$ comprising all elements possible as powers of $a \in G$ is a subgroup of $G$.


Proof
Clearly $a \in H$, so $H \ne \O$.

Let $x, y \in H$.














\(\ds \)

\(\)







\(\ds x, y \in H\)




















\(\ds \)

\(\leadsto\)







\(\ds \exists m, n \in \Z: x = a^m, y = a^n\)




















\(\ds \)

\(\leadsto\)







\(\ds x^{-1} y = \paren {a^m}^{-1} a^n\)




















\(\ds \)

\(\leadsto\)







\(\ds x^{-1} y = a^{-m} a^n = a^{n-m}\)




















\(\ds \)

\(\leadsto\)







\(\ds x^{-1} y \in H\)









Thus by the One-Step Subgroup Test:

$H \le G$
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 37.4$ Some important general examples of subgroups




