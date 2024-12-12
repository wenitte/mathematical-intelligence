# 

Source: https://proofwiki.org/wiki/Definite_Integral_of_Limit_of_Uniformly_Convergent_Sequence_of_Integrable_Functions

Theorem
Let $a, b \in \R$ with $a < b$. 
Let $\sequence {f_n}$ be a sequence of Riemann integrable real functions $\closedint a b \to \R$ converging uniformly to $f : \closedint a b \to \R$.

Then $f$ is integrable, and: 

$\ds \int_a^b \map f x \rd x = \lim_{n \mathop \to \infty} \int_a^b \map {f_n} x \rd x$


Proof
By Limit of Uniformly Convergent Sequence of Integrable Functions is Integrable, $f$ is integrable.
We have:














\(\ds \size {\int_a^b \map f x \rd x - \int_a^b \map {f_n} x \rd x}\)

\(=\)







\(\ds \size {\int_a^b \paren {\map f x - \map {f_n} x} \rd x}\)




















\(\ds \)

\(\le\)







\(\ds \int_a^b \size {\map f x - \map {f_n} x} \rd x\)





Triangle Inequality for Integrals














\(\ds \)

\(\le\)







\(\ds \paren {b - a} \sup_{x \mathop \in \closedint a b} \size {\map f x - \map {f_n} x}\)





Darboux's Theorem



Let $\epsilon \in \R_{> 0}$.
Since $f_n \to f$ uniformly, we can find $N \in \N$ such that for $n > N$ we have:

$\ds \sup_{x \mathop \in \closedint a b} \size {\map f x - \map {f_n} x} < \frac \epsilon {b - a}$
by the definition of uniform convergence.
So, for $n > N$ we have: 

$\ds \paren {b - a} \sup_{x \mathop \in \closedint a b} \size {\map f x - \map {f_n} x} < \epsilon$
and hence:

$\ds \size {\int_a^b \map f x \rd x - \int_a^b \map {f_n} x \rd x} < \epsilon$
Since $\epsilon$ was arbitrary it follows that: 

$\ds \lim_{n \mathop \to \infty} \int_a^b \map {f_n} x \rd x = \int_a^b \map f x \rd x$
as required.
$\blacksquare$





