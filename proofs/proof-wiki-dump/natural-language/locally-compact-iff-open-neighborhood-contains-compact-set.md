# 

Source: https://proofwiki.org/wiki/Locally_Compact_iff_Open_Neighborhood_contains_Compact_Set



Theorem
Let $T = \struct {S, \tau}$ be a topological space.

Then:

$T$ is locally compact
if and only if:

$\forall U \in \tau, x \in U: \exists K \subseteq S: x \in K^\circ \land K \subseteq U \land K$ is compact
where $K^\circ$ denotes the interior of $K$.


Proof
Sufficient Condition
Let $T$ be locally compact.
Let $U \in \tau, x \in U$.
Since $T$ is locally compact there exists a neighborhood basis $\BB$ of $x$ consisting of compact sets. 
From Set is Open iff Neighborhood of all its Points, $U$ is a neighborhood of $x$.
By definition of a neighborhood basis:

$\exists K \in \BB : K \subseteq U$.
By definition of a neighborhood of $x$:

$\exists V \in \tau : x \in V \subseteq K$
By definition of the interior of a subset then:

$x \in V \subseteq K^\circ$
Thus

$\exists K \subseteq S: x \in K^\circ \land K \subseteq U \land K$ is compact
$\Box$


Necessary Condition
Let

$\forall U \in \tau, x \in U: \exists K \subseteq S: x \in K^\circ \land K \subseteq U \land K$ is compact
Let $\BB$ be the set of all compact neighborhoods of $x$.
It is shown that $\BB$ is a neighborhood basis of $x$.

Let $N$ be a neighborhood of $x$.
By definition of a neighborhood of $x$:

$\exists U \in \tau : x \in U \subseteq N$
By assumption:

$\exists K \subseteq S: x \in K^\circ \land K \subseteq U \land K$ is compact
By definition of the interior of a subset $K^\circ$ is open.
By definition of a neighborhood then $K$ is a neighborhood of $x$.
Hence $K \in \BB$ and $K \subseteq U \subseteq N$.
As $N$ was arbitrary, then $B$ is a neighborhood basis of $x$ consisting of compact sets.
$\blacksquare$


Sources
Mizar article WAYBEL_3:def 9




