# 

Source: https://proofwiki.org/wiki/Non-Archimedean_Division_Ring_is_Totally_Disconnected

Theorem
Let $\struct {R, \norm{\,\cdot\,} }$ be a non-Archimedean normed division ring.
Let $\tau$ be the topology induced by the norm $\norm{\,\cdot\,}$.

Then the topological space $\struct {R, \tau}$ is totally disconnected.


Proof
Let $S$ be a subset of $R$ such that:

$\exists x, y \in S: x \ne y$
Let $r \in \R_{>0} : r = \norm {x - y}$
Consider the open ball $\map {B_r} x$ such that:

$x \in \map {B_r} x$
$y \notin \map {B_r} x$
By Open Balls are Clopen then $\map {B_r} x$ is both open and closed.
By Complement of Clopen Set is Clopen then $R \setminus \map {B_r} x$ is open.

Let:

$A = S \cap \map {B_r} x$
and

$B = S \cap \paren{R \setminus \map {B_r} x}$
We have:

$x \in A \subseteq \map {B_r} x$
and

$y \in B \subseteq \paren{R \setminus \map {B_r} x}$
By definition of separated sets:

$A$ and $B$ are separated sets
As $S = A \cup B$ then:

$S$ is the union of two non-empty separated sets of $\struct{R,\tau}$
By definition of connected subset:

$S$ is not a connected subset.

Since $S$ was an arbitrary subset of $\struct{R,\tau}$ with two distinct elements:

no set $S$ with two distinct elements is connected.

From Singleton is Connected in Topological Space:

the only connected subsets of $\struct{R,\tau}$ are the singletons
By definition of totally disconnected:

$\struct{R,\tau}$ is totally disconnected
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 2.3$ Topology: Proposition $2.3.8$
2007: Svetlana Katok: p-adic Analysis Compared with Real: $\S 2.1$ Elementary topological properties: Proposition $2.14$




