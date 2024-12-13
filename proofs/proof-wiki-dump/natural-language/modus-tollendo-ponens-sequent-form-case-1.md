# 

Source: https://proofwiki.org/wiki/Modus_Tollendo_Ponens/Sequent_Form/Case_1



Theorem













\(\ds p \lor q\)

\(\)







\(\ds \)




















\(\ds \neg p\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds q\)

\(\)







\(\ds \)











Proof 1
By the tableau method of natural deduction:


$p \lor q, \neg p \vdash q$


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

$\neg p$

Premise

(None)




3


3

$p$

Assumption

(None)




4


2

$p \implies q$

Sequent Introduction

2

False Statement implies Every Statement


5


2, 3

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

4, 3




6


6

$q$

Assumption

(None)




7


1, 2

$q$

Proof by Cases: $\text{PBC}$

1, 3 – 5, 6 – 6

Assumptions 3 and 6 have been discharged
$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables to the proposition.
$\begin{array}{|ccc|cc||c|} \hline
p & \lor & q & \neg & p & q\\
\hline
\F & \F & \F & \T & \F & \F \\
\F & \T & \T & \T & \F & \T \\
\T & \T & \F & \F & \T & \F \\
\T & \T & \T & \F & \T & \T \\
\hline
\end{array}$
As can be seen, when $p \lor q$ is true, and so is $\neg p$, then $q$ is also true.
$\blacksquare$


Sources
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $3$: The Method of Deduction: $3.1$: Formal Proof of Validity: Rules of Inference: $4.$
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{II}$: The Logic of Statements $(2): \ 1$: Decision procedures and proofs: $5$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.14$: Exercise $17 \ \text{(iii)}$
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.1$: Rules for natural deduction: Exercises $1.5: \ 1 \ \text{(c)}$




