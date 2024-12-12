# 

Source: https://proofwiki.org/wiki/Compact_First-Countable_Space_is_Sequentially_Compact


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $T = \struct {S, \tau}$ be a compact first-countable topological space.

Then every infinite sequence in $S$ has a convergent subsequence; that is, $T$ is sequentially compact.


Proof
Let $\sequence {x_n}_{n \mathop \in \N}$ be an infinite sequence in $S$.
Aiming for a contradiction, suppose that $\sequence {x_n}_{n \mathop \in \N}$ does not have a convergent subsequence.

By Accumulation Point of Infinite Sequence in First-Countable Space is Subsequential Limit, it follows that $\sequence {x_n}_{n \mathop \in \N}$ does not have an accumulation point in $S$.
Thus, for each $x \in S$, we can select an open set $U_x$ such that $x \in U_x$ and $U_x$ only contains $x_n$ for finitely many $n \in \N$.
The set $\UU = \set {U_x : x \in X}$ is clearly an open cover for $S$.


Work In ProgressIn particular: The axiom of choice is implicitly invoked aboveYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
By the definition of a compact space, there exists a finite subcover $\set {U_{x_1}, U_{x_2}, \ldots, U_{x_m} }$ of $\UU$ for $X$.
Then $U_{x_1} \cup U_{x_2} \cup \cdots \cup U_{x_m}$ contains all of $S$ since it is a cover.
However, each open set in this union only contains $x_n$ for a finite number of $n$, and this is a finite union of sets.
So the union only contains $x_n$ for finitely many $n$.
This implies that $x_n \in X$ for only finitely many $n \in \N$.
This is a contradiction, since $\sequence {x_n}$ is a sequence in $S$, and so $x_n \in S$ for all $n \in \N$.
$\blacksquare$


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: To prove this in ZF, one could simply use Compact Space is Countably Compact and Countably Compact First-Countable Space is Sequentially Compact.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




