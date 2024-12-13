# 

Source: https://proofwiki.org/wiki/Non-Empty_Bounded_Subset_of_Minimally_Inductive_Class_under_Progressing_Mapping_has_Greatest_Element



Theorem
Let $M$ be a class which is minimally inductive under a progressing mapping $g$.
Then every non-empty bounded subset of $M$ has a greatest element.


Proof 1
Let the hypothesis be assumed.
The proof proceeds by general induction.

For all $x \in M$, let $\map P x$ be the proposition:

Every non-empty subset of $M$ which is bounded by $x$ has a greatest element.


Basis for the Induction
Let $x = \O$.
The only non-empty subset of $M$ which is bounded by $\O$ is $\set \O$.
Then it is seen that $\set \O$ has a greatest element, that is $\O$.

Thus $\map P \O$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P x$ is true, where $x \in M$, then it logically follows that $\map P {\map g x}$ is true.

So this is the induction hypothesis:

Every non-empty subset of $M$ which is bounded by $x$ has a greatest element.

from which it is to be shown that:

Every non-empty subset of $M$ which is bounded by $\map g x$ has a greatest element.


Induction Step
This is the induction step:
Let the induction hypothesis be assumed.
Let $B$ be a non-empty subset of $M$ which is bounded by $\map g x$.
Thus, by definition, every element of $B$ is a subset of $\map g x$.

It is to be shown that $B$ has a greatest element $m$.
That is, that $m \in B$ and every element of $B$ is a subset of $m$

Let $\map g x \in B$.
By definition of subset bounded by $\map g x$, every element of $B$ is a subset of $\map g x$.
That is, $\map g x$ is itself the greatest element of $B$.

Suppose that $\map g x \notin B$.
Then every element of $B$ is a proper subset of $\map g x$.
Let $y \in B$ be arbitrary.
Because $y$ is a proper subset of $\map g x$, there exists $z \in \map g x$ such that $z \notin y$.
Thus $\map g x$ is not a subset of $y$.
From Minimally Inductive Class under Progressing Mapping induces Nest:

$\forall x, y \in M: \map g x \subseteq y \lor y \subseteq x$
Because it is not the case that $\map g x \subseteq y$, it must be that:

$y \subseteq x$
Thus, as $y$ is arbitrary, it follows that every element of $B$ is a proper subset of $x$.
Thus $B$ is bounded by $x$.
It follows by the induction hypothesis that $B$ has a greatest element.

So $\map P x \implies \map P {\map g x}$ and the result follows by the Principle of General Induction.

Therefore:

For all $x \in M$, every non-empty subset of $M$ which is bounded by $x$ has a greatest element.
That is:

Every non-empty bounded subset of $M$ has a greatest element.
$\blacksquare$


Proof 2
A minimally inductive class under $g$ is the same thing as a minimally closed class under $g$ with respect to $\O$.
The result then follows by a direct application of Bounded Subset of Minimally Closed Class under Progressing Mapping has Greatest Element.
$\blacksquare$





