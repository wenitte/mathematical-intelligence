# 

Source: https://proofwiki.org/wiki/Hypothetical_Syllogism/Formulation_2



Theorem













\(\ds p\)

\(\implies\)







\(\ds q\)




















\(\ds q\)

\(\implies\)







\(\ds r\)




















\(\ds p\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds r\)

\(\)







\(\ds \)











Proof 1
By the tableau method of natural deduction:


$p \implies q, q \implies r, p \vdash r$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies q$

Premise

(None)




2


2

$q \implies r$

Premise

(None)




3


3

$p$

Premise

(None)




4


1, 2

$p \implies r$

Sequent Introduction

1, 2

Hypothetical Syllogism: Formulation 1


5


1, 2, 3

$r$

Modus Ponendo Ponens: $\implies \mathcal E$

4, 3



$\blacksquare$


Proof 2
By the tableau method of natural deduction:


$p \implies q, q \implies r, p \vdash r$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies q$

Premise

(None)




2


2

$q \implies r$

Premise

(None)




3


3

$p$

Premise

(None)




4


1, 3

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 3




5


1, 2, 3

$r$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 4



$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables to the propositions in turn.
As can be seen for all boolean interpretations by inspection, where the truth values under the main connective on the left hand side (that is, the rightmost $\land$) is $\T$, that under the instance of $r$ on the right hand side is also $\T$:
$\begin{array}{|ccccccccc||c|} \hline
((p & \implies & q) & \land & (q & \implies & r)) & \land & p & r \\
\hline
\F & \T & \F & \T & \F & \T & \F & \F & \F & \F \\
\F & \T & \F & \T & \F & \T & \T & \F & \F & \T \\
\F & \T & \T & \F & \T & \F & \F & \F & \F & \F \\
\F & \T & \T & \T & \T & \T & \T & \F & \F & \T \\
\T & \F & \F & \F & \F & \T & \F & \F & \T & \F \\
\T & \F & \F & \F & \F & \T & \T & \F & \T & \T \\
\T & \T & \T & \F & \T & \F & \F & \F & \T & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
Hence the result.
$\blacksquare$





