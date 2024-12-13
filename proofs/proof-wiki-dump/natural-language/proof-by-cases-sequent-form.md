# 

Source: https://proofwiki.org/wiki/Proof_by_Cases/Sequent_Form

Theorem
Proof by Cases can be symbolised by the sequent:

$p \lor q, \paren {p \vdash r}, \paren {q \vdash r} \vdash r$


Proof 1
By the tableau method of natural deduction:


$p \lor q, \paren {p \vdash r}, \paren {q \vdash r} \vdash r$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \lor q$

Premise

(None)




2


2

$p$

Assumption

(None)




3


2

$r$

By hypothesis

2

as $p \vdash r$


4


4

$q$

Assumption

(None)




5


4

$r$

By hypothesis

4

as $q \vdash r$


6


1

$r$

Proof by Cases: $\text{PBC}$

1 ,  2  –  3 ,  4  –  5

Assumptions  2  and  4 have been discharged

$\blacksquare$


Proof 2
We apply the Method of Truth Tables.
$\begin{array}{|ccc|ccc|ccc||c|} \hline
p & \lor & q & p & \implies & r & q & \implies & r & r \\
\hline
F & F & F & F & T & F & F & T & F & F \\
F & F & F & F & T & T & F & T & T & T \\
F & T & T & F & T & F & T & F & F & F \\
F & T & T & F & T & T & T & T & T & T \\
T & T & F & T & F & F & F & T & F & F \\
T & T & F & T & T & T & F & T & T & T \\
T & T & T & T & F & F & T & F & F & F \\
T & T & T & T & T & T & T & T & T & T \\
\hline
\end{array}$
As can be seen, when $p \lor q$, $p \implies r$ and $q \implies r$ are all true, then so is $r$.
$\blacksquare$





