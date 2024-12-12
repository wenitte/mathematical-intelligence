# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Logic)/Disjunction/Formulation_2/Proof_1

Theorem
$\vdash \paren {p \lor q} \iff \paren {\neg \paren {\neg p \land \neg q} }$


Proof
By the tableau method of natural deduction:


$\vdash \paren {p \lor q} \iff \paren {\neg \paren {\neg p \land \neg q} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \lor q$

Assumption

(None)




2


1

$\neg \paren {\neg p \land \neg q}$

Sequent Introduction

1

De Morgan's Laws (Logic): Disjunction: Formulation 1


3




$\paren {p \lor q} \implies \paren {\neg \paren {\neg p \land \neg q} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$\neg \paren {\neg p \land \neg q}$

Assumption

(None)




5


4

$p \lor q$

Sequent Introduction

4

De Morgan's Laws (Logic): Disjunction: Formulation 1


6




$\paren {\neg \paren {\neg p \land \neg q} } \implies \paren {p \lor q}$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\paren {p \lor q} \iff \paren {\neg \paren {\neg p \land \neg q} }$

Biconditional Introduction: $\iff \II$

3, 6



$\blacksquare$





