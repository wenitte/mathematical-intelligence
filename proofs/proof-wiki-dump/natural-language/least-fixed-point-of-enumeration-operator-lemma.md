# 

Source: https://proofwiki.org/wiki/Least_Fixed_Point_of_Enumeration_Operator/Lemma



Lemma
Let $\psi : \powerset \N \to \powerset \N$ be an enumeration operator.
Let $A_i$ be defined recursively as:

$A_0 = \empty$
$A_{n + 1} = \map \psi {A_n}$

Then $A_i$ is an increasing sequence with respect to the subset ordering.


Proof
By definition of enumeration operator, let $\phi \subseteq \N$ be some recursively enumerable set that yields $\psi$.
Define:

$\map P i \iff \forall j < i: A_j \subseteq A_i$
Proceed by induction on $i$.


Basis for the Induction
As there are no natural numbers $j < 0$, $\map P 0$ is satisfied vacuously.
$\Box$


Induction Hypothesis
Suppose the induction hypothesis holds.
That is, suppose that, for $k \in \N$:

$\map P k$
or, equivalently:

$\forall j < k: A_j \subseteq A_k$


Induction Step
Let $j \le k$ be arbitrary.
By the induction hypothesis, as well as Set is Subset of Itself:

$A_j \subseteq A_k$
Therefore, by Subset Relation is Transitive:

$A_k \subseteq A_{k + 1} \implies A_j \subseteq A_{k + 1}$
Thus, it suffices to show that $A_k \subseteq A_{k + 1}$.

Suppose $k = 0$.
Then, by definition, $A_0 = \empty$.
Then, $A_0 \subseteq A_1$ follows from Empty Set is Subset of All Sets.

Otherwise, let $k > 0$.
Let $x \in A_k$ be arbitrary.
By definition of enumeration operator, there is a finite subset $B \subseteq A_{k - 1}$ such that:

$\map \pi {x, b} \in \phi$
where $b$ is the finite set coding of $B$.
But, by the induction hypothesis, $A_{k - 1} \subseteq A_k$.
Therefore, by Subset Relation is Transitive:

$B \subseteq A_k$
Additionally, as $B$ is finite by definition, it follows that $B$ is a finite subset of $A_k$.
As $\map \pi {x, b} \in \phi$, it follows that $x \in A_{k + 1}$ by definition.
As $x$ was arbitrary, it follows from the definition that:

$A_k \subseteq A_{k + 1}$
$\Box$

As the Basis for the Induction holds, and the Induction Step follows from the Induction Hypothesis, we conclude by the Principle of Mathematical Induction that:

$\forall i \in \N, j < i: A_j \subseteq A_i$
Therefore, the sequence $A_i$ is increasing with respect to the subset ordering by definition.
$\blacksquare$





