# 

Source: https://proofwiki.org/wiki/Count_of_Commutative_Binary_Operations_on_Set



Theorem
Let $S$ be a set whose cardinality is $n$.
The number $N$ of possible different commutative binary operations that can be applied to $S$ is given by:

$N = n^{\frac {n \paren {n + 1} } 2}$


Sequence of Values of $N$
The sequence of $N$ for each $n$ begins:
$\begin{array} {c|cr}
n & \dfrac {n \paren {n + 1} }2 & n^{\frac {n \paren {n + 1} } 2} \\
\hline
1 & 1 & 1 \\
2 & 3 & 8 \\
3 & 6 & 729 \\
4 & 10 & 1 \ 048 \ 576 \\
\end{array}$
and so on.


Proof
Let $\struct {S, \circ}$ be a magma.
From Cardinality of Cartesian Product of Finite Sets, there are $n^2$ elements in $S \times S$.
The binary operations $\circ$ is commutative if and only if:

$\forall x, y \in S: x \circ y = y \circ x$
Thus for every pair of elements $\tuple {x, y} \in S \times S$, it is required that $\tuple {y, x} \in S \times S$.
So the question boils down to establishing how many different unordered pairs there are in $S$.
That is, how many doubleton subsets there are in $S$.
From Cardinality of Set of Subsets, this is given by:

$\dbinom n 2 = \dfrac {n \paren {n - 1} } 2$
To that set of doubleton subsets, we also need to add those ordered pairs where $x = y$.
There are clearly $n$ of these.
So the total number of pairs in question is:

$\dfrac {n \paren {n - 1} } 2 + n = \dfrac {n \paren {n + 1} } 2$
The result follows from Cardinality of Set of All Mappings.
$\blacksquare$


Examples
Order $2$ Structure
The Cayley tables for the complete set of commutative magmas of order $2$ are listed below.
The underlying set in all cases is $\set {a, b}$.

$\begin{array}{r|rr}
 & a & b \\

\hline
a & a & a \\
b & a & a \\
\end{array}
\qquad
\begin{array}{r|rr}

 & a & b \\

\hline
a & a & a \\
b & a & b \\
\end{array}$

$\begin{array}{r|rr}
 & a & b \\

\hline
a & a & b \\
b & b & a \\
\end{array}
\qquad
\begin{array}{r|rr}

 & a & b \\

\hline
a & a & b \\
b & b & b \\
\end{array}$

$\begin{array}{r|rr}
 & a & b \\

\hline
a & b & a \\
b & a & a \\
\end{array}
\qquad
\begin{array}{r|rr}

 & a & b \\

\hline
a & b & a \\
b & a & b \\
\end{array}$

$\begin{array}{r|rr}
 & a & b \\

\hline
a & b & b \\
b & b & a \\
\end{array}
\qquad \begin{array}{r|rr}

 & a & b \\

\hline
a & b & b \\
b & b & b \\
\end{array}$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 2$: Compositions: Exercise $2.3$




