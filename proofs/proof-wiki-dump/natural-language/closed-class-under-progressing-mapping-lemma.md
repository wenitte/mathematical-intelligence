# 

Source: https://proofwiki.org/wiki/Closed_Class_under_Progressing_Mapping_Lemma

Theorem
Let $N$ be a class which is closed under a progressing mapping $g$.
Let $g$ be such that:

$\forall x, y \in N: \map g x \subseteq y \lor y \subseteq x$
if $\map g x = x$, then $x$ is the greatest element of $N$.
Let the following hold:

$A \subseteq N$ is a subclass of $N$
$x \in N$ is an element of $N$
Let $x$ be:

a proper subset of all elements of $A$
and:

the greatest element of $A$ with that property.

Then $\map g x \in A$ and is the smallest element of $A$.


Proof
Let the hypothesis be assumed.
Let $A$ be an arbitrary non-empty subclass of $N$.
Let $L$ be the class of all elements $y$ of $N$ such that $y$ is a proper subset of all elements of $A$.
Let $x$ be the greatest element of $L$.
It is to be shown that $\map g x$ is the smallest element of $A$.

We have that $x$ is a proper subset of all elements of $A$.
Then by Corollary 1 to the Sandwich Principle:

$\map g x$ is a subset of all elements of $A$.
It remains to be shown that $\map g x$ is itself an element of $A$.

We have that $x$ is a proper subset of all elements of $A$.
We also have that $x$ contains at least one element.
Therefore $x$ cannot be the greatest element of $N$.
Therefore, by hypothesis:

$x \ne \map g x$
Thus $x$ is a proper subset of $\map g x$.
Because $x$ is the greatest element of $L$, $\map g x$ is not therefore an element of $L$.
Therefore there exists at least $1$ element $y$ of $A$ such that $\map g x$ is not a proper subset of $y$.
But we have shown that $\map g x \subseteq y$.
Hence:

$\map g x = y$
and so:

$\map g x \in A$
Hence the result.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 4$ A double induction principle and its applications: Lemma $4.15$




