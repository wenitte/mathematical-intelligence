# 

Source: https://proofwiki.org/wiki/Graph_containing_Closed_Walk_of_Odd_Length_also_contains_Odd_Cycle

Theorem
Let $G$ be a graph.


This article, or a section of it, needs explaining.In particular: This proof works for a simple graph, but the theorem may hold for loop graphs and/or multigraphs. Clarification needed as to what applies.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $G$ have a closed walk of odd length.

Then $G$ has an odd cycle.


Proof
Let $G = \struct {V, E}$ be a graph with closed walk whose length is odd.
From Closed Walk of Odd Length contains Odd Circuit, such a walk contains a circuit whose length is odd.
Let $C_1 = \tuple {v_1, \ldots, v_{2 n + 1} = v_1}$ be such a circuit.

Aiming for a contradiction, suppose $G$ has no odd cycles.
Then $C_1$ is not a cycle.
Hence, there exist a vertex $v_i$ where $2 \le i \le 2 n - 1$ and an integer $k$ such that $i + 1 \le k \le 2 n$ and $v_i = v_k$.
If $k - i$ is odd, then we have an odd circuit $\tuple {v_i, \ldots, v_k = v_i}$ smaller in length than $C_1$.
If $k - i$ is even, then $\tuple {v_1, \ldots, v_i, v_{k + 1}, \ldots, v_{2 n + 1} }$ is a circuit whose length is odd smaller in length than $C_2$.
This new odd length circuit is named $C_2$, and the same argument is applied as to $C_1$.

Thus at each step a circuit whose length is odd is reduced.
At the $n$th step for some $n \in \N$, either:

$(1): \quad C_n$ is a cycle, which contradiction the supposition that $G$ has no odd cycles
or:

$(2): \quad C_n$ is a circuit whose length is $3$.
But from Circuit of Length 3 is Cycle, $C_n$ is a cycle, which by definition has odd length.
From this contradiction it follows that $G$ has at least one odd cycle.
$\blacksquare$





