# 

Source: https://proofwiki.org/wiki/Connected_Vertices_are_Connected_by_Path

Theorem
Let $G = \struct {V, E}$ be a simple graph.
Let $x, y \in V$.
Let there exist a walk $w: \N_n \to V$ from $x$ to $y$.

Then there exists a subsequence $z_n$ of $w$ which is a path from $x$ to $y$.


Proof
We represent a walk as a sequence of vertices.
However, the same argument will work for the representation as an alternating sequence of vertices and edges.

The proof proceeds by induction on the length of $w$.
If the length of $w$ is $0$, then it is trivially a path.
Suppose that every walk of length less than $n$ has a subsequence forming a path between its endpoints.
Let $w$ have length $n$.
If $w$ is not a path, then it must have a cycle.
That is, for some $j, k \in \Dom w$, $j < k$ and $w_j = w_k$.
Then removing $w_{j + 1}, \dots, w_k$ from $w$ will form a new walk $w'$, from $x$ to $y$ which is strictly shorter than $w$.
By the inductive hypothesis, $w'$ has as subsequence which is a path from $x$ to $y$.
$\blacksquare$





