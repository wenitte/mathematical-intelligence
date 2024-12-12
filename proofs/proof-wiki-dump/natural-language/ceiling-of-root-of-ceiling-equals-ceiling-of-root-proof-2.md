# 

Source: https://proofwiki.org/wiki/Ceiling_of_Root_of_Ceiling_equals_Ceiling_of_Root/Proof_2

Theorem
$\ds \ceiling {\sqrt {\ceiling x} } = \ceiling {\sqrt x}$


Proof
The square root is defined on the interval $\hointr 0 \to$.
We have that Square Root is Strictly Increasing.
From Continuity of Root Function, the square root is continuous.
Hence the conditions are fulfilled for for McEliece's Theorem (Integer Functions) to be applied:

$\forall x \in A: \paren {\map f x \in \Z \implies x \in \Z} \iff \ceiling {\map f x} = \ceiling {\map f {\ceiling x} }$

It remains to be proved that $\sqrt x \in \Z \implies x \in \Z$.
Let $y = \sqrt x$ such that $y \in \Z$.
By definition of square root:

$x = y^2$
From Integer Multiplication is Closed:

$x \in \Z$
as required.
$\blacksquare$





