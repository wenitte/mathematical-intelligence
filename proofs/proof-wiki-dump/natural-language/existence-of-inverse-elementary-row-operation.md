# 

Source: https://proofwiki.org/wiki/Existence_of_Inverse_Elementary_Row_Operation



Theorem
Let $\map \MM {m, n}$ be a metric space of order $m \times n$ over a field $K$.
Let $\mathbf A \in \map \MM {m, n}$ be a matrix. 
Let $\map e {\mathbf A}$ be an elementary row operation which transforms $\mathbf A$ to a new matrix $\mathbf A' \in \map \MM {m, n}$.
Let $\map {e'} {\mathbf A'}$ be the inverse of $e$.

Then $e'$ is an elementary row operation which always exists and is unique.


Proof
Let us take each type of elementary row operation in turn.

For each $\map e {\mathbf A}$, we will construct $\map {e'} {\mathbf A'}$ which will transform $\mathbf A'$ into a new matrix $\mathbf A \in \map \MM {m, n}$, which will then be demonstrated to equal $\mathbf A$.

In the below, let:

$r_k$ denote row $k$ of $\mathbf A$
$r'_k$ denote row $k$ of $\mathbf A'$
$r_k$ denote row $k$ of $\mathbf A$
for arbitrary $k$ such that $1 \le k \le m$.

By definition of elementary row operation:

only the row or rows directly operated on by $e$ is or are different between $\mathbf A$ and $\mathbf A'$
and similarly:

only the row or rows directly operated on by $e'$ is or are different between $\mathbf A'$ and $\mathbf A$.
Hence it is understood that in the following, only those rows directly affected will be under consideration when showing that $\mathbf A = \mathbf A$.


$\text {ERO} 1$: Scalar Product of Row
Let $\map e {\mathbf A}$ be the elementary row operation:

$e := r_k \to \lambda r_k$
where $\lambda \ne 0$.
Then $r'_k$ is such that:

$\forall a'_{k i} \in r'_k: a'_{k i} = \lambda a_{k i}$

Now let $\map {e'} {\mathbf A'}$ be the elementary row operation which transforms $\mathbf A'$ to $\mathbf A$:

$e' := r_k \to \dfrac 1 \lambda r_k$
Because it is stipulated in the definition of an elementary row operation that $\lambda \ne 0$, it follows by definition of a field that $\dfrac 1 \lambda$ exists.
Hence $e'$ is defined.
So applying $e'$ to $\mathbf A'$ we get:










\(\ds \forall a_{k i} \in r_k: \, \)



\(\ds a_{k i}\)

\(=\)







\(\ds \dfrac 1 \lambda a'_{k i}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 \lambda \paren {\lambda a_{k i} }\)




















\(\ds \)

\(=\)







\(\ds a_{k i}\)














\(\ds \leadsto \ \ \)

\(\ds \forall a_{k i} \in r_k: \, \)



\(\ds a_{k i}\)

\(=\)







\(\ds a_{k i}\)














\(\ds \leadsto \ \ \)





\(\ds r_k\)

\(=\)







\(\ds r_k\)














\(\ds \leadsto \ \ \)





\(\ds \mathbf A\)

\(=\)







\(\ds \mathbf A\)









It is noted that for $e'$ to be an elementary row operation, the only possibility is for it to be as defined.
$\Box$


$\text {ERO} 2$: Add Scalar Product of Row to Another
Let $\map e {\mathbf A}$ be the elementary row operation:

$e := r_k \to r_k + \lambda r_l$
Then $r'_k$ is such that:

$\forall a'_{k i} \in r'_k: a'_{k i} = a_{k i} + \lambda a_{l i}$

Now let $\map {e'} {\mathbf A'}$ be the elementary row operation which transforms $\mathbf A'$ to $\mathbf A$:

$e' := r'_k \to r'_k - \lambda r'_l$

Applying $e'$ to $\mathbf A'$ we get:










\(\ds \forall a_{k i} \in r_k: \, \)



\(\ds a_{k i}\)

\(=\)







\(\ds a'_{k i} - \lambda a'_{l i}\)




















\(\ds \)

\(=\)







\(\ds \paren {a_{k i} + \lambda a_{l i} } - \lambda a'_{l i}\)




















\(\ds \)

\(=\)







\(\ds \paren {a_{k i} + \lambda a_{l i} } - \lambda a_{l i}\)





as $\lambda a'_{l i} = \lambda a_{l i}$: row $l$ was not changed by $e$














\(\ds \)

\(=\)







\(\ds a_{k i}\)














\(\ds \leadsto \ \ \)

\(\ds \forall a_{k i} \in r_k: \, \)



\(\ds a_{k i}\)

\(=\)







\(\ds a_{k i}\)














\(\ds \leadsto \ \ \)





\(\ds r_{k i}\)

\(=\)







\(\ds r_{k i}\)














\(\ds \leadsto \ \ \)





\(\ds \mathbf A\)

\(=\)







\(\ds \mathbf A\)









It is noted that for $e'$ to be an elementary row operation, the only possibility is for it to be as defined.
$\Box$


$\text {ERO} 3$: Exchange Rows
Let $\map e {\mathbf A}$ be the elementary row operation:

$e := r_k \leftrightarrow r_l$
Thus we have:














\(\ds r'_k\)

\(=\)







\(\ds r_l\)


















\(\, \ds \text {and} \, \)

\(\ds r'_l\)

\(=\)







\(\ds r_k\)










Now let $\map {e'} {\mathbf A'}$ be the elementary row operation which transforms $\mathbf A'$ to $\mathbf A$:

$e' := r'_k \leftrightarrow r'_l$

Applying $e'$ to $\mathbf A'$ we get:














\(\ds r_k\)

\(=\)







\(\ds r'_l\)


















\(\, \ds \text {and} \, \)

\(\ds r_l\)

\(=\)







\(\ds r'_k\)














\(\ds \leadsto \ \ \)





\(\ds r_k\)

\(=\)







\(\ds r_k\)


















\(\, \ds \text {and} \, \)

\(\ds r_l\)

\(=\)







\(\ds r_l\)














\(\ds \leadsto \ \ \)





\(\ds \mathbf A\)

\(=\)







\(\ds \mathbf A\)









It is noted that for $e'$ to be an elementary row operation, the only possibility is for it to be as defined.
$\Box$

Thus in all cases, for each elementary row operation which transforms $\mathbf A$ to $\mathbf A'$, we have constructed the only possible elementary row operation which transforms $\mathbf A'$ to $\mathbf A$.
Hence the result.
$\blacksquare$


Also see
Existence of Inverse Elementary Column Operation


Sources
1982: A.O. Morris: Linear Algebra: An Introduction (2nd ed.) ... (previous) ... (next): Chapter $1$: Linear Equations and Matrices: $1.3$ Applications to Linear Equations: Theorem $1.7$




