# 

Source: https://proofwiki.org/wiki/Ramsey%27s_Theorem



Theorem

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

In any coloring of the edges of a sufficiently large complete graph, one will find monochromatic complete subgraphs.

For $2$ colors, Ramsey's theorem states that for any pair of positive integers $\tuple {r, s}$, there exists a least positive integer $\map R {r, s}$ such that for any complete graph on $\map R {r, s}$ vertices, whose edges are colored red or blue, there exists either a complete subgraph on $r$ vertices which is entirely red, or a complete subgraph on $s$ vertices which is entirely blue.

More generally, for any given number of colors $c$, and any given integers $n_1, \ldots, n_c$, there is a number $\map R {n_1, \ldots, n_c}$ such that:

if the edges of a complete graph of order $\map R {n_1, \ldots, n_c}$ are colored with $c$ different colours, then for some $i$ between $1$ and $c$, it must contain a complete subgraph of order $n_i$ whose edges are all color $i$.

This number $\map R {n_1, \ldots, n_c}$ is called the Ramsey number for $n_1, \ldots, n_c$.

The special case above has $c = 2$ (and $n_1 = r$ and $n_2 = s$).
Here $\map R {r, s}$ signifies an integer that depends on both $r$ and $s$.
It is understood to represent the smallest integer for which Ramsey's Theorem holds.


Proof
First we prove Ramsey's Theorem for the 2-color case, by induction on $r + s$.
It is clear from the definition that

$\forall n \in \N: \map R {n, 1} = \map R {1, n} = 1$
because the complete graph on one node has no edges.
This is the basis for the induction.

We prove that $\map R {r, s}$ exists by finding an explicit bound for it.
By the induction hypothesis, $\map R {r - 1, s}$ and $\map R {r, s - 1}$ exist.


Proof for Two Colors
We will show that:

$\map R {r, s} \le \map R {r - 1, s} + \map R {r, s - 1}$
Consider a complete graph on $\map R {r - 1, s} + \map R {r, s - 1}$ vertices.
Pick a vertex $v$ from the graph, and partition the remaining vertices into two sets $M$ and $N$, such that for every vertex $w$:

$w \in M$ if $\tuple {v, w}$ is blue
$w \in N$ if $\tuple {v, w}$ is red.
Because the graph has $\map R {r - 1, s} + \map R {r, s - 1} = \size M + \size N + 1$ vertices, it follows that either $\size M \ge \map R {r - 1, s}$ or $\size N \ge \map R {r, s - 1}$.
In the former case, if $M$ has a red $K_s$ then so does the original graph and we are finished.
Otherwise $M$ has a blue $K_{r − 1}$, and so $M \cup \set v$ has blue $K_r$ by definition of $M$.
The latter case is analogous.
Thus the claim is true and we have completed the proof for 2 colours.

We now prove the result for the general case of $c$ colors. The proof is again by induction, this time on the number of colors $c$.
We have the result for $c = 1$ (trivially) and for $c = 2$ (above).
Now let $c > 2$.


Proof for More than Two Colors
We will show that:

$\map R {n_1, \ldots, n_c} \le \map R {n_1, \ldots, n_{c - 2}, \map R {n_{c - 1}, n_c} }$
We note that the right hand side only contains only Ramsey numbers for $c - 1$ colors and 2 colors, and therefore exists.
Thus it is the finite number $t$, by the inductive hypothesis.
So proving this will prove the theorem. 

Consider a graph on $t$ vertices and color its edges with $c$ colors.
Now "go color-blind" and pretend that $c - 1$ and $c$ are the same color.
Thus the graph is now $\paren {c - 1}$-colored.

By the inductive hypothesis, it contains either:

a complete monochromatic graph $K_{n_i}$ with color $i$ for some $1 \le i \le \paren {c - 2}$, or
a complete monochromatic graph $K_{\map R {n_{c - 1}, n_c}}$-colored in the "blurred color".
In the former case we are finished.

In the latter case, we recover our sight again and see from the definition of $\map R {n_{c - 1}, n_c}$ we must have either:

a complete $\paren {c - 1}$-monochromatic graph $K_{n_{c - 1} }$, or
a complete $c$-monochromatic graph $K_{n_c}$.

In either case the proof is complete.
$\blacksquare$


Source of Name
This entry was named for Frank Plumpton Ramsey.


Historical Note
Ramsey's Theorem was demonstrated by Frank Plumpton Ramsey in $1928$.


Sources
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.13$: Tableau Problems (TAB1): RAMSEY
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Ramsey's theorem (F.P. Ramsey, 1928)




