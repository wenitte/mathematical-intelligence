# 

Source: https://proofwiki.org/wiki/Dirichlet_Series_Convergence_Lemma/General


This article needs to be linked to other articles.In particular: and review existing links, especially checking the targets of definitions of convergenceYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\ds \map f s = \sum_{n \mathop = 1}^\infty a_n e^{-\map {\lambda_n} s}$ be a general Dirichlet series.
Let $\map f s$ converge at $s_0 = \sigma_0 + i t_0$.

Then $\map f s$ converge for all $s = \sigma + i t$ where $\sigma > \sigma_0$.


Proof
Let $s = \sigma + i t$
Let $s_0 \in \C$ be such that $\map f {s_0}$ converges. 
Let $\map S {m, n} = \ds \sum_{k \mathop = n}^m a_k e^{-\lambda_k s_0}$

We may create a new Dirichlet series that converges at 0 by writing:














\(\ds \map g s\)

\(=\)







\(\ds \map f {s + s_0}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty a_n e^{-\lambda_n \paren {s + s_0} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty a_n e^{-\lambda_n s_0} e^{-\lambda_n s}\)









Thus it suffices to show $\map g s$ converges for $\sigma > 0$.
By Cauchy's Convergence Criterion, it suffices to show that for all $\epsilon>0$ there exists an $N$ such that for all $m, n > N$: 

$\ds \cmod {\sum_{k \mathop = n}^m a_n e^{-\lambda_k s_0} e^{-\lambda_k s} } < \epsilon$
By Abel's Lemma: Formulation 2 we may write:














\(\ds \cmod {\sum_{k \mathop = n}^m a_k e^{-\lambda_k s_0} e^{-\lambda_k s} }\)

\(=\)







\(\ds \cmod {\sum_{k \mathop = n}^m \paren {\map S {k, n} - \map S {k - 1, n} } e^{-\lambda_k s} }\)




















\(\ds \)

\(=\)







\(\ds \cmod {\map S {m, n} e^{-\lambda_m s} + \sum_{k \mathop = n}^{m - 1} \map S {k, n} \paren {e^{-\lambda_k s} - e^{-\lambda_{k + 1} s} } }\)









Because $\map S {m, n}$ is the difference of partial sums of a convergent, and thus cauchy, sequence, its modulus, $\cmod {\map S {m, n} }$, is bounded, say by $Q$.
Thus we have:














\(\ds \cmod {\map S {m, n}^{-\lambda_m s} + \sum_{k \mathop = n}^{m - 1} \map S {k, n} \paren {e^{-\lambda_k s} - e^{-\lambda_{k + 1} s} } }\)

\(\le\)







\(\ds \cmod {\map S {m, n} e^{-\lambda_m s} } + \sum_{k \mathop = n}^{m-1} \cmod {\map S {k, n} \paren {e^{-\lambda_k s} - e^{-\lambda_{k + 1} s} } }\)




















\(\ds \)

\(\le\)







\(\ds Q e^{-\lambda_m \sigma} + Q \sum_{k \mathop = n}^{m - 1} \cmod {e^{-\lambda_k s} - e^{-\lambda_{k + 1} s} }\)









We see that:














\(\ds \cmod {e^{-\lambda_k s} - e^{-\lambda_{k+1}s} }\)

\(=\)







\(\ds \cmod {\int_{\lambda_k}^{\lambda_{k + 1} } -s e^{-x s} \rd x}\)




















\(\ds \)

\(\le\)







\(\ds \int_{\lambda_k}^{\lambda_{k + 1} } \cmod {-s e^{-x s} } \rd x\)





Modulus of Complex Integral














\(\ds \)

\(=\)







\(\ds \int_{\lambda_k}^{\lambda_{k + 1} } \cmod s e^{-x \sigma} \rd x\)




















\(\ds \)

\(=\)







\(\ds \cmod s \int_{\lambda_k}^{\lambda_{k + 1} } e^{-x \sigma} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {\cmod s} \sigma \paren {e^{-\lambda_k \sigma} - e^{-\lambda_{k + 1} \sigma} }\)









Thus we have:














\(\ds Q e^{-\lambda_m \sigma} + Q \sum_{k \mathop = n}^{m - 1} \cmod {e^{-\lambda_k s} - e^{-\lambda_{k + 1} s} }\)

\(\le\)







\(\ds Q e^{-\lambda_m \sigma} + Q \sum_{k \mathop = n}^{m - 1} \frac {\cmod s} {\sigma} \paren {e^{-\lambda_k \sigma} - e^{-\lambda_{k + 1} \sigma} }\)




















\(\ds \)

\(=\)







\(\ds Q e^{-\lambda_m \sigma} + Q \frac {\cmod s} \sigma \paren {e^{-\lambda_n \sigma} - e^{-\lambda_m \sigma} }\)





Telescoping Series



Because $\lambda_n$ tends to infinity, both summands tend to $0$ as $n$ goes to $\infty$ if $\sigma > 0$.
Thus we can pick $N$ large enough such that both terms are less than $\dfrac \epsilon 2$ for $n, m > N$, giving us the desired result.
$\blacksquare$





