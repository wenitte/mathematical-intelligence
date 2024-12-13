# 

Source: https://proofwiki.org/wiki/Increasing_Sequence_in_Ordered_Set_Terminates_iff_Maximal_Element


It has been suggested that this page be renamed.In particular: Ascending Chain Condition iff Converse Well FoundedTo discuss this page in more detail, feel free to use the talk page.


Theorem
Let $\struct {P, \le}$ be an ordered set.

The following statements are equivalent:

$(1): \quad$ Every increasing sequence $x_1 \le x_2 \le x_3 \le \cdots$ with $x_i \in P$ eventually terminates: there is $n \in \N$ such that $x_n = x_{n + 1} = \cdots$.
$(2): \quad$ Every non-empty subset of $P$ has a maximal element.


Proof
$(1)$ implies $(2)$
Suppose $(1)$ holds.
Pick $\O \ne S \subseteq P$.
Let $x_1 \in S$ be arbitrary.
Given $x_k \in S$, pick $x_{k + 1} \in S$ strictly bigger than $x_k$.
By hypothesis the process must eventually terminate, say $x_n$ is the last element.


This article, or a section of it, needs explaining.In particular: Why does this terminate? I think Axiom:Axiom of Choice is necessary hereYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then by construction there are no larger elements than $x_n$, that is, $x_n$ is a maximal element of $S$.
$\Box$


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Last three sentences can be made more explicit and less handwavingYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$(2)$ implies $(1)$
Suppose $(2)$ holds.
Let $\sequence {x_k}_{k \mathop \in \N}$ be an increasing sequence of elements of $P$.
By hypothesis, the set $\set {x_k: k \in \N}$ has a maximal element, say $x_n$.
Then since $x_m \ge x_n$ for all $m \ge n$, we must have $x_n = x_{n + 1} = \cdots$.
$\blacksquare$





