# 

Source: https://proofwiki.org/wiki/Count_of_Binary_Operations_on_Set



Theorem
Let $S$ be a set whose cardinality is $n$.
The number $N$ of different binary operations that can be applied to $S$ is given by:

$N = n^{\paren {n^2} }$


Sequence of Values of $N$
The sequence of $N$ for each $n$ begins:
$\begin{array} {c|rr}
n & n^2 & N = n^{\paren {n^2} } \\
\hline
1 & 1 & 1 \\
2 & 4 & 16 \\
3 & 9 & 19 \ 683 \\
4 & 16 & 4 \ 294 \ 967 \ 296 \\
\end{array}$
There are still only $4$ elements in a set, and already there are over $4$ thousand million different possible algebraic structures.


Proof
A binary operation on $S$ is by definition a mapping from the cartesian product $S \times S$ to the set $S$.
Thus we are looking to evaluate:

$N = \card {\set {f: S \times S \to S} }$
The domain of $f$ has $n^2$ elements, from Cardinality of Cartesian Product of Finite Sets of Finite Sets.
The result follows from Cardinality of Set of All Mappings.
$\blacksquare$


Examples
Order $2$ Structure
The Cayley tables for the complete set of magmas of order $2$ are listed below.
The underlying set in all cases is $\set {a, b}$.
$\quad
\begin{array}{r|rr}  & a & b \\ \hline a & a & a \\ b & a & a \\ \end{array}
\qquad
\begin{array}{r|rr}   & a & b \\ \hline a & a & a \\ b & a & b \\ \end{array}
\qquad
\begin{array}{r|rr}   & a & b \\ \hline a & a & a \\ b & b & a \\ \end{array}
\qquad
\begin{array}{r|rr}   & a & b \\ \hline a & a & a \\ b & b & b \\ \end{array}$
$\quad
\begin{array}{r|rr}  & a & b \\ \hline a & a & b \\ b & a & a \\ \end{array}
\qquad
\begin{array}{r|rr} & a & b \\ \hline a & a & b \\ b & a & b \\ \end{array}
\qquad
\begin{array}{r|rr} & a & b \\ \hline a & a & b \\ b & b & a \\ \end{array}
\qquad
\begin{array}{r|rr} & a & b \\ \hline a & a & b \\ b & b & b \\ \end{array}$
$\quad
\begin{array}{r|rr} & a & b \\ \hline a & b & a \\ b & a & a \\ \end{array}
\qquad
\begin{array}{r|rr} & a & b \\ \hline a & b & a \\ b & a & b \\ \end{array}
\qquad
\begin{array}{r|rr}  & a & b \\ \hline a & b & a \\ b & b & a \\ \end{array}
\qquad
\begin{array}{r|rr}  & a & b \\ \hline a & b & a \\ b & b & b \\ \end{array}$
$\quad
\begin{array}{r|rr}  & a & b \\ \hline a & b & b \\ b & a & a \\ \end{array}
\qquad
\begin{array}{r|rr}  & a & b \\ \hline a & b & b \\ b & a & b \\ \end{array}
\qquad
\begin{array}{r|rr}  & a & b \\ \hline a & b & b \\ b & b & a \\ \end{array}
\qquad
\begin{array}{r|rr}  & a & b \\ \hline a & b & b \\ b & b & b \\ \end{array}$


Also see
Count of Truth Functions
Binary Truth Functions


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $4$. Groups: Exercise $1$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 2$: Compositions: Exercise $2.3$




