# 

Source: https://proofwiki.org/wiki/Destructive_Dilemma/Formulation_1



Theorem













\(\ds p \implies q\)

\(\)







\(\ds \)




















\(\ds r \implies s\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds \neg q \lor \neg s \implies \neg p \lor \neg r\)

\(\)







\(\ds \)











Proof 1
By the tableau method of natural deduction:


$p \implies q, r \implies s \vdash \neg q \lor \neg s \implies \neg p \lor \neg r$


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

$r \implies s$

Premise

(None)




3


3

$\neg q \lor \neg s$

Assumption

(None)




4


4

$\neg q$

Assumption

(None)




5


1, 4

$\neg p$

Modus Tollendo Tollens (MTT)

1, 4




6


1, 4

$\neg p \lor \neg r$

Rule of Addition: $\lor \II_1$

5




7


7

$\neg s$

Assumption

(None)




8


2, 7

$\neg r$

Modus Tollendo Tollens (MTT)

2, 7




9


2, 7

$\neg p \lor \neg r$

Rule of Addition: $\lor \II_2$

8




10


1, 2, 3

$\neg p \lor \neg r$

Proof by Cases: $\text{PBC}$

3, 4 – 6, 7 – 9

Assumptions 4 and 7 have been discharged


11


1, 2

$\neg q \lor \neg s \implies \neg p \lor \neg r$

Rule of Implication: $\implies \II$

3 – 10

Assumption 3 has been discharged

$\blacksquare$


Proof 2
By the tableau method of natural deduction:


$p \implies q, r \implies s \vdash \neg q \lor \neg s \implies \neg p \lor \neg r$


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

$r \implies s$

Premise

(None)




3


1, 2

$\paren {p \land r} \implies \paren {q \land s}$

Sequent Introduction

1, 2

Praeclarum Theorema


4


4

$\neg q \lor \neg s$

Assumption

(None)




5


4

$\neg \paren {q \land s}$

Sequent Introduction

4

De Morgan's Laws: Disjunction of Negations


6


1, 2, 4

$\neg \paren {p \land r}$

Modus Tollendo Tollens (MTT)

3, 5




7


1, 2

$\neg p \lor \neg r$

Sequent Introduction

6

De Morgan's Laws: Disjunction of Negations


8


1, 2

$\neg q \lor \neg s \implies \neg p \lor \neg r$

Rule of Implication: $\implies \II$

4 – 7

Assumption 4 has been discharged

$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables to the proposition.
As can be seen for all boolean interpretations by inspection, where the truth value under the main connective on the left hand side is $\T$, that under the one on the right hand side is also $\T$:

$\begin{array}{|ccccccc||ccccccccccc|} \hline
(p & \implies & q) & \land & (r & \implies & s) & (\neg & q & \lor & \neg & s) & \implies & (\neg & p & \lor & \neg & r) \\
\hline
\F & \T & \F & \T & \F & \T & \F & \T & \F & \T & \T & \F & \T & \T & \F & \T & \T & \F \\
\F & \T & \F & \T & \F & \T & \T & \T & \F & \T & \F & \T & \T & \T & \F & \T & \T & \F \\
\F & \T & \F & \F & \T & \F & \F & \T & \F & \T & \T & \F & \T & \T & \F & \T & \F & \T \\
\F & \T & \F & \T & \T & \T & \T & \T & \F & \T & \F & \T & \T & \T & \F & \T & \F & \T \\
\F & \T & \T & \T & \F & \T & \F & \F & \T & \T & \T & \F & \T & \T & \F & \T & \T & \F \\
\F & \T & \T & \T & \F & \T & \T & \F & \T & \F & \F & \T & \T & \T & \F & \T & \T & \F \\
\F & \T & \T & \F & \T & \F & \F & \F & \T & \T & \T & \F & \T & \T & \F & \T & \F & \T \\
\F & \T & \T & \T & \T & \T & \T & \F & \T & \F & \F & \T & \T & \T & \F & \T & \F & \T \\
\T & \F & \F & \F & \F & \T & \F & \T & \F & \T & \T & \F & \T & \F & \T & \T & \T & \F \\
\T & \F & \F & \F & \F & \T & \T & \T & \F & \T & \F & \T & \T & \F & \T & \T & \T & \F \\
\T & \F & \F & \F & \T & \F & \F & \T & \F & \T & \T & \F & \F & \F & \T & \F & \F & \T \\
\T & \F & \F & \F & \T & \T & \T & \T & \F & \T & \F & \T & \F & \F & \T & \F & \F & \T \\
\T & \T & \T & \T & \F & \T & \F & \F & \T & \T & \T & \F & \T & \F & \T & \T & \T & \F \\
\T & \T & \T & \T & \F & \T & \T & \F & \T & \F & \F & \T & \T & \F & \T & \T & \T & \F \\
\T & \T & \T & \F & \T & \F & \F & \F & \T & \T & \T & \F & \F & \F & \T & \F & \F & \T \\
\T & \T & \T & \T & \T & \T & \T & \F & \T & \F & \F & \T & \T & \F & \T & \F & \F & \T \\
\hline
\end{array}$
Hence the result.
$\blacksquare$

Note that the two formulas are not equivalent, as the relevant columns do not match exactly.





