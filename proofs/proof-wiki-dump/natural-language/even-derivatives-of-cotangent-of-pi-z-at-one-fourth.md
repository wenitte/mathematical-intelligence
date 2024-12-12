# 

Source: https://proofwiki.org/wiki/Even_Derivatives_of_Cotangent_of_Pi_Z_at_One_Fourth



Theorem
$ \ds \valueat {\dfrac {\d^{2 n} } {\d z^{2 n} } \cot \pi z} {z \mathop = \frac 1 4} = \paren {-1}^n \paren {2 \pi}^{2 n} E_{2 n}$
where:

$E_n$ denotes the $n$th Euler number
$n$ is a non-negative integer.


Proof
Lemma
Let $z \ne \paren {4 n + 1} \dfrac 1 4$
Then: 

$\ds \map \tan {\pi z + \dfrac \pi 4} = \map \sec {2 \pi z} + \map \tan {2 \pi z}$
$\Box$















\(\ds \map \tan {\dfrac \pi 4 + z}\)

\(=\)







\(\ds \map \sec {2 \pi z} + \map \tan {2 \pi z}\)





Lemma














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {E_{2 n} \paren {2 \pi z}^{2 n} } {\paren {2 n}!} + \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n - 1} 2^{2 n} \paren {2^{2 n} - 1} B_{2 n} \, \paren {2 \pi z}^{2 n - 1} } {\paren {2 n}!}\)





Power Series Expansion for Secant Function and Power Series Expansion for Tangent Function














\(\ds \)

\(=\)







\(\ds \paren {1 - \frac {E_2 \paren {2 \pi z}^2 } {2!} + \frac {E_4 \paren {2 \pi z}^4} {4!} - \frac {E_6 \paren {2 \pi z}^6} {6!} + \cdots } + \paren {2 \pi z - \frac {2^4 \paren {2^4 - 1} B_4 \paren {2 \pi z}^3 } {4!} + \frac {2^6 \paren {2^6 - 1} B_6 \paren {2 \pi z}^5} {6!} - \frac {2^8 \paren {2^8 - 1} B_8 \paren {2 \pi z}^7} {8!} + \cdots }\)




















\(\ds \)

\(=\)







\(\ds \paren {1 - \frac {E_2 \paren {2 \pi }^2 z^2 } {2!} + \frac {E_4 \paren {2 \pi }^4 z^4} {4!} - \frac {E_6 \paren {2 \pi }^6 z^6} {6!} + \cdots } + \paren {\frac {2^2 \paren {2^2 - 1} B_2 \paren {2 \pi }^1 z^1 } {2!} - \frac {2^4 \paren {2^4 - 1} B_4 \paren {2 \pi }^3 z^3 } {4!} + \frac {2^6 \paren {2^6 - 1} B_6 \paren {2 \pi }^5 z^5} {6!} - \frac {2^8 \paren {2^8 - 1} B_8 \paren {2 \pi }^7 z^7} {8!} + \cdots }\)














\(\ds \leadsto \ \ \)





\(\ds \map \cot {\dfrac \pi 4 - z }\)

\(=\)







\(\ds \paren {1 - \frac {E_2 \paren {2 \pi }^2 z^2 } {2!} + \frac {E_4 \paren {2 \pi }^4 z^4} {4!} - \frac {E_6 \paren {2 \pi }^6 z^6} {6!} + \cdots } + \paren {\frac {2^2 \paren {2^2 - 1} B_2 \paren {2 \pi }^1 z^1 } {2!} - \frac {2^4 \paren {2^4 - 1} B_4 \paren {2 \pi }^3 z^3 } {4!} + \frac {2^6 \paren {2^6 - 1} B_6 \paren {2 \pi }^5 z^5} {6!} - \frac {2^8 \paren {2^8 - 1} B_8 \paren {2 \pi }^7 z^7} {8!} + \cdots }\)





Cotangent of Complement equals Tangent: Corollary $2$








\(\ds \leadsto \ \ \)





\(\ds \valueat {\frac {\d^{2 n} } {\d z^{2 n} } \map \cot {\dfrac \pi 4 - z } } {z \mathop = 0}\)

\(=\)







\(\ds \paren {\paren {-1}^n E_{2 n} \paren {2 \pi }^{2 n} + \paren {-1}^{n + 1} \frac {E_{2 n + 2} \paren {2 \pi }^{2 n + 2} z^2 } {2!} + \paren {-1}^{n + 2} \frac {E_{2 n + 4} \paren {2 \pi }^{2 n + 4} z^4} {4!} + \cdots } + \paren {\paren {-1}^{n - 1} \frac {2^{2 n} \paren {2^{2 n} - 1} B_{2 n} \paren {2 \pi }^{2 n - 1} z^1 } {1! \paren {2 n} } + \paren {-1}^n \frac {2^{2 n + 2} \paren {2^{2 n + 2} - 1} B_{2 n + 2} \paren {2 \pi }^{2 n + 1} z^3 } {3! \paren {2 n + 2} } + \paren {-1}^{n + 1} \frac {2^{2 n + 4} \paren {2^{2 n + 4} - 1} B_{2 n + 4} \paren {2 \pi }^{2 n + 3} z^5} {5! \paren {2 n + 4} } + \cdots }\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {-1}^n E_{2 n} \paren {2 \pi }^{2 n} + 0 + 0 + \cdots } + \paren {0 + 0 + 0 + \cdots }\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^n \paren {2 \pi}^{2 n} E_{2 n}\)









$\blacksquare$

Sources
1939: P.E. Bohmer: Differenzengleichungen und betstimmte Integrale




