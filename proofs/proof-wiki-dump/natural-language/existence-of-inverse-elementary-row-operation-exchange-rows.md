# 

Source: https://proofwiki.org/wiki/Existence_of_Inverse_Elementary_Row_Operation/Exchange_Rows

Theorem
Let $\map \MM {m, n}$ be a metric space of order $m \times n$ over a field $K$.
Let $\mathbf A \in \map \MM {m, n}$ be a matrix. 

Let $\map e {\mathbf A}$ be the elementary row operation which transforms $\mathbf A$ to a new matrix $\mathbf A' \in \map \MM {m, n}$.




\((\text {ERO} 3)\)  

$:$  







\(\ds r_k \leftrightarrow r_l \)   





Exchange rows $k$ and $l$   

  


Let $\map {e'} {\mathbf A'}$ be the inverse of $e$.

Then $e'$ is the elementary row operation:

$e' := r_k \leftrightarrow r_l$
That is:

$e' = e$


Proof
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
$\blacksquare$





