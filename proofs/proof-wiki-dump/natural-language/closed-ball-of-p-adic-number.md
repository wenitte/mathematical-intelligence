# 

Source: https://proofwiki.org/wiki/Closed_Ball_of_P-adic_Number

Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $\Z_p$ denote the $p$-adic integers.

Let $a \in \Q_p$.
For all $\epsilon \in \R_{>0}$, let $\map { {B_\epsilon}^-} a$ denote the closed ball of $a$ of radius $\epsilon$. 

Then:

$\forall n \in Z : \map {B^-_{p^{-n} } } a = a + p^n \Z_p$
where $a + p^n \Z_p$ denotes the left coset of the principal ideal $p^n \Z_p$ containing $a$ in the subring $\Z_p$.

That is, the closed ball $\map { {B_\epsilon}^-} a$ is the set:

$a + p^n \Z_p = \set{a + p^n z : z \in \Z_p}$


Proof
Let $n \in \Z$.
Then:














\(\ds x\)

\(\in\)







\(\ds \map {B^{\,-}_{p^{-n} } } a\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \norm {x - a}_p\)

\(\le\)







\(\ds p^{-n}\)





Definition of Closed Ball in P-adic Numbers








\(\ds \leadstoandfrom \ \ \)





\(\ds p^n \norm {x - a}_p\)

\(\le\)







\(\ds 1\)





Multiply both sides of equation by $p^n$








\(\ds \leadstoandfrom \ \ \)





\(\ds \norm {p^{-n} }_p \norm {x - a}_p\)

\(\le\)







\(\ds 1\)





Definition of $p$-adic norm








\(\ds \leadstoandfrom \ \ \)





\(\ds \norm {p^{-n} \paren {x - a} }_p\)

\(\le\)







\(\ds 1\)





Non-Archimedean Norm Axiom $\text N 2$: Multiplicativity








\(\ds \leadstoandfrom \ \ \)





\(\ds p^{-n} \paren {x - a}\)

\(\in\)







\(\ds \Z_p\)





Definition of $p$-adic integers








\(\ds \leadstoandfrom \ \ \)





\(\ds x - a\)

\(\in\)







\(\ds p^n \Z_p\)





Definition of Principal Ideal








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds a + p^n \Z_p\)





Definition of Left Coset




From set equality:

$\map {B^-_{p^{-n} } } a = a + p^n \Z_p$
The result follows.
$\blacksquare$


Also see
Open Balls of P-adic Number
Local Basis of P-adic Number




