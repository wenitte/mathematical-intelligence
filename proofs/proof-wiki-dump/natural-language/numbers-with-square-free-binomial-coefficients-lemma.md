# 

Source: https://proofwiki.org/wiki/Numbers_with_Square-Free_Binomial_Coefficients/Lemma

Theorem
Let $n$ be a (strictly) positive integer. 
Let $p$ be a prime number.
By Basis Representation Theorem, there is a unique sequence $\sequence {a_j}_{0 \mathop \le j \mathop \le r}$ such that:

$(1): \quad \ds n = \sum_{k \mathop = 0}^r a_k p^k$
$(2): \quad \ds \forall k \in \closedint 0 r: a_k \in \N_b$
$(3): \quad r_t \ne 0$
Suppose $r \ge 2$ and $p^2 \nmid \dbinom n m$ for all $0 \le m \le n$. 
Then:

$p^{r - 1} \divides \paren {n + 1}$
that is:

$p^{r - 1}$ divides $\paren {n + 1}$.


Proof
Suppose $\forall i: 0 \le i \le r - 2: a_i = p - 1$. 
Then:














\(\ds n + 1\)

\(=\)







\(\ds 1 + \sum_{i \mathop = 0}^r a_ip^i\)





from $\ds n = \sum_{k \mathop = 0}^r a_k p^k$














\(\ds \)

\(=\)







\(\ds 1 + a_r p^r + a_{r - 1} p^{r - 1} + \sum_{i \mathop = 0}^{r - 2} (p - 1) p^i\)





from $a_i = p - 1$ for all $0 \le i \le r - 2$














\(\ds \)

\(=\)







\(\ds 1 + a_r p^r + a_{r - 1} p^{r - 1} + \paren {p^{r - 1} - 1}\)





Difference of Two Powers














\(\ds \)

\(=\)







\(\ds p^{r - 1} \paren {p a_r + a_{r - 1} + 1}\)





factorisation



Since $p a_r + a_{r - 1} + 1$ is an integer,
we have $p^{r - 1} \divides \paren {n + 1}$.

Now we prove the contrapositive of our theorem.
Suppose $r > 2$ and $p^{r - 1} \nmid \paren {n + 1}$.
By the contrapositive of the result above:

$\exists i: 0 \le i \le r - 2, a_i \neq p - 1$

Let $I$ be the smallest integer for which $a_I \neq p - 1$.
Then for every $0 \le i < I$, we have:

$a_i = p - 1$
Let $m = p^r - 1$.
Then $\ds m = \paren {p - 1} \sum_{i \mathop = 0}^r p^i$ is a representation of $m$ to the base $p$.

We also have:














\(\ds n - m\)

\(=\)







\(\ds \sum_{i \mathop = 0}^r a_ip^i - \paren {p^r - 1}\)





from $\ds n = \sum_{k \mathop = 0}^t a_k p^k$














\(\ds \)

\(=\)







\(\ds 1 - p^r + a_r p^r + \sum_{i = I}^{r - 1} a_i p^i + \sum_{i = 0}^{I - 1} (p - 1) p^i\)





from $a_i = p - 1$ for all $0 \le i < I$














\(\ds \)

\(=\)







\(\ds 1 + \paren {a_r - 1} p^r + \sum_{i = I}^{r - 1} a_i p^i + \paren {p^I - 1}\)





Difference of Two Powers














\(\ds \)

\(=\)







\(\ds \paren {a_r - 1} p^r + \sum_{i = I + 1}^{r - 1} a_i p^i + \paren {a_I + 1} p^I\)









Notice that:

$0 \le a_r - 1 < p - 1$
$0 \le a_i < p$ for $I + 1 \le i \le r - 1$
$1 \le a_I + 1 < p - 1 + 1 = p$
So $\ds \paren {a_r - 1} p^r + \sum_{i = I + 1}^{r - 1} a_i p^i + \paren {a_I + 1} p^I$ is a representation of $n - m$ to the base $p$ (possibly with leading zeroes).
Now we add $n - m$ and $m$ in base $p$:

 place value   p^r   p^{r-1}     p^{I+1}   p^I  p^{I-1} p^{I-2}       1                          
    n - m =  (a_r-1) a_{r-1} ... a_{I+1} (a_I+1)   0       0    ...   0  
 +)     m =           (p-1)       (p-1)   (p-1)  (p-1)   (p-1)      (p-1)                 
 -------------------------------------------------------------------------
    n     =     *       *        a_{I+1}   a_I   (p-1)   (p-1)      (p-1) 
                                  carry   carry                                           

So there are at least two carries in this addition, at place values $p^I$ and $p^{I + 1}$.
By Kummer's Theorem, we have:

$p^2 \divides \dbinom {n - m + m} m = \dbinom n m$
Thus the contrapositive is proved.
$\blacksquare$


Source
1996: Andrew Granville and Olivier Ramaré: Explicit bounds on exponential sums and the scarcity of squarefree binomial coefficients (Mathematika Vol. 43: pp. 73 – 107)




