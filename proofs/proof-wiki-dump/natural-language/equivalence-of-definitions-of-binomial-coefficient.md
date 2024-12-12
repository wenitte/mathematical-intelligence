# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Binomial_Coefficient



Theorem
The following definitions of the concept of Binomial Coefficient are equivalent:

Definition 1
Let $n \in \Z_{\ge 0}$ and $k \in \Z$.
Then the binomial coefficient $\dbinom n k$ is defined as:

$\dbinom n k = \begin {cases} \dfrac {n!} {k! \paren {n - k}!} & : 0 \le k \le n \\ & \\ 0 & : \text { otherwise } \end{cases}$
where $n!$ denotes the factorial of $n$.

Definition 2
Let $n \in \Z_{\ge 0}$ and $k \in \Z$.
The number of different ways $k$ objects can be chosen (irrespective of order) from a set of $n$ objects is denoted:

$\dbinom n k$
This number $\dbinom n k$ is known as a binomial coefficient.

Definition 3
Let $n \in \Z_{\ge 0}$ and $k \in \Z$.
Then the binomial coefficient $\dbinom n k$ is defined as the coefficient of the term $a^k b^{n - k}$ in the expansion of $\paren {a + b}^n$.


Proof
Definition 1 implies Definition 2
Follows directly from Cardinality of Set of Subsets.
$\Box$


Definition 1 implies Definition 3
This is proved in the Binomial Theorem.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 19$: Combinatorial Analysis




