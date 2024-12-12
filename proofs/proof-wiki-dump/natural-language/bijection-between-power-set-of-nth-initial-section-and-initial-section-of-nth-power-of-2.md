# 

Source: https://proofwiki.org/wiki/Bijection_between_Power_Set_of_nth_Initial_Section_and_Initial_Section_of_nth_Power_of_2

Theorem
Let $\N_n$ be used to denote the first $n$ non-zero natural numbers:

$\N_n = \set {1, 2, \ldots, n}$

Then there exists a bijection between the power set of $\N_n$ and $\N_{2^n}$.


Proof
Let $\phi: \powerset {\N_n} \to \N_{2^n}$ be defined as:

$\forall A \in \powerset {\N_n}: \map \phi A = \begin{cases} \ds \sum_{k \mathop \in A} 2^{k - 1} & : A \ne \O \\ 2^k & : A = \O \end{cases}$

Apart from $\O$, every $A \in \powerset {\N_n}$ consists of a set of integers between $1$ and $n$.
The expression $\ds \sum_{k \mathop \in A} 2^{k - 1}$ is the summation of a set of powers of $2$ between $2^0$ and $2^{n - 1}$.
Hence $A$ is seen to be left-total and many-to-one and so is a mapping.

By the Basis Representation Theorem, every integer between $1$ and $2^n - 1$ can be expressed uniquely as the sum of powers of $2$ between $2^0$ and $2^{n - 1}$.
The final integer $2^n$ is mapped to from $\O$.
Thus it is seen that $\phi$ is both an injection and a surjection.
Hence the result.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Mappings: $\S 14 \beta$




