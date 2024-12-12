# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Predicate_Logic)/Denial_of_Universality/Formulation_1



Theorem
Let $\forall$ and $\exists$ denote the universal quantifier and existential quantifier respectively.
Then:

$\neg \paren {\forall x: \map P x} \dashv \vdash \exists x: \neg \map P x$


Proof
By the tableau method of natural deduction:


$\neg \paren {\forall x: \map P x} \vdash \exists x: \neg \map P x$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg \paren {\forall x: \map P x}$

Premise

(None)




2


2

$\neg \paren {\exists x: \neg \map P x}$

Assumption

(None)




3


3

$\neg \map P {\mathbf a}$

Assumption

(None)

for an arbitrary $\mathbf a$


4


3

$\exists x: \neg \map P x$

Existential Generalisation

3




5


2, 3

$\bot$

Principle of Non-Contradiction: $\neg \EE$

2, 4




6


2

$\map P {\mathbf a}$

Reductio ad Absurdum

3 – 5

Assumption 3 has been discharged


7


1, 2

$\forall x: \map P x$

Universal Generalisation

6

as $\mathbf a$ was arbitrary


8


2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

1, 7




9


1

$\exists x: \neg \map P x$

Reductio ad Absurdum

2 – 8

Assumption 2 has been discharged
$\Box$

By the tableau method of natural deduction:


$\exists x: \neg \map P x \vdash \neg \paren {\forall x: \map P x} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\exists x: \neg \map P x$

Premise

(None)




2


2

$\forall x: \map P x$

Assumption

(None)




3


1

$\neg \map P {\mathbf a}$

Existential Instantiation

1




4


2

$\map P {\mathbf a}$

Universal Instantiation

2




5


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

3, 4




6


1

$\neg \paren {\forall x: \map P x}$

Proof by Contradiction: $\neg \II$

2 – 5

Assumption 2 has been discharged
$\blacksquare$


Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle, by way of Reductio ad Absurdum.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 3.1 \ \text{(i)}$: Statements and conditions; quantifiers

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: formulation 1/2If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $4$: The Predicate Calculus $2$: $4$ The Syllogism: $149$
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{III}$: The Logic of Predicates $(1): \ 3$: Quantifiers: Relations between quantifiers $4$




