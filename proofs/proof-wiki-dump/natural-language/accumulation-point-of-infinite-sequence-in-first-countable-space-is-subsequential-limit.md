# 

Source: https://proofwiki.org/wiki/Accumulation_Point_of_Infinite_Sequence_in_First-Countable_Space_is_Subsequential_Limit

Theorem
Let $\struct {X, \tau}$ be a first-countable topological space.
Let $\sequence {x_n}_{n \mathop \in \N}$ be an infinite sequence in $X$.
Let $x$ be an accumulation point of $\sequence {x_n}$.

Then $x$ is a subsequential limit of $\sequence {x_n}$.


Proof
By the definition of a first-countable space, there exists a countable local basis $\BB$ at $x$.
By Surjection from Natural Numbers iff Countable, there exists a surjection $\phi: \N \to \BB$.

For all $n \in \N$, define the set:

$\ds U_n = \bigcap_{k \mathop = 0}^n \map \phi k$
By General Intersection Property of Topological Space, it follows that $U_n$ is an open neighborhood of $x$.


This article, or a section of it, needs explaining.In particular: What is the exact connection with PoRD?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Using the Principle of Recursive Definition, we construct a strictly increasing sequence $\sequence {n_k}_{k \mathop \in \N}$ in $\N$.
By the definition of an accumulation point, we can choose $n_0 \in \N$ such that $x_{n_0} \in U_0$.
For all $k \in \N$, let $n_{k + 1} > n_k$ be the (unique) smallest natural number such that $x_{n_{k + 1} } \in U_{k + 1}$.
Such an $n_{k + 1}$ exists by the definition of an accumulation point, and by the well-ordering principle.

We now show that $x$ is a limit of $\sequence {x_{n_k} }$.
Let $U$ be an open neighborhood of $x$.
By the definition of a local basis, there exists an $H \in \BB$ such that $H \subseteq U$.
By the definition of a surjection, there exists a natural number $m$ such that $H = \map \phi m$.
By construction, we have:

$\forall k \in \N: k > m \implies x_{n_k} \in U_k \subseteq \map \phi m = H$
Hence the result, by the definition of a limit point.
$\blacksquare$





