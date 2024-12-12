# 

Source: https://proofwiki.org/wiki/Fixed_Point_of_g-Tower_is_Greatest_Element



Theorem
Let $M$ be a class.
Let $g: M \to M$ be a progressing mapping on $M$.
Let $M$ be a $g$-tower.

Let $x = \map g x$.
Then $x$ is the greatest element (under the subset relation) of $M$.


Proof
Let $x$ be an element of $M$ such that $\map g x = x$.
We will demonstrate by the Principle of Superinduction on $y$ that:

$\forall y \in M: y \subseteq x$

The proof proceeds by superinduction.
For all $y \in M$, let $\map P y$ be the proposition:

$y \subseteq x$


Basis for the Induction
From Empty Set is Subset of All Sets, we have that:

$\O \subseteq x$

Thus $\map P \O$ is seen to hold.

This is the basis for the induction.
$\Box$


Induction Hypothesis
Now it needs to be shown that if $\map P y$ is true, where $y \in M$, then it logically follows that $\map P {\map g y}$ is true.

So this is the induction hypothesis:

$y \subseteq x$

from which it is to be shown that:

$\map g y \subseteq x$


Induction Step
This is the induction step:
Suppose that $y \subseteq x$.
We note that by the 
Then by the Sandwich Principle for G-Towers: Corollary 2:

$\map g y \subseteq \map g x$

But we have that $\map g x = x$.
Thus:

$\map g y \subseteq x$

So $\map P y \implies \map P {\map g y}$.
$\Box$


Closure under Chain Unions
It remains to demonstrate closure under chain unions.

Let $\map P y$ be true for all $y \in C$, where $C$ is an arbitrary chain of elements of $M$.
That is:

$\forall y \in C: y \subseteq x$
Then it follows by Union of Subsets is Subset that:

$\ds \bigcup C \subseteq x$

Thus:

$\forall C: \forall y \in C: \map P y \implies \map P {\ds \bigcup C}$

The result follows by the Principle of Superinduction.
$\Box$

Therefore:

$\forall y \in M: y \subseteq x$
and so $x$ is the greatest element of $M$.
$\blacksquare$


Also see
Fixed Point of Progressing Mapping on Minimally Inductive Class is Greatest Element


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text I$ -- Superinduction and Well Ordering: $\S 2$ Superinduction and double superinduction: Theorem $2.5$




