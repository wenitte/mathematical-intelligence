# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Predicate_Logic)/Assertion_of_Universality



Theorem
Let $\forall$ and $\exists$ denote the universal quantifier and existential quantifier respectively.
Then:

$\forall x: \map P x \dashv \vdash \neg \paren {\exists x: \neg \map P x}$
If everything is, there exists nothing that is not.


Proof
By the tableau method of natural deduction:


$\forall x: \map P x \vdash \neg \paren {\exists x: \neg \map P x} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\forall x: \map P x$

Premise

(None)




2


2

$\exists x: \neg \map P x$

Assumption

(None)




3


2

$\neg \map P {\mathbf a}$

Existential Instantiation

2

for some arbitrary $\mathbf a$


4


1

$\map P {\mathbf a}$

Universal Instantiation

1




5


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

3, 4




6


1

$\neg \paren {\exists x: \neg \map P x}$

Proof by Contradiction: $\neg \II$

2 – 5

Assumption 2 has been discharged
$\Box$

By the tableau method of natural deduction:


$\neg \paren {\exists x: \neg \map P x} \vdash \forall x: \map P x$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg \paren {\exists x: \neg \map P x}$

Premise

(None)




2


2

$\neg \paren {\forall x: \map P x}$

Assumption

(None)




3


2

$\exists x: \neg \map P x$

Sequent Introduction

2

Denial of Universality


4


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

1, 3




5


1

$\forall x: \map P x$

Reductio ad Absurdum

2 – 4

Assumption 2 has been discharged
$\blacksquare$


Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle, by way of Reductio ad Absurdum.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.


Source of Name
This entry was named for Augustus De Morgan.


Sources
1972: A.G. Howson: A Handbook of Terms used in Algebra and Analysis ... (previous) ... (next): $\S 1$: Some mathematical language: Variables and quantifiers
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{III}$: The Logic of Predicates $(1): \ 3$: Quantifiers: Relations between quantifiers $1$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.1$: The need for logic




