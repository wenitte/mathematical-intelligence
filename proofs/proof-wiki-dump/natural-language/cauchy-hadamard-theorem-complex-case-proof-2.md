# 

Source: https://proofwiki.org/wiki/Cauchy-Hadamard_Theorem/Complex_Case/Proof_2


This article needs to be linked to other articles.In particular: throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\xi \in \C$ be a complex number.
Let $\ds \map S z = \sum_{n \mathop = 0}^\infty a_n \paren {z - \xi}^n$ be a (complex) power series about $\xi$.

Then the radius of convergence $R$ of $\map S z$ is given by:

$\ds \dfrac 1 R = \limsup_{n \mathop \to \infty} \cmod {a_n}^{1/n}$
If:

$\ds \limsup_{n \mathop \to \infty} \cmod {a_n}^{1/n} = 0$
then the radius of convergence is infinite, and $\map S z$ is absolutely convergent for all $z \in \C$.


Proof
Let $L = \limsup \cmod {a_n}^{1/n}$.
We will consider only the case $0 < L < \infty$, as the cases $L = 0$ and $L = \infty$ follow quite simply from this one.
We have that:

$\forall r \in \closedint 0 {\dfrac 1 L}: L < \dfrac 1 r$
Thus there exists $\epsilon \in \R_{> 0}$ such that:

$L + \epsilon < \dfrac 1 R$
and so:

$r < \dfrac 1 {L + \epsilon}$
Let $\tilde r = r \paren {L + \epsilon}$.
Then:

$0 \le \tilde r < 1$
This means that the geometric series $\ds \sum_{n \mathop = 0}^\infty$ is convergent.
From the properties of the limit superior, we know that:

$\forall n \gg 1: \cmod {a_n}^{1/n} < L + \epsilon$

This article, or a section of it, needs explaining.In particular: In this context what $n \gg 1$ meansYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Thus:

$\forall n \gg 1: \cmod {a_n r^n} < \paren {L + \epsilon}^n r^n = \tilde r^n$
This means that the series $\ds \sum_{n \mathop = 0}^\infty \cmod {a_n r^n}$ is also convergent.
Thus $\ds \sum_{n \mathop = 0}^\infty a_n r^n$ is absolutely convergent and therefore convergent.
Thus, by the definition of radius of convergence, we have:

$r \le R$
which holds for all $r \in \closedint 0 {\dfrac 1 L}$.
Hence:

$\dfrac 1 L \le R$
Let now $\epsilon \in \openint 0 L$ be fixed.
Because of the properties of the limit superior, we can extract from the sequence of the formula a subsequence such that:

$\cmod {a_{n_k} }^{1 / n_k} > L - \epsilon$
for all $k \in \N$.
Thus:

$\cmod {a_{n_k} \cdot \dfrac 1 {\paren {L + \epsilon}^{n_k} } } > 1$
for all $k \in \N$.
So the series:

$\ds \sum_{n \mathop = 0}^\infty a_n \paren {\frac 1 {L + \epsilon} }^n$
is not convergent.
Thus:

$R \le \dfrac 1 {L + \epsilon}$
This holds for all $\epsilon \in \R_{>0}$.
So:

$R \le \dfrac 1 L$
Hence:

$\dfrac 1 L \le R \le \dfrac 1 L$
which means:

$R = \dfrac 1 L$
as required.
$\blacksquare$


Source of Name
This entry was named for Augustin Louis Cauchy and Jacques Salomon Hadamard.





