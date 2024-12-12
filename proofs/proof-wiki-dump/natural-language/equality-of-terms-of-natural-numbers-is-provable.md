# 

Source: https://proofwiki.org/wiki/Equality_of_Terms_of_Natural_Numbers_is_Provable



Theorem
Let $A$ and $B$ be terms in the language of arithmetic containing no variables.
Let $A = B$ when interpreted over the natural numbers $\N$.
Then there is a formal proof of $A = B$ in minimal arithmetic.

Proof
Let $k = A = B$.
By Unary Representation of Natural Number, there is a term $\sqbrk k$ consisting of only the successor mapping and the constant $0$ such that $\sqbrk k = k$.

We want to show that $A = \sqbrk k$ has a formal proof.
Proceed by induction on the structure of the term $A$.
By definition, a term consists of variables and function applications.
By assumption, $A$ contains no variables.
Therefore, $A$ consists of only function applications defined by the language.

Constant $0$
Let $A = 0$.
Then the following is a formal proof:

By Equality is Reflexive:
$0 = 0$
$\Box$

Successor Mapping
Let $A' = \map s A$.
Then the following is a formal proof:

By hypothesis, there is a formal proof of $A = \sqbrk k$.
By Substitution Property of Equality:
$\map s A = \map s {\sqbrk k}$
But $\map s {\sqbrk k}$ is syntactically identical to $\sqbrk {\map s k}$, and $\map s A$ to $A'$.
Therefore, there is a formal proof of $A' = \sqbrk {\map s k}$.

Addition
Let $A' = A_1 + A_2$
Then the following is a formal proof:

By hypothesis, there are formal proofs of $A_1 = \sqbrk {k_1}$ and $A_2 = \sqbrk {k_2}$.
By Addition of Natural Numbers is Provable, there is a formal proof of $\sqbrk {k_1} + \sqbrk {k_2} = \sqbrk {k_1 + k_2}$.
By Substitution Property of Equality:
$A_1 + A_2 = \sqbrk {k_1 + k_2}$
But as $A_1 = k_1$ and $A_2 = k_2$, it follows that $k_1 + k_2 = A_1 + A_2$.
Therefore, the formal proof above is syntactically identical to:

$A' = \sqbrk {A_1 + A_2}$
$\Box$

Multiplication
Let $A' = A_1 \times A_2$
Then the following is a formal proof:

By hypothesis, there are formal proofs of $A_1 = \sqbrk {k_1}$ and $A_2 = \sqbrk {k_2}$.
By Multiplication of Natural Numbers is Provable, there is a formal proof of $\sqbrk {k_1} \times \sqbrk {k_2} = \sqbrk {k_1 \times k_2}$.
By Substitution Property of Equality:
$A_1 \times A_2 = \sqbrk {k_1 \times k_2}$
But as $A_1 = k_1$ and $A_2 = k_2$, it follows that $k_1 \times k_2 = A_1 \times A_2$.
Therefore, the formal proof above is syntactically identical to:

$A' = \sqbrk {A_1 \times A_2}$
$\Box$

Thus, $A = \sqbrk k$ has a formal proof.
In exactly the same manner, $B = \sqbrk k$ has a formal proof.
But then the following is a formal proof:

By Equality is Symmetric, $\sqbrk k = B$.
By Equality is Transitive, $A = B$.
$\blacksquare$





