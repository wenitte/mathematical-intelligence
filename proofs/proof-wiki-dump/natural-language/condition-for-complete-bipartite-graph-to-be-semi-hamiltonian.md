# 

Source: https://proofwiki.org/wiki/Condition_for_Complete_Bipartite_Graph_to_be_Semi-Hamiltonian

Theorem
Let $K_{m, n}$ be a complete bipartite graph.
$K_{m, n}$ is semi-Hamiltonian if and only if either:

$m = n = 1$
or:

$m = n + 1$ (or $n = m + 1$).


Proof
Let $K_{m, n}$ be a complete bipartite graph.

If $m = n = 1$ then $K_{m, n} = K_{1, 1}$ is trivially semi-Hamiltonian:


$\Box$

If $m = n + 1$, we can construct a Hamiltonian path as follows.
Let $K_{m, n} = \struct {A \mid B, E}$ such that $\card A = m, A = \set {u_1, u_2, \ldots, u_m}, \card B = n, B = \set {v_1, v_2, \ldots, v_m}$.
We start at vertex $u_1 \in A$.
As $K_{m, n}$ is complete, there is an edge connecting $u_1$ to $v_1$.
From $v_1$, there is an edge connecting $v_1$ to $u_2$.
And so on.
There is therefore a Hamiltonian path $\tuple {u_1, v_1, u_2, v_2, \ldots, u_{n - 1}, v_{n - 1}, u_n, v_n, u_m}$ (where of course $u_m = u_{n + 1}$).
So when $m = n + 1$, $K_{m, n}$ has a Hamiltonian path.
However, from Condition for Bipartite Graph to be Hamiltonian, $K_{m, n}$ is only fully Hamiltonian if $m = n$.
Hence when $m = n + 1$, $K_{m, n}$ is semi-Hamiltonian.
Similarly, if $n = m + 1$ the same argument applies, but this time the Hamiltonian path is:
$\tuple {v_1, u_1, v_2, u_2, \ldots, v_{n - 1}, u_{n - 1}, v_m, u_m, v_n}$
where of course $v_n = u_{m + 1}$.
$\Box$

Now, suppose $K_{m, n}$ is such that neither $m = n + 1$ nor $n = m + 1$, and it is not the case that $m = n = 1$.
If $m = n$, then from Complete Hamiltonian Bipartite Graph $K_{m, n}$ is Hamiltonian, and therefore not semi-Hamiltonian.
If $m > n + 1$, then we can once more trace a path $P$ through $K_{m, n} = \struct {A \mid B, E}$ as before.
However, at the end of $P$ there is a spare vertex in $A$ which has not been traversed which you can't get to without going back to one of the vertices in $B$ that you have already visited.
Similarly if $n > m + 1$.
$\Box$

Hence the result.
$\blacksquare$





