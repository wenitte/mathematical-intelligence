# 

Source: https://proofwiki.org/wiki/Radius_of_Convergence_from_Limit_of_Sequence/Real_Case



Theorem
Let $\xi \in \R$ be a real number.
Let $\ds S \paren x = \sum_{n \mathop = 0}^\infty a_n \paren {x - \xi}^n$ be a power series about $\xi$.

Then the radius of convergence $R$ of $S \paren x$ is given by:

$\ds \frac 1 R = \lim_{n \mathop \to \infty} \size {\frac {a_{n + 1} } {a_n} }$
if this limit exists and is nonzero.
If

$\ds \lim_{n \mathop \to \infty} \size {\frac {a_{n + 1} } {a_n} } = 0$
then the radius of convergence is infinite and therefore the interval of convergence is $\R$.


Proof
From the ratio test, $S \paren x$ is convergent if:

$\ds \lim_{n \mathop \to \infty} \size {\frac {a_{n + 1} \paren {x - \xi}^{n + 1} } {a_n \paren {x - \xi}^n} } < 1$
Thus:














\(\ds \size {\frac {a_{n + 1} \paren {x - \xi}^{n + 1} } {a_n \paren {x - \xi}^n} }\)

\(<\)







\(\ds 1\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \size {\frac {a_{n + 1} } {a_n} } \size {x - \xi}\)

\(<\)







\(\ds 1\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \size {\frac {a_{n + 1} } {a_n} }\)

\(<\)







\(\ds \frac 1 {\size {x - \xi} }\)









The result follows from the definition of radius of convergence.
$\blacksquare$


Also presented as
This result can also be seen presented as:

$\ds R = \lim_{n \mathop \to \infty} \size {\frac {a_{n - 1} } {a_n} }$
but in this case the condition under which the radius of convergence is infinite is less conveniently stated.


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 15.2$




