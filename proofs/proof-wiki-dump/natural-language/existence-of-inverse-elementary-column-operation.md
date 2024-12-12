# 

Source: https://proofwiki.org/wiki/Existence_of_Inverse_Elementary_Column_Operation



Theorem
Let $\map \MM {m, n}$ be a metric space of order $m \times n$ over a field $K$.
Let $\mathbf A \in \map \MM {m, n}$ be a matrix. 
Let $\map e {\mathbf A}$ be an elementary column operation which transforms $\mathbf A$ to a new matrix $\mathbf A' \in \map \MM {m, n}$.
Let $\map {e'} {\mathbf A'}$ be the inverse of $e$.

Then $e'$ is an elementary column operation which always exists and is unique.


Proof
Let us take each type of elementary column operation in turn.

For each $\map e {\mathbf A}$, we will construct $\map {e'} {\mathbf A'}$ which will transform $\mathbf A'$ into a new matrix $\mathbf A \in \map \MM {m, n}$, which will then be demonstrated to equal $\mathbf A$.

In the below, let:

$\kappa_k$ denote column $k$ of $\mathbf A$
$\kappa'_k$ denote column $k$ of $\mathbf A'$
$\kappa_k$ denote column $k$ of $\mathbf A$
for arbitrary $k$ such that $1 \le k \le m$.

By definition of elementary column operation:

only the column or columns directly operated on by $e$ is or are different between $\mathbf A$ and $\mathbf A'$
and similarly:

only the column or columns directly operated on by $e'$ is or are different between $\mathbf A'$ and $\mathbf A$.
Hence it is understood that in the following, only those columns directly affected will be under consideration when showing that $\mathbf A = \mathbf A$.


$\text {ECO} 1$: Scalar Product of Column
Let $\map e {\mathbf A}$ be the elementary column operation:

$e := \kappa_k \to \lambda \kappa_k$
where $\lambda \ne 0$.
Then $\kappa'_k$ is such that:

$\forall a'_{k i} \in \kappa'_k: a'_{k i} = \lambda a_{k i}$

Now let $\map {e'} {\mathbf A'}$ be the elementary column operation which transforms $\mathbf A'$ to $\mathbf A$:

$e' := \kappa_k \to \dfrac 1 \lambda \kappa_k$
Because it is stipulated in the definition of an elementary column operation that $\lambda \ne 0$, it follows by definition of a field that $\dfrac 1 \lambda$ exists.
Hence $e'$ is defined.
So applying $e'$ to $\mathbf A'$ we get:










\(\ds \forall a_{i k} \in \kappa_k: \, \)



\(\ds a_{i k}\)

\(=\)







\(\ds \dfrac 1 \lambda a'_{i k}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 \lambda \paren {\lambda a_{i k} }\)




















\(\ds \)

\(=\)







\(\ds a_{i k}\)














\(\ds \leadsto \ \ \)

\(\ds \forall a_{i k} \in \kappa_k: \, \)



\(\ds a_{i k}\)

\(=\)







\(\ds a_{i k}\)














\(\ds \leadsto \ \ \)





\(\ds \kappa_k\)

\(=\)







\(\ds \kappa_k\)














\(\ds \leadsto \ \ \)





\(\ds \mathbf A\)

\(=\)







\(\ds \mathbf A\)









It is noted that for $e'$ to be an elementary column operation, the only possibility is for it to be as defined.
$\Box$


$\text {ECO} 2$: Add Scalar Product of Column to Another
Let $\map e {\mathbf A}$ be the elementary column operation:

$e := \kappa_k \to \kappa_k + \lambda r_l$
Then $\kappa'_k$ is such that:

$\forall a'_{i k} \in \kappa'_k: a'_{i k} = a_{i k} + \lambda a_{i l}$

Now let $\map {e'} {\mathbf A'}$ be the elementary column operation which transforms $\mathbf A'$ to $\mathbf A$:

$e' := \kappa'_k \to \kappa'_k - \lambda \kappa'_l$

Applying $e'$ to $\mathbf A'$ we get:










\(\ds \forall a_{i k} \in \kappa_k: \, \)



\(\ds a_{i k}\)

\(=\)







\(\ds a'_{i k} - \lambda a'_{i l}\)




















\(\ds \)

\(=\)







\(\ds \paren {a_{i k} + \lambda a_{i l} } - \lambda a'_{i l}\)




















\(\ds \)

\(=\)







\(\ds \paren {a_{i k} + \lambda a_{i l} } - \lambda a_{i l}\)





as $\lambda a'_{i l} = \lambda a_{i l}$: column $l$ was not changed by $e$














\(\ds \)

\(=\)







\(\ds a_{i k}\)














\(\ds \leadsto \ \ \)

\(\ds \forall a_{i k} \in \kappa_k: \, \)



\(\ds a_{i k}\)

\(=\)







\(\ds a_{i k}\)














\(\ds \leadsto \ \ \)





\(\ds \kappa_{i k}\)

\(=\)







\(\ds \kappa_{i k}\)














\(\ds \leadsto \ \ \)





\(\ds \mathbf A\)

\(=\)







\(\ds \mathbf A\)










It is noted that for $e'$ to be an elementary column operation, the only possibility is for it to be as defined.
$\Box$


$\text {ECO} 3$: Exchange Columns
Let $\map e {\mathbf A}$ be the elementary column operation:

$e := \kappa_k \leftrightarrow \kappa_l$
Thus we have:














\(\ds \kappa'_k\)

\(=\)







\(\ds \kappa_l\)


















\(\, \ds \text {and} \, \)

\(\ds \kappa'_l\)

\(=\)







\(\ds \kappa_k\)










Now let $\map {e'} {\mathbf A'}$ be the elementary column operation which transforms $\mathbf A'$ to $\mathbf A$:

$e' := \kappa'_k \leftrightarrow \kappa'_l$

Applying $e'$ to $\mathbf A'$ we get:














\(\ds \kappa_k\)

\(=\)







\(\ds \kappa'_l\)


















\(\, \ds \text {and} \, \)

\(\ds \kappa_l\)

\(=\)







\(\ds \kappa'_k\)














\(\ds \leadsto \ \ \)





\(\ds \kappa_k\)

\(=\)







\(\ds \kappa_k\)


















\(\, \ds \text {and} \, \)

\(\ds \kappa_l\)

\(=\)







\(\ds \kappa_l\)














\(\ds \leadsto \ \ \)





\(\ds \mathbf A\)

\(=\)







\(\ds \mathbf A\)









It is noted that for $e'$ to be an elementary column operation, the only possibility is for it to be as defined.
$\Box$

Thus in all cases, for each elementary column operation which transforms $\mathbf A$ to $\mathbf A'$, we have constructed the only possible elementary column operation which transforms $\mathbf A'$ to $\mathbf A$.
Hence the result.
$\blacksquare$


Also see
Existence of Inverse Elementary Row Operation




