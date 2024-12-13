# 

Source: https://proofwiki.org/wiki/Integral_Representation_of_Riemann_Zeta_Function_in_terms_of_Jacobi_Theta_Function/Lemma_3

Integral Representation of Riemann Zeta Function in terms of Jacobi Theta Function: Lemma 3
$\ds \sum_{n \mathop = 1}^\infty e^{-\pi n^2 x} = \dfrac 1 2 \paren {\map {\vartheta_3} {0, e^{-\pi x} } - 1}$
where:

$\map {\vartheta_3} {0, e^{-\pi x} }$ is the Jacobi theta function of the third type
$x \in \R_{>0}$.


Proof
Recall the definition of the Jacobi theta function of the third type:


The Jacobi Theta function of the third type is defined for all complex $z$ by:

$\forall z \in \C: \ds \map {\vartheta_3} {z, q} = 1 + 2 \sum_{n \mathop = 1}^\infty q^{n^2} \cos 2 n z$
where:

$q = e^{i \pi \tau}$
$\tau \in \C$ such that $\map \Im \tau > 0$















\(\ds \map {\vartheta_3} {z, q}\)

\(=\)







\(\ds 1 + 2 \sum_{n \mathop = 1}^\infty q^{n^2} \cos 2 n z\)





Definition of Jacobi Theta Function of the Third Type














\(\ds \)

\(=\)







\(\ds 1 + 2 \sum_{n \mathop = 1}^\infty \paren {e^{i \pi \tau} }^{n^2} \map \cos 0\)





setting $z = 0$














\(\ds \)

\(=\)







\(\ds 1 + 2 \sum_{n \mathop = 1}^\infty e^{i \pi n^2 \tau}\)





Cosine of Zero is One, Power of Power














\(\ds \)

\(=\)







\(\ds 1 + 2 \sum_{n \mathop = 1}^\infty e^{i \pi n^2 \paren {i x} }\)





setting $\tau = i x$ as Definition of Jacobi Theta Function of the Third Type $x$ must be a complex constant with a positive imaginary part














\(\ds \)

\(=\)







\(\ds 1 + 2 \sum_{n \mathop = 1}^\infty e^{-\pi n^2 x}\)





$i^2 = -1$








\(\ds \leadsto \ \ \)





\(\ds \map {\vartheta_3} {0, e^{i \pi \paren {i x} } }\)

\(=\)







\(\ds 1 + 2 \sum_{n \mathop = 1}^\infty e^{-\pi n^2 x}\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{n \mathop = 1}^\infty e^{-\pi n^2 x}\)

\(=\)







\(\ds \dfrac 1 2 \paren {\map {\vartheta_3} {0, e^{-\pi x } } - 1}\)





rearranging terms



$\blacksquare$





