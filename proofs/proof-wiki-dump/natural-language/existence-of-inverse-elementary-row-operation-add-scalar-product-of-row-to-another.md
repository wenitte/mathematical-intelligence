# 

Source: https://proofwiki.org/wiki/Existence_of_Inverse_Elementary_Row_Operation/Add_Scalar_Product_of_Row_to_Another

Theorem
Let $\map \MM {m, n}$ be a metric space of order $m \times n$ over a field $K$.
Let $\mathbf A \in \map \MM {m, n}$ be a matrix. 
Let $\map e {\mathbf A}$ be the elementary row operation which transforms $\mathbf A$ to a new matrix $\mathbf A' \in \map \MM {m, n}$.




\((\text {ERO} 2)\)  

$:$  







\(\ds r_k \to r_k + \lambda r_l \)   





For some $\lambda \in K$, add $\lambda$ times row $k$ to row $l$   

  


Let $\map {e'} {\mathbf A'}$ be the inverse of $e$.

Then $e'$ is the elementary row operation:

$e' := r'_k \to r'_k - \lambda r'_l$


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
$\blacksquare$





