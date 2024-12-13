# 

Source: https://proofwiki.org/wiki/Sequence_Lemma


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Lemma
Let $A$ be a subset of a topological space $X$.
If there is a sequence of points of $A$ converging to $x$, then $x \in \bar A$.
The converse holds if $X$ is first-countable.


Proof
Assume the sequence of points of $A$ that converges to $x$ is $\sequence {x_i}$.
Then for any open set $U$ of $x$, there exists a positive natural number $N$ such that when $i > N$, $x_i \in U$.
Thus $U \cap A$ is nonempty, $x \in \bar A$.
Let the topological space $X$ be first-countable.
Then there is a countable collection of open neighbourhood $\family {U_i}_{i \mathop \in \Bbb Z_+}$ of $x$ such that any open neighbourhood $U$ of $x$ contains at least one of the sets $U_i$.
Because $x \in \bar A$, $U_1 \cap A$ is nonempty, we can select a point $x_1$ in it.
In a similar manner, $U_1 \cap U_2 \cap A$ is nonempty.
Hence we can select a point $x_2$ in it.
The point $x_i$ is selected from:

$U_1 \cap U_2 \cap \cdots \cap U_i \cap A$
We then obtain a sequence $\sequence {x_i}$.
For any open neighbourhood $U$ of $x$, it contains at least one of the set $U_N$, $N \in \Bbb Z_+$ of $\family {U_i}_{i \mathop \in \Bbb Z_+}$.
Thus it contains the set:

$U_1 \cap U_2 \cap \cdots \cap U_N \cap A$
$U_1 \cap U_2 \cap \cdots \cap U_N \cap U_{N + 1}\cap A$
$U_1 \cap U_2 \cap \cdots \cap U_N \cap U_{N + 1} \cap U_{N + 2} \cap A$
$\ldots$
or the set $U_1 \cap U_2 \cap \cdots \cap U_i \cap A$ with $i > N$, hence the points $x_i$ with $i > N$.
The sequence $\sequence {x_i}$ converges to $x$.
$\blacksquare$


Sources
2004: James R. Munkres: Topology Chapter $2$ Topological Spaces and Continuous Functions: $\S 21$ The Metric Topology (contiuned): Lemma $21.2$




