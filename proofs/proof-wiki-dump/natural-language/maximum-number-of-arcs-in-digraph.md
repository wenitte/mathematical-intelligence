# 

Source: https://proofwiki.org/wiki/Maximum_Number_of_Arcs_in_Digraph



Theorem
Let $D_n$ be a digraph of order $n$ such that $n \ge 1$.
Let $D_n$ have the greatest number of arcs of all digraphs of order $n$.

The number of arcs in $D$ is given by:

$\size {D_n} = n \paren {n - 1}$


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$\size {D_n} = n \paren {n - 1}$


Basis for the Induction
$\map P 1$ is the case:














\(\ds \size {D_n}\)

\(=\)







\(\ds 0\)





as $D_n$ has no arcs














\(\ds \)

\(=\)







\(\ds 1 \times \paren {1 - 1}\)









Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$\size {D_k} = k \paren {k - 1}$

from which it is to be shown that:

$\size {D_{k + 1} } = \paren {k + 1} k$


Induction Step
This is the induction step:
Let $D_{k + 1}$ be constructed by adding a new vertex $v_{k + 1}$ to $D_k$.
To do so, it is necessary to add $2$ arcs to join $v_{k + 1}$ to every vertex of $D_k$.
Thus there are a total of $2 k$ arcs more in $D_{k + 1}$ than there are in $D_k$.
So:














\(\ds \size {D_{k + 1} }\)

\(=\)







\(\ds \size {D_k} + 2 k\)





from the above analysis














\(\ds \)

\(=\)







\(\ds k \paren {k - 1} + 2 k\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds k^2 - k + 2 k\)




















\(\ds \)

\(=\)







\(\ds k^2 + k\)




















\(\ds \)

\(=\)







\(\ds \paren {k + 1} k\)









So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 0}: \size {D_n} = n \paren {n - 1}$
$\blacksquare$


Examples
Maximum Arcs in Digraph of Order 3
Let $D$ be the digraph of order $3$ whose edge set $E$ is as large as possible.
Then the number of arcs of $G$ is given by:

$\size E = 6$


Maximum Arcs in Digraph of Order 4
Let $D$ be the digraph of order $4$ whose edge set $E$ is as large as possible.
Then the number of arcs of $G$ is given by:

$\size E = 12$


Maximum Arcs in Digraph of Order 5
Let $D$ be the digraph of order $5$ whose edge set $E$ is as large as possible.
Then the number of arcs of $G$ is given by:

$\size E = 20$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Chapter $1$: Mathematical Models: $\S 1.5$: Directed Graphs as Mathematical Models: Problem $33 \ \text {(d)}$




