# 

Source: https://proofwiki.org/wiki/Infinite_Ramsey%27s_Theorem


This article needs to be linked to other articles.In particular: throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $k, n \in \N$.
For any set $S$, let $S^{\paren n}$ denote the set $\set {\set {s_1, \ldots, s_n}: \text{each } s_i \in S}$ of cardinality $n$ subsets of $S$.
Let $X$ be an infinite set.

Then:

for every partition $P$ of $X^{\paren n}$ into $k$ many components
there is an infinite subset $Y \subseteq X$
such that:

each member of $Y^{\paren n}$ is in the same component of $P$.


Proof
We will prove the theorem for fixed $k$ by induction on $n$.


Basis for the Induction
The case $n = 1$ ("Infinite Pigeonhole Principle"):
In this case, $X^{\paren n}$ is the set of singletons of elements of $X$.
So to ease exposition, we will identify $X^{\paren n}$ with $X$ and just speak of partitions of $X$.

Let $P$ be a partition of $X$ into $k$ many components $X_1, \dots, X_k$.
We have:

$X = X_1 \cup \cdots \cup X_k$
If each $X_i$ were finite, then $X$ would be a finite union of finite sets, and hence finite.
Thus, at least one of the $X_i$ must be infinite.
But taking $Y$ to be an infinite $X_i$ gives us the required subset for the theorem.
This is the basis for the induction.


Induction Hypothesis
The induction hypothesis is that:
For every partition $P$ of $X^{\paren {n - 1} }$ into $k$ many components

there is an infinite subset $Y \subseteq X$
such that:

each member of $Y^{\paren {n - 1} }$ is in the same component of $P$.

It is to be proved that:
For every partition $P$ of $X^{\paren n}$ into $k$ many components

there is an infinite subset $Y \subseteq X$
such that:

each member of $Y^{\paren n}$ is in the same component of $P$.


Induction Step
This is the induction step:
Suppose the theorem holds for all $i < n$.
It is to be proved that it holds for $n$.
Since $X$ is infinite, there is an injection of $\N$ into $X$.
All that is needed to be done to prove the theorem is to find an infinite subset of $X$
So, to ease exposition, $\N$ will be viewed as a subset of $X$.
The proof will proceed by finding an infinite subset of $\N$.

Write the components of $P$ as $S_1, \ldots, S_k$.
For each $a \in \N$, let $P_a$ be the partition on $\paren {\N \setminus \set a}^{\paren {n - 1} }$ into $k$ components:

$S_{a, 1}, \dots, S_{a, k}$
defined by assigning:

$\set {b_1, \ldots, b_{n - 1} } \in \paren {\N \setminus \set a}^{\paren {n - 1} }$
to $S_{a, j}$ if and only if:

$\set {a, b_1, \ldots, b_{n - 1} } \in \N^{\paren n}$ is in $S_j$

Note that the theorem holds for $P_a$ by the induction hypothesis.

Now, we inductively define $a_0 < a_1 < \dots$ and infinite sets $X_0 \supseteq X_1 \supseteq \cdots$ such that $a_i$ is the smallest element of $X_i$.
Let $a_0 = 0$, and let $X_0 = \N$.
Once $X_i$ and $a_i$ are defined:
Let $X_{i + 1}$ be an infinite subset of $X_i \setminus \set {a_i}$ satisfying the theorem for the partition $P_{a_i}$ of $n - 1$ size subsets.
This exists by the induction hypothesis.
Let $a_{i + 1}$ be the smallest element of $X_{i+1}$.
This exists by the Well-Ordering Principle.
Note that $a_{i + 1} > a_i$ since $X_{i + 1}$ is a subset of $X_i$ not containing the smallest element $a_i$ of $X_i$.

We constructed each $X_{i + 1}$ so that each element of $X_{i + 1}^{\paren {n - 1} }$ is in the same component of $P_{a_i}$.
So, we may consider the sequence $\sequence {k_i}_{i \mathop \in \N}$ where each $k_i$ is such that all elements of $X_{i + 1}^{\paren {n - 1} }$ are in the component $S_{a_i, k_i}$ of $P_{a_i}$.

Since each $k_i$ is one of $1, \ldots, k$, but there are infinitely many $i \in \N$, this forms a partition of $\N$ to which we can apply the base case of this proof.
This means that there is some $c$ among $1, \ldots, k$, there is an infinite set $I = \set {i \in \N : k_i = c}$.

Define $Y = \set {a_i: i \in I}$.
$Y$ is infinite since $I$ is infinite and each $a_i$ is distinct by construction.
We now verify that each element of $Y^{\paren n}$ is in the same component $S_c$ of $P$.

Let $\set {y_1, \ldots, y_n} \in Y^{\paren n}$.
We may take $y_1 < \cdots < y_n$ by relabeling if necessary.
There is some $i \in I$ for which $y_1 = a_i$.
By construction:

$y_1 = a_i$ is the least element of $X_i$
each $y_2, \dots, y_n$ is in $X_i$
and:

each element of $X_i^{\paren {n - 1} }$ is in the component $S_{a_i, c}$ of the partition $P_{a_i}$.

But then, by definition of $P_{a_i}$, since $\set {y_2, \ldots, y_n} \in S_{a_i , c}$, we have:

$\set {y_1, y_2, \ldots, y_n} = \set {a_i, y_2, \ldots, y_n} \in S_c$
$\blacksquare$


Also known as
The case $n = 1$ of this theorem is often referred to as an infinite Pigeonhole Principle, since it essentially says that:

if an infinite set is partitioned into finitely many components, there are infinitely many elements that are sent to the same component.


Also defined as
Partition theorems like this one are commonly stated in terms of graph colorings.
Using this language, this theorem could be stated as:

For any coloring of a graph whose vertices correspond to the size $n$ subsets of an infinite set $X$ by $k$-many colors, there is an infinite subset $Y \subseteq X$ such that each vertex corresponding to a size $n$ subset of $Y$ is colored the same.


Source of Name
This entry was named for Frank Plumpton Ramsey.





