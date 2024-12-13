# 

Source: https://proofwiki.org/wiki/Negation_of_Excluded_Middle_is_False/Form_1

Theorem
$\neg (p \lor \neg p) \vdash \bot$


Proof
By the tableau method of natural deduction:


$\neg (p \lor \neg p) \vdash \bot$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg (p \lor \neg p)$

Assumption

(None)




2


1

$\neg p \land \neg \neg p$

Sequent Introduction

1

De Morgan's Laws


3


1

$\neg p$

Rule of Simplification: $\land \EE_1$

2




4


1

$\neg\neg p$

Rule of Simplification: $\land \EE_2$

2




5


1

$\bot$

Principle of Non-Contradiction: $\neg \EE$

3, 4



$\blacksquare$


Remark
The specific form of De Morgan's Laws used in this proof does not itself rely on Law of Excluded Middle in any way.





