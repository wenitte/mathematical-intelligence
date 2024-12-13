# 

Source: https://proofwiki.org/wiki/N_over_Pi_times_Reciprocal_of_1_Plus_n_Squared_x_Squared_Delta_Sequence/Proof_2

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
Let $\map g x = \map \phi x - \map \phi 0$.
Then:

$\ds \int_{- \infty}^\infty \map \phi x \map {\delta_n} x \rd x = \map \phi 0 + \int_{- \infty}^\infty \map g x \map {\delta_n} x \rd x$
Let $A \in \R_{> 0}$.
Then:














\(\ds \int_{- \infty}^\infty \map g x \map {\delta_n} x \rd x\)

\(=\)







\(\ds \int_{- \infty}^{- A} \map g x \map {\delta_n} x \rd x + \int_A^\infty \map g x \map {\delta_n} x \rd x + \int_{- A}^A \map g x \map {\delta_n} x \rd x\)





Sum of Integrals on Adjacent Intervals for Integrable Functions














\(\ds \)

\(=:\)







\(\ds I_1 + I_2 + I_3\)









Let:

$\ds \max_{x \mathop \in \closedint {-A} A} \size {\map g x} := \map M A$
Then:














\(\ds I_3\)

\(\le\)







\(\ds \int_{-A}^A \size {\map g x} \map {\delta_n} x \rd x\)




















\(\ds \)

\(\le\)







\(\ds \map M A \int_{-A}^A \frac n {\pi \paren {1 + n^2 x^2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \map M A \frac 2 \pi \map \arctan {n A}\)





Primitive of Reciprocal of x squared plus a squared














\(\ds \)

\(\le\)







\(\ds \map M A\)





$\ds \forall x \in \R_{\ge 0} : 0 \le \map \arctan x \le \frac \pi 2$



We have that $\map g 0 = 0$.
By definition, $\phi$ is a smooth real function on $\R$.
By Differentiable Function is Continuous, $\map g x$ is continuous at $x = 0$. 
Furthermore:














\(\ds \lim_{A \mathop \to 0} \map M A\)

\(=\)







\(\ds \lim_{A \mathop \to 0} \max_{x \mathop \in \closedint {-A} A} \size {\map g x}\)




















\(\ds \)

\(=\)







\(\ds \size {\map g 0}\)




















\(\ds \)

\(=\)







\(\ds 0\)









By definition of the limit of a real function:

$\forall \epsilon' \in \R_{>0} : \exists \delta \in \R_{>0}: \forall A \in \R_{> 0}: 0 < A < \delta \implies \map M A < \epsilon'$
Let $\ds \epsilon' = \frac \epsilon 2$.
It follows that:

$\ds \forall \epsilon \in \R_{> 0} : \exists A \in \R_{> 0} : I_3 \le \map M A < \frac \epsilon 2$
Suppose $A$ is such that the above inequality holds.
By definition, $\map \phi x$ is bounded.
Then:














\(\ds \size {\map g x}\)

\(=\)







\(\ds \size {\map \phi x - \map \phi 0}\)




















\(\ds \)

\(<\)







\(\ds \size {\map \phi x} + \size {\map \phi 0}\)





Triangle Inequality for Real Numbers



It follows that:

$\exists b \in \R_{> 0} : \forall x \in \R : \size {\map g x} < b$
Then:














\(\ds \size {I_1 + I_2}\)

\(=\)







\(\ds \size { \int_{- \infty}^{-A} \map g x \map {\delta_n} x \rd x + \int_A^\infty \map g x \map {\delta_n} x \rd x}\)




















\(\ds \)

\(\le\)







\(\ds \size {\int_{- \infty}^{-A} \size {\map g x} \map {\delta_n} x \rd x + \int_A^\infty \size {\map g x} \map {\delta_n} x \rd x}\)




















\(\ds \)

\(\le\)







\(\ds \size { b \int_{- \infty}^{-A} \map {\delta_n} x \rd x + b \int_A^\infty \map {\delta_n} x \rd x}\)




















\(\ds \)

\(\le\)







\(\ds b \size {\int_{- \infty}^{-A} \map {\delta_n} x \rd x + \int_A^\infty \map {\delta_n} x \rd x}\)




















\(\ds \)

\(=\)







\(\ds \frac b \pi \size {\bigintlimits {\map \arctan {n x} } {- \infty} {-A} + \bigintlimits {\map \arctan {n x} } A \infty }\)





Primitive of Reciprocal of x squared plus a squared














\(\ds \)

\(=\)







\(\ds \frac b \pi \size {- \map \arctan {n A} + \frac \pi 2 + \frac \pi 2 - \map \arctan {n A} }\)




















\(\ds \)

\(=\)







\(\ds b \size {1 - \frac 2 \pi \map \arctan {n A} }\)









With the number $A$ fixed: 

$\ds \lim_{n \mathop \to \infty} \frac 2 \pi \map \arctan {n A} = 1$.
By Squeeze Theorem and for a fixed $A$ we have:

$\ds \lim_{n \mathop \to \infty} \size {I_1 + I_2} = 0$
By definition of the limit of a real sequence: 

$\ds \forall \overline \epsilon \in \R_{> 0} : \exists N \in \N : \forall n \in \N : n > N \implies \size {I_1 + I_2} \le b \size {1 - \frac 2 \pi \map \arctan {n A} } < \overline \epsilon$.
Let $\ds \overline \epsilon = \frac \epsilon 2$.
Then:

$\ds \forall \epsilon \in \R_{> 0} : \exists N \in \N : \forall n \in \N : n > N \implies \size {I_1 + I_2} < \frac \epsilon 2$.
Let $A$ and $N$ be such that the above inequalities for $I_3$ and $I_1 + I_2$ hold.
Then:














\(\ds \size {\int_{-\infty}^\infty \map g x \map {\delta_n} x \rd x}\)

\(\le\)







\(\ds \size {I_1 + I_2 + I_3}\)




















\(\ds \)

\(\le\)







\(\ds \size {I_1 + I_2} + \size {I_3}\)





Triangle Inequality for Real Numbers














\(\ds \)

\(<\)







\(\ds \epsilon\)









To sum up:

$\ds \forall \epsilon \in \R_{>0} : \exists N \in \R_{>0} : \forall n \in \N_{>0} : \forall n > N \implies \size {\int_{-\infty}^\infty \map g x \map {\delta_n} x \rd x} < \epsilon$
By definition of the limit of a real sequence:

$\ds \lim_{n \mathop \to \infty} \int_{-\infty}^\infty \map g x \map {\delta_n} x \rd x = 0$
However:














\(\ds \lim_{n \mathop \to \infty} \int_{-\infty}^\infty \map g x \map {\delta_n} x \rd x\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int_{-\infty}^\infty \map \phi x \map {\delta_n} x \rd x - \map \phi 0 \lim_{n \mathop \to \infty} \int_{-\infty}^\infty \map {\delta_n} x \rd x\)





Sum Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int_{-\infty}^\infty \map \phi x \map {\delta_n} x \rd x - \map \phi 0\)




















\(\ds \)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \lim_{n \mathop \to \infty} \int_{-\infty}^\infty \map \phi x \map {\delta_n} x \rd x\)

\(=\)







\(\ds \map \phi 0\)









$\blacksquare$


Sources
2013: George Arfken, Hans J. Weber and Frank E. Harris: Mathematical Methods for Physicists (7th ed.): Chapter $1$ Mathematical Preliminaries $1.11$ Dirac Delta Function





