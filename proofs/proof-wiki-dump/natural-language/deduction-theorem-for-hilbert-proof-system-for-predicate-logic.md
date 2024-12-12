# 

Source: https://proofwiki.org/wiki/Deduction_Theorem_for_Hilbert_Proof_System_for_Predicate_Logic


This page has been identified as a candidate for refactoring of medium complexity.In particular: Into Deduction TheoremUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Let $\mathscr H$ be instance 1 of a Hilbert proof system for predicate logic.

Then the deduction rule:

$\dfrac{U,\mathbf A \vdash \mathbf B}{U \vdash \mathbf A \implies \mathbf B}$
is a derived rule for provable consequences in $\mathscr H$.


Proof
For any proof of $U, \mathbf A \vdash \mathbf B$, we indicate how to transform it into a proof of $U \vdash \mathbf A \implies \mathbf B$ without using the deduction rule.
This is done by applying the Second Principle of Mathematical Induction to the length $n$ of the proof of $U,\mathbf A \vdash \mathbf B$.

By definition of $\mathscr H$, then one of the following must occur:

$\mathbf B \in U$
$\mathbf B$ is an axiom of $\mathscr H$
$\mathbf B = \mathbf A$
$\mathbf B$ is derived from Modus Ponens

In the first two cases, we can craft the following proof of $U \vdash \mathbf A \implies \mathbf B$:



$U \vdash \mathbf A \implies \mathbf B$


Line


Pool

Formula

Rule

Depends upon

Notes


1




$\mathbf B$

Axiom of $\map {\mathscr H} U$

(None)

By definition of provable consequence


2




$\mathbf B \implies \paren{ \mathbf A \implies \mathbf B }$

Axiom 1

(None)

True Statement is Implied by Every Statement


3




$\mathbf A \implies \mathbf B$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 2



$\Box$

Next, if $\mathbf B = \mathbf A$, then $\mathbf A \implies \mathbf B$ is a tautology, and hence satisfies axiom 1 of $\mathscr H$.
$\Box$

Lastly, suppose that $\mathbf B$ is derived from Modus Ponens, so that we have $\mathbf B'$ and $\mathbf B' \implies \mathbf B$ as provable consequences of $U, \mathbf A$.
By the induction hypothesis, we have proofs of $U \vdash \mathbf A \implies \mathbf B'$ and $U \vdash \mathbf A \implies \paren{ \mathbf B' \implies \mathbf B }$.
Then, expanding upon these proofs:



$U \vdash \mathbf A \implies \mathbf B$


Line


Pool

Formula

Rule

Depends upon

Notes


1




$\mathbf A \implies \mathbf B'$

Induction Hypothesis

(None)




2




$\mathbf A \implies \paren{ \mathbf B' \implies \mathbf B }$

Induction Hypothesis

(None)




3




$\mathbf A \implies \paren{ \mathbf B' \implies \mathbf B } \implies \paren{ \paren{ \mathbf A \implies \mathbf B' } \implies \paren{ \mathbf A \implies \mathbf B } }$

Axiom 1

(None)

Self-Distributive Law for Conditional


4




$\paren{ \mathbf A \implies \mathbf B' } \implies \paren{ \mathbf A \implies \mathbf B }$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 3




5




$\mathbf A \implies \mathbf B$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 4



$\Box$

Hence the result by the Second Principle of Mathematical Induction.
$\blacksquare$


Sources
2009: Kenneth Kunen: The Foundations of Mathematics ... (previous) ... (next): $\text{II}.11$ Some Strategies for Constructing Proofs: Lemma $\text{II}.11.1$ (The Deduction Theorem)




