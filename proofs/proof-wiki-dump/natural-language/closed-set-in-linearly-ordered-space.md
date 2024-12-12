# 

Source: https://proofwiki.org/wiki/Closed_Set_in_Linearly_Ordered_Space


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\struct {X, \preceq, \tau}$ be a linearly ordered space.
Let $C$ be a subset of $X$.

Then $C$ is closed in $X$ if and only if for all non-empty subsets $S$ of $C$:

If $s \in X$ is a supremum or infimum of $S$ in $X$, then $s \in C$.


Proof
Necessary Condition
Suppose that $C$ be closed.
Let $S$ be a non-empty subset of $C$.
Let $b \in X \setminus C$.
We will show that $b$ is not a supremum of $S$.

If $b$ is not an upper bound of $S$, then by definition $b$ cannot be a supremum of $S$.
Suppose, then, that $b$ is an upper bound of $S$.
Since $C$ is closed and $b \notin C$, there must be an open interval or open ray $U$ containing $b$ that is disjoint from $Y$.
Since $b$ is an upper bound for $S$ and $S$ is not empty, $U$ cannot be a downward-pointing ray.
Thus $U$ is either an open interval $\openint a q$ or an upward-pointing open ray ${\uparrow}a$.
Then $a \prec b$.

Since $b \in U$, and $b$ is an upper bound of $S$, no element strictly succeeding all elements of $U$ can be in $S$.
By the above and the fact that $S \subseteq C$, ${\uparrow}a \cap S = \O$, so $a$ is an upper bound of $S$.
Since $a \prec b$, $b$ is not a supremum of $S$.
A similar argument shows that $b$ is not an infimum.
$\Box$


Sufficient Condition
Suppose that no nonempty subset of $C$ has a supremum or infimum relative to $X$ that lies in $X \setminus C$.
Let $p \in X \setminus C$.


Case 1: $p$ is an upper bound of $C$
Since $C$ is a non-empty subset of $C$, it does not have a supremum in $X \setminus C$.
Thus $p$ is not a supremum of $C$.
Therefore, $C$ has an upper bound $a \in X$ such that $a \prec p$.
Thus ${\uparrow_X}a$ contains $p$ and is disjoint from $C$, so $p$ is not an adherent point of $C$.


Case 2: $p$ is a lower bound of $C$
The same approach used for case 1 proves $p$ is not an adherent point of $C$.


Case 3: $p$ is neither an upper nor a lower bound of $C$
In this case, $C \cap {\downarrow_X} p$ and $C \cap {\uparrow_X} p$ are nonempty, and their union is $C$.
Thus $p$ is not a supremum of $C \cap {\downarrow_X} p$ and is not an infimum of $C \cap {\uparrow_X}p$.
Thus there are $a, b \in X$ such that $a \prec p \prec b$, $a$ is an upper bound of $C \cap {\downarrow_X}p$, and $b$ is a lower bound of $C \cap {\downarrow_X} p$.
Then $\openint a b$ contains $p$ and is disjoint from $C$, so $p$ is not an adherent point of $C$.
Since $C$ contains all of its adherent points, it is closed.
$\blacksquare$


Note

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: Extract this and put it nto its own pageYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
Non-empty subsets of $C$ may not have suprema or infima in $X$, but if they have them, they are elements of $C$.


Also see
Compact Subspace of Linearly Ordered Space




