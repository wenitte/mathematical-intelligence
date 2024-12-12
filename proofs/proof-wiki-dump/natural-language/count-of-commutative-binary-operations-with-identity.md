# 

Source: https://proofwiki.org/wiki/Count_of_Commutative_Binary_Operations_with_Identity



Theorem
Let $S$ be a set whose cardinality is $n$.
The number $N$ of possible different commutative binary operations that can be applied to $S$ which have an identity element is given by:

$N = n^{\frac {n \paren {n - 1} } 2 + 1}$


Sequence of Values of $N$
The sequence of $N$ for each $n$ begins:
$\begin{array} {c|cr}
n & \dfrac {n \paren {n - 1} } 2 + 1 & n^{\frac {n \paren {n - 1} } 2 + 1} \\
\hline
1 & 1 & 1 \\
2 & 2 & 4 \\
3 & 4 & 81 \\
4 & 7 & 16 \ 384 \\
5 & 11 & 48 \ 828 \ 125 \\
\end{array}$


Proof
From Count of Commutative Binary Operations with Fixed Identity, there are $n^{\frac {n \paren {n - 1} } 2}$ such binary operations for each individual element of $S$.
As Identity is Unique, if $x$ is the identity, no other element can also be an identity.
As there are $n$ different ways of choosing such an identity, there are $n \times n^{\frac {n \paren {n - 1} } 2}$ different algebraic structures with an identity.
These are guaranteed not to overlap by the uniqueness of the identity.
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 4$: Neutral Elements and Inverses: Exercise $4.2$




