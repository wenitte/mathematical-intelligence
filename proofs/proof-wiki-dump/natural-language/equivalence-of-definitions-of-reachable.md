# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Reachable



Theorem
The following definitions of the concept of Reachable are equivalent:

Definition 1
Let $G = \struct {V, A}$ be a digraph.
Let $u, v \in V$.

Then $v$ is reachable from $u$ if and only if there exists a directed walk from $u$ to $v$.

Definition 2
Let $G = \struct {V, A}$ be a digraph.
Let $\RR$ be the reachability relation of $G$.
That is, $\RR$ is the transitive closure of $A$.
Let $u, v \in V$.

Then $v$ is reachable from $u$ if and only if $u \mathrel \RR v$.


Proof
Let $G = \struct {V, A}$ be a digraph.
Let $u, v \in V$.
Let $\RR$ be the reachability relation for $G$, defined as the transitive closure of $A$.


Definition 1 implies Definition 2
Suppose that $v$ is reachable from $u$ by definition 1.
Then there exists a directed walk $\tuple {u = x_0, \dots, x_n = v}$ from $u$ to $v$.
Then by the definition of directed walk:

$x_0 \mathrel \RR x_1 \mathrel \RR \cdots \mathrel \RR x_n$
Then by the definition of transitive closure:

$u \mathrel \RR v$
Thus $v$ is reachable from $u$ by definition 2.
$\Box$


Definition 2 implies Definition 1
Suppose that $v$ is reachable from $u$ by definition 2.
That is:

$u \mathrel \RR v$
Thus by the definition of transitive closure:

$\exists x_0, \ldots, x_n \in V: x_0 \mathrel \RR x_1 \mathrel \RR \cdots \mathrel \RR x_n$
Then $\tuple {x_0 \mathrel \RR x_1 \mathrel \RR \cdots \mathrel \RR x_n}$ is a directed walk from $u$ to $v$.
Therefore, $v$ is reachable from $u$ by definition 1.
$\blacksquare$





