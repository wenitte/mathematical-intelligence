# 

Source: https://proofwiki.org/wiki/Existence_of_Inverse_Elementary_Column_Operation/Scalar_Product_of_Column

Theorem
Let $\map \MM {m, n}$ be a metric space of order $m \times n$ over a field $K$.
Let $\mathbf A \in \map \MM {m, n}$ be a matrix. 

Let $\map e {\mathbf A}$ be the elementary column operation which transforms $\mathbf A$ to a new matrix $\mathbf A' \in \map \MM {m, n}$.




\((\text {ECO} 1)\)  

$:$  







\(\ds \kappa_k \to \lambda \kappa_k \)   





For some $\lambda \in K_{\ne 0}$, multiply column $k$ by $\lambda$   

  


Let $\map {e'} {\mathbf A'}$ be the inverse of $e$.

Then $e'$ is the elementary column operation:

$e' := \kappa_k \to \dfrac 1 \lambda \kappa_k$


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
$\blacksquare$





