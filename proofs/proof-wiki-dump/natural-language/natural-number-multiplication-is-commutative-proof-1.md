# 

Source: https://proofwiki.org/wiki/Natural_Number_Multiplication_is_Commutative/Proof_1

Theorem
The operation of multiplication on the set of natural numbers $\N$ is commutative:

$\forall x, y \in \N: x \times y = y \times x$


Proof
Natural number multiplication is recursively defined as:

$\forall m, n \in \N: \begin{cases} m \times 0 & = 0 \\ m \times \paren {n + 1} & = m \times n + m \end{cases}$
From the Principle of Recursive Definition, there is only one mapping $f$ satisfying this definition; that is, such that:

$\forall n \in \N: \begin{cases} \map f 0 = 0 \\ \map f {n + 1} = \map f n + m \end{cases}$
Consider now $f'$ defined as $\map {f'} n = n \times m$.
Then by Zero is Zero Element for Natural Number Multiplication:

$\map {f'} 0 = 0 \times m = 0$
Furthermore:














\(\ds \map {f'} {n + 1}\)

\(=\)







\(\ds \paren {n + 1} \times m\)




















\(\ds \)

\(=\)







\(\ds n \times m + m\)





Natural Number Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds \map {f'} n + m\)









showing that $f'$ also satisfies the definition of $m \times n$.
By the Principle of Recursive Definition it follows that:

$m \times n = n \times m$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Theorem $16.10$




