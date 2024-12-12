# 

Source: https://proofwiki.org/wiki/Bounded_Subset_of_Minimally_Closed_Class_under_Progressing_Mapping_has_Greatest_Element/Proof



Theorem
Let $N$ be a class which is closed under a progressing mapping $g$.
Let $b$ be an element of $N$ such that $N$ is minimally closed under $g$ with respect to $b$.

Every bounded subset of $N$ has a greatest element.


Proof
Let the hypothesis be assumed.
The proof proceeds by general induction.

For all $x \in N$, let $\map P x$ be the proposition:

Every subset of $N$ which is bounded by $x$ has a greatest element.


Basis for the Induction
Let $x = b$.
From Smallest Element of Minimally Closed Class under Progressing Mapping, $b$ is the smallest element of $N$.
That is:

$\forall x \in N: b \subseteq x$
So the only subset $B$ of $N$ such that $B$ is bounded by $b$ is $B = \set b$.
By definition, $\set b$ trivially has a greatest element, which is $b$.
Thus $\map P b$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P x$ is true, where $x \in M$, then it logically follows that $\map P {\map g x}$ is true.

So this is the induction hypothesis:

Every subset of $N$ which is bounded by $x$ has a greatest element.

from which it is to be shown that:

Every subset of $N$ which is bounded by $\map g x$ has a greatest element.


Induction Step
This is the induction step:
Let the induction hypothesis be assumed.
Let $B$ be a subset of $N$ which is bounded by $\map g x$.
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
From Minimally Closed Class under Progressing Mapping induces Nest:

$\forall x, y \in M: \map g x \subseteq y \lor y \subseteq x$
Because it is not the case that $\map g x \subseteq y$, it must be that:

$y \subseteq x$
Thus, as $y$ is arbitrary, it follows that every element of $B$ is a proper subset of $x$.
Thus $B$ is bounded by $x$.
It follows by the induction hypothesis that $B$ has a greatest element.

So $\map P x \implies \map P {\map g x}$ and the result follows by the Principle of General Induction.

Therefore:

For all $x \in N$, every subset of $N$ which is bounded by $x$ has a greatest element.
That is:

Every bounded subset of $N$ has a greatest element.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 4$ A double induction principle and its applications: Exercise $4.1$




