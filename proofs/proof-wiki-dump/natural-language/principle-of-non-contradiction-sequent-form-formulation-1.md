# 

Source: https://proofwiki.org/wiki/Principle_of_Non-Contradiction/Sequent_Form/Formulation_1



Theorem
The Principle of Non-Contradiction can be symbolised by the sequent:

$p, \neg p \vdash \bot$


Proof 1
By the tableau method of natural deduction:


$p, \neg p \vdash \bot$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p$

Premise

(None)




2


2

$\neg p$

Premise

(None)




3


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

1, 2



$\blacksquare$


Proof 2
We apply the Method of Truth Tables.
$\begin{array}{|cccc||c|} \hline
p & \land & \neg & p & \bot \\
\hline
F & F & T & F & F \\
T & F & F & T & F \\
\hline
\end{array}$
As can be seen by inspection, the truth value of the main connective, that is $\land$, is $F$ for each boolean interpretation for $p$.
$\blacksquare$


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$




