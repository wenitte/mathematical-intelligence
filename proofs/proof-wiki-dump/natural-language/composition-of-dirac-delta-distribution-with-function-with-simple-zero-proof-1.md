# 

Source: https://proofwiki.org/wiki/Composition_of_Dirac_Delta_Distribution_with_Function_with_Simple_Zero/Proof_1

Theorem
Let $\delta \in \map {\DD'} \R$ be the Dirac delta distribution.
Let $\sequence {\map {\delta_n} x}_{n \mathop \in \N}$ be a delta sequence.
Let $f : \R \to \R$ be a real function with a simple zero at $x_0$.
Let $f$ be strictly monotone.
Let $\phi \in \map \DD \R$ be a test function.

Then in the distributional sense it holds that:

$\ds \map \delta {\map f x} = \frac {\map \delta {x - x_0}}{\size {\map {f'} {x_0}} }$
which can be interpreted as:

$\ds \int_{-\infty}^\infty \map \delta {\map f x} \map \phi x \rd x = \frac {\map \phi {x_0}}{\size {\map {f'} {x_0}} }$
which more strictly means that:

$\ds \lim_{n \mathop \to \infty} \int_{-\infty}^\infty \map {\delta_n} {\map f x} \map \phi x \rd x = \frac {\map \phi {x_0}}{\size {\map {f'} {x_0}} }$


Proof
Suppose $\map {f'} {x_0} > 0$.
Then:














\(\ds \lim_{n \mathop \to \infty} \int_{-\infty}^{\infty} \map {\delta_n} {\map f x} \map \phi x \rd x\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int_{-\infty}^{\infty} \map {\delta_n} y \frac {\map \phi {\map x y} } {\map {f'} {\map x y} } \rd y\)





Derivative of Inverse Function, Integration by Substitution, $y = \map f x$














\(\ds \)

\(=\)







\(\ds \frac {\map \phi {x_0} }{\map {f'} {x_0} }\)





Definition of Delta Sequence, $\map x 0 = x_0$














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int_{-\infty}^\infty \frac {\map \phi x \map {\delta_n} {x - x_0} } {\map {f'} {x_0} } \rd x\)










Suppose $\map {f'} {x_0} < 0$.
Then:














\(\ds \lim_{n \mathop \to \infty} \int_{-\infty}^{\infty} \map {\delta_n} {\map f x} \map \phi x \rd x\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int_{\infty}^{-\infty} \map {\delta_n} y \frac {\map \phi {\map x y} } {\map {f'} {\map x y} } \rd y\)





Derivative of Inverse Function, Integration by Substitution, $y = \map f x$














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int_{-\infty}^{\infty} \map {\delta_n} y \frac {\map \phi {\map x y} } {-\map {f'} {\map x y} } \rd y\)




















\(\ds \)

\(=\)







\(\ds \frac {\map \phi {x_0} }{- \map {f'} {x_0} }\)





Definition of Delta Sequence, $\map x 0 = x_0$














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int_{-\infty}^\infty \frac {\map \phi x \map {\delta_n} {x - x_0} } {-\map {f'} {x_0} } \rd x\)









Altogether:














\(\ds \lim_{n \mathop \to \infty} \int_{-\infty}^{\infty} \map {\delta_n} {\map f x} \map \phi x \rd x\)

\(=\)







\(\ds \frac {\map \phi {x_0} } {\size { \map {f'} {x_0} } }\)





Definition of Delta Sequence, $\map x 0 = x_0$














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int_{-\infty}^\infty \frac {\map \phi x \map {\delta_n} {x - x_0} } {\size {\map {f'} {x_0 } } } \rd x\)










Further research is required in order to fill out the details.In particular: Theorem conditions here are stronger than usually found in literature to keep us on the safe side. The situtation may change as we learn more.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by finding out more.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Research}} from the code.
$\blacksquare$


Sources
1998: Ram Prakash Kanwal: Generalized Functions: Theory and Technique (2nd ed.): Chapter $3$. Additional Properties of Distributions $3.1$ Transformation Properties of the Delta Distribution




