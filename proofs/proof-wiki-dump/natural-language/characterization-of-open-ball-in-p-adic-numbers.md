# 

Source: https://proofwiki.org/wiki/Characterization_of_Open_Ball_in_P-adic_Numbers



Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $\Z_p$ be the $p$-adic integers.
For any $\epsilon \in \R_{>0}$ and $a \in \Q_p$ let $\map {B_\epsilon} a$ denote the open ball of center $a$ of radius $\epsilon$. 

Let $n \in \Z$.
Let $x, y \in \Q_p$.

The following statements are equivalent:

$(1): \quad x \in \map {B_{p^{-n} } } y$
$(2): \quad \norm{x - y}_p < p^{-n}$
$(3): \quad \map {B_{p^{-n} } } x = \map {B_{p^{-n} } } y$
$(4): \quad x - y \in p^{n + 1} \Z_p$
$(5): \quad x + p^{n + 1} \Z_p = y + p^{n + 1} \Z_p$


Proof
From P-adic Numbers form Non-Archimedean Valued Field:

$\norm {\,\cdot\,}_p$ is a non-Archimedean norm.


Condition $(1)$ iff Condition $(2)$
This follows directly from the definition of a open ball in the $p$-adic numbers.
$\Box$


Condition $(1)$ iff Condition $(3)$
By definition, $\map {B_{p^{-n}}} y$ is an open ball in a non-Archimedean norm $\norm {\,\cdot\,}_p$.
From Centers of Open Balls in Non-Archimedean Division Rings:

$x \in \map {B_{p^{-n}}} y \leadsto \map {B_{p^{-n}}} x = \map {B_{p^{-n}}} y$
From Center is Element of Open Ball in P-adic Numbers:

$\map {B_{p^{-n}}} x = \map {B_{p^{-n}}} y \leadsto x \in \map {B_{p^{-n}}} x = \map {B_{p^{-n}}} y$
$\Box$


Condition $(2)$ iff Condition $(4)$













\(\ds \norm {x - y}_p\)

\(<\)







\(\ds p^{-n}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \norm {x - y}_p\)

\(\le\)







\(\ds p^{-\paren {n + 1} }\)





$p$-adic Norm of $p$-adic Number is Power of $p$








\(\ds \leadstoandfrom \ \ \)





\(\ds \norm {x - y}_p\)

\(\le\)







\(\ds \norm {p^{n + 1} }_p\)





Definition of $p$-adic Norm on Integers








\(\ds \leadstoandfrom \ \ \)





\(\ds \dfrac {\norm {x - y}_p} {\norm {p^{-\paren {n + 1} } }_p}\)

\(\le\)







\(\ds 1\)





dividing both sides by $\norm {p^{-\paren {n + 1} } }$








\(\ds \leadstoandfrom \ \ \)





\(\ds \norm {p^{-\paren {n + 1} } \paren {x - y} }_p\)

\(\le\)







\(\ds 1\)





Norm of Quotient in Division Ring








\(\ds \leadstoandfrom \ \ \)





\(\ds p^{-\paren {n + 1} } \paren {x - y}\)

\(\in\)







\(\ds \Z_p\)





Definition of $p$-adic Integers








\(\ds \leadstoandfrom \ \ \)





\(\ds x - y\)

\(\in\)







\(\ds p^{n + 1} \Z_p\)









$\Box$


Condition $(3)$ iff Condition $(5)$
From Open Balls of P-adic Number,

$\map {B_{p^{-n} } } x = x + p^{n + 1} \Z_p$
and 

$\map {B_{p^{-n} } } y = y + p^{n + 1} \Z_p$
Hence:

$\map {B_{p^{-n} } } x = \map {B_{p^{-n} } } y$ if and only if $x + p^{n + 1} \Z_p = y + p^{n + 1} \Z_p$
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 3.3$ Exploring $\Q_p$: Lemma $3.3.5$




