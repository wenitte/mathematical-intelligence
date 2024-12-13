# 

Source: https://proofwiki.org/wiki/Quotient_Space_of_Compact_Space_is_Compact

Theorem
Let $T = \struct {X, \tau}$ be a compact topological space.
Let $\RR \subseteq X \times X$ be an equivalence relation on $X$.
Then, the quotient space:

$T / \RR$
is compact.


Proof 1
Let $\UU$ be an open cover of $T / \RR$.
By definition of quotient topology, for every $U \in \UU$:

$q_\RR^{-1} \sqbrk U \in \tau$
where $q_\RR$ is the quotient mapping induced by $\RR$.
Therefore:

$\VV = \set {q_\RR^{-1} \sqbrk U : U \in \UU}$
is a set of open sets of $T$.

Let $x \in X$ be arbitrary.
By definition of cover, there is some $U \in \UU$ such that:

$\eqclass x \RR \in U$
Therefore:

$x \in q_\RR^{-1} \sqbrk U$
As $x \in X$ was arbitrary, it follows that $\VV$ is a cover of $X$.

As $\VV$ is a cover consisting of open sets, it is by definition an open cover of $T$.
Thus, by definition of compact space, there is some finite subcover $\set {V_i}_{1 \le i \le n} \subseteq \VV$.
But by definition of $\VV$, for every $1 \le i \le n$, there is some open set $U_i \in \UU$ such that:

$V_i = q_\RR^{-1} \sqbrk U_i$

It remains to show that:

$\set {U_i}_{1 \le i \le n}$
is a cover of $X / \RR$, the quotient set of $X$ induced by $\RR$.
Let $y \in X / \RR$ be arbitrary.
By definition of quotient set, there is some $x \in X$ for which:

$y = \eqclass x \RR$
By definition of cover there is some $1 \le i \le n$ such that:

$x \in V_i$
By definition of preimage:

$\eqclass x \RR = \map {q_\RR} x \in U_i$
As $y \in X / \RR$ was arbitrary, it follows that:

$\set {U_i}_{1 \le i \le n} \subseteq \UU$
is a finite subcover of $\UU$.

As $\UU$ was arbitrary, $T / \RR$ is compact by definition.
$\blacksquare$


Proof 2
Let $q_\RR$ be the quotient mapping induced by $\RR$.
By the definition of the quotient topology, $q_\RR$ is continuous.
Further, $T / \RR = q_\RR \sqbrk T$. 
From Continuous Image of Compact Space is Compact, $q_\RR \sqbrk T$ is compact. 
Hence $T / \RR$ is compact.
$\blacksquare$





