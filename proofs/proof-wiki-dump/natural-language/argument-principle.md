# 

Source: https://proofwiki.org/wiki/Argument_Principle


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\gamma$ be a closed contour.
Let $D$ be the region enclosed by $\gamma$. 
Let $f$ be a function meromorphic on $D$. 
Let $f$ be holomorphic with no zeroes on $\gamma$.
Let $N$ denote the number of zeroes of $f$ in $D$, counted up to multiplicity.
Let $P$ denote the number of poles of $f$ in $D$, counted up to order.


This article, or a section of it, needs explaining.In particular: orderYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then:

$\ds N - P = \frac 1 {2\pi i} \oint_\gamma \frac {\map {f'} z} {\map f z} \rd z$


Proof
Let $n_1, n_2, n_3 \ldots n_N$ denote the zeroes of $f$, and $p_1, p_2, p_3 \ldots p_P$ denote its poles. 
Then, there exists a non-zero holomorphic function $g$ such that:

$\ds \map f x = \frac {\prod_{k \mathop = 1}^N \paren {z - n_k} } {\prod_{j \mathop = 1}^P \paren {z - p_j} } \map g z$
Taking the logarithmic derivative:














\(\ds \map \LL {\map f z}\)

\(=\)







\(\ds \frac {\map {f'} z} {\map f z}\)





Definition of Logarithmic Derivative of Meromorphic Function














\(\ds \)

\(=\)







\(\ds \map \LL {\prod_{k \mathop = 1}^N \paren {z - n_k} } - \map \LL {\prod_{j \mathop = 1}^P \paren {z - p_j} } + \map \LL {\map g z}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^N \frac 1 {z - n_k} - \sum_{j \mathop = 1}^P \frac 1 {z - p_j} + \frac {\map {g'} z} {\map g z}\)









Then: 














\(\ds \oint_\gamma \frac {\map {f'} z} {\map f z} \rd z\)

\(=\)







\(\ds \oint_\gamma \paren {\sum_{k \mathop = 1}^N \frac 1 {z - n_k} - \sum_{j \mathop = 1}^P \frac 1 {z - p_j} + \frac {\map {g'} z} {\map g z} } \rd z\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^N \oint_\gamma \frac 1 {z - n_k} \rd z - \sum_{j \mathop = 1}^P \oint_\gamma \frac 1 {z - p_j} \rd z + \oint_\gamma \frac {\map {g'} z} {\map g z} \rd z\)





Linear Combination of Contour Integrals














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^N 2 \pi i - \sum_{j \mathop = 1}^P 2 \pi i + \oint_\gamma \frac {\map {g'} z} {\map g z} \rd z\)




















\(\ds \)

\(=\)







\(\ds 2\pi i \paren {N - P} + \oint_\gamma \frac {\map {g'} z} {\map g z} \rd z\)









By our construction of $g$, $\frac {g'} g$ is holomorphic on $D$ so, by the Cauchy Integral Theorem, the integral is equal to zero.
We therefore have:

$\ds \oint_\gamma \frac {\map {f'} z} {\map f z} \rd z = 2\pi i \paren {N - P}$
Hence:

$\ds N - P = \frac 1 {2\pi i} \oint_\gamma \frac {\map {f'} z} {\map f z} \rd z$
$\blacksquare$





