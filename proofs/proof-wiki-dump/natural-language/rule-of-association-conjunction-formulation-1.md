# 

Source: https://proofwiki.org/wiki/Rule_of_Association/Conjunction/Formulation_1



Theorem
$p \land \left({q \land r}\right) \dashv \vdash \left({p \land q}\right) \land r$


Proof 1
By the tableau method of natural deduction:


$p \land \left({q \land r}\right) \vdash \left({p \land q}\right) \land r$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \land \left({q \land r}\right)$

Premise

(None)




2


1

$p$

Rule of Simplification: $\land \EE_1$

1




3


1

$q \land r$

Rule of Simplification: $\land \EE_2$

1




4


1

$q$

Rule of Simplification: $\land \EE_1$

3




5


1

$r$

Rule of Simplification: $\land \EE_2$

3




6


1

$p \land q$

Rule of Conjunction: $\land \II$

2, 4




7


1

$\left({p \land q}\right) \land r$

Rule of Conjunction: $\land \II$

6, 5




By the tableau method of natural deduction:


$\left({p \land q}\right) \land r \vdash p \land \left({q \land r}\right)$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\left({p \land q}\right) \land r$

Premise

(None)




2


1

$p \land q$

Rule of Simplification: $\land \EE_1$

1




3


1

$r$

Rule of Simplification: $\land \EE_2$

1




4


1

$p$

Rule of Simplification: $\land \EE_1$

2




5


1

$q$

Rule of Simplification: $\land \EE_2$

2




6


1

$q \land r$

Rule of Conjunction: $\land \II$

5, 3




7


1

$p \land \left({q \land r}\right)$

Rule of Conjunction: $\land \II$

4, 6



$\blacksquare$


Proof 2
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|ccccc||ccccc|} \hline
p & \land & (q & \land & r) & (p & \land & q) & \land & r \\
\hline
F & F & F & F & F & F & F & F & F & F \\
F & F & F & F & T & F & F & F & F & T \\
F & F & T & F & F & F & F & T & F & F \\
F & F & T & T & T & F & F & T & F & T \\
T & F & F & F & F & T & F & F & F & F \\
T & F & F & F & T & T & F & F & F & T \\
T & F & T & F & F & T & T & T & F & F \\
T & T & T & T & T & T & T & T & T & T \\
\hline
\end{array}$
$\blacksquare$


Sources
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.1$: Rules for natural deduction: Exercise $1.2: \ 3$
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$




