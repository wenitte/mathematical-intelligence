# 

Source: https://proofwiki.org/wiki/Modus_Ponendo_Ponens/Sequent_Form



Theorem
The Modus Ponendo Ponens can be symbolised by the sequent:














\(\ds p\)

\(\implies\)







\(\ds q\)




















\(\ds p\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds q\)

\(\)







\(\ds \)











Proof 1
By the tableau method of natural deduction:


$p \implies q, p \vdash q$


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

$p$

Premise

(None)




3


1, 2

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 2


$\blacksquare$


Proof 2
By the tableau method of natural deduction:


$p \implies q, p \vdash q$


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

$p$

Premise

(None)




3


3

$p$

Assumption

(None)




4


1, 3

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 3




5


5

$\lnot p$

Assumption

(None)




6


2, 5

$\bot$

Principle of Non-Contradiction: $\neg \EE$

2, 5




7


2, 5

$q$

Rule of Explosion: $\bot \EE$

6




8




$p \lor \lnot p$

Law of Excluded Middle

(None)




9


1, 2

$q$

Proof by Cases: $\text{PBC}$

8, 3 – 4, 5 – 7

Assumptions 3 and 5 have been discharged

$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables.
$\begin{array}{|c|ccc||c|} \hline
p & p & \implies & q & q\\
\hline
\F & \F & \T & \F & \F \\
\F & \F & \T & \T & \T \\
\T & \T & \F & \F & \F \\
\T & \T & \T & \T & \T \\
\hline
\end{array}$
As can be seen, when $p$ is true, and so is $p \implies q$, then $q$ is also true.
$\blacksquare$


Sources
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $3$: The Method of Deduction: $3.1$: Formal Proof of Validity: Rules of Inference: $1.$




