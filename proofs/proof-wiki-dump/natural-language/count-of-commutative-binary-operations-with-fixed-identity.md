# 

Source: https://proofwiki.org/wiki/Count_of_Commutative_Binary_Operations_with_Fixed_Identity



Theorem
Let $S$ be a set whose cardinality is $n$.
Let $x \in S$.
The number $N$ of possible different commutative binary operations such that $x$ is an identity element that can be applied to $S$ is given by:

$N = n^{\frac {n \paren {n - 1} } 2}$


Sequence of Values of $N$
The sequence of $N$ for each $n$ begins:
$\begin {array} {c|cr}
n & \dfrac {n \paren {n - 1} } 2 & n^{\frac {n \paren {n - 1} } 2} \\
\hline
1 & 0 & 1 \\
2 & 1 & 2 \\
3 & 3 & 27 \\
4 & 6 & 4 \ 096 \\
5 & 10 & 9 \ 765 \ 625 \\
\end {array}$


Proof
This follows by the arguments of Count of Binary Operations with Fixed Identity and Count of Commutative Binary Operations on Set.

From Count of Binary Operations on Set, there are $n^{\paren {n^2} }$ binary operations in total.
We also know that:

$a \in S \implies a \circ x = a = x \circ a$
so all binary operations on $x$ are already specified.

It remains to count all possible combinations of the remaining $n-1$ elements.
This is effectively counting the mappings:

$\paren {S \setminus \set x} \times \paren {S \setminus \set x} \to S$

So the question boils down to establishing how many different unordered pairs there are in $\paren {S \setminus \set x}$.
That is, how many doubleton subsets there are in $\paren {S \setminus \set x}$.
From Cardinality of Set of Subsets, this is given by:

$\dbinom {n - 1} 2 = \dfrac {\paren {n - 1} \paren {n - 2} } 2$
To that set of doubleton subsets, we also need to add those ordered pairs where $x = y$.
There are clearly $n - 1$ of these.
So the total number of pairs in question is:

$\dfrac {\paren {n - 1} \paren {n - 2} } 2 + n - 1 = \dfrac {n \paren {n - 1} } 2$
The result follows from Cardinality of Set of All Mappings.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 4$: Neutral Elements and Inverses: Exercise $4.2$




