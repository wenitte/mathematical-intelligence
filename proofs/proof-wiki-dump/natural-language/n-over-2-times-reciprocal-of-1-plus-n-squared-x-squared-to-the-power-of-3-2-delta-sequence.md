# 

Source: https://proofwiki.org/wiki/N_over_2_times_Reciprocal_of_1_Plus_n_Squared_x_Squared_to_the_Power_of_3/2_Delta_Sequence


It has been suggested that this page be renamed.In particular: can't use / in a title for obvs rsns
Suggest rename to 'N over 2 times Reciprocal of 1 Plus n Squared x Squared to the Power of 3 Halfs Delta Sequence' --Hbghlyj (talk) 13:59, 10 May 2024 (UTC)suggest rename to an examples/arbitrary example 1 style page like recent examples

Please rename, because I cannot rename page. Thanks --Hbghlyj (talk) 15:36, 12 May 2024 (UTC)To discuss this page in more detail, feel free to use the talk page.

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
  The graph of the $\ds \frac n 2 \frac 1 {\paren{1 + n^2 x^2}^{3 / 2}}$ delta sequence. As $n$ grows, the graph becomes thinner and taller. The area under each graph is equal to $1$.
Let $\sequence {\map {\delta_n} x}$ be a sequence such that:

$\ds \map {\delta_n} x := \frac n 2 \frac 1 {\paren{1 + n^2 x^2}^{3 / 2} }$
Then $\sequence {\map {\delta_n} x}_{n \mathop \in {\N_{>0} } }$ is a delta sequence.
That is, in the distributional sense it holds that:

$\ds \lim_{n \mathop \to \infty} \map {\delta_n} x = \map \delta x$
or

$\ds \lim_{n \mathop \to \infty} \int_{-\infty}^\infty \map {\delta_n} x \map \phi x \rd x = \map \delta \phi$
where $\phi \in \map \DD \R$ is a test function, $\delta$ is the Dirac delta distribution, and $\map \delta x$ is the abuse of notation, usually interpreted as an infinitely thin and tall spike with its area equal to $1$.

Proof













\(\ds \int_0^\infty \frac n 2 \frac 1 {\paren{1 + n^2 x^2}^{3 / 2} } \rd x\)

\(=\)







\(\ds \int_0^\infty \frac 1 2 \frac 1 {\paren{1 + n^2 x^2}^{3 / 2} } \rd \paren {n x}\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac 1 2 \frac 1 {\paren{1 + y^2}^{3 / 2} } \rd y\)





$n x = y$, Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 2 \intlimits {\frac y {\paren{1 + y^2}^{1 / 2} } } 0 \infty\)





by $\ds \frac 1 {\paren{1 + y^2}^{3 / 2} } = \frac \rd {\rd y} \frac y {\paren{1 + y^2}^{1 / 2} }$














\(\ds \)

\(=\)







\(\ds \frac 1 2\)





by $\ds \lim_{y \to \infty} \frac y {\paren{1 + y^2}^{1 / 2} } = 1$



By Definite Integral of Even Function:














\(\ds \int_{-\infty}^\infty \frac n 2 \frac 1 {\paren{1 + n^2 x^2}^{3 / 2} } \rd x\)

\(=\)







\(\ds 1\)









Let $a,b \in \R$.
Then:














\(\ds \int_a^b \frac n 2 \frac 1 {\paren{1 + n^2 x^2}^{3 / 2} } \rd x\)

\(=\)







\(\ds \int_a^b \frac 1 2 \frac 1 {\paren{1 + \paren {n x}^2}^{3 / 2} } \rd \paren {n x}\)




















\(\ds \)

\(=\)







\(\ds \int_{n a}^{n b} \frac 1 2 \frac 1 {\paren{1 + y^2}^{3 / 2} } \rd y\)





$n x = y$, Integration by Substitution



Suppose $0 < a < b$.
Then:














\(\ds \lim_{n \mathop \to \infty} \int_{a n}^{b n} \frac 1 2 \frac 1 {\paren{1 + y^2}^{3 / 2} } \rd y\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int_0^{b n} \frac 1 2 \frac 1 {\paren{1 + y^2}^{3 / 2} } \rd y - \lim_{n \mathop \to \infty} \int_0^{a n} \frac 1 2 \frac 1 {\paren{1 + y^2}^{3 / 2} } \rd y\)





Sum of Integrals on Adjacent Intervals for Integrable Functions














\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac 1 2 \frac 1 {\paren{1 + y^2}^{3 / 2} } \rd y - \int_0^\infty \frac 1 2 \frac 1 {\paren{1 + y^2}^{3 / 2} } \rd y\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 - \frac 1 2\)




















\(\ds \)

\(=\)







\(\ds 0\)









Analogously, suppose $a < b < 0$.
Then:














\(\ds \lim_{n \mathop \to \infty} \int_{a n}^{b n} \frac 1 2 \frac 1 {\paren{1 + y^2}^{3 / 2} } \rd y\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int_{a n}^0 \frac 1 2 \frac 1 {\paren{1 + y^2}^{3 / 2} } \rd y - \lim_{n \mathop \to \infty} \int_{b n}^0 \frac 1 2 \frac 1 {\paren{1 + y^2}^{3 / 2} } \rd y\)





Sum of Integrals on Adjacent Intervals for Integrable Functions














\(\ds \)

\(=\)







\(\ds \int_{-\infty}^0 \frac 1 2 \frac 1 {\paren{1 + y^2}^{3 / 2} } \rd y - \int_{-\infty}^0 \frac 1 2 \frac 1 {\paren{1 + y^2}^{3 / 2} } \rd y\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 - \frac 1 2\)




















\(\ds \)

\(=\)







\(\ds 0\)









Let $\epsilon \in \R_{> 0}$.
Then:














\(\ds \lim_{n \mathop \to \infty} \int_{-\infty}^\infty \map \phi x \frac n 2 \frac 1 {\paren{1 + n^2 x^2}^{3 / 2} } \rd x\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int_{-\infty}^{-\epsilon} \map \phi x \frac n 2 \frac 1 {\paren{1 + n^2 x^2}^{3 / 2} } \rd x + \lim_{n \mathop \to \infty} \int_{-\epsilon}^\epsilon \map \phi x \frac n 2 \frac 1 {\paren{1 + n^2 x^2}^{3 / 2} } \rd x + \lim_{n \mathop \to \infty} \int_\epsilon^\infty \map \phi x \frac n 2 \frac 1 {\paren{1 + n^2 x^2}^{3 / 2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \map \phi {\xi_-} \lim_{n \mathop \to \infty} \int_{-\infty}^{-\epsilon} \frac n 2 \frac 1 {\paren{1 + n^2 x^2}^{3 / 2} } \rd x + \map \phi {\xi_\epsilon} \lim_{n \mathop \to \infty} \int_{-\epsilon}^\epsilon \frac n 2 \frac 1 {\paren{1 + n^2 x^2}^{3 / 2} } \rd x + \map \phi {\xi_+} \lim_{n \mathop \to \infty} \int_{\epsilon}^\infty \frac n 2 \frac 1 {\paren{1 + n^2 x^2}^{3 / 2} } \rd x\)





Mean value theorem for integrals, $\xi_\epsilon \in \closedint {-\epsilon} \epsilon$, $\xi_- \in \hointl {-\infty} {-\epsilon}$, $\xi_+ \in \hointr \epsilon \infty$














\(\ds \)

\(=\)







\(\ds 0 + \map \phi {\xi_\epsilon} \lim_{n \mathop \to \infty} \int_{-n \epsilon}^{n \epsilon} \frac 1 2 \frac 1 {\paren{1 + y^2}^{3 / 2} } \rd y + 0\)




















\(\ds \)

\(=\)







\(\ds \map \phi {\xi_\epsilon}\)









$\epsilon$ is an arbitrary positive real number.
Hence, for every $\epsilon \in \R_{> 0}$ contributions from expressions with $\map \phi {\xi_+}$ and $\map \phi {\xi_-}$ vanish.
Suppose $\xi_\epsilon \ne 0$.
By Real Numbers are Densely Ordered:

$\forall \epsilon \in \R_{> 0} : \exists \epsilon' \in \R_{> 0} : 0 < \epsilon' < \epsilon$
Then with respect to $\epsilon'$ we have that $\xi_\epsilon = \xi_{+'}$ or $\xi_\epsilon = \xi_{-'}$, where $\xi_{+'} \in \hointr {\epsilon'} \infty$ and $\xi_{-'} \in \hointl {-\infty} {-\epsilon'}$.
But from the result above, for every $\epsilon' \in \R_{> 0}$ contributions from expressions with $\map \phi {\xi_{+'}}$ and $\map \phi {\xi_{-'}}$ vanish.
Therefore, the only nonvanishing contribution can come from $\xi_\epsilon = 0$.
$\blacksquare$

Also see
N over Pi times Reciprocal of 1 Plus n Squared x Squared Delta Sequence




