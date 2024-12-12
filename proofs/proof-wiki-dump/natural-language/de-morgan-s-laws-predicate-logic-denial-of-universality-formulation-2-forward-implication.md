# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Predicate_Logic)/Denial_of_Universality/Formulation_2/Forward_Implication

Theorem
Let $\forall$ and $\exists$ denote the universal quantifier and existential quantifier respectively.
Then:

$\vdash \neg \paren {\forall x: \map P x} \implies \paren{ \exists x: \neg \map P x }$


Proof

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: These template invocations can be improved but I am happy the argument is at least conveyed nowYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
This proof is derived in the context of the following proof system: Hilbert Proof System Instance 1 for Predicate Logic.By the tableau method:


$\vdash \neg \paren {\forall x: \map P x} \implies \paren{ \exists x: \neg \map P x }$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg\neg \map P c \vdash \map P c$

Premise

(None)

Axiom 1: Propositional Tautology, $c$ arbitrary


2




$\forall x: \neg\neg \map P x \vdash \neg\neg \map P c$

Universal Instantiation






3




$\forall x: \neg\neg \map P x \vdash \map P c$

Theorem Introduction

(None)

from 1, 2, Provable Consequence of Theorems is Theorem


4




$\forall x: \neg\neg \map P x \vdash \forall x: \map P x$

Universal Generalisation

3




5




$\paren{ \forall x: \neg\neg \map P x } \implies \forall x: \map P x$

Theorem Introduction

(None)

from 4, Deduction Theorem for Hilbert Proof System for Predicate Logic


6




$\neg \paren{ \forall x: \map P x } \implies \neg \paren{ \forall x: \neg\neg \map P x }$

Theorem Introduction

(None)

from 5, Rule of Transposition


7


7

$\paren{ \forall x: \neg \neg \map P x } \iff \neg \paren{ \exists x: \neg \map P x }$

Premise

(None)

Axiom 6


8




$\neg \paren{ \exists x: \neg \map P x } \implies \paren{ \forall x: \neg \neg \map P x }$

Biconditional Elimination: $\iff \EE_2$

7




9




$\neg \paren{ \forall x: \neg\neg \map P x } \implies \paren{ \exists x: \neg \map P x }$

Theorem Introduction

(None)

from 8, Rule of Transposition


10




$\neg \paren {\forall x: \map P x} \implies \paren{ \exists x: \neg \map P x }$

Theorem Introduction

(None)

from 6, 9, Hypothetical Syllogism
$\blacksquare$


Sources
2009: Kenneth Kunen: The Foundations of Mathematics ... (previous) ... (next): $\text{II}.11$ Some Strategies for Constructing Proofs: Example $\text{II}.11.9$

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: formulation 1/2If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $4$: The Predicate Calculus $2$: $4$ The Syllogism: $149$
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{III}$: The Logic of Predicates $(1): \ 3$: Quantifiers: Relations between quantifiers $4$




