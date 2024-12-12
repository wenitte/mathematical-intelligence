# 

Source: https://proofwiki.org/wiki/Everywhere_Dense_Subset_of_Countable_Hilbert_Space_Direct_Sum_in_terms_of_Everywhere_Dense_Subsets_of_Summands

Theorem
Let $\family {\tuple {\HH_n, \innerprod \cdot \cdot_n} }_{n \mathop \in \N}$ be a sequence of Hilbert spaces over $\C$.
For each $n \in \N$, let $\family {e^{(n)}_\alpha}_{\alpha \in \map J n}$ be an everywhere dense subset of $\HH_n$.
Let $\tuple {\HH, \innerprod \cdot \cdot}$ be the Hilbert space direct sum of $\family {\tuple {\HH_n, \innerprod \cdot \cdot_n} }_{n \mathop \in \N}$. 
Let $\SS$ be the set of $f \in \HH$ such that:

there exists $N \in \N$ such that:
$\map f n = e^{(n)}_{\map \alpha n}$ for some $\map \alpha n \in \map J n$ and for all $n \le N$
$\map f n = {\mathbf 0}_{\HH_n}$ for $n > N$.

Then $\SS$ is everywhere dense in $\HH$. 


Proof
Let $f \in \HH$ and $\epsilon > 0$. 
We need to show that there exists $g \in \SS$ with $\norm {f - g} < \epsilon$.
Then by definition of the Hilbert space direct sum and Net Convergence Equivalent to Absolute Convergence:

$\ds \sum_{n \mathop = 1}^\infty \norm {\map f n}_{\HH_n}^2 < \infty$
Hence there exists $N \in \N$ such that:

$\ds \sum_{n \mathop = N + 1}^\infty \norm {\map f n}_{\HH_n}^2 < \frac {\epsilon^2} 2$
For $n \le N$, pick $\map \alpha n \in \map J n$ such that:

$\norm {\map f n - e_{\map \alpha n}^{(n)} }_{\HH_n}^2 < \dfrac {\epsilon^2} {2 N}$
Define:

$\map g n = e_{\map \alpha n}^{(n)} \in \HH_n$ for $n \le N$
$\map g n = {\mathbf 0}_{\HH_n}$ for $n > N$.
We have:

$\ds \sum_{n \mathop = 1}^\infty \norm {\map g n}_{\HH_n}^2 = \sum_{n \mathop = 1}^N \norm {\map g n}_{\HH_n}^2 < \infty$
since the sum on the right hand side is finite.
Hence $g \in \HH$.
We then have:














\(\ds \norm {f - g}_\HH^2\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \norm {\map f n - \map g n}_{\HH_n}^2\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^N \norm {\map f n - \map g n}_{\HH_n}^2 + \sum_{n \mathop = N + 1}^\infty \norm {\map f n}_{\HH_n}^2\)




















\(\ds \)

\(<\)







\(\ds \sum_{n \mathop = 1}^N \frac {\epsilon^2} {2 N} + \frac {\epsilon^2} 2\)




















\(\ds \)

\(=\)







\(\ds \frac {\epsilon^2} 2 + \frac {\epsilon^2} 2\)




















\(\ds \)

\(=\)







\(\ds \epsilon^2\)









hence:

$\norm {f - g}_\HH < \epsilon$
as required.
$\blacksquare$





