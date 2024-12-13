# 

Source: https://proofwiki.org/wiki/Ordering_of_Cardinals_Compatible_with_Cardinal_Sum

Theorem
Let $\mathbf a$, $\mathbf b$ and $\mathbf c$ be cardinals.

Then:

$\mathbf a \le \mathbf b \implies \mathbf a + \mathbf c \le \mathbf b + \mathbf c$
where $\mathbf a \mathbf c$ denotes the sum of $\mathbf a$ and $\mathbf c$.


Proof
Let $\mathbf a = \map \Card A$, $\mathbf b = \map \Card B$ and $\mathbf c = \map \Card C$ for some sets $A$, $B$ and $C$.
Let $C$ be chosen such that $A \cap C = \O = B \cap C$.

Let $\mathbf a \le \mathbf b$.
Then by definition of cardinal, there exists an injection $f: A \to B$.
Then the mapping $h: A \cup C \to B \cup C$ defined as:

$\forall x \in A \cup C: \map h x = \begin{cases}
\map f x & : x \in A \\
x & : x \in C
\end{cases}$

Let $a_1 \in A \cup C$ and $a_2 \in A \cup C$ such that:

$\map h {a_1} = \map h {a_2}$
Then:














\(\ds a_1\)

\(\in\)







\(\ds C\)














\(\ds \leadsto \ \ \)





\(\ds a_1\)

\(=\)







\(\ds \map h {a_1}\)





Definition of $h$








\(\ds \leadsto \ \ \)





\(\ds a_1\)

\(=\)







\(\ds \map h {a_2}\)





as $\map h {a_1} = \map h {a_2}$








\(\ds \leadsto \ \ \)





\(\ds a_1\)

\(=\)







\(\ds a_2\)





as $\map h {a_2}$ must also be in $C$




and:














\(\ds a_1\)

\(\notin\)







\(\ds C\)














\(\ds \leadsto \ \ \)





\(\ds \map h {a_1}\)

\(=\)







\(\ds \map f {a_1}\)





Definition of $h$








\(\ds \leadsto \ \ \)





\(\ds \map h {a_2}\)

\(=\)







\(\ds \map f {a_1}\)





as $\map h {a_1} = \map h {a_2}$








\(\ds \leadsto \ \ \)





\(\ds \map h {a_2}\)

\(=\)







\(\ds \map f {a_2}\)





as $\map h {a_2}$ must also not be in $C$








\(\ds \leadsto \ \ \)





\(\ds \map f {a_1}\)

\(=\)







\(\ds \map f {a_2}\)





as $\map h {a_1} = \map h {a_2}$








\(\ds \leadsto \ \ \)





\(\ds a_1\)

\(=\)







\(\ds a_2\)





as $f$ is an injection




So:

$\map h {a_1} = \map h {a_2} \implies a_1 = a_2$
demonstrating that $h$ is an injection.

So, by definition of sum of cardinals:

$\mathbf a + \mathbf c \le \mathbf b + \mathbf c$
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 8$: Theorem $8.7$




