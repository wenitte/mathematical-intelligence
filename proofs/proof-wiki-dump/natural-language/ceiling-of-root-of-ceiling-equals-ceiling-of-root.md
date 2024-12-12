# 

Source: https://proofwiki.org/wiki/Ceiling_of_Root_of_Ceiling_equals_Ceiling_of_Root



Theorem
Let $x \in \R_{\ge 0}$ be a positive real number.
Let $\ceiling x$ denote the ceiling of $x$.
Then:

$\ds \ceiling {\sqrt {\ceiling x} } = \ceiling {\sqrt x}$


Proof 1













\(\ds n\)

\(=\)

\(\, \ds \ceiling {\sqrt x} \, \)





\(\ds \)














\(\ds \leadstoandfrom \ \ \)





\(\ds n - 1\)

\(<\)

\(\, \ds \sqrt x \, \)

\(\, \ds \le \, \)



\(\ds n\)





Integer equals Ceiling iff Number between Integer and One Less








\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {n - 1}^2\)

\(<\)

\(\, \ds x \, \)

\(\, \ds \le \, \)



\(\ds n^2\)





Order is Preserved on Positive Reals by Squaring








\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {n - 1}^2\)

\(<\)

\(\, \ds \ceiling x \, \)

\(\, \ds \le \, \)



\(\ds n^2\)





Number not greater than Integer iff Ceiling not greater than Integer








\(\ds \leadstoandfrom \ \ \)





\(\ds n - 1\)

\(<\)

\(\, \ds \sqrt {\ceiling x} \, \)

\(\, \ds \le \, \)



\(\ds n\)





Order is Preserved on Positive Reals by Squaring








\(\ds \leadstoandfrom \ \ \)





\(\ds n\)

\(=\)

\(\, \ds \ceiling {\sqrt {\ceiling x} } \, \)





\(\ds \)





Integer equals Ceiling iff Number between Integer and One Less



$\blacksquare$


Proof 2
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


Also see
Floor of Root of Floor equals Floor of Root


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $6 \ \text{(b)}$




