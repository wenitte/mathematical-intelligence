# 

Source: https://proofwiki.org/wiki/Naturally_Ordered_Semigroup_forms_Peano_Structure

Theorem
Let $\struct {S, \circ, \preceq}$ be a naturally ordered semigroup.
Let $0 \in S$ be the zero of $S$.
Let $1 \in S$ be the one of $S$.
Let $s: S \to S$ be the mapping defined as:

$\map s n := n \circ 1$

Then $\struct {S, 0, s}$ is a Peano structure.


Proof
We verify Peano's axioms in turn.

First, suppose that $\map s m = \map s n$ for some $m, n \in S$.
That is:

$m \circ 1 = n \circ 1$
By Axiom $(\text {NO} 2)$, it follows that $m = n$.
Hence Axiom $(\text P 3)$ holds.

Aiming for a contradiction, suppose that $\map s n = 0$ for some $n \in S$.
That is:

$n \circ 1 = 0$
By Sum with One is Immediate Successor in Naturally Ordered Semigroup, this would imply:

$n \prec 0$
However, this contradicts the definition of $0$.
Consequently, Axiom $(\text P 4)$ is satisfied.

Finally, let $A \subseteq S$ be such that $0 \in A$ and, for all $n \in S$:

$n \in A \implies \map s n \in A$
Define $T := S \setminus A$.
Aiming for a contradiction, suppose $T \ne \O$.
Then by Axiom $(\text {NO} 3)$, $T$ has a minimal element $n$.
By assumption, $0 \in A$, so that $n \ne 0$.
Therefore, by definition of $1$:

$1 \preceq n$
By Ordering in terms of Addition, there exists a $p \in S$ such that:

$p \circ 1 = n$
since $\circ$ is commutative.
By Sum with One is Immediate Successor in Naturally Ordered Semigroup:

$p \prec n$
Since $n$ is the minimal element of $T$, it follows that $p \notin T$.
Therefore, by definition, $p \in A$.
But by assumption on $A$, this means that $n = p \circ 1 \in A$.
This is a contradiction, hence $T = \O$.
That is to say, $A = S$, and Axiom $(\text P 5)$ holds as well.

Having verified all the axioms, we conclude that $\struct {S, 0, s}$ is a Peano structure.
$\blacksquare$





