# 

Source: https://proofwiki.org/wiki/Adding_Edge_to_Tree_Creates_One_Cycle

Theorem
Adding a new edge to a tree can create no more than one cycle.


Proof
From Equivalent Definitions for Finite Tree, adding an edge creates at least one cycle.
Suppose that adding an edge $\tuple {u, v}$ to a tree $T$ creates two or more cycles.
Let two such cycles be $\tuple {u, v, \ldots, u_1, u_2, \ldots, u}$ and $\tuple {u, v, \ldots, v_1, v_2, \ldots, u}$.
By removing the edge $\tuple {u, v}$ from this cycle, we have two paths from $v$ to $u$:

$\tuple {v, \ldots, u_1, u_2, \ldots, u}$
$\tuple {v, \ldots, v_1, v_2, \ldots, u}$.
But that means $T$ has more than one path between two nodes.
From Path in Tree is Unique, that means $T$ can not be a tree.
Hence the result.
$\blacksquare$





