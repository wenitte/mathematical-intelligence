# 

Source: https://proofwiki.org/wiki/K%C3%B6nig%27s_Lemma/Countable


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $G = \struct {V, E}$ be a graph with countably infinitely many vertices which is connected and is locally finite.

Then every vertex of $G$ lies on a path of infinite length.


Proof
Let $r$ be a vertex of $G$.
Recursively define a sequence $\sequence {S_n}$:
Let $S_0 = \set r$.
Let $S_{n + 1}$ be the set of all vertices that are adjacent to some element of $S_n$ but not adjacent to any element of $S_k$ for $k < n$.
That is, $S_n$ is the set of vertices whose shortest path(s) to $r$ have $n$ edges.
Since $G$ is connected:

$\ds V = \bigcup_{n \mathop \in \N} S_n$
Note that $\set {S_n: n \in \N}$ is pairwise disjoint.
Define a relation $\RR$ on $V$ by letting $p \mathrel \RR q$ if and only if:

$p$ is adjacent to $q$
and:

there exists an $n \in \N$ such that $p \in S_n$ and $q \in S_{n + 1}$.
Let $\RR^+$ be the transitive closure of $\RR$.
Let $V'$ be the set of all $v \in V$ such that $\map {\RR^+} v$ is infinite.

It will be demonstrated that $r \in V'$:
Let $v \in V$.
Since $G$ is connected, there is a path from $r$ to $v$.
By the Well-Ordering Principle, there is a path $P$ from $r$ to $v$ of minimal length.
Then the vertices along $P$ will lie in successive sets $S_k$.


This article, or a section of it, needs explaining.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Thus $v \in \map {\RR^+} r$.
As this holds for all $v \in V$, and $V$ is infinite, $\map {\RR^+} r$ is infinite.
Therefore $r \in V'$.

Let $\RR'$ be the restriction of $\RR$ to $V'$.
It is to be shown that $\RR'$ is a left-total relation.
Let $v \in V'$.
Then $\map {\RR^+} v$ is infinite.
Since $\map \RR v$ is finite, Finite Union of Finite Sets is Finite shows that $\map \RR v$ must have an element $u$ such that $\map {\RR^+} u$ is infinite.
So $u \in V'$ and $v \mathrel {\RR'} u$.
We have that $V$ is assumed to be countably infinite.
Without loss of generality, let $V = \N$.
Recursively define a sequence $\sequence {v_k}$ in $V'$ thus:

$v_0 = r$
$v_{n + 1} = \map \min {\map {\RR'} {v_n} }$
Then $\sequence {v_k}$ is the sequence of vertices along an infinite path starting at $r$.
$\blacksquare$





