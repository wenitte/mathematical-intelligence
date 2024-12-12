# 

Source: https://proofwiki.org/wiki/Cauchy-Hadamard_Theorem/Complex_Case/Proof_1

Theorem
Let $\xi \in \C$ be a complex number.
Let $\ds \map S z = \sum_{n \mathop = 0}^\infty a_n \paren {z - \xi}^n$ be a (complex) power series about $\xi$.

Then the radius of convergence $R$ of $\map S z$ is given by:

$\ds \dfrac 1 R = \limsup_{n \mathop \to \infty} \cmod {a_n}^{1/n}$
If:

$\ds \limsup_{n \mathop \to \infty} \cmod {a_n}^{1/n} = 0$
then the radius of convergence is infinite, and $\map S z$ is absolutely convergent for all $z \in \C$.


Proof
Let $\epsilon \in \R_{>0}$, and let $z \in \C$.
Suppose that $\cmod {z - \xi} = R - \epsilon$.
By definition of radius of convergence, it follows that $S \paren z$ is absolutely convergent.
From the $n$th Root Test:

$\ds \limsup_{n \mathop \to \infty} \cmod {a_n \paren {z - \xi}^n}^{1/n} \le 1$
By Multiple Rule for Complex Sequences, this inequality can be rearranged to obtain:

$\ds \limsup_{n \mathop \to \infty} \cmod {a_n}^{1/n} \le \dfrac 1 {\cmod {z - \xi} } = \dfrac 1 {R - \epsilon}$
As $\epsilon > 0$ was arbitrary, it follows that:

$\ds \limsup_{n \mathop \to \infty} \cmod {a_n}^{1/n} \le \dfrac 1 R$
$\Box$

Now, suppose that $\cmod {z - \xi} = R + \epsilon$.
Then $S \paren z$ is divergent, so the $n$th Root Test shows that:

$\ds \limsup_{n \mathop \to \infty} \cmod {a_n \paren {z - \xi}^n}^{1/n} \ge 1$
which we can rearrange to obtain:

$\ds \limsup_{n \mathop \to \infty} \cmod {a_n}^{1/n} \ge \dfrac 1 {\cmod {z - \xi} } = \dfrac 1 {R - \epsilon}$
As $\epsilon > 0$ was arbitrary, it follows that:

$\ds \limsup_{n \mathop \to \infty} \cmod {a_n}^{1/n} \ge \dfrac 1 R$
$\Box$

Thus:

$\ds \limsup_{n \mathop \to \infty} \cmod {a_n}^{1/n} = \dfrac 1 R$
Hence the result.
$\blacksquare$


Source of Name
This entry was named for Augustin Louis Cauchy and Jacques Salomon Hadamard.





