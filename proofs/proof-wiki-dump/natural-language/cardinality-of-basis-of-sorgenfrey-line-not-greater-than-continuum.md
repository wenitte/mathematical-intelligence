# 

Source: https://proofwiki.org/wiki/Cardinality_of_Basis_of_Sorgenfrey_Line_not_greater_than_Continuum

Theorem
Let $T = \struct {\R, \tau}$ be the Sorgenfrey line.
Let

$\BB = \set {\hointr x y: x, y \in \R \land x < y}$
be the basis of $T$.

Then $\card \BB \le \mathfrak c$
where

$\card \BB$ denotes the cardinality of $\BB$
$\mathfrak c = \card \R$ denotes the continuum.


Proof
Define a mapping $f: \BB \to \R \times \R$:

$\forall I \in \BB: \map f I = \tuple {\min I, \sup I}$
That is:

$\map f {\hointr x y} = \tuple {x, y} \forall x, y \in \R: x < y$
We will show that $f$ is an injection by definition.

Let $I_1, I_2 \in \BB$ such that:

$\map f {I_1} = \map f {I_2}$













\(\ds I_1\)

\(=\)







\(\ds \hointr {\min I_1} {\sup I_1}\)





Definition of Half-Open Real Interval














\(\ds \)

\(=\)







\(\ds \hointr {\min I_2} {\sup I_2}\)





by $\map f {I_1} = \map f {I_2}$














\(\ds \)

\(=\)







\(\ds I_2\)





Definition of Half-Open Real Interval



So:

$I_1 = I_2$
Thus $f$ is an injection.

By Injection implies Cardinal Inequality:

$\card \BB \le \card {\R \times \R}$
By Cardinal Product Equal to Maximum:

$\card {\R \times \R} = \map \max {\mathfrak c, \mathfrak c}$
Thus:

$\card \BB \le \mathfrak c$
$\blacksquare$


Sources
1989: Ryszard Engelking: General Topology (revised and completed ed.)
Mizar article TOPGEN_3:20




