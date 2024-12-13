# 

Source: https://proofwiki.org/wiki/Principle_of_Finite_Choice



Theorem
Let $I$ be a non-empty finite indexing set.
Let $\family {S_i}_{i \mathop \in I}$ be an $I$-indexed family of non-empty sets.

Then there exists an $I$-indexed family $\family {x_i}_{i \mathop \in I}$ such that:

$\forall i \in I: x_i \in S_i$

That is, there exists a mapping:

$\ds f: I \to \bigcup_{i \mathop \in I} S_i$
such that:

$\forall i \in I: \map f i \in S_i$


Proof
We use the Principle of Mathematical Induction on the cardinality of $I$.


Basis for the Induction
Let $\card I = 1$.
Let $j \in I$.
Then $I = \set j$. 
By the definition of a non-empty set, there exists an $x \in S_j$.
Hence, there exists a mapping $f: I \to S_j$ such that $\map f j = x$.
Since $\forall i \in I: i = j$, the result is indeed seen to hold for $\card I = 1$.
This is the basis for the induction


Induction Hypothesis
Assume that the theorem holds for all $I$ with $\card I = n$.
This is the induction hypothesis.


Induction Step
Now, suppose that $\card I = n + 1$. 
Let $j \in I$.
Let $J = I \setminus \set j$.
By Cardinality Less One, $\card J = n$.

By the induction hypothesis, there exists a mapping:

$\ds g: J \to \bigcup_{i \mathop \in J} S_i$
such that:

$\forall i \in J: \map g i \in S_i$
By the definition of a non-empty set, there exists a $y \in S_j$.
Hence, there exists a mapping:

$\ds f: I \to \bigcup_{i \mathop \in I} S_i$
such that:

$\ds \forall i \in I: \map f i = \begin{cases}
\map g i & : i \ne j \\
y & : i = j
\end{cases}$

Then:

$\forall i \in I: \map f i \in S_i$
as desired.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 15$: The Axiom of Choice
1973: Thomas J. Jech: The Axiom of Choice ... (previous) ... (next): $1.$ Introduction: $1.1$ The Axiom of Choice




