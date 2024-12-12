# 

Source: https://proofwiki.org/wiki/Dilogarithm_of_Square/Proof_2

Theorem
$\map {\Li_2} z + \map {\Li_2} {-z} = \dfrac 1 2 \map {\Li_2} {z^2}$


Proof













\(\ds \map {\Li_2} z + \map {\Li_2} {-z}\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {z^n} {n^2} + \sum_{n \mathop = 1}^\infty \frac {\paren {-z}^n} {n^2}\)





Power Series Expansion for Spence's Function














\(\ds \)

\(=\)







\(\ds \paren {z + \frac {z^2} {2^2} + \frac {z^3} {3^2} + \frac {z^4} {4^2} + \frac {z^5} {5^2} + \frac {z^6} {6^2} + \cdots} + \paren {-z + \frac {z^2} {2^2} - \frac {z^3} {3^2} + \frac {z^4} {4^2} - \frac {z^5} {5^2} + \frac {z^6} {6^2} + \cdots}\)




















\(\ds \)

\(=\)







\(\ds 2 \paren {\frac {z^2} {2^2} + \frac {z^4} {4^2} + \frac {z^6} {6^2} + \cdots}\)





odd terms cancel, even terms double














\(\ds \)

\(=\)







\(\ds \frac 2 {2^2} \paren {\frac {z^2} {1^2} + \frac {z^4} {2^2} + \frac {z^6} {3^2} + \cdots}\)





factoring out $2^2$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \sum_{n \mathop = 1}^\infty \frac {\paren {z^2}^n} {n^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \map {\Li_2} {z^2}\)





Definition of Dilogarithm Function



$\blacksquare$





