# 

Source: https://proofwiki.org/wiki/Destructive_Dilemma/Formulation_1/Proof_2

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











Proof
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





