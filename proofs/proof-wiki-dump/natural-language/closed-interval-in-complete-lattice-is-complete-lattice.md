# 

Source: https://proofwiki.org/wiki/Closed_Interval_in_Complete_Lattice_is_Complete_Lattice



Theorem
Let $\struct {L, \preceq}$ be a complete lattice.
Let $a, b \in L$ with $a \preceq b$.
Let $I = \closedint a b$ be the closed interval between $a$ and $b$.


This article, or a section of it, needs explaining.In particular: Demonstrate that for each $a, b \in L$ that $\closedint a b$ exists and is unique.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then $\struct {I, \preceq}$ is also a complete lattice.


Proof
Let $S \subseteq I$.
If $S = \O$, then it has a supremum in $I$ of $a$ and an infimum in $I$ of $b$.

Let $S \ne \O$.
Since $S \subseteq I$, $a$ is a lower bound of $S$ and $b$ is an upper bound of $S$.
Since $L$ is a complete lattice, $S$ has an infimum, $p$, and a supremum, $q$, in $L$.
Thus by the definitions of infimum and supremum:

$a \preceq p$ and $q \preceq b$
Let $x \in S$.
Since an infimum is a lower bound:

$p \preceq x$
Since a supremum is an upper bound:

$x \preceq q$
Thus $a \preceq p \preceq x \preceq q \preceq b$.
Since $\preceq$ is an ordering, it is transitive, so by Transitive Chaining:

$a \preceq p \preceq b$ and $a \preceq q \preceq b$.
That is, $p, q \in I$.
Thus $p$ and $q$ are the infimum and supremum of $S$ in $I$.
As every subset of $I$ has a supremum and infimum in $I$, $I$ is a complete lattice.
$\blacksquare$


Remark

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
Although $\struct {I, \preceq}$ is a complete lattice, it is only a complete sublattice of $\struct {L, \preceq}$ if $a = \inf L$ and $b = \sup L$. That is, if it equals $\struct {L, \preceq}$.


Sources
1955: Alfred Tarski: A lattice-theoretical fixpoint theorem and its applications (Pacific J. Math. Vol. 5, no. 2: pp. 285 – 309): $\S 1$




