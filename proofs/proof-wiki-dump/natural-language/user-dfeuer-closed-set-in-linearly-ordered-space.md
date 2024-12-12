# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Closed_Set_in_Linearly_Ordered_Space



Theorem
Let $\left({X, \preceq, \tau}\right)$ be a linearly ordered space.
Let $C$ be a subset of $X$.
Let $f:\mathcal P (C) \to \mathcal P (X)$ where $f(S)$ is the set of elements of $X$ that are either suprema or infima of $S$ in $X$.

Then $C$ is closed in $X$ iff:

For each nonempty subset $S$ of $C$, $f(S) \subseteq C$.
That is $C$ is closed in $X$ iff no nonempty subset of $C$ has a supremum or infimum that lies in $X \setminus C$.


Proof
Forward implication
Suppose that $C$ be closed.
Let $S$ be a nonempty subset of $C$.
Let $b \in X \setminus C$.
We will show that $b$ is not a supremum of $S$.

If $b$ is not an [Definition:Upper Bound of Set|upper bound]] of $S$, then $b$ cannot be a supremum of $S$.
Suppose, then, that $b$ is an upper bound of $S$.
Since $C$ is closed and $b \notin C$, there must be an open interval or open ray $U$ containing $b$ that is disjoint from $Y$.
Since $b$ is an upper bound for $S$ and $S$ is not empty, $U$ cannot be a downward-pointing ray.
Thus $U$ is either an open interval $\left({{a}\,.\,.\,{q}}\right)$ or an upward-pointing open ray ${\uparrow}a$.
Then $a \prec b$.
Since $b \in U$, and $b$ is an upper bound of $S$, no element strictly succeeding all elements of $U$ can be in $S$.
By the above and the fact that $S \subseteq C$, ${\uparrow}a \cap S = \varnothing$, so $a$ is an upper bound of $S$.
Since $a \prec b$, $b$ is not a supremum of $S$.
A similar argument shows that $b$ is not an infimum
$\Box$

Reverse implication
Suppose that no nonempty subset of $C$ has a supremum in $X \setminus C$.
Let $p \in X \setminus C$.

Case 1: $p$ is an upper bound of $C$
Since $C$ is a non-empty subset of $C$, it does not have a supremum in $X \setminus C$.
Thus $p$ is not a supremum of $C$.
Therefore, $C$ has an upper bound $a \in X$ such that $a \prec p$.
Thus ${\uparrow_X}a$ contains $p$ and is disjoint from $C$, so $p$ is not an accumulation point of $C$.

Case 2: $p$ is a lower bound of $C$
The same approach used for case 1 proves $p$ is not an accumulation point of $C$.

Case 3: $p$ is neither an upper nor a lower bound of $C$
In this case, $C \cap {\downarrow_X}p$ and $C \cap {\uparrow_X}p$ are nonempty, and their union is $C$.
Thus $p$ is not a supremum of $C \cap {\downarrow_X}p$ and is not an infimum of $C \cap {\uparrow_X}p$.
Thus there are $a,b\in X$ such that $a \prec p \prec b$, $a$ is an upper bound of $C \cap {\downarrow_X}p$, and $b$ is a lower bound of $C \cap {\downarrow_X}p$. Then $\left({{a}\,.\,.\,{b}}\right)$ contains $p$ and is disjoint from $C$, so $p$ is not an accumulation point of $C$.
Since $C$ contains all of its accumulation points, it is closed.
$\blacksquare$





