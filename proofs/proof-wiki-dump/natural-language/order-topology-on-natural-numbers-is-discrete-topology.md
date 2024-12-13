# 

Source: https://proofwiki.org/wiki/Order_Topology_on_Natural_Numbers_is_Discrete_Topology


Work In ProgressIn particular: Make this easier to understand and extend to all sets of integers.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
Theorem
Let $\le$ be the standard ordering on the natural numbers $\N$.

Then the order topology $\tau$ on $\N$ is the discrete topology.


Proof
By Topology is Discrete iff All Singletons are Open, it suffices to show that for all $n \in \N$, the singleton $\set n$ is an open of $\tau$.

Now observe that $\map {\mathop{\downarrow} } 1 = \set 0$, since for all $n \in \N$, $n < 1 \implies n = 0$.
It follows that $\set 0$ is an open set of $\tau$.

Suppose now that $n \in \N$ and $n \ne 0$.
Then it is known that for all $m \in \N$, $n - 1 < m < n + 1$ implies $m = n$.
Thus, $\map {\mathop{\uparrow} } {n - 1} \cap \map {\mathop{\downarrow} } {n + 1} = \set n$.
It follows that $\set n$ is an open set of $\tau$.


This article, or a section of it, needs explaining.In particular: arrows, and why this inference holds (using the def'n of order top as gen. top)You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Hence the result, from Proof by Cases.
$\blacksquare$





