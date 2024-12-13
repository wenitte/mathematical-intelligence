# 

Source: https://proofwiki.org/wiki/Identity_Element_of_Natural_Number_Multiplication_is_One

Theorem
Let $\N$ be the natural numbers.
Let $1$ be the element one of $\N$.

Then $1$ is the identity element of multiplication:

$\forall n \in \N: n \times 1 = n = 1 \times n$


Proof
Firstly, by definition of multiplication:














\(\ds n \times 1\)

\(=\)







\(\ds \paren {n \times 0} + n\)




















\(\ds \)

\(=\)







\(\ds n\)









Next, recall that multiplication is recursively defined as:

$\forall m, n \in \N: \begin{cases}
m \times 0 & = 0 \\
m \times \paren {n + 1} & = m \times n + m
\end{cases}$
From the Principle of Recursive Definition, there is only one mapping $f$ satisfying this definition for $m = 1$; that is, such that:

$\forall n \in \N: \begin {cases}
\map f 0 = 0 \\
\map f {n + 1} = \map f n + 1
\end{cases}$
Consider now $f'$ defined as $\map {f'} n = n$.
Then evidently $\map {f'} 0 = 0$.
Also:














\(\ds \map {f'} {n + 1}\)

\(=\)







\(\ds n + 1\)




















\(\ds \)

\(=\)







\(\ds \map {f'} n + 1\)









showing that $f'$ also satisfies the definition for $1 \times n$.
Hence $n \times 1 = 1 \times n = n$ for all $n \in \N$.
That is, $1$ is the identity element for multiplication.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Theorem $16.10$
1982: Alan G. Hamilton: Numbers, Sets and Axioms ... (previous) ... (next): $\S 1$: Numbers: $1.1$ Natural Numbers and Integers: Examples $1.1 \ \text {(g)}$




