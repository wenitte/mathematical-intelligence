# 

Source: https://proofwiki.org/wiki/Recurrence_Relation_for_Number_of_Derangements_on_Finite_Set



Theorem
The number of derangements $D_n$ on a finite set $S$ of cardinality $n$ is:

$D_n = \paren {n - 1} \paren {D_{n - 1} + D_{n - 2} }$
where $D_1 = 0$, $D_2 = 1$.


Proof
Let $\card S = 1$ such that $S = \set s$, say.
Then $\map f s = s$ is the only permutation on $S$.
This by definition is not a derangement.
Thus:

$D_1 = 0$

Let $\card S = 2$.
Then $S = \set {s, t}$, say.
There are two permutations on $S$:

$f = \set {\tuple {s, s}, \tuple {t, t} }$
and:

$g = \set {\tuple {s, t}, \tuple {t, s} }$
and only the latter is a derangement.
So:

$D_2 = 1$

Let $\card S > 2$.
Let $f: S \to S$ be a derangement.
We aim to count the total number of such $f$. 
Without loss of generality, we can take:

$S = \set {1, 2, \ldots, n + 1}$
Now, consider an arbitrary $s \in S$ such that $s \ne 1$.
Let $\map f s = 1$.
By the Sum Rule for Counting, the total number of $f$ will be: 

$\paren {\text {the number of $f$ where } \map f 1 \ne s} + \paren {\text {the number of $f$ where} \map f 1 = s}$


Case 1
$\map f 1 \ne s$
Take:

$T_1 = \set {1, 2, \dotsc, s - 1, s + 1, \dotsc, n + 1} = S \setminus \set s$
Define the derangement $g_1: T_1 \to T_1$ by:

$\forall t \in T_1: \map {g_1} t = \map f t$
Then $g_1$ is a derangement on a set of cardinality $n$.
Thus there are $D_n$ such $g_1$. 

Note that:

$f = g_1 \cup \map f s$
We have that $s$ can be chosen in $n$ ways.
By the Product Rule for Counting there are in total $n D_n$ such $f$ where $\map f s \ne 1$.


Case 2
$\map f 1 = s$
Take:

$T_2 = \set {2, 3, \dotsc, s - 1, s + 1, \dotsc, n + 1} = S \setminus \set {1, s}$
Define the derangement $g_2: T_2 \to T_2$ by:

$\forall t \in T_2: \map {g_2} t = \map f t$
Then $g_2$ is a derangement on a set of cardinality $n - 1$.
So there are $D_{n - 1}$ such $g_2$. 
Note that:

$f = g_2 \cup \set s \cup \map f s$
We have that $s$ can be chosen in $n$ ways
By the Product Rule for Counting there are in total $n D_{n - 1}$ such $f$ where $\map f s = 1$.
Summing the results from both cases, we get the total number of derangements $f$ on a set of cardinality $n + 1$ is:

$D_{n + 1} = n D_n + n D_{n - 1} = n \paren {D_n + D_{n - 1} }$
as was to be proved.
$\blacksquare$


Sources
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): derangement




