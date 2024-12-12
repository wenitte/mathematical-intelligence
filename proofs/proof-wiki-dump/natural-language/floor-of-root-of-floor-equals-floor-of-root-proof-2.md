# 

Source: https://proofwiki.org/wiki/Floor_of_Root_of_Floor_equals_Floor_of_Root/Proof_2

Theorem
$\ds \floor {\sqrt {\floor x} } = \floor {\sqrt x}$


Proof
The square root is defined on the interval $\hointr 0 \to$.
We have that Square Root is Strictly Increasing.
From Continuity of Root Function, the square root is continuous.
Hence the conditions are fulfilled for for McEliece's Theorem (Integer Functions) to be applied:

$\forall x \in A: \paren {\map f x \in \Z \implies x \in \Z} \iff \floor {\map f x} = \floor {\map f {\floor x} }$

It remains to be proved that $\sqrt x \in \Z \implies x \in \Z$.
Let $y = \sqrt x$ such that $y \in \Z$.
By definition of the square root:

$x = y^2$.
From Integer Multiplication is Closed:

$x \in \Z$
as required.
$\blacksquare$





