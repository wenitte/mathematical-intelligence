# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Predicate_Logic)/Assertion_of_Existence



Theorem
Let $\forall$ and $\exists$ denote the universal quantifier and existential quantifier respectively.
Then:

$\neg \paren {\forall x: \neg \map P x} \dashv \vdash \exists x: \map P x$
If not everything is not, there exists something that is.


Proof
By the tableau method of natural deduction:


$\neg \paren {\forall x: \neg \map P x} \vdash \exists x: \map P x$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg \paren {\forall x: \neg \map P x}$

Premise

(None)




2


2

$\neg \paren {\exists x: \map P x}$

Assumption

(None)




3


2

$\forall x: \neg \map P x$

Sequent Introduction

2

Denial of Existence


4


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

1, 3




5


1

$\exists x: \map P x$

Reductio ad Absurdum

2 – 4

Assumption 2 has been discharged
$\Box$

By the tableau method of natural deduction:


$\exists x: \map P x \vdash \neg \paren {\forall x: \neg \map P x} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\exists x: \map P x$

Premise

(None)




2


2

$\forall x: \neg \map P x$

Assumption

(None)




3


1

$\map P {\mathbf a}$

Existential Instantiation

1




4


2

$\neg \map P {\mathbf a}$

Universal Instantiation

2




5


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

3, 4




6


1

$\neg \paren {\forall x: \neg \map P x}$

Proof by Contradiction: $\neg \II$

2 – 5

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
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $4$: The Predicate Calculus $2$: $4$ The Syllogism: $150$
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{III}$: The Logic of Predicates $(1): \ 3$: Quantifiers: Relations between quantifiers $3$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.1$: The need for logic
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.1$: What is a Set?
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): quantifier
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): quantifier




