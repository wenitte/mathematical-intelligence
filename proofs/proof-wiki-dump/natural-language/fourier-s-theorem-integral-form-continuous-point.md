# 

Source: https://proofwiki.org/wiki/Fourier%27s_Theorem/Integral_Form/Continuous_Point



Theorem
Let $f: \R \to \R$ be a real function which satisfies the Dirichlet conditions on $\R$.
Let $f$ be continuous at $t \in \R$.
Then:

$\ds \map f t = \int_{-\infty}^\infty e^{2 \pi i t s} \paren {\int_{-\infty}^\infty e^{-2 \pi i t s} \map f t \rd t} \rd s$


Proof
At a point of continuity we have:














\(\ds \dfrac {\map f {t^+} + \map f {t^-} } 2\)

\(=\)







\(\ds \dfrac {\map f t + \map f t} 2\)





as $\map f t = \map f {t^+} = \map f {t^-}$ at a point of continuity














\(\ds \)

\(=\)







\(\ds \dfrac {2 \map f t} 2\)




















\(\ds \)

\(=\)







\(\ds \map f t\)









The result follows from Fourier's Theorem: Integral Form.
$\blacksquare$


Source of Name
This entry was named for Joseph Fourier.


Sources
1978: Ronald N. Bracewell: The Fourier Transform and its Applications (2nd ed.) ... (previous) ... (next): Chapter $2$: Groundwork: The Fourier transform and Fourier's integral theorem




