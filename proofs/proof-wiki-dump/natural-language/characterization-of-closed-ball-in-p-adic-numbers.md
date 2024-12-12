# 

Source: https://proofwiki.org/wiki/Characterization_of_Closed_Ball_in_P-adic_Numbers



Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $\Z_p$ be the $p$-adic integers.
For any $\epsilon \in \R_{>0}$ and $a \in \Q_p$ let $\map {{B_\epsilon}^-} a$ denote the closed ball of center $a$ of radius $\epsilon$. 

Let $x, y \in \Q_p$.
Let $n \in \Z$.

The following statements are equivalent:

$(1)\quad x \in \map {B^{\,-}_{p^{-n}}} y$
$(2)\quad \norm{x -y}_p \le p^{-n}$
$(3)\quad \map {B^{\,-}_{p^{-n}}} x = \map {B^{\,-}_{p^{-n}}} y$
$(4)\quad x - y \in p^n \Z_p$
$(5)\quad x + p^n \Z_p = y + p^n \Z_p$


Proof
From P-adic Numbers form Non-Archimedean Valued Field:

$\norm {\,\cdot\,}_p$ is a non-Archimedean norm.


Condition $(1)$ iff Condition $(2)$
This follows directly from the definition of a closed ball in the $p$-adic numbers.
$\Box$


Condition $(1)$ iff Condition $(3)$
By definition, $\map {B^{\,-}_{p^{-n}}} y$ is a closed ball in a non-Archimedean norm $\norm {\,\cdot\,}_p$.
From Centers of Closed Balls in Non-Archimedean Division Rings:

$x \in \map {B^{\,-}_{p^{-n}}} y \leadsto \map {B^{\,-}_{p^{-n}}} x = \map {B^{\,-}_{p^{-n}}} y$
From Center is Element of Closed Ball in P-adic Numbers:

$\map {B^{\,-}_{p^{-n}}} x = \map {B^{\,-}_{p^{-n}}} y \leadsto x \in \map {B^{\,-}_{p^{-n}}} x = \map {B^{\,-}_{p^{-n}}} y$
$\Box$


Condition $(2)$ iff Condition $(4)$













\(\ds \norm{x - y}_p \le p^{-n}\)

\(\leadstoandfrom\)







\(\ds \norm{x - y}_p \le \norm{p^n}_p\)





Definition of $p$-adic norm on integers














\(\ds \)

\(\leadstoandfrom\)







\(\ds \dfrac {\norm{x - y}_p} {\norm{p^n}_p} \le 1\)





Dividing both sides of equation by $p^{-n}$














\(\ds \)

\(\leadstoandfrom\)







\(\ds \norm{p^{-n} \paren{x-y} }_p \le 1\)





Norm of Quotient in Division Ring














\(\ds \)

\(\leadstoandfrom\)







\(\ds p^{-n} \paren{x-y} \in \Z_p\)





Definition of $p$-adic integers














\(\ds \)

\(\leadstoandfrom\)







\(\ds x-y \in p^n\Z_p\)









$\Box$


Condition $(3)$ iff Condition $(5)$
From Closed Balls of P-adic Number,

$\map {B^{\,-}_{p^{-n}}} x = x + p^n \Z_p$
and 

$\map {B^{\,-}_{p^{-n}}} y = y + p^n \Z_p$
Hence:

$\map {B^{\,-}_{p^{-n}}} x = \map {B^{\,-}_{p^{-n}}} y$ if and only if $x + p^n \Z_p = y + p^n \Z_p$
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 3.3$ Exploring $\Q_p$: Lemma $3.3.5$




