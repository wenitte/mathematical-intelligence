# 

Source: https://proofwiki.org/wiki/Cauchy-Hadamard_Theorem/Real_Case



Theorem
Let $\xi \in \R$ be a real number.
Let $\ds \map S x = \sum_{n \mathop = 0}^\infty a_n \paren {x - \xi}^n$ be a power series about $\xi$.

Then the radius of convergence $R$ of $S \paren x$ is given by:

$\ds \frac 1 R = \limsup_{n \mathop \to \infty} \size {a_n}^{1/n}$

If:

$\ds \frac 1 R = \limsup_{n \mathop \to \infty} \size {a_n}^{1/n} = 0$
then the radius of convergence is infinite and therefore the interval of convergence is $\R$.


Proof
From the $n$th root test, $S \paren x$ is convergent if $\ds \limsup_{n \mathop \to \infty} \size {a_n \paren {x - \xi}^n}^{1/n} < 1$.
Thus:














\(\ds \size {a_n \paren {x - \xi}^n}^{1/n}\)

\(<\)







\(\ds 1\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \size {a_n}^{1/n} \size {x - \xi}\)

\(<\)







\(\ds 1\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \size {a_n}^{1/n}\)

\(<\)







\(\ds \frac 1 {\size {x - \xi} }\)









The result follows from the definition of radius of convergence.
$\blacksquare$


Source of Name
This entry was named for Augustin Louis Cauchy and Jacques Salomon Hadamard.


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 15.2$




