# 

Source: https://proofwiki.org/wiki/Biconditional_Introduction/Sequent_Form



Theorem
Biconditional Introduction can be symbolised by the sequent:

$p \implies q, q \implies p \vdash p \iff q$


Proof 1
By the tableau method of natural deduction:


$p \implies q, q \implies p \vdash p \iff q$


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

$q \implies p$

Premise

(None)




3


1, 2

$p \iff q$

Biconditional Introduction: $\iff \II$

1, 2



$\blacksquare$


Proof 2
We apply the Method of Truth Tables.
$\begin{array}{|ccccccc||ccc|} \hline
(p & \implies & q) & \land & (q & \implies & p) & p & \iff & q\\
\hline
F & T & F & T & F & T & F & F & T & F \\
F & T & T & F & T & F & F & F & F & T \\
T & F & F & F & F & T & T & T & F & F \\
T & T & T & T & T & T & T & T & T & T \\
\hline
\end{array}$
As can be seen, only when both $p \implies q$ and $q \implies p$ are true, then so is $p \iff q$.
$\blacksquare$


Sources
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.5$: An aside: proof by contradiction: Exercises $1.6: \ 7$




