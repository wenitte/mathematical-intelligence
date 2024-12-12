# 

Source: https://proofwiki.org/wiki/Conjunction_with_Tautology/Proof_1

Theorem
$p \land \top \dashv \vdash p$


Proof
By the tableau method of natural deduction:


$p \land \top \vdash p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \land \top$

Premise

(None)




2


1

$p$

Rule of Simplification: $\land \EE_1$

1



$\Box$

By the tableau method of natural deduction:


$p \vdash p \land \top$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p$

Premise

(None)




2




$q \lor \neg q$

Law of Excluded Middle

(None)




3




$\top$

Law of Excluded Middle

(None)




4


1

$p \land \top$

Rule of Conjunction: $\land \II$

1, 3


$\blacksquare$

The validity of the material on this page is questionable.In particular: The above needs to be reviewed.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.

The propositions:

If it's not false, it must be true
and

If it's not true, it must be false
are indeed valid only in the context where there are only two truth values.
From the intuitionistic perspective, these results do not hold.





