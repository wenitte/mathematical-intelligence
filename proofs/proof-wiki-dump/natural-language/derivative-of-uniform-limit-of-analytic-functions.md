# 

Source: https://proofwiki.org/wiki/Derivative_of_Uniform_Limit_of_Analytic_Functions


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $U$ be an open subset of $\C$.
Let $\sequence {f_n}_{n \mathop \in \N}$ be a sequence of analytic functions $f_n : U \to \C$.
Let $\sequence {f_n}$ converge locally uniformly to $f$ on $U$.
Let $f'$ denote the derivative of $f$.

Then the sequence $\sequence { {f_n}'}_{n \mathop \in \N}$ converges locally uniformly to $f'$.


Proof
Let $a \in U$.
By definition of locally uniform convergence, there exists an open disk $\map {D_{2 r} } a \subseteq U$ such that $f_n$ converges uniformly to $f$ on $\map {D_{2 r} } a$.
That is:

$\ds (1): \quad \lim_{n \mathop \to \infty} \sup_{z \mathop \in \map {D_{2 r} } a} \cmod {\map {f_n} z - \map f z} = 0$
We shall show that:

$\ds \lim_{n \mathop \to \infty} \sup_{w \mathop \in \map {D_r} a} \cmod {\map {f'_n} w - \map {f'} w} = 0$

Let $w \in \map {D_r} a$.
By Triangle Inequality for Complex Numbers:

$(2): \quad \map {D_r} w \subseteq \map {D_{2 r} } a \subseteq U$
Thus by Cauchy's Integral Formula for Derivatives:














\(\ds \map {f'_n} w\)

\(=\)







\(\ds \frac 1 {2 \pi i} \int_{\partial \map {D_r} w} \frac {\map {f_n} z} {\paren {z - w}^2} \rd z\)










and:












\(\ds \map {f'} w\)

\(=\)







\(\ds \frac 1 {2 \pi i} \int_{\partial \map {D_r} w} \frac {\map f z} {\paren {z - w}^2} \rd z\)









Therefore:














\(\ds \cmod {\map {f'_n} w - \map {f'} w}\)

\(=\)







\(\ds \frac 1 {2 \pi} \cmod {\int_{\partial \map {D_r} w} \frac {\map {f_n} z - \map f z} {\paren {z - w}^2} \rd z}\)




















\(\ds \)

\(\le\)







\(\ds \frac {2 \pi r} {2 \pi} \sup_{z \mathop \in \partial \map {D_r} w} \frac {\cmod {\map {f_n} z - \map f z} } {r^2}\)





Estimation Lemma for Contour Integrals














\(\ds \)

\(=\)







\(\ds \frac 1 r \sup_{z \mathop \in \partial \map {D_r} w} \cmod {\map {f_n} z - \map f z}\)




















\(\ds \)

\(\le\)







\(\ds \frac 1 r \sup_{z \mathop \in \map {D_{2 r} } a} \cmod {\map {f_n} z - \map f z}\)





by $(2)$



Since $w \in \map {D_r} a$ was arbitrary, we have:














\(\ds \sup_{w \mathop \in \map {D_r} a} \cmod {\map {f'_n} w - \map {f'} w}\)

\(\le\)







\(\ds \frac 1 r \sup_{z \mathop \in \map {D_{2 r} } a} \cmod {\map {f_n} z - \map f z}\)




















\(\ds \)

\(\to\)







\(\ds 0\)





as $n \to \infty$ by $\paren 1$



$\blacksquare$


Also see
Uniform Limit of Analytic Functions is Analytic




