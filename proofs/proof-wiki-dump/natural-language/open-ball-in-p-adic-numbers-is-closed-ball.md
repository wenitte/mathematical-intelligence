# 

Source: https://proofwiki.org/wiki/Open_Ball_in_P-adic_Numbers_is_Closed_Ball

Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $a \in \Q_p$.
For all $\epsilon \in \R_{>0}$: 

Let $\map {B_\epsilon} a$ denote the open $\epsilon$-ball of $a$
Let $\map {B^-_\epsilon} a$ denote the closed $\epsilon$-ball of $a$.

Then:

$\forall n \in \Z : \map {B_{p^{-n} } } a = \map {B^-_{p^{-\paren {n + 1} } } } a$


Proof
Let $n \in \Z$.
Then:














\(\ds x \in \map { B_{p^{-n} } } a\)

\(\leadstoandfrom\)







\(\ds \norm {x - a}_p < p^{-n}\)





Definition of Open Ball in $p$-adic Numbers














\(\ds \)

\(\leadstoandfrom\)







\(\ds \norm {x - a}_p \le p^{-\paren {n + 1} }\)





$p$-adic Norm of $p$-adic Number is Power of $p$














\(\ds \)

\(\leadstoandfrom\)







\(\ds x \in \map {B^-_{p^{-\paren {n + 1} } } } a\)





Definition of Closed Ball in $p$-adic Numbers



By set equality:

$\map {B_{p^{-n} } } a = \map {B^-_{p^{-\paren {n + 1} } } } a$
$\blacksquare$





