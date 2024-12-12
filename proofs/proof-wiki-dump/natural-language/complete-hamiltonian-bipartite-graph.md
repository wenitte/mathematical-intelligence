# 

Source: https://proofwiki.org/wiki/Complete_Hamiltonian_Bipartite_Graph

Theorem
Let $K_{m, n}$ be a complete bipartite graph.
Then:

$K_{m, n}$ is Hamiltonian if and only if $m = n > 1$.


Proof
Clearly $K_{1, 1}$ is not Hamiltonian, although it does have a Hamiltonian path.
From Condition for Bipartite Graph to be Hamiltonian, if $m \ne n$ then $K_{m, n}$ is not Hamiltonian.

So let $m = n$.
We note that the degree of any vertex in $K_{n, n}$ is $n$.
Then we can use Ore's Theorem, and the result follows directly.
$\blacksquare$





