# 

Source: https://proofwiki.org/wiki/Rule_of_Material_Implication/Formulation_2/Proof_1

Theorem
$\vdash \paren {p \implies q} \iff \paren {\neg p \lor q}$


Proof
By the tableau method of natural deduction:


$\paren {p \implies q} \iff \paren {\neg p \lor q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies q$

Assumption

(None)




2


1

$\neg p \lor q$

Sequent Introduction

1

Rule of Material Implication: Formulation 1


3




$\paren {p \implies q} \implies \paren {\neg p \lor q}$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$\neg p \lor q$

Assumption

(None)




5


4

$p \implies q$

Sequent Introduction

4

Rule of Material Implication: Formulation 1


6




$\paren {\neg p \lor q} \implies \paren {p \implies q}$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\paren {p \implies q} \iff \paren {\neg p \lor q}$

Biconditional Introduction: $\iff \II$

3, 6


$\blacksquare$


Law of the Excluded Middle
This proof depends on the Law of the Excluded Middle, by way of Rule of Material Implication/Formulation 1/Forward Implication.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this proof from an intuitionistic perspective.





