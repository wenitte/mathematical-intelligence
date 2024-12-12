# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Logic)/Conjunction_of_Negations/Formulation_2/Proof_1

Theorem
$\vdash \paren {\neg p \land \neg q} \iff \paren {\neg \paren {p \lor q} }$


Proof
By the tableau method of natural deduction:


$\vdash \left({\neg p \land \neg q}\right) \iff \left({\neg \left({p \lor q}\right)}\right)$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p \land \neg q$

Assumption

(None)




2


1

$\neg \left({p \lor q}\right)$

Sequent Introduction

1

De Morgan's Laws (Logic): Disjunction of Negations: Formulation 1


3




$\left({\neg p \land \neg q}\right) \implies \left({\neg \left({p \lor q}\right)}\right)$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$\neg \left({p \lor q}\right)$

Assumption

(None)




5


4

$\neg p \land \neg q$

Sequent Introduction

4

De Morgan's Laws (Logic): Disjunction of Negations: Formulation 1


6




$\left({\neg \left({p \lor q}\right)}\right) \implies \left({\neg p \land \neg q}\right)$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\left({\neg p \land \neg q}\right) \iff \left({\neg \left({p \lor q}\right)}\right)$

Biconditional Introduction: $\iff \II$

3, 6



$\blacksquare$





