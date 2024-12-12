# 

Source: https://proofwiki.org/wiki/Clavius%27s_Law/Formulation_1/Proof_1

Theorem
$\neg p \implies p \vdash p$


Proof
By the tableau method of natural deduction:


$\neg p \implies p \vdash p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p \implies p$

Premise

(None)




2




$p \lor \neg p$

Law of Excluded Middle

(None)




3


3

$\neg p$

Assumption

(None)

Either $p$ is false ...


4


1, 3

$p$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 3




5


5

$p$

Assumption

(None)

... or $p$ is true


6


1

$p$

Proof by Cases: $\text{PBC}$

2, 3 – 4, 5 – 5

Assumptions 3 and 5 have been discharged

$\blacksquare$


Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.





