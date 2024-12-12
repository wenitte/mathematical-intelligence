# 

Source: https://proofwiki.org/wiki/Existence_of_Inverse_Elementary_Row_Operation/Scalar_Product_of_Row

Theorem
Let $\map \MM {m, n}$ be a metric space of order $m \times n$ over a field $K$.
Let $\mathbf A \in \map \MM {m, n}$ be a matrix. 

Let $\map e {\mathbf A}$ be the elementary row operation which transforms $\mathbf A$ to a new matrix $\mathbf A' \in \map \MM {m, n}$.




\((\text {ERO} 1)\)  

$:$  







\(\ds r_i \to \lambda r_i \)   





For some $\lambda \in K_{\ne 0}$, multiply row $i$ by $\lambda$   

  


Let $\map {e'} {\mathbf A'}$ be the inverse of $e$.

Then $e'$ is the elementary row operation:

$e' := r_i \to \dfrac 1 \lambda r_i$


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
$\blacksquare$





