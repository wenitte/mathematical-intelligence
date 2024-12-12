# 

Source: https://proofwiki.org/wiki/Cosine_of_Integer_Multiple_of_Argument/Formulation_2



Theorem
For $n \in \Z_{>0}$:














\(\ds \cos n \theta\)

\(=\)







\(\ds \cos^n \theta \paren {1 - \dbinom n 2 \paren {\tan \theta}^2 + \dbinom n 4 \paren {\tan \theta}^4 - \cdots}\)




















\(\ds \)

\(=\)







\(\ds \cos^n \theta \sum_{k \mathop \ge 0} \paren {-1}^k \dbinom n {2 k } \paren {\tan^{2 k } \theta}\)











Proof
By De Moivre's Formula:

$\cos n \theta + i \sin n \theta = \paren {\cos \theta + i \sin \theta}^n$
As $n \in \Z_{>0}$, we use the Binomial Theorem on the right hand side, resulting in:

$\ds \cos n \theta + i \sin n \theta = \sum_{k \mathop \ge 0} \binom n k \paren {\cos^{n - k} \theta} \paren {i \sin \theta}^k$
When $k$ is even, the expression being summed is real.
Equating the real parts of both sides of the equation, replacing $k$ with $2 k$ to make $k$ even, gives:














\(\ds \cos n \theta\)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \paren {-1}^k \dbinom n {2 k } \paren {\cos^{n - \paren {2 k } } \theta} \paren {\sin^{2 k } \theta}\)




















\(\ds \)

\(=\)







\(\ds \cos^n \theta \sum_{k \mathop \ge 0} \paren {-1}^k \dbinom n {2 k } \paren {\tan^{2 k } \theta}\)





factor out $\cos^n \theta$



$\blacksquare$


Examples
Cosine of Quintuple Angle
$\map \cos {5 \theta } = \cos^5 \theta \paren {1 - 10 \tan^2 \theta + 5 \tan^4 \theta}$


Cosine of Sextuple Angle
$\map \cos {6 \theta } = \cos^6 \theta \paren {1 - 15 \tan^2 \theta + 15 \tan^4 \theta - \tan^6 \theta}$




