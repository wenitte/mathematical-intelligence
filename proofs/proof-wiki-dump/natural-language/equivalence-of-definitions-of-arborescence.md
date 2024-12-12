# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Arborescence


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $G = \struct {V, A}$ be a digraph.
Let $r \in V$.
The following definitions of the concept of Arborescence are equivalent:

Definition 1
$G$ is an arborescence of root $r$ if and only if:

For each $v \in V$ there is exactly one directed walk from $r$ to $v$.
Definition 2
$G$ is an arborescence of root $r$ if and only if:

$(1): \quad$ $G$ is an orientation of a tree
$(2): \quad$ For each $v \in V$, $v$ is reachable from $r$.
Definition 3
$G$ is an arborescence of root $r$ if and only if:

$(1): \quad$ Each vertex $v \ne r$ is the final vertex of exactly one arc
$(2): \quad$ $r$ is not the final vertex of any arc
$(3): \quad$ For each $v \in V$ such that $v \ne r$ there is a directed walk from $r$ to $v$.
Definition 4
$G$ is an arborescence of root $r$ if and only if:

$(1): \quad$ Each vertex $v \ne r$ has exactly one predecessor
$(2): \quad$ $r$ has no predecessors
$(3): \quad$ For each $v \in V$ such that $v \ne r$ there is a path from $r$ to $v$.


Proof
Definition 1 implies Definition 3
Let $G$ be an $r$-arborescence by definition 1.
Let $v \in V$ such that $v \ne r$.
Then there is exactly one directed walk $w$ from $r$ to $v$.
Since $v \ne r$, either:

$w = \tuple {r, v}$
or:

$\exists m \in V: w = \tuple {r, \ldots, m, v}$
Thus $v$ is the final vertex of the arc $r v$ or the arc $m v$.
Aiming for a contradiction, suppose that $v$ is the final vertex of distinct arc $x v$ and $y v$.
Then there exist directed walks $w_1$ and $w_2$ from $r$ to $x$ and $r$ to $y$ respectively.
But appending $v$ to $w_1$ and to $w_2$ yields distinct directed walks from $r$ to $v$.
This contradicts the fact that there is exactly one such directed walk.
Thus $v$ is the final vertex of exactly one arc.
$\Box$

Aiming for a contradiction, suppose that $r$ is the final vertex of an arc $x r$.
By Definition 1, there is a directed walk $w$ from $r$ to $x$.
But then $w$ appended to $w$ is a directed walk from $r$ to $x$ which is not equal to $w$.
This contradicts definition 1.
Thus we conclude that $r$ is not the final vertex of any arc.

It follows immediately from definition 1 that there is a directed walk from $r$ to each vertex $v \ne r$.
Thus $G$ is an $r$-arborescence by Definition 3.
$\Box$


Definition 3 implies Definition 1
Suppose that $G$ is an $r$-arborescence by Definition 3.
Let $v \in V$.
We must show that there is a unique directed walk from $r$ to $v$.
If $v = r$, then $\tuple r$ is a directed walk from $r$ to $v$.
Since $r$ is not the final vertex of any arc, $\tuple r$ is the only such directed walk.
If $v \ne r$, then there exists some directed walk $w$ from $r$ to $v$.
Suppose that $z$ is a directed walk from $r$ to $v$.
Since $v \ne r$, $v$ is the final vertex of exactly one arc $x v$.
If $x = r$, then $z$ must end with $\tuple {r, v}$.
But $r$ is not the final vertex of any arc.
So in fact:

$z = \tuple {r, v}$
If $x \ne r$, then:

$z = \tuple {r, \ldots, x, v}$
Continuing inductively from $x$ proves that $z = w$.


This article, or a section of it, needs explaining.In particular: set up the induction more formally, or less formally, or something. This is messy.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Thus for each $v \in V$ there is exactly one directed walk from $r$ to $v$.
So $G$ is an $r$-arborescence by Definition 1.
$\Box$


Definitions 1 and 3 imply Definition 2
Let $G$ be an $r$-arborescence by Definition 1.
From the above, $G$ is then also an $r$-arborescence by Definition 3.
Let $T = \struct {V, E}$ be the simple graph corresponding to $G$.
That is, for $x, y \in V$, let $\set {x, y} \in E$ if and only if $\tuple {x, y} \in A$ or $\tuple {y, x} \in A$.
We will show that $G$ is an orientation of $T$ and that $T$ is a tree.

By Definition 1, there is exactly one directed walk from $r$ to each vertex $v$.
Let $x, y \in V$.
Aiming for a contradiction, suppose $\tuple {x, y} \in A$ and $\tuple {y, x} \in A$.
Let $w_x$ be the directed walk from $r$ to $x$.
Then appending $y$ to $w_x$ yields a directed walk $w_x + y$ from $r$ to $y$.
But then appending $x$ to $w_x + y$ yields a directed walk $w_x + y + x$ from $r$ to $x$, contradicting the fact that $w_x$ is unique.
Thus $A$ is asymmetric.
So $G$ is an orientation of $T$.

We must now show that $T$ is a tree.
By Equivalence of Definitions of Reachable, each vertex $v$ of $G$ is reachable from $r$.
Let $x, y \in V$.
By Definition 1, there is exactly one directed walk from $r$ to $x$ and exactly one directed walk from $r$ to $y$.
Thus there is a walk $w_x$ in $T$ from $r$ to $x$ and a walk $w_y$ from $r$ to $y$.
Reversing $w_x$ and then appending $w_y$ to it (eliding the duplicate $r$) yields a walk from $x$ to $y$.
Thus $T$ is connected.

Next we show that $G$ has no directed cycle.
Aiming for a contradiction, suppose that $x_0, x_1, \dots, x_n$ is a directed walk with $n \ge 2$ and $x_0 = x_n$.
By Definition 1, there is a unique directed walk $w$ from $r$ to $x_0$.
But then $w + \tuple {x_1, \dots, x_n}$ is another directed walk from $r$ to $x_0$, contradicting uniqueness.
Thus $G$ has no directed cycles.

Aiming for a contradiction, suppose that $T$ has a cycle $\tuple {x_0, x_1, \dots, x_n}$, where $x_0 = x_n$ and $n \ge 2$.
Since $G$ has no directed cycles, the arcs corresponding to the edges in this cycle cannot all go in the same direction around the cycle.
But this implies that some vertex of $x_0, x_1, \dots, x_n$ is the final vertex of two different arcs, contradicting Definition 3.


This article, or a section of it, needs explaining.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Thus $T$ has no cycles.
As $T$ is connected, it is a tree.
Thus we have shown that $G$ is an orientation of $T$ and that $T$ is a tree.
$\Box$


Definition 2 implies Definition 1
Let $G$ be an $r$-arborescence by Definition 2.
That is, let $G$ be an orientation of a tree $T$ and that every vertex of $G$ is reachable from $r$.
Let $v \in V$.
By the definition of reachable, there exists a directed walk $w$ from $r$ to $v$.
We must show that $w$ is the only directed walk from $r$ to $v$.
Aiming for a contradiction, suppose that $z$ is a directed walk from $r$ to $v$ and $z \ne v$.
Then either $z$ extends $w$, $w$ extends $z$, or there is some $k$ such that $w_k \ne z_k$.
First suppose that $z$ extends $w$.
So $w = \tuple {x_0, \ldots, x_n}$ and $z = \tuple {x_0, \ldots, x_n, \ldots, x_m}$.
Then $p = \tuple {x_n, \dots, x_m}$ is a directed walk from $v$ to $v$ with more than one vertex.
By Directed Circuit in Simple Digraph forms Circuit, the vertices of $p$ form a circuit, contradicting the fact that $T$ is a tree.
Thus there exists $k$ such that $w_k \ne z_k$.
It follows from the Well-Ordering Principle that there must be some smallest $k$ such that $w_k \ne z_k$.
Since $w$ and $z$ both end at $v$, it follows from the Well-Ordering Principle that:

there must be some smallest $n > k$ such that there exists $m > k$ such that $w_n = z_m$
and that there exists a smallest such $m$.
Then $\tuple {w_{k - 1}, w_k, \ldots, w_n, z_{m - 1}, \dots, z_k, z_{k - 1} }$ forms a cycle, contradicting the fact that $T$ is a tree.


This article, or a section of it, needs explaining.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\blacksquare$


This needs considerable tedious hard slog to complete it.In particular: Definition 4To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




