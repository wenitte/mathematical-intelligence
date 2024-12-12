# 

Source: https://proofwiki.org/wiki/Derivative_of_Nth_Root

Theorem
Let $n \in \N_{>0}$.
Let $f: \R \to \R$ be the real function defined as $\map f x = \sqrt [n] x$.

Then:

$\map {f'} x = \dfrac 1 {n \paren {\sqrt [n] x}^{n - 1} }$
everywhere that $\map f x = \sqrt [n] x$ is defined.


Proof













\(\ds \map f x\)

\(=\)







\(\ds \sqrt [n] x\)




















\(\ds \)

\(=\)







\(\ds x^{1 / n}\)





Definition of $n$th Root








\(\ds \leadsto \ \ \)





\(\ds \map {f'} x\)

\(=\)







\(\ds \frac 1 n x^{\paren {1 / n} - 1}\)





Power Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac 1 n x^{\paren {1 / n} \paren {1 - n} }\)





rearrangement














\(\ds \)

\(=\)







\(\ds \frac 1 {n x^{\paren {1 / n} \paren {n - 1} } }\)





Exponent Combination Laws: Negative Power














\(\ds \)

\(=\)







\(\ds \frac 1 {n \paren {\sqrt [n] x}^{n - 1} }\)





Definition of $n$th Root



$\blacksquare$





