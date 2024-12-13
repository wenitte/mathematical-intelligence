# 

Source: https://proofwiki.org/wiki/Minimally_Closed_Class_under_Progressing_Mapping_is_Well-Ordered/Proof

Theorem
Let $N$ be a class which is closed under a progressing mapping $g$.
Let $b$ be an element of $N$ such that $N$ is minimally closed under $g$ with respect to $b$.

$N$ is well-ordered under the subset relation.


Proof
According to hypothesis, let $M$ be a minimally closed under $g$ with respect to $b$.
By Minimally Closed Class under Progressing Mapping induces Nest:

$\forall x, y \in M: \map g x \subseteq y \lor y \subseteq x$
By Fixed Point of Progressing Mapping on Minimally Closed Class is Greatest Element:

if $x$ is a fixed point of $g$, then $x$ is the greatest element of $M$.
Thus the conditions for Closed Class under Progressing Mapping Lemma hold.

In order to show that $M$ is well-ordered under the subset relation, it is to be shown that every non-empty subclass $A$ of $M$ has a smallest element.

Let $A$ be an arbitrary non-empty subclass of $N$.
Let $L$ be the class of all elements $y$ of $N$ such that $y$ is a proper subset of all elements of $A$.
If $b \in A$, then from Smallest Element of Minimally Closed Class under Progressing Mapping, $b$ is the smallest element of $A$.
So, consider the case where $b \notin A$.
Then $b$ is a proper subset of every element of $A$.
Thus $b \in L$ and so $L$ is non-empty.
By definition, $L$ is bounded by all elements of $A$.
Since $A$ is non-empty, $L$ is bounded by at least one element of $A$.
Hence by Non-Empty Bounded Subset of Minimally Inductive Class under Progressing Mapping has Greatest Element:

$L$ has a greatest element $x$.
Therefore, by Closed Class under Progressing Mapping Lemma, $\map g x$ is the smallest element of $A$.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 4$ A double induction principle and its applications: Exercise $4.1$




