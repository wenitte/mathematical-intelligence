# 

Source: https://proofwiki.org/wiki/Edgeless_Graphs_of_Order_n_are_Isomorphic

Theorem
Let $n \in \Z_{>0}$ be a positive integer.
Let $G_1 = \struct {\map V {G_1}, \map E {G_1} }$ and $G_2 = \struct {\map V {G_2}, \map E {G_2} }$ be edgeless graphs of order $n$.
Then $G_1$ and $G_2$ are isomorphic.


Proof
Let $\phi$ be a bijection from $\map V {G_1}$ to $\map V {G_2}$.
This is possible because $\card {\map V {G_1} } = \card {\map V {G_2} } = n$.
Let $v_a \in \map V {G_1}$.
By definition, $v_a$ is adjacent to no other vertices of $G_1$.
Similarly by definition, $\map \phi {v_a}$ is adjacent to no other vertices of $G_2$.
Thus, vacuously, $v_a$ and $v_b$ are adjacent in $G_1$ if and only if $\map \phi {v_a}$ and $\map \phi {v_b}$ are adjacent in $G_2$.
Hence the result.
$\blacksquare$





