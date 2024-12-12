# 

Source: https://proofwiki.org/wiki/Cartesian_Product_of_Subsets



Theorem
Let $A, B, S, T$ be sets such that $A \subseteq B$ and $S \subseteq T$.
Then:

$A \times S \subseteq B \times T$

In addition, if $A, S \ne \O$, then:

$A \times S \subseteq B \times T \iff A \subseteq B \land S \subseteq T$


Corollary 1
Let $A, B, S$ be sets such that $A \subseteq B$.

Then:

$A \times S \subseteq B \times S$


Corollary 2
Let $A, S, T$ be sets such that $S \subseteq T$.

Then:

$A \times S \subseteq A \times T$


Corollary 3
Let $A, B, C$ be sets such that $B \ne \O$.
Let $A \times B \subseteq C \times C$.

Then:

$A \subseteq C$


Family of Subsets
Let $\family {S_i}_{i \mathop \in I}$ be a family of sets where $I$ is an arbitrary index set.
Let $S = \ds \prod_{i \mathop \in I} S_i$ be the Cartesian product of $\family {S_i}_{i \mathop \in I}$.

Let $\family {T_i}_{i \mathop \in I}$ be a family of sets.
Let $T = \ds \prod_{i \mathop \in I} T_i$ be the Cartesian product of $\family {T_i}_{i \mathop \in I}$.

Then:

$\paren {\forall i \in I: T_i \subseteq S_i} \implies T \subseteq S$.


Nonempty Subsets
Let $T_i \ne \O$ for all $i \in I$.

Then:

$T \subseteq S \iff \forall i \in I: T_i \subseteq S_i$.


Proof
First we show that $A \subseteq B \land S \subseteq T \implies A \times S \subseteq B \times T$.
First, let $A = \O$ or $S = \O$.
Then from Cartesian Product is Empty iff Factor is Empty:

$A \times S = \O \subseteq B \times T$
so the result holds.

Next, let $A, S \ne \O$.
Then from Cartesian Product is Empty iff Factor is Empty:

$A \times S \ne \O$
and we can use the following argument:














\(\ds \)

\(\)







\(\ds \tuple {x, y} \in A \times S\)




















\(\ds \)

\(\leadsto\)







\(\ds x \in A, y \in S\)





Definition of Cartesian Product














\(\ds \)

\(\leadsto\)







\(\ds x \in B, y \in T\)





Definition of Subset














\(\ds \)

\(\leadsto\)







\(\ds \tuple {x, y} \in B \times T\)





Definition of Cartesian Product




Thus $A \times S \subseteq B \times T$ as we were to prove.

Now we show that if $A, S \ne \O$, then:

$A \times S \subseteq B \times T \implies A \subseteq B \land S \subseteq T$
So suppose that $A \times S \subseteq B \times T$.

First note that if $A = \O$, then $A \times S = \O \subseteq B \times T$, whatever $S$ is, so it is not necessarily the case that $S \subseteq T$.
Similarly if $S = \O$; it is not necessarily the case that $A \subseteq B$.
So that explains the restriction $A, S \ne \O$.

Now, as $A, S \ne \O$, $\exists x \in A, y \in S$.
Thus:














\(\ds \)

\(\)







\(\ds x \in A, y \in S\)




















\(\ds \)

\(\leadsto\)







\(\ds \tuple {x, y} \in A \times S\)





Definition of Cartesian Product














\(\ds \)

\(\leadsto\)







\(\ds \tuple {x, y} \in B \times T\)





Definition of Subset














\(\ds \)

\(\leadsto\)







\(\ds x \in B, y \in T\)





Definition of Cartesian Product




So when $A, S \ne \O$, we have:

$A \subseteq S \land B \subseteq T \implies A \times S \subseteq B \times T$
$A \times S \subseteq B \times T \implies A \subseteq B \land S \subseteq T$
from which:

$A \times S \subseteq B \times T \iff A \subseteq B \land S \subseteq T$
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 6$: Ordered Pairs
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 1$: The Language of Set Theory: Exercise $1.3$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 1$: Fundamental Concepts: Exercise $1.2 \ \text{(j)}, \text{(l)}$




