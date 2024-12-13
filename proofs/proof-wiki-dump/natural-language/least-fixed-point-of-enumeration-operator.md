# 

Source: https://proofwiki.org/wiki/Least_Fixed_Point_of_Enumeration_Operator



Theorem
Let $\psi : \powerset \N \to \powerset \N$ be an enumeration operator.
Let $A_i$ be defined recursively as:

$A_0 = \empty$
$A_{n + 1} = \map \psi {A_n}$
Let $A = \ds \bigcup_{i \mathop \in \N} A_i$.

Then:

$A$ is a fixed point of $\psi$
Every fixed point of $\psi$ is a superset of $A$


Proof
Lemma
Let $\psi : \powerset \N \to \powerset \N$ be an enumeration operator.
Let $A_i$ be defined recursively as:

$A_0 = \empty$
$A_{n + 1} = \map \psi {A_n}$

Then $A_i$ is an increasing sequence with respect to the subset ordering.
$\Box$

By definition of enumeration operator, let $\phi \subseteq \N$ be a recursively enumerable set that yields $\psi$.


$A$ is a fixed point
By definition of fixed point, we want to show that $\map \psi A = A$.
By definition of set equality, it suffices to show that:

$\map \psi A \subseteq A$
$A \subseteq \map \psi A$

Let $x \in \map \psi A$ be arbitrary.
Then, by definition of enumeration operator, there is some finite subset $B$ of $A$ such that:

$\map \pi {x, b} \in \phi$
where $b$ is the code number for $B$.

Suppose $B = \empty$.
Then, $x \in A_1 \subseteq A$ by the definition of enumeration operator and Union is Smallest Superset.

Otherwise, suppose $B \ne \empty$.
By definition of Union of Family, for each $y \in A$, there is some $i \in \N$ such that:

$y \in A_i$
By Principle of Finite Choice, choose such an $i_y$ for each $y \in B$.
Let $\ds j = \max_{y \mathop \in B} i_y$, which exists by Finite Non-Empty Subset of Totally Ordered Set has Smallest and Greatest Elements.
By definition of greatest element, every $i_y \le j$.
Thus, by the lemma, every $A_{i_y} \subseteq A_j$.
Therefore, for every $y \in B$:

$y \in A_j$
It follows from the definition of enumeration operator that $x \in A_{j + 1}$.

As $x$, was arbitrary, it follows from the definition that $\map \psi A \subseteq A$.
$\Box$

Now, let $x \in A$ be arbitrary.
Then, by definition of Union of Family, there is some $i \in \N$ such that:

$x \in A_i$
As $A_0 = \empty$, by definition $x \notin A_0$.
Therefore, $i > 0$.

By definition of enumeration operator, there is a finite subset $B \subseteq A_{i - 1}$ such that:

$\map \pi {x, b} \in \phi$
But, by definition of Union of Family, $A_{i - 1} \subseteq A$.
Thus, by Subset Relation is Transitive:

$B \subseteq A$
Therefore, it follows from the definition of enumeration operator that $x \in \map \psi A$.
As $x \in A$ was arbitrary, by the definition, $A \subseteq \map \psi A$.
$\Box$


$A$ is the least fixed point
Let $F \subseteq \N$ be a fixed point of $\psi$.
By Union of Subsets is Subset:

$\paren {\forall i \in \N: A_i \subseteq F} \implies A \subseteq F$
Thus, it suffices to show that $A_i \subseteq F$ for every $i \in \N$.
We will proceed by induction.


Basis for the Induction
Follows immediately from Empty Set is Subset of All Sets.
$\Box$


Induction Hypothesis
Suppose that, for $i \in \N$:

$A_i \subseteq F$


Induction Step
Let $x \in A_{i + 1}$ be arbitrary.
By definition of enumeration operator, there is a finite subset $B \subseteq A_i$ such that:

$\map \pi {x, b} \in \phi$
where $b$ is the code number for $B$.
By the induction hypothesis, $A_i \subseteq F$.
By Subset Relation is Transitive:

$B \subseteq F$
Thus, it follows from the definition of enumeration operator that:

$x \in \map \psi F$
But, as $F$ is a fixed point of $\psi$:

$\map \psi F = F$
Therefore:

$x \in F$
As $x$ was arbitrary, it follows from the definition that:

$A_{i + 1} \subseteq F$
$\Box$

Thus, by Principle of Mathematical Induction:

$\forall i \in \N: A_i \subseteq F$
completing our proof by the remarks above.
$\blacksquare$





