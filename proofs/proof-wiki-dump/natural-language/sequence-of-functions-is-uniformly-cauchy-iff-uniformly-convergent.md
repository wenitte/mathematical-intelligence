# 

Source: https://proofwiki.org/wiki/Sequence_of_Functions_is_Uniformly_Cauchy_iff_Uniformly_Convergent



Theorem
Let $S \subseteq \R$.
Let $\sequence {f_n}$ be a sequence of real functions $S \to \R$. 

Then $\sequence {f_n}$ is uniformly Cauchy on $S$ if and only if $\sequence {f_n}$ converges uniformly on $S$.


Proof
Sufficient Condition
Let $\sequence {f_n}$ be uniformly Cauchy on $S$.

Let $\epsilon \in \R_{> 0}$ be arbitrary.
As $\sequence {f_n}$ is uniformly Cauchy on $S$, there exists $N \in \N$ such that: 

$\size {\map {f_n} x - \map {f_m} x} < \dfrac \epsilon 2$
for all $n, m > N$ and $x \in S$.

Let $x \in S$ be fixed.
Then: 

$\size {\map {f_n} x - \map {f_m} x} < \epsilon$
for all $n, m > N$. 
As $\epsilon$ was arbitrary, the sequence $\sequence {\map {f_n} x}$ is therefore Cauchy.
By Cauchy's Convergence Criterion on Real Numbers, it follows that $\sequence {\map {f_n} x}$ is convergent.

Define a function $f : S \to \R$ by: 

$\ds \map f x = \lim_{n \mathop \to \infty} \map {f_n} x$
for all $x \in S$. 
We aim to show that $f_n \to f$ uniformly.
For all $x \in S$, we have:

$\ds \lim_{m \mathop \to \infty} \size {\map {f_n} x - \map {f_m} x} = \size {\map {f_n} x - \map f x}$
We established that for all $\epsilon \in \R_{> 0}$ we can find $N \in \N$ such that: 

$\size {\map {f_n} x - \map {f_m} x} < \dfrac \epsilon 2$
for $x \in S$ and $n, m > N$. 
We therefore have: 

$\size {\map {f_n} x - \map f x} \le \dfrac \epsilon 2 < \epsilon$
for all $x \in S$ and $n > N$.
So $\sequence {f_n}$ converges uniformly to $f$ on $S$.
$\Box$


Necessary Condition
Let $\sequence {f_n}$ converge uniformly on $S$ to $f$.

Let $\epsilon \in \R_{> 0}$ be arbitrary.
Since $f_n \to f$ uniformly, there exists some $N \in \N$ such that: 

$\size {\map {f_n} x - \map f x} < \dfrac \epsilon 2$
for all $x \in S$ and $n > N$. 
Then if $x \in S$ and $n, m > N$, we have:














\(\ds \size {\map {f_n} x - \map {f_m} x}\)

\(=\)







\(\ds \size {\map {f_n} x - \map f x - \paren {\map {f_m} x - \map f x} }\)




















\(\ds \)

\(=\)







\(\ds \size {\map {f_n} x - \map f x} + \size {\map {f_m} x - \map f x}\)





Triangle Inequality for Real Numbers














\(\ds \)

\(<\)







\(\ds \epsilon\)









Since $\epsilon$ was arbitrary, $\sequence {f_n}$ is uniformly Cauchy on $S$.
$\blacksquare$


Sources
1973: Tom M. Apostol: Mathematical Analysis (2nd ed.) ... (previous) ... (next): $\S 9.5$: The Cauchy Condition for Uniform Convergence: Theorem $9.3$




