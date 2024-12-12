# 

Source: https://proofwiki.org/wiki/Characteristic_Function_of_Set_Difference

Theorem
Let $A, B \subseteq S$.

Then:

$\chi_{A \mathop \setminus B} = \chi_A - \chi_{A \cap B}$
where:

$A \setminus B$ denotes set difference
$\chi$ denotes characteristic function.


Proof
Suppose that $\map {\chi_{A \mathop \setminus B} } s = 1$.
Then by definition of characteristic function:

$s \in A \setminus B$
That is, by definition of set difference, $s \in A$ and $s \notin B$; in particular, $s \notin A \cap B$.
Hence:

$\map {\chi_A} s = 1$ and $\map {\chi_{A \cap B} } s = 0$
Conclude that:

$\map {\chi_{A \mathop \setminus B} } s = 1 \implies \map {\chi_A} s - \map {\chi_{A \cap B} } s = 1$

Now conversely suppose $\map {\chi_A} s - \map {\chi_{A \cap B} } s = 1$.
Considering that $\map {\chi_{A \cap B} } s \ge 0$, it must be that $\map {\chi_A} s = 1$ and $\map {\chi_{A \cap B} } s = 0$.
Hence, $s \in A$, and $s \notin A \cap B$.
By definition of set intersection, this means $s \notin B$.
Hence $s \in A \setminus B$ by definition of set difference.
Thus:

$\map {\chi_{A \mathop \setminus B} } s = 1$

Hence, it has been established that:

$\map {\chi_{A \mathop \setminus B} } s = 1 \iff \map {\chi_A} s - \map {\chi_{A \cap B} } s = 1$
which, by application of Characteristic Function Determined by 1-Fiber, gives the result.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 2$: Problem $5 \ \text{(iii)}$




