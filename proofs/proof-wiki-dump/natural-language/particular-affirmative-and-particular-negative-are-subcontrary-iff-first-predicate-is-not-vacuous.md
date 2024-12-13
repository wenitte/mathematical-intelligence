# 

Source: https://proofwiki.org/wiki/Particular_Affirmative_and_Particular_Negative_are_Subcontrary_iff_First_Predicate_is_not_Vacuous



Theorem
Consider the categorical statements:








\(\ds \mathbf I:\)   

The particular affirmative:   

  \(\ds \exists x:\)

\(\ds \map S x \land \map P x \)   







  






\(\ds \mathbf O:\)   

The particular negative:   

  \(\ds \exists x:\)

\(\ds \map S x \land \neg \map P x \)   







  

Then:

$\mathbf I$ and $\mathbf O$ are subcontrary
if and only if:

$\exists x: \map S x$

Using the symbology of predicate logic:

$\exists x: \map S x \iff \paren {\paren {\exists x: \map S x \land \map P x} \lor \paren {\exists x: \map S x \land \neg \map P x} }$


Proof
Sufficient Condition
Let $\exists x: \map S x$.
Suppose $\mathbf I$ and $\mathbf O$ are both false.
As $\mathbf I$ is false, then by the Rule of Conjunction:

$\neg \map P x$
As $\mathbf O$ is false, then by the Rule of Conjunction:

$\neg \neg \map P x$
and so by Double Negation:

$\map P x$
It follows by Proof by Contradiction that $\mathbf I$ and $\mathbf O$ are not both false.
Thus, by definition, $\mathbf I$ and $\mathbf O$ are subcontrary statements.
$\Box$


Necessary Condition
Let $\mathbf I$ and $\mathbf O$ be subcontrary statements
Suppose $\neg \exists x: \map S x$.
From the definition of logical conjunction, it follows that:

$\neg \paren {\exists x: \map S x \land \map P x}$
Similarly from the definition of logical conjunction, it follows that:

$\neg \paren {\exists x: \map S x \land \neg \map P x}$
That is, both $\mathbf I$ and $\mathbf O$ are false.
So, by definition, $\mathbf I$ and $\mathbf O$ are not subcontrary.
It follows by Proof by Contradiction that $\exists x: \map S x$.
$\blacksquare$


Also defined as
Some sources gloss over the possibility of $\map S x$ being vacuous and merely report that the particular affirmative and particular negative are subcontrary.


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $4$: The Predicate Calculus $2$: $4$ The Syllogism
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $4$: Propositional Functions and Quantifiers: $4.1$: Singular Propositions and General Propositions




