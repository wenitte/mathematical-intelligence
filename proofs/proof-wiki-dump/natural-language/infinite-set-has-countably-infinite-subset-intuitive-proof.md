# 

Source: https://proofwiki.org/wiki/Infinite_Set_has_Countably_Infinite_Subset/Intuitive_Proof



Theorem
Every infinite set has a countably infinite subset.


Intuitive Proof
Let $S$ be an infinite set, and let $a_0 \in S$.
$S$ is infinite, so $\exists a_1 \in S, a_1 \ne a_0$, and $\exists a_2 \in S, a_2 \ne a_0, a_2 \ne a_1$, and so on.
That is, we can continue to pick elements out of $S$, and assign them the labels $a_0, a_1, a_2, \ldots$ and this procedure will never terminate as $S$ is infinite.
Each one of the elements is in one-to-one correspondence with the elements of $\N$, and therefore the set $\left\{{a_0, a_1, a_2, \ldots}\right\} \subseteq S$ is countably infinite.
$\blacksquare$


Warning
The intuitive nature of this proof obscures the fact that it is not a trivial truth that one may choose elements of $S$ in this manner when $S$ is infinite.
In Zermelo-Fraenkel set theory, a rigorous application of the principle of mathematical induction would show that one can repeat the procedure any finite number of times to construct a finite set $\set {a_0, a_1, \ldots, a_n}$.
However, in general, one needs the axiom of dependent choice to justify repeating such a procedure indefinitely.
It should be noted that the weaker axiom of countable choice is sufficient to prove the stated theorem.


Axiom of Dependent Choice
This proof depends on the Axiom of Dependent Choice.
Although not as strong as the Axiom of Choice, the Axiom of Dependent Choice is similarly independent of the Zermelo-Fraenkel axioms.
The consensus in conventional mathematics is that it is true and that it should be accepted.


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 15$: The Axiom of Choice
1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis ... (previous) ... (next): $\S 2.2$: Countable sets: Theorem $3$




