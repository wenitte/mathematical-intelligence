# 

Source: https://proofwiki.org/wiki/Rationals_are_Everywhere_Dense_in_Sorgenfrey_Line

Theorem
$\Q$ is everywhere dense in the Sorgenfrey line.


Proof
Let $T = \struct {\R, \tau}$ be the Sorgenfrey line.
Define:

$\BB := \set {\hointr x y: x, y \in \R}$
where $\hointr x y$ denotes the right half-open real interval between $x$ and $y$.
By definition of Sorgenfrey line:

$\BB$ is basis of $T$.
By definition of subset:

$\Q^- \subseteq \R$
where $\Q^-$ denotes the topological closure of $\Q$ in $T$.
By definition of set equality to prove the equality: $\Q^- = \R$, it is necessary to show:

$\R \subseteq \Q^-$
Let $x \in \R$.
By Characterization of Closure by Basis it suffices to prove that:

$\forall U \in \BB: x \in U \implies U \cap \Q \ne \O$
Let $U \in \BB$.
By definition of $\BB$:

$\exists y, z \in \R: U = \hointr y z$
Assume:

$x \in U$
By definition of half-open real interval:

$y \le x < z$
By Between two Real Numbers exists Rational Number:

$\exists q \in \Q: y < q < z$
By definition of half-open real interval:

$q \in U$
Thus by definitions of intersection and empty set:

$U \cap \Q \ne \O$
$\blacksquare$


Sources
1989: Ryszard Engelking: General Topology (revised and completed ed.)
Mizar article TOPGEN_5:43




