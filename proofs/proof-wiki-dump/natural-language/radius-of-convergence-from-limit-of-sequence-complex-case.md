# 

Source: https://proofwiki.org/wiki/Radius_of_Convergence_from_Limit_of_Sequence/Complex_Case

Theorem
Let $\xi \in \C$ be a complex number.
Let $\ds \map S z = \sum_{n \mathop = 0}^\infty a_n \paren {z - \xi}^n$ be a (complex) power series about $\xi$.

Let the sequence $\sequence {\cmod {\dfrac {a_{n + 1} } {a_n} } }_{n \mathop \in \N}$ converge.
Then $R$ is given by:

$\ds \dfrac 1 R = \lim_{n \mathop \to \infty} \cmod {\dfrac {a_{n + 1} } {a_n} }$

If:

$\ds \lim_{n \mathop \to \infty} \cmod {\dfrac {a_{n + 1} } {a_n} } = 0$
then the radius of convergence is infinite, and $\map S z$ is absolutely convergent for all $z \in \C$.


Proof
Let the sequence $\sequence {\cmod {\dfrac {a_{n+1} } {a_n} } }_{n \mathop \in \N}$ converge.
Let $\epsilon \in \R_{>0}$, and let $z \in \C$.
Let $\cmod {z - \xi} = R - \epsilon$.
By definition of radius of convergence, it follows that $\map S z$ is absolutely convergent.
Then from the Ratio Test:

$\lim_{n \mathop \to \infty} \cmod {\dfrac {a_{n + 1} \paren {z - \xi}^{n + 1} } {a_n \paren {z - \xi}^n} } \le 1$
By Multiple Rule for Complex Sequences, this inequality can be rearranged to obtain:














\(\ds \lim_{n \mathop \to \infty} \cmod {\dfrac {a_{n + 1} } {a_n} }\)

\(\le\)







\(\ds \cmod {\dfrac {\paren {z - \xi}^{n + 1} } {\paren {z - \xi}^n } }^{-1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\cmod {x - \xi} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {R - \epsilon}\)









$\Box$

Let $\cmod {z - \xi} = R + \epsilon$.
Then $\map S z$ is divergent, so the Ratio Test shows that:

$\ds \lim_{n \mathop \to \infty} \cmod {\dfrac {a_{n + 1} \paren {z - \xi}^{n + 1} } {a_n \paren {z - \xi}^n} } \ge 1$
Similarly, this inequality can be rearranged as:

$\ds \lim_{n \mathop \to \infty} \cmod {\dfrac {a_{n + 1} } {a_n} } \ge \dfrac 1 {R + \epsilon}$
$\Box$

As $\epsilon > 0$ was arbitrary, it follows that:

$\ds \lim_{n \mathop \to \infty} \cmod {\dfrac {a_{n + 1} } {a_n} } = \dfrac 1 R$
Hence the result.
$\blacksquare$


Also presented as
This result can also be seen presented as:

$\ds R = \lim_{n \mathop \to \infty} \cmod {\frac {a_{n - 1} } {a_n} }$
but in this case the condition under which the radius of convergence is infinite is less conveniently stated.





