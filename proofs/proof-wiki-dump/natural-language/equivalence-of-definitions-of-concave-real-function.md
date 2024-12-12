# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Concave_Real_Function



Theorem
Let $f$ be a real function which is defined on a real interval $I$.
The following definitions of the concept of Concave Real Function are equivalent:

Definition 1
$f$ is concave on $I$ if and only if:

$\forall x, y \in I: \forall \alpha, \beta \in \R_{>0}, \alpha + \beta = 1: \map f {\alpha x + \beta y} \ge \alpha \map f x + \beta \map f y$
Definition 2
$f$ is concave on $I$ if and only if:

$\ds \forall x_1, x_2, x_3 \in I: x_1 < x_2< x_3: \frac {\map f {x_2} - \map f {x_1} } {x_2 - x_1} \ge \frac {\map f {x_3} - \map f {x_2} } {x_3 - x_2}$
Definition 3
$f$ is concave on $I$ if and only if:

$\forall x_1, x_2, x_3 \in I: x_1 < x_2< x_3: \dfrac {\map f {x_2} - \map f {x_1} } {x_2 - x_1} \ge \dfrac {\map f {x_3} - \map f {x_1} } {x_3 - x_1}$


Proof
Let $f$ be concave real function on $I$ according to definition 1.
That is:

$\forall x, y \in I: \forall \alpha, \beta \in \R_{>0}, \alpha + \beta = 1: \map f {\alpha x + \beta y} \ge \alpha \map f x + \beta \map f y$
Make the substitutions $x_1 = x, x_2 = \alpha x + \beta y, x_3 = y$.
As $\alpha + \beta = 1$, we have $x_2 = \alpha x_1 + \paren {1 - \alpha} x_3$.
Thus:

$\alpha = \dfrac {x_3 - x_2} {x_3 - x_1}, \beta = \dfrac {x_2 - x_1} {x_3 - x_1}$
So:




\(\text {(1)}: \quad\)









\(\ds \map f {x_2}\)

\(\ge\)







\(\ds \frac {x_3 - x_2} {x_3 - x_1} \map f {x_1} + \frac {x_2 - x_1} {x_3 - x_1} \map f {x_3}\)





substituting for $\alpha$ and $\beta$








\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {x_3 - x_1} \map f {x_2}\)

\(\ge\)







\(\ds \paren {x_3 - x_2} \map f {x_1} + \paren {x_2 - x_1} \map f {x_3}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {x_3 - x_1} \map f {x_2}\)

\(\ge\)







\(\ds \paren {x_3 - x_1 - x_2 + x_1} \map f {x_1} + \paren {x_2 - x_1} \map f {x_3}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {x_3 - x_1} \map f {x_2} - \paren {x_3 - x_1} \map f {x_1}\)

\(\ge\)







\(\ds \paren {x_2 - x_1} \map f {x_3} - \paren {x_2 - x_1} \map f {x_1}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \frac {\map f {x_2} - \map f {x_1} } {x_2 - x_1}\)

\(\ge\)







\(\ds \frac {\map f {x_3} - \map f {x_1} } {x_3 - x_1}\)










Again from $(1)$:




\(\text {(1)}: \quad\)









\(\ds \map f {x_2}\)

\(\ge\)







\(\ds \frac {x_3 - x_2} {x_3 - x_1} \map f {x_1} + \frac {x_2 - x_1} {x_3 - x_1} \map f {x_3}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {x_3 - x_1} \map f {x_2}\)

\(\ge\)







\(\ds \paren {x_3 - x_2} \map f {x_1} + \paren {x_2 - x_1} \map f {x_3}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {x_3 - x_1} \map f {x_2}\)

\(\ge\)







\(\ds \paren {x_3 - x_1 - x_3 + x_2} \map f {x_3} + \paren {x_3 - x_2} \map f {x_1}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {x_3 - x_2} \map f {x_3} - \paren {x_3 - x_2} \map f {x_1}\)

\(\ge\)







\(\ds \paren {x_3 - x_1} \map f {x_3} - \paren {x_3 - x_1} \map f {x_2}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \frac {\map f {x_3} - \map f {x_1} } {x_3 - x_1}\)

\(\ge\)







\(\ds \frac {\map f {x_3} - \map f {x_2} } {x_3 - x_2}\)










Thus:

$\dfrac {\map f {x_2} - \map f {x_1} } {x_2 - x_1} \ge \dfrac {\map f {x_3} - \map f {x_1} } {x_3 - x_1} \ge \dfrac {\map f {x_3} - \map f {x_2} } {x_3 - x_2}$

So:

$\dfrac {\map f {x_2} - \map f {x_1} } {x_2 - x_1} \ge \dfrac {\map f {x_3} - \map f {x_1} } {x_3 - x_1}$
demonstrating that $f$ is concave on $I$ according to definition 3, and:

$\dfrac {\map f {x_2} - \map f {x_1} } {x_2 - x_1} \ge \dfrac {\map f {x_3} - \map f {x_2} } {x_3 - x_2}$
demonstrating that $f$ is concave on $I$ according to definition 2.

As each step is an equivalence, the argument reverses throughout.
$\blacksquare$





