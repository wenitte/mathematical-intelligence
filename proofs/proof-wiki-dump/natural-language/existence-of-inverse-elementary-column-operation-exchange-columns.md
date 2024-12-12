# 

Source: https://proofwiki.org/wiki/Existence_of_Inverse_Elementary_Column_Operation/Exchange_Columns

Theorem
Let $\map \MM {m, n}$ be a metric space of order $m \times n$ over a field $K$.
Let $\mathbf A \in \map \MM {m, n}$ be a matrix. 

Let $\map e {\mathbf A}$ be the elementary column operation which transforms $\mathbf A$ to a new matrix $\mathbf A' \in \map \MM {m, n}$.




\((\text {ECO} 3)\)  

$:$  







\(\ds \kappa_k \leftrightarrow \kappa_l \)   





Interchange columns $k$ and $l$   

  


Let $\map {e'} {\mathbf A'}$ be the inverse of $e$.

Then $e'$ is the elementary column operation:

$e' := \kappa_k \leftrightarrow \kappa_l$
That is:

$e' = e$


Proof
In the below, let:

$\kappa_k$ denote column $k$ of $\mathbf A$
$\kappa'_k$ denote column $k$ of $\mathbf A'$
$\kappa_k$ denote column $k$ of $\mathbf A$
for arbitrary $k$ such that $1 \le k \le n$.

By definition of elementary column operation:

only the column or columns directly operated on by $e$ is or are different between $\mathbf A$ and $\mathbf A'$
and similarly:

only the column or columns directly operated on by $e'$ is or are different between $\mathbf A'$ and $\mathbf A$.
Hence it is understood that in the following, only those columns directly affected will be under consideration when showing that $\mathbf A = \mathbf A$.

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
$\blacksquare$





