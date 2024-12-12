# 

Source: https://proofwiki.org/wiki/Existence_of_Inverse_Elementary_Column_Operation/Add_Scalar_Product_of_Column_to_Another

Theorem
Let $\map \MM {m, n}$ be a metric space of order $m \times n$ over a field $K$.
Let $\mathbf A \in \map \MM {m, n}$ be a matrix. 

Let $\map e {\mathbf A}$ be the elementary column operation which transforms $\mathbf A$ to a new matrix $\mathbf A' \in \map \MM {m, n}$.




\((\text {ECO} 2)\)  

$:$  







\(\ds \kappa_k \to \kappa_k + \lambda \kappa_l \)   





For some $\lambda \in K$, add $\lambda$ times column $l$ to column $k$   

  


Let $\map {e'} {\mathbf A'}$ be the inverse of $e$.

Then $e'$ is the elementary column operation:

$e' := \kappa_k \to \kappa_k - \lambda \kappa_l$


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
$\blacksquare$





