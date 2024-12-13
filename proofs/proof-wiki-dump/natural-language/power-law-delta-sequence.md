# 

Source: https://proofwiki.org/wiki/Power_Law_Delta_Sequence

Theorem
  The graph of the $\ds \frac {\size x^{\frac 1 n - 1}} {2 n}$ delta sequence. As $n$ grows, the graph becomes steeper and thinner. The area under each graph is infinite unless the range of integration is a finite interval say, $\closedint {-a} a$. However, in the limit $n \to \infty$, this area approaches $1$ regardless of $a$.
Let $\sequence {\map {\delta_n} x}$ be a sequence such that:

$\ds \map {\delta_n} x := \frac {\size x^{\frac 1 n - 1}} {2 n}$

Then $\sequence {\map {\delta_n} x}_{n \mathop \in {\N_{>0} } }$ is a delta sequence.
That is, in the distributional sense it holds that:

$\ds \lim_{n \mathop \to \infty} \map {\delta_n} x = \map \delta x$
or

$\ds \lim_{n \mathop \to \infty} \int_{-\infty}^\infty \map {\delta_n} x \map \phi x \rd x = \map \delta \phi$
where $\phi \in \map \DD \R$ is a test function, $\delta$ is the Dirac delta distribution, and $\map \delta x$ is the abuse of notation, usually interpreted as an infinitely thin and tall spike with its area equal to $1$.


Proof
Let $a \in \R_{> 0}$.
Then:














\(\ds \int_{-a}^a \frac {\size x^{\frac 1 n - 1} } {2 n} \rd x\)

\(=\)







\(\ds \int_{-a}^0 \frac {\size x^{\frac 1 n - 1} } {2 n} \rd x + \int_0^a \frac {\size x^{\frac 1 n - 1} } {2 n} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_{-a}^0 \frac {\paren {-x}^{\frac 1 n - 1} } {2 n} \rd x + \int_0^a \frac {x^{\frac 1 n - 1} } {2 n} \rd x\)





Definition of Absolute Value














\(\ds \)

\(=\)







\(\ds \int_0^a \frac {x^{\frac 1 n - 1} } n \rd x\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \bigintlimits {x^{\frac 1 n} } 0 a\)




















\(\ds \)

\(=\)







\(\ds a^{\frac 1 n}\)









Furthermore:

$\ds \forall a \in \R_{> 0} : \lim_{n \mathop \to \infty} a^{\frac 1 n} = 1$
Suppose $a, b \in \R_{> 0} : 0 < a < b$.
Then:














\(\ds \lim_{n \mathop \to \infty} \int_a^b \frac {\size x^{\frac 1 n - 1} } {2 n} \rd x\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\int_0^b \frac {\size x^{\frac 1 n - 1} } {2 n} \rd x - \int_0^a \frac {\size x^{\frac 1 n - 1} } {2 n} \rd x}\)





Sum of Integrals on Adjacent Intervals for Integrable Functions














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\frac {b^{\frac 1 n} } 2- \frac {a^{\frac 1 n} } 2 }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 - \frac 1 2\)




















\(\ds \)

\(=\)







\(\ds 0\)









Analogously, suppose $a < b < 0$.
Then:














\(\ds \lim_{n \mathop \to \infty} \int_a^b \frac {\size x^{\frac 1 n - 1} } {2 n} \rd x\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int_a^0 \frac {\size x^{\frac 1 n - 1} } {2 n} \rd x - \lim_{n \mathop \to \infty} \int_b^0 \frac {\size x^{\frac 1 n - 1} } {2 n} \rd x\)





Sum of Integrals on Adjacent Intervals for Integrable Functions














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int_a^0 \frac {\paren {-x}^{\frac 1 n - 1} } {2 n} \rd x - \lim_{n \mathop \to \infty} \int_b^0 \frac {\paren {-x}^{\frac 1 n - 1} } {2 n} \rd x\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\frac {\paren {-a}^{\frac 1 n} } 2- \frac {\paren {-b}^{\frac 1 n} } 2 }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 - \frac 1 2\)




















\(\ds \)

\(=\)







\(\ds 0\)









Let $\epsilon, a \in \R_{> 0}$ such that $\epsilon < a$.
Then:














\(\ds \lim_{n \mathop \to \infty} \int_{-a}^a \map \phi x \frac {\size x^{\frac 1 n - 1} } {2 n} \rd x\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int_{-a}^{-\epsilon} \map \phi x \frac {\size x^{\frac 1 n - 1} } {2 n} \rd x + \lim_{n \mathop \to \infty} \int_{-\epsilon}^\epsilon \map \phi x \frac {\size x^{\frac 1 n - 1} } {2 n} \rd x + \lim_{n \mathop \to \infty} \int_\epsilon^a \map \phi x \frac {\size x^{\frac 1 n - 1} } {2 n} \rd x\)




















\(\ds \)

\(=\)







\(\ds \map \phi {\xi_-} \lim_{n \mathop \to \infty} \int_{-a}^{-\epsilon} \frac {\size x^{\frac 1 n - 1} } {2 n} \rd x + \map \phi {\xi_\epsilon} \lim_{n \mathop \to \infty} \int_{-\epsilon}^\epsilon \frac {\size x^{\frac 1 n - 1} } {2 n} \rd x + \map \phi {\xi_+} \lim_{n \mathop \to \infty} \int_{\epsilon}^a \frac {\size x^{\frac 1 n - 1} } {2 n} \rd x\)





Mean value theorem for integrals, $\xi_\epsilon \in \closedint {-\epsilon} \epsilon$, $\xi_- \in \hointl {-a} {-\epsilon}$, $\xi_+ \in \hointr \epsilon a$














\(\ds \)

\(=\)







\(\ds 0 + \map \phi {\xi_\epsilon} \lim_{n \mathop \to \infty} \int_{-\epsilon}^{\epsilon} \frac {\size x^{\frac 1 n - 1} } {2 n} \rd x + 0\)




















\(\ds \)

\(=\)







\(\ds \map \phi {\xi_\epsilon}\)









$\epsilon$ is an arbitrary positive real number.
Hence, for every $\epsilon \in \R_{> 0}$ contributions from expressions with $\map \phi {\xi_+}$ and $\map \phi {\xi_-}$ vanish.
Suppose $\xi_\epsilon \ne 0$.
By Real Numbers are Densely Ordered:

$\forall \epsilon \in \R_{> 0} : \exists \epsilon' \in \R_{> 0} : 0 < \epsilon' < \epsilon$
Then with respect to $\epsilon'$ we have that $\xi_\epsilon = \xi_{+'}$ or $\xi_\epsilon = \xi_{-'}$, where $\xi_{+'} \in \hointr {\epsilon'} a$ and $\xi_{-'} \in \hointl {-a} {-\epsilon'}$.
But from the result above, for every $\epsilon' \in \R_{> 0}$ contributions from expressions with $\map \phi {\xi_{+'}}$ and $\map \phi {\xi_{-'}}$ vanish.
Therefore, the only nonvanishing contribution can come from $\xi_\epsilon = 0$.
Taking the limit $a \to \infty$ in the above expressions yields the desired result.


Further research is required in order to fill out the details.In particular: The above results depdends on the order of limits wrt a and n. It would be nice to find exactly, in which sense the above is an example for a delta sequenceYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by finding out more.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Research}} from the code.

$\blacksquare$


There are no source works cited for this page.Source citations are highly desirable, and mandatory for all definition pages.Definition pages whose content is wholly or partly unsourced are in danger of having such content deleted.To discuss this page in more detail, feel free to use the talk page.




