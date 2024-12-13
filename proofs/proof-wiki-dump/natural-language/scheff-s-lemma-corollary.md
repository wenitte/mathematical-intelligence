# 

Source: https://proofwiki.org/wiki/Scheff%C3%A9%27s_Lemma/Corollary


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Corollary to Scheffé's Lemma
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f_n$ be a sequence of $\mu$-integrable functions that convergence in measure to another $\mu$-integrable function $f$.
Then $f_n$ converges to $f$ in $L^1$ if and only if $\ds \int_X \size {f_n} \rd \mu$ converges to $\ds \int_X \size f \rd \mu$.


Proof

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: The proof of this is heavily dependent upon the structure of the proof of Scheffé's Lemma, and hence is not consistent with the structure of pages in $\mathsf{Pr} \infty \mathsf{fWiki}$ whereby the only thing we can base a proof on is a link to an actual result.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Let $f_n$ converges to $f$ in measure instead.
The proof of the first direction remains unchanged from the above.
In the other direction, suppose:

$\ds \int_X \size {f_n} \rd \mu \to \int_X \size f \rd \mu$
We wish to show again that:

$\ds \int_X \size {f - f_n} \rd \mu \to 0$.

Aiming for a contradiction, suppose this is false.
Since the integral is non-negative, we can find some $\epsilon > 0$ and an infinite subsequence $g_n$ of $f_n$ such that:

$\ds \int_X \size {f - g_n} \rd \mu \ge \epsilon$
Since $g_n$ still converges in measure to $f$, by Convergence in Measure Implies Convergence a.e. of Subsequence $g_n$ has a further subsequence $h_n$ that converges almost everywhere to $f$.
But we also have:

$\ds \int_X \size {h_n} \rd \mu \to \int_X \size f \rd \mu$
Hence from Scheffé's Lemma:

$\ds \int_X \size {f - h_n} \rd \mu \to 0$
This is a contradiction, as $h_n$ is a subsequence of $g_n$, hence $\ds \int_X \size {f - h_n} \rd \mu$ must remain larger than $\epsilon$.


This needs considerable tedious hard slog to complete it.In particular: Reiterate exactly what was to be proved and demonstrate that this does that.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\blacksquare$


Source of Name
This entry was named for Henry Scheffé.





