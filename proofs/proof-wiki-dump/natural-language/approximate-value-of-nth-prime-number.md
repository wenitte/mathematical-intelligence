# 

Source: https://proofwiki.org/wiki/Approximate_Value_of_Nth_Prime_Number

Theorem
The $n$th prime number is approximately $n \ln n$.


Proof
This will be demonstrated by showing that:

$\ds \lim_{n \mathop \to \infty} \dfrac {p_n} {n \ln n} = 1$
where $p_n$ denotes the $n$th prime number.

By definition of prime-counting function:

$\map \pi {p_n} = n$
The Prime Number Theorem gives:

$\ds \lim_{x \mathop \to \infty} \dfrac {\map \pi x} {x / \ln x} = 1$
Thus:

$\ds \lim_{x \mathop \to \infty} \dfrac n {p_n / \ln p_n} = 1$













\(\ds \lim_{x \mathop \to \infty} \dfrac {\map \pi x} {x / \ln x}\)

\(=\)







\(\ds 1\)





Prime Number Theorem








\(\ds \leadsto \ \ \)





\(\ds \lim_{n \mathop \to \infty} \dfrac n {p_n / \ln p_n}\)

\(=\)







\(\ds 1\)





Definition of Prime-Counting Function




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \lim_{n \mathop \to \infty} \dfrac {p_n} {n \ln p_n}\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \lim_{n \mathop \to \infty} \paren {\ln p_n - \ln n - \ln \ln p_n}\)

\(=\)







\(\ds 0\)





Logarithm of both sides








\(\ds \leadsto \ \ \)





\(\ds \lim_{n \mathop \to \infty} \ln p_n \paren {1 - \frac {\ln n} {\ln p_n} - \frac {\ln \ln p_n} {\ln p_n} }\)

\(=\)







\(\ds 0\)





multiplying argument through by $\ln p_n$








\(\ds \leadsto \ \ \)





\(\ds \lim_{n \mathop \to \infty} \ln p_n \paren {1 - \frac {\ln n} {\ln p_n} }\)

\(=\)







\(\ds 0\)





as $\dfrac {\ln n} n \to 0$








\(\ds \leadsto \ \ \)





\(\ds \lim_{n \mathop \to \infty} \paren {1 - \frac {\ln n} {\ln p_n} }\)

\(=\)







\(\ds 0\)





as $\ln p_n \ne 0$








\(\ds \leadsto \ \ \)





\(\ds \lim_{n \mathop \to \infty} \frac {\ln n} {\ln p_n}\)

\(=\)







\(\ds 1\)





as $\ln p_n \ne 0$








\(\ds \leadsto \ \ \)





\(\ds \lim_{n \mathop \to \infty} \dfrac {p_n} {n \ln n}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \dfrac {p_n} {n \ln p_n} \frac {\ln p_n} {\ln n}\)





from $(1)$














\(\ds \)

\(=\)







\(\ds 1\)









$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.16$: The Sequence of Primes




