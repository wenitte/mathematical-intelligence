# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Principal_Ideal_of_Preordered_Set



Theorem
Let $\struct {S, \preceq}$ be a preordered set.
Let $I$ be an ideal in $S$.

The following definitions of the concept of Principal Ideal of Preordered Set are equivalent:

Definition 1
Then $I$ is a principal ideal if and only if:

$\exists x \in I: x$ is upper bound for $I$
Definition 2
Then $I$ is a principal ideal if and only if:

$\exists x \in S: I = x^\preceq$
where $x^\preceq$ denotes the lower closure of $x$.


Proof
Definition $1$ implies Definition $2$
Assume that

$\exists x \in I: x$ is upper bound for $I$
We will prove that

$I \subseteq x^\preceq$
Let $y \in I$.
By definition of upper bound:

$y \preceq x$
Thus by definition of lower closure of element:

$y \in x^\preceq$
$\Box$

We will prove that

$x^\preceq \subseteq I$
Let $y \in x^\preceq$.
By definition of lower closure of element:

$y \preceq x$
Thus by definition of lower section:

$y \in I$
$\Box$

Thus by definition of set equality:

$\exists x \in S: I = x^\preceq$
$\Box$


Definition $2$ implies Definition $1$
Assume that:

$\exists x \in S: I = x^\preceq$
By definition of reflexivity:

$x \preceq x$
Thus by definition of lower closure of element:

$x \in I$
Let $y \in I$.
Thus by definition of lower closure of element:

$y \preceq x$
$\blacksquare$


Sources
Mizar article WAYBEL_0:48




