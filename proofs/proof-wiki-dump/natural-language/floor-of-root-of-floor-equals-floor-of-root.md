# 

Source: https://proofwiki.org/wiki/Floor_of_Root_of_Floor_equals_Floor_of_Root



Theorem
Let $x \in \R_{\ge 0}$ be a positive real number.
Let $\floor x$ denote the floor of $x$.
Then:

$\ds \floor {\sqrt {\floor x} } = \floor {\sqrt x}$


Proof 1













\(\ds n\)

\(=\)

\(\, \ds \floor {\sqrt x} \, \)





\(\ds \)














\(\ds \leadstoandfrom \ \ \)





\(\ds n\)

\(\le\)

\(\, \ds \sqrt x \, \)

\(\, \ds < \, \)



\(\ds n + 1\)





Integer equals Floor iff Number between Integer and One More








\(\ds \leadstoandfrom \ \ \)





\(\ds n^2\)

\(\le\)

\(\, \ds x \, \)

\(\, \ds < \, \)



\(\ds \paren {n + 1}^2\)





Order is Preserved on Positive Reals by Squaring








\(\ds \leadstoandfrom \ \ \)





\(\ds n^2\)

\(\le\)

\(\, \ds \floor x \, \)

\(\, \ds < \, \)



\(\ds \paren {n + 1}^2\)





Number not less than Integer iff Floor not less than Integer








\(\ds \leadstoandfrom \ \ \)





\(\ds n\)

\(\le\)

\(\, \ds \sqrt {\floor x} \, \)

\(\, \ds < \, \)



\(\ds n + 1\)





Order is Preserved on Positive Reals by Squaring








\(\ds \leadstoandfrom \ \ \)





\(\ds n\)

\(=\)

\(\, \ds \floor {\sqrt {\floor x} } \, \)





\(\ds \)





Integer equals Floor iff Number between Integer and One More



$\blacksquare$


Proof 2
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


Also see
Ceiling of Root of Ceiling equals Ceiling of Root


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $6 \ \text{(a)}$




