# 

Source: https://proofwiki.org/wiki/Polylogarithm_of_Square

Theorem
$\map {\Li_s} z + \map {\Li_s} {-z} = 2^{1 - s} \map {\Li_s} {z^2}$
where $\Li_s$ denotes the polylogarithm.


Proof













\(\ds \map {\Li_s} z + \map {\Li_s} {-z}\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {z^n} {n^s} + \sum_{n \mathop = 1}^\infty \frac {\paren {-z}^n} {n^s}\)





Definition of Polylogarithm














\(\ds \)

\(=\)







\(\ds \paren {z + \frac {z^2} {2^s} + \frac {z^3} {3^s} + \frac {z^4} {4^s} + \frac {z^5} {5^s} + \frac {z^6} {6^s} + \cdots} + \paren {-z + \frac {z^2} {2^s} - \frac {z^3} {3^s} + \frac {z^4} {4^s} - \frac {z^5} {5^s} + \frac {z^6} {6^s} + \cdots}\)




















\(\ds \)

\(=\)







\(\ds 2 \paren {\frac {z^2} {2^s} + \frac {z^4} {4^s} + \frac {z^6} {6^s} + \cdots}\)





odd terms cancel, even terms double














\(\ds \)

\(=\)







\(\ds \frac 2 {2^s} \paren {\frac {z^2} {1^s} + \frac {z^4} {2^s} + \frac {z^6} {3^s} + \cdots}\)





factoring out $2^s$














\(\ds \)

\(=\)







\(\ds 2^{1 - s} \sum_{n \mathop = 1}^\infty \frac {\paren {z^2}^n} {n^s}\)




















\(\ds \)

\(=\)







\(\ds 2^{1 - s} \map {\Li_s} {z^2}\)





Definition of Polylogarithm



$\blacksquare$





