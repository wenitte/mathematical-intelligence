# 

Source: https://proofwiki.org/wiki/Count_of_Binary_Operations_Without_Identity



Theorem
Let $S$ be a set whose cardinality is $n$.
The number $N$ of possible different binary operations which do not have an identity element that can be applied to $S$ is given by:

$N = n^{\paren {\paren {n - 1}^2 + 1} } \paren {n^{2 \paren {n - 1} } - 1}$


Sequence of Values of $N$
The sequence of $N$ for each $n$ begins:
$\begin{array} {c||r|r|r}
n & n^{\paren {n^2} } & n^{\paren {n - 1}^2 + 1} & n^{\paren {\paren {n - 1}^2 + 1} } \paren {n^{2 \paren {n - 1} } - 1} \\
\hline
1 & 1 & 1 & 0 \\
2 & 16 & 4 & 12 \\
3 & 19 \ 683 & 243 & 19 \ 440 \\
4 & 4 \ 294 \ 967 \ 296 & 1 \ 048 \ 576 & 4 \ 293 \ 918 \ 720 \\
\end{array}$


Proof
From Count of Binary Operations on Set, the total number of operations is $n^{\paren {n^2} }$.
From Count of Binary Operations with Identity, the total number of operations with an identity is $n^{\paren {n - 1}^2 + 1}$.
So the total number of operations without an identity is:

$n^{\paren {n^2} } - n^{\paren {n - 1}^2 + 1} = n^{\paren {\paren {n - 1}^2 + 1} } \paren {n^{2 \paren {n - 1} } - 1}$

Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 4$: Neutral Elements and Inverses: Exercise $4.2$




