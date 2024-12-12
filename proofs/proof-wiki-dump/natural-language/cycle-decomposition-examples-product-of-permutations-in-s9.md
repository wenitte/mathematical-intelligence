# 

Source: https://proofwiki.org/wiki/Cycle_Decomposition/Examples/Product_of_Permutations_in_S9

Example of Product of Cycle Decompositions
Consider the product permutations:

$\rho = \begin{pmatrix} 1 & 2 & 4 \end{pmatrix} \begin{pmatrix} 3 & 5 & 7 & 9 \end{pmatrix} \begin{pmatrix} 1 & 3 & 9 \end{pmatrix} \begin{pmatrix} 2 & 3 & 4 & 5 & 6 & 8 \end{pmatrix}$
Then $\rho$ evaluates to:

$\begin{pmatrix} 1 & 5 & 6 & 8 & 4 & 7 & 9 & 2 & 3 \end{pmatrix}$


Proof
We start with $1$.
We start at the right hand end of the product and scan leftwards, looking for the first $1$.
We find it in $\begin{pmatrix} 1 & 3 & 9 \end{pmatrix}$, and see that it is followed by $3$.
We continue to scan leftwards, looking for the next occurrence of $3$, and see it in $\begin{pmatrix} 3 & 5 & 7 & 9 \end{pmatrix}$, where it is followed by $5$.
We continue to scan leftwards, looking for the next occurrence of $5$, and see that there are no more.
Thus we have that:

$\map \rho 1 = 5$

We then start at the right hand end of the product and scan leftwards, looking for the first $5$.
We find it in $\begin{pmatrix} 2 & 3 & 4 & 5 & 6 & 8 \end{pmatrix}$, followed by $6$
There are no further occurrences of $6$.

Continuing this procedure, starting with $6$, we see that leads to $8$.

Starting with $8$, we see that this is at the end of its cycle, so by definition of cycle notation, we see $8$ is followed by $2$.
The next occurrence of $2$ to the left of this is found in $\begin{pmatrix} 1 & 2 & 4 \end{pmatrix}$, and is followed by $4$.

Similarly:

$4$ leads to $5$ which leads to $7$
$7$ leads to $9$
$9$ leads to $1$ which leads to $2$
$2$ leads to $3$ which leads to $9$ which leads back to $3$
$3$ leads to $4$ which leads to $1$, and we are back to the start.
Thus we have the cycle:

$\begin{pmatrix} 1 & 5 & 6 & 8 & 4 & 7 & 9 & 2 & 3 \end{pmatrix}$
which takes on the complete set of elements of $S_9$.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $9$: Permutations: Example $9.7$




