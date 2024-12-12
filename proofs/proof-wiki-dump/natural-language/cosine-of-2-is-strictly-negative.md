# 

Source: https://proofwiki.org/wiki/Cosine_of_2_is_Strictly_Negative

Theorem
$\cos 2 < 0$
where $\cos$ denotes the cosine.


Proof
Recall the definition of the cosine:
The real cosine function $\cos: \R \to \R$ is defined as:














\(\ds \cos x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n} } {\paren {2 n!} }\)




















\(\ds \)

\(=\)







\(\ds 1 - \frac {x^2} {2!} + \frac {x^4} {4!} - \frac {x^6} {6!} + \cdots + \paren {-1}^n \frac {x^{2 n} } {\paren {2 n}!} + \cdots\)










Thus:














\(\ds \cos 2\)

\(=\)







\(\ds 1 - \paren {\frac {2^2} {2!} - \frac {2^4} {4!} } - \paren {\frac {2^6} {6!} - \frac {2^8} {8!} } - \cdots\)




















\(\ds \)

\(=\)







\(\ds 1 - \sum_{n \mathop = 1}^\infty A_n\)









where:














\(\ds A_n\)

\(:=\)







\(\ds \dfrac {2^{4 n - 2} } {\paren {4 n - 2}!} - \dfrac {2^{4 n} } {\paren {4 n}!}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {4 n \paren {4n - 1} 2^{4 n - 2} - 2^{4 n} } {\paren {4 n}!}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {n \paren {4n - 2} 2^{4 n} } {\paren {4 n}!}\)




















\(\ds \)

\(\ge\)







\(\ds 0\)





for all $n \ge 1$



Thus:














\(\ds \cos 2\)

\(\le\)







\(\ds 1 - A_1\)




















\(\ds \)

\(=\)







\(\ds 1 - \paren {\frac {2^2} {2!} - \frac {2^4} {4!} }\)




















\(\ds \)

\(=\)







\(\ds - \dfrac 1 3\)




















\(\ds \)

\(<\)







\(\ds 0\)









$\blacksquare$





