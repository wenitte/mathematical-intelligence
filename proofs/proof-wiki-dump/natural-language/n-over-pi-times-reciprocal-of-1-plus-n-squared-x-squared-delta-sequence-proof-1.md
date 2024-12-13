# 

Source: https://proofwiki.org/wiki/N_over_Pi_times_Reciprocal_of_1_Plus_n_Squared_x_Squared_Delta_Sequence/Proof_1

Theorem
  The graph of the $\ds \frac n \pi \frac 1 {1 + n^2 x^2}$ delta sequence. As $n$ grows, the graph becomes thinner and taller. The area under each graph is equal to $1$.
Let $\sequence {\map {\delta_n} x}$ be a sequence such that:

$\ds \map {\delta_n} x := \frac n \pi \frac 1 {1 + n^2 x^2}$

Then $\sequence {\map {\delta_n} x}_{n \mathop \in {\N_{>0} } }$ is a delta sequence.
That is, in the distributional sense it holds that:

$\ds \lim_{n \mathop \to \infty} \map {\delta_n} x = \map \delta x$
or

$\ds \lim_{n \mathop \to \infty} \int_{-\infty}^\infty \map {\delta_n} x \map \phi x \rd x = \map \delta \phi$
where $\phi \in \map \DD \R$ is a test function, $\delta$ is the Dirac delta distribution, and $\map \delta x$ is the abuse of notation, usually interpreted as an infinitely thin and tall spike with its area equal to $1$.


Proof













\(\ds \int_0^\infty \frac n \pi \frac 1 {1 + n^2 x^2} \rd x\)

\(=\)







\(\ds \int_0^\infty \frac 1 \pi \frac 1 {1 + n^2 x^2} \rd \paren {n x}\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac 1 \pi \frac 1 {1 + y^2} \rd y\)





$n x = y$, Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 2\)





Definite Integral to Infinity of Reciprocal of x Squared plus a Squared/Corollary



Furthermore:














\(\ds \int_{-\infty}^\infty \frac n \pi \frac 1 {1 + n^2 x^2} \rd x\)

\(=\)







\(\ds 1\)









Let $a,b \in \R$.
Then:














\(\ds \int_a^b \frac n \pi \frac 1 {1 + n^2 x^2} \rd x\)

\(=\)







\(\ds \int_a^b \frac n \pi \frac 1 {1 + \paren {n x}^2} \rd \paren {n x}\)




















\(\ds \)

\(=\)







\(\ds \int_{n a}^{n b} \frac 1 \pi \frac 1 {1 + y^2} \rd y\)





$n x = y$, Integration by Substitution



Suppose $0 < a < b$.
Then:














\(\ds \lim_{n \mathop \to \infty} \int_{a n}^{b n} \frac 1 \pi \frac 1 {1 + y^2} \rd y\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int_0^{b n} \frac 1 \pi \frac 1 {1 + y^2} \rd y - \lim_{n \mathop \to \infty} \int_0^{a n} \frac 1 \pi \frac 1 {1 + y^2} \rd y\)





Sum of Integrals on Adjacent Intervals for Integrable Functions














\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac 1 \pi \frac 1 {1 + y^2} \rd y - \int_0^\infty \frac 1 \pi \frac 1 {1 + y^2} \rd y\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 - \frac 1 2\)




















\(\ds \)

\(=\)







\(\ds 0\)









Analogously, suppose $a < b < 0$.
Then:














\(\ds \lim_{n \mathop \to \infty} \int_{a n}^{b n} \frac 1 \pi \frac 1 {1 + y^2} \rd y\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int_{a n}^0 \frac 1 \pi \frac 1 {1 + y^2} \rd y - \lim_{n \mathop \to \infty} \int_{b n}^0 \frac 1 \pi \frac 1 {1 + y^2} \rd y\)





Sum of Integrals on Adjacent Intervals for Integrable Functions














\(\ds \)

\(=\)







\(\ds \int_{-\infty}^0 \frac 1 \pi \frac 1 {1 + y^2} \rd y - \int_{-\infty}^0 \frac 1 \pi \frac 1 {1 + y^2} \rd y\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 - \frac 1 2\)




















\(\ds \)

\(=\)







\(\ds 0\)









Let $\epsilon \in \R_{> 0}$.
Then:














\(\ds \lim_{n \mathop \to \infty} \int_{-\infty}^\infty \map \phi x \frac n \pi \frac 1 {1 + n^2 x^2} \rd x\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int_{-\infty}^{-\epsilon} \map \phi x \frac n \pi \frac 1 {1 + n^2 x^2} \rd x + \lim_{n \mathop \to \infty} \int_{-\epsilon}^\epsilon \map \phi x \frac n \pi \frac 1 {1 + n^2 x^2} \rd x + \lim_{n \mathop \to \infty} \int_\epsilon^\infty \map \phi x \frac n \pi \frac 1 {1 + n^2 x^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \map \phi {\xi_-} \lim_{n \mathop \to \infty} \int_{-\infty}^{-\epsilon} \frac n \pi \frac 1 {1 + n^2 x^2} \rd x + \map \phi {\xi_\epsilon} \lim_{n \mathop \to \infty} \int_{-\epsilon}^\epsilon \frac n \pi \frac 1 {1 + n^2 x^2} \rd x + \map \phi {\xi_+} \lim_{n \mathop \to \infty} \int_{\epsilon}^\infty \frac n \pi \frac 1 {1 + n^2 x^2} \rd x\)





Mean value theorem for integrals, $\xi_\epsilon \in \closedint {-\epsilon} \epsilon$, $\xi_- \in \hointl {-\infty} {-\epsilon}$, $\xi_+ \in \hointr \epsilon \infty$














\(\ds \)

\(=\)







\(\ds 0 + \map \phi {\xi_\epsilon} \lim_{n \mathop \to \infty} \int_{-n \epsilon}^{n \epsilon} \frac 1 \pi \frac 1 {1 + y^2} \rd y + 0\)




















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


This article needs proofreading.In particular: Check the rigour of the last few lines. Make the argument stricter.If you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
$\blacksquare$


Sources
2013: George Arfken, Hans J. Weber and Frank E. Harris: Mathematical Methods for Physicists (7th ed.): Chapter $1$ Mathematical Preliminaries $1.11$ Dirac Delta Function





