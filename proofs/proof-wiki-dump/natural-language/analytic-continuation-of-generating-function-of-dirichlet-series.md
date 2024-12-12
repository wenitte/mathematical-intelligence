# 

Source: https://proofwiki.org/wiki/Analytic_Continuation_of_Generating_Function_of_Dirichlet_Series


This article needs to be linked to other articles.In particular: here and thereYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\ds \map \lambda s = \sum_{n \mathop = 1}^\infty \frac {a_n} {n^s}$ be a Dirichlet series 
Let $c \in \R$ be greater than the abscissa of absolute convergence of $\lambda$ and greater than $0$.
Let $\ds \map g z = \sum_{k \mathop = 1}^\infty \map \lambda {c k} z^k $ be the generating function of $\map \lambda {c k}$
Then the analytic continuation of $g$ to $\C$ is equal to:

$\ds \sum_{n \mathop = 1}^\infty a_n  \frac z {n^c - z}$


Proof
We will first show that the series is  meromorphic functions on $\C$ with simple poles at $n^c$.
For $\cmod z < R$, pick M such that $M^c > 2 R$.
This is always possible, as $c > 0$. 
Then for $n > M$: 














\(\ds \cmod {1 - \frac z {n^c} }\)

\(>\)







\(\ds 1 - \cmod {\frac z {n^c} }\)





Triangle Inequality














\(\ds \)

\(>\)







\(\ds 1 - \cmod {\frac R {M^c} }\)




















\(\ds \)

\(>\)







\(\ds 1 - \cmod {\frac R {2 R} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2\)




















\(\ds \frac 1 {\cmod {1 - \frac z {n^c} } }\)

\(<\)







\(\ds 2\)









Therefore, for $\cmod z= < R$, pick $M$ as described above.

For all $K > M$:














\(\ds \cmod {\sum_{n \mathop = K}^\infty \cmod {a_n \frac z {n^c - z} } }\)

\(=\)







\(\ds \cmod {\sum_{n \mathop = K}^\infty \cmod {a_n \frac z {n^c} \frac {n^c} {n^c - z} } }\)




















\(\ds \)

\(=\)







\(\ds \cmod {\sum_{n \mathop = K}^\infty \cmod {a_n \frac z {n^c} } \cmod {\frac 1 {1 - \frac z {n^c} } } }\)




















\(\ds \)

\(<\)







\(\ds \cmod {2 \sum_{n \mathop = K}^\infty \cmod {a_n \frac z {n^c} } }\)










\(\text {(1)}: \quad\)









\(\ds \)

\(<\)







\(\ds \cmod {2 R \sum_{n \mathop = K}^\infty \cmod {\frac {a_n} {n^c} } }\)










Because $c$ is chosen to be greater than the abscissa of absolute convergence of $\lambda$, the above series converges.
Therefore, for all $\epsilon > 0$ we can pick $N$ such that for $K > N$:














\(\ds \cmod {\sum_{n \mathop = K}^\infty \cmod {a_n \frac z {n^c - z} } }\)

\(<\)







\(\ds \cmod {2 R \sum_{n \mathop = K}^\infty \cmod {\frac {a_n} {n^c} } }\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)









Because the summands are meromorphic functions, the series is an absolutely uniformly convergent series of analytic functions on the region $\cmod z < R, z \ne k^c$ for all $k \in \N$.

By Uniform Limit of Analytic Functions is Analytic, the series converges to an analytic function on the domain $z \in \C, z \ne k^c$ for all $k \in \N$. 
Also, each $k^c$ is a pole at exactly one summand, where it is a simple pole.
Therefore, the series has simple poles at each $k^c$, meaning that the function is meromorphic on $\C$.

We now show that the Generating Function is equal to the series for $\cmod z < 1$:














\(\ds \map g z\)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \map \lambda {c k} z^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty z^k \sum_{n \mathop = 1}^\infty \frac {a_n} {n^{c k} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \sum_{n \mathop = 1}^\infty a_n \paren {\frac z {n^c} }^k\)










By Fubini-Tonelli Theorem, if:

$\ds \sum_{n \mathop = 1}^\infty \sum_{k \mathop = 1}^\infty \cmod {a_n \paren {\frac z {n^c} }^k}$
converges, then:

$\ds \sum_{k \mathop = 1}^\infty \sum_{n \mathop = 1}^\infty a_n \paren {\frac z {n^c} }^k = \sum_{n \mathop = 1}^\infty \sum_{k \mathop = 1}^\infty a_n \paren {\frac z {n^c} }^k$
We see that for $\cmod z < 1$: 














\(\ds \sum_{n \mathop = 1}^\infty \sum_{k \mathop = 1}^\infty \cmod {a_n \paren {\frac z {n^c} }^k}\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \cmod {a_n} \sum_{k \mathop = 1}^\infty \paren {\frac {\cmod z} {n^c} }^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \cmod {a_n} \frac {\frac {\cmod z} {n^c} } {1 - \frac {\cmod z} {n^c} }\)





Sum of Infinite Geometric Sequence




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \cmod {a_n} \frac {\cmod z} {n^c - \cmod z}\)










The summands of $(2)$ are equal to the summands of:

$\ds \sum_{n \mathop = 1}^\infty \cmod {a_n} \frac {\cmod z} {\cmod {n^c -  z} }$
for all but finitely n.
By $(1)$, the above series converges, and thus $(2)$ as well.
Thus we may write: 














\(\ds \sum_{k \mathop = 1}^\infty \sum_{n \mathop = 1}^\infty a_n \paren {\frac z {n^c} }^k\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \sum_{k \mathop = 1}^\infty a_n \paren {\frac z {n^c} }^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty a_n \frac {\frac z {n^c} } {1 - \frac z {n^c} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty a_n \frac z {n^c - z}\)









Thus the Generating function is equal to the series on the unit circle.
Thus by Definition:Analytic Continuation, the series is the unique analytic continuation of the Generating Function. 
$\blacksquare$





