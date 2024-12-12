# 

Source: https://proofwiki.org/wiki/Cosine_of_Integer_Multiple_of_Argument/Formulation_3

Theorem
For $n \in \Z_{>0}$:














\(\ds \cos n \theta\)

\(=\)







\(\ds \cos \paren {n - 1} \theta \cos \theta + \paren {1 - \sec^2 \theta} \cos^n \theta \paren {1 + 1 + \frac {\cos 2 \theta} {\cos^2 \theta} + \frac {\cos 3 \theta} {\cos^3 \theta} + \cdots + \frac {\cos \paren {n - 2} \theta} {\cos^{n - 2} \theta} }\)




















\(\ds \)

\(=\)







\(\ds \cos \paren {n - 1} \theta \cos \theta + \paren {1 - \sec^2 \theta} \cos^n \theta \sum_{k \mathop = 0}^{n - 2} \frac {\cos k \theta} {\cos^k \theta}\)











Proof













\(\ds \cos n \theta\)

\(=\)







\(\ds \map \cos {\paren {n - 1} \theta + \theta}\)




















\(\ds \)

\(=\)







\(\ds \cos \paren {n - 1} \theta \cos \theta - \sin \paren {n - 1} \theta \sin \theta\)





Cosine of Sum














\(\ds \)

\(=\)







\(\ds \cos \paren {n - 1} \theta \cos \theta - \paren {\sin \theta \cos^{n - 2} \theta \sum_{k \mathop = 0}^{n - 2} \frac {\cos k \theta} {\cos^k \theta} } \sin \theta\)





Sine of Integer Multiple of Argument: Formulation 3














\(\ds \)

\(=\)







\(\ds \cos \paren {n - 1} \theta \cos \theta - \paren {\sin^2 \theta \cos^{n - 2} \theta \sum_{k \mathop = 0}^{n - 2} \frac {\cos k \theta} {\cos^k \theta} }\)




















\(\ds \)

\(=\)







\(\ds \cos \paren {n - 1} \theta \cos \theta - \paren {\paren {1 - \cos^2 \theta} \cos^{n - 2} \theta \sum_{k \mathop = 0}^{n - 2} \frac {\cos k \theta} {\cos^k \theta} }\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \cos \paren {n - 1} \theta \cos \theta + \paren {\paren {\cos^2 \theta - 1} \cos^{n - 2} \theta \sum_{k \mathop = 0}^{n - 2} \frac {\cos k \theta} {\cos^k \theta} }\)




















\(\ds \)

\(=\)







\(\ds \cos \paren {n - 1} \theta \cos \theta + \paren {1 - \sec^2 \theta} \cos^n \theta \sum_{k \mathop = 0}^{n - 2} \frac {\cos k \theta} {\cos^k \theta}\)





Secant is Reciprocal of Cosine



$\blacksquare$





