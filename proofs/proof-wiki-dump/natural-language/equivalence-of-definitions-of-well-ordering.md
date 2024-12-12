# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Well-Ordering



Theorem
The following definitions of the concept of Well-Ordering are equivalent:
Let $\struct {S, \preceq}$ be a ordered set.

Definition 1
The ordering $\preceq$ is a well-ordering on $S$ if and only if every non-empty subset of $S$ has a smallest element under $\preceq$:

$\forall T \subseteq S, T \ne \O: \exists a \in T: \forall x \in T: a \preceq x$
Definition 2
The ordering $\preceq$ is a well-ordering on $S$ if and only if $\preceq$ is a well-founded total ordering.


Proof
Definition 1 implies Definition 2
Consider $X = \set {a, b}$ where $a, b \in S$.
We have by hypothesis that $X$ has a smallest element.
So either $\min X = a$ or $\min X = b$.
If $\min X = a$, then $a \preceq b$.
If $\min X = b$, then $b \preceq a$.
So either $a \preceq b$ or $b \preceq a$.
That is, $a$ and $b$ are comparable.
As this applies to all $a, b \in S$, the ordering $\preceq$ is total.

By hypothesis, every subset of $S$ has a smallest element.
By Smallest Element is Minimal it follows that every subset of $S$ has a minimal element.
Thus it follows that $\preceq$ is a well-ordering on $S$ by definition 2.
$\Box$


Definition 2 implies Definition 1
Let $\preceq$ be a well-ordering on $S$ by definition 2.
That is:

$\preceq$ is a well-founded total ordering.
By definition of well-founded, every $T \subseteq S$ has a minimal element.
By Minimal Element in Toset is Unique and Smallest, every $T \subseteq S$ has a smallest element.
The result follows.
$\blacksquare$





