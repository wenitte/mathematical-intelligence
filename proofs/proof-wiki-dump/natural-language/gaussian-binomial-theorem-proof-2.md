# 

Source: https://proofwiki.org/wiki/Gaussian_Binomial_Theorem/Proof_2

Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer.














\(\ds \sum_{k \mathop = 0}^n \dbinom n k_q q^{k \paren {k - 1} / 2} x^k\)

\(=\)







\(\ds \prod_{k \mathop = 1}^n \paren {1 + q^{k - 1} x}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + x} \paren {1 + q x} \paren {1 + q^2 x} \cdots \paren {1 + q^{n - 1} x}\)









where $\dbinom n k_q$ denotes a Gaussian binomial coefficient.


Proof
Let:














\(\ds \map f x\)

\(=\)







\(\ds \prod_{k \mathop = 1}^n \paren {1 + q^{k - 1} x}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + x} \paren {1 + q x} \paren {1 + q^2 x} \cdots \paren {1 + q^{n - 1} x}\)









Then:

$\map f {q x} = \paren {1 + q x} \paren {1 + q^2 x} \cdots \paren {1 + q^n x}$
Therefore:

$\paren {1 + x} \map f {q x} = \map f x \paren {1 + q^n x}$
If we write:

$\ds \map f x = \sum_{k \mathop = 0}^n Q_k x^k$
Then:

$\ds \paren {1 + x} \sum_{k \mathop = 0}^n Q_k \paren {q x}^k = \paren {1 + q^n x}\sum_{k \mathop = 0}^n Q_k x^k$
Equating coefficients gives us:














\(\ds Q_k q^k + Q_{k - 1} q^{k - 1}\)

\(=\)







\(\ds Q_k + q^n Q_{k - 1}\)














\(\ds \leadsto \ \ \)





\(\ds Q_k \paren {q^k - 1}\)

\(=\)







\(\ds Q_{k - 1} \paren {q^n - q^{k - 1} }\)














\(\ds \leadsto \ \ \)





\(\ds Q_k\)

\(=\)







\(\ds Q_{k - 1} \frac {\paren {q^n - q^{k - 1} } } {\paren {q^k - 1} }\)




















\(\ds \)

\(=\)







\(\ds Q_{k - 1} \frac {\paren {q^{n - k + 1} - 1 } } {\paren {q^k - 1} } q^{k - 1}\)









Therefore:














\(\ds Q_k\)

\(=\)







\(\ds \frac {\paren {q^{n - k + 1} - 1 } } {\paren {q^k - 1} } q^{k - 1} Q_{k - 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {\paren {q^{n - k + 1} - 1 } } {\paren {q^k - 1} } q^{k - 1} } \paren {\frac {\paren {q^{n - \paren {k - 1} + 1} - 1 } } {\paren {q^{k - 1} - 1} } q^{\paren {k - 1} - 1} } Q_{k - 2}\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {\paren {q^{n - k + 1} - 1 } } {\paren {q^k - 1} } q^{k - 1} } \paren {\frac {\paren {q^{n - k + 2} - 1 } } {\paren {q^{k - 1} - 1} } q^{k - 2} } \cdots \paren {\frac {\paren {q^{n - 1 + 1} - 1 } } {\paren {q^{k - \paren {k - 1} } - 1} } q^{k - \paren {k - 1} } } Q_0\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {1 - q^n} \paren {1 - q^{n - 1} } \cdots \paren {1 - q^{n - k + 1} } } {\paren {1 - q^k} \paren {1 - q^{k - 1} } \cdots \paren {1 - q^1} } q^{\paren { 1 + 2 + \cdots + \paren {k - 1} } }\)





Product of Powers, $Q_0 = 1$














\(\ds \)

\(=\)







\(\ds \dbinom n k_q q^{k \paren {k - 1} / 2}\)





Definition of Gaussian Binomial Coefficient and Closed Form for Triangular Numbers




Therefore:

$\forall n \in \Z_{\ge 1}: \ds \prod_{k \mathop = 1}^n \paren {1 + q^{k - 1} x} = \sum_{k \mathop = 0}^n \dbinom n k_q q^{k \paren {k - 1} / 2} x^k$
$\blacksquare$


Sources
1971: G L Alexanderson and George Pólya: Gaussian Binomial Coefficients (Elemente Der Mathematik Vol. 26: pp. 103 – 103)




