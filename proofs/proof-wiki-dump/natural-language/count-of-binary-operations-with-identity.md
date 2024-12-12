# 

Source: https://proofwiki.org/wiki/Count_of_Binary_Operations_with_Identity



Theorem
Let $S$ be a set whose cardinality is $n$.
The number $N$ of possible different binary operations which have an identity element that can be applied to $S$ is given by:

$N = n^{\paren {n - 1}^2 + 1}$


Sequence of Values of $N$
The sequence of $N$ for each $n$ begins:
$\begin{array} {c|cr}
n & \paren {n - 1}^2 + 1 & n^{\paren {n - 1}^2 + 1}\\
\hline
1 & 1 & 1 \\
2 & 2 & 4 \\
3 & 5 & 243 \\
4 & 10 & 1 \ 048 \ 576 \\
\end{array}$


Proof
From Count of Binary Operations with Fixed Identity, there are $n^{\paren {n - 1}^2}$ such binary operations for each individual element of $S$.
As Identity is Unique, if $x$ is the identity, no other element can also be an identity.
As there are $n$ different ways of choosing such an identity, there are $n \times n^{\paren {n - 1}^2}$ different magmas with an identity.
These are guaranteed not to overlap by the uniqueness of the identity.
Hence the result.
$\blacksquare$


Examples
Order $2$ Structure
The Cayley tables for the complete set of magmas of order $2$ which have an identity element are listed below.
The underlying set in all cases is $\set {a, b}$.
$\quad\begin{array}{r|rr}   & a & b \\ \hline a & a & a \\ b & a & b \\ \end{array}
\qquad
\begin{array}{r|rr}   & a & b \\ \hline a & a & b \\ b & b & a \\ \end{array}$
$\quad\begin{array}{r|rr}   & a & b \\ \hline a & a & b \\ b & b & b \\ \end{array}
\qquad
\begin{array}{r|rr}  & a & b \\ \hline a & b & a \\ b & a & b \\ \end{array}$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 4$: Neutral Elements and Inverses: Exercise $4.2$




