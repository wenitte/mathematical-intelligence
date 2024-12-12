# 

Source: https://proofwiki.org/wiki/Count_of_Binary_Operations_with_Fixed_Identity



Theorem
Let $S$ be a set whose cardinality is $n$.
Let $x \in S$.
The number $N$ of possible different binary operations such that $x$ is an identity element that can be applied to $S$ is given by:

$N = n^{\paren {\paren {n - 1}^2} }$


Sequence of Values of $N$
The sequence of $N$ for each $n$ begins:
$\begin {array} {c|cr}
n & \paren {n - 1}^2 & n^{\paren {\paren {n - 1}^2} } \\
\hline
1 & 0 & 1 \\
2 & 1 & 2 \\
3 & 4 & 81 \\
4 & 9 & 262 \, 144 \\
\end{array}$


Proof
Let $S$ be a set such that $\card S = n$.
Let $x \in S$ be an identity element.
From Count of Binary Operations on Set, there are $n^{\paren {n^2} }$ binary operations in total.
We also know that $a \in S \implies a \circ x = a = x \circ a$, so all operations on $x$ are already specified.

It remains to count all possible combinations of the remaining $n - 1$ elements.
This is effectively counting the mappings $\paren {S \setminus \set x} \times \paren {S \setminus \set x} \to S$.
From Count of Binary Operations on Set, this is $n^{\paren {\paren {n - 1}^2} }$ structures with $x$ as the identity element.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 4$: Neutral Elements and Inverses: Exercise $4.2$




