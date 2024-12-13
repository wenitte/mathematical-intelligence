# 

Source: https://proofwiki.org/wiki/Minimally_Inductive_Class_under_Progressing_Mapping_is_Well-Ordered_under_Subset_Relation

Theorem
Let $M$ be a class which is minimally inductive under a progressing mapping $g$.
Let $x$ be a fixed point of $g$.

Then $M$ is well-ordered under the subset relation.


Proof 1
According to hypothesis, let $M$ be minimally inductive under $g$.
By Minimally Inductive Class under Progressing Mapping induces Nest:

$\forall x, y \in M: \map g x \subseteq y \lor y \subseteq x$
By Fixed Point of Progressing Mapping on Minimally Inductive Class is Greatest Element:

if $x$ is a fixed point of $g$, then $x$ is the greatest element of $M$.
Thus the conditions for Closed Class under Progressing Mapping Lemma hold.

In order to show that $M$ is well-ordered under the subset relation, it is to be shown that every non-empty subclass $A$ of $M$ has a smallest element.

Let $A$ be an arbitrary non-empty subclass of $N$.
Let $L$ be the class of all elements $y$ of $N$ such that $y$ is a proper subset of all elements of $A$.
If $\O \in A$, then $\O$ is the smallest element of $A$.
So, consider the case where $\O \notin A$.
Then $\O$ is a proper subset of every element of $A$.
Thus $\O \in L$ and so $L$ is non-empty.
By definition, $L$ is bounded by all elements of $A$.
Since $A$ is non-empty, $L$ is bounded by at least one element of $A$.
Hence by Non-Empty Bounded Subset of Minimally Inductive Class under Progressing Mapping has Greatest Element:

$L$ has a greatest element $x$.
Therefore, by Closed Class under Progressing Mapping Lemma, $\map g x$ is the smallest element of $A$.
$\blacksquare$


Proof 2
A minimally inductive class under $g$ is the same thing as a minimally closed class under $g$ with respect to $\O$.
The result then follows by a direct application of Minimally Closed Class under Progressing Mapping is Well-Ordered.
$\blacksquare$





