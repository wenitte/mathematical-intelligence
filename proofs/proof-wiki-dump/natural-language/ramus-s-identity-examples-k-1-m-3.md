# 

Source: https://proofwiki.org/wiki/Ramus%27s_Identity/Examples/k_%3D_1,_m_%3D_3

Example of Ramus's Identity













\(\ds \sum_{j \mathop \ge 0} \binom n {3 j + 1}\)

\(=\)







\(\ds \binom n 1 + \binom n 4 + \binom n 7 + \cdots\)




















\(\ds \)

\(=\)







\(\ds \frac 1 3 \paren {2^n + 2 \cos \frac {\paren {n - 2} \pi} 3}\)











Proof
From :














\(\ds \sum_{j \mathop \ge 0} \binom n {3 j + 1}\)

\(=\)







\(\ds \frac 1 3 \sum_{0 \mathop \le j \mathop < 3} \paren {2 \cos \frac {j \pi} 3}^n \cos \frac {j \paren {n - 2} \pi} 3\)





Ramus's Identity: $k = 1, m = 3$














\(\ds \)

\(=\)







\(\ds \frac 1 3 \paren {\paren {2 \cos 0}^n \cos 0 + \paren {2 \cos \frac \pi 3}^n \cos \frac {\paren {n - 2} \pi} 3 + \paren {2 \cos \frac {2 \pi} 3}^n \cos \frac {2 \paren {n - 2} \pi} 3}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 3 \paren {2^n + \paren {2 \cos \frac \pi 3}^n \cos \frac {\paren {n - 2} \pi} 3 + \paren {2 \cos \frac {2 \pi} 3}^n \cos \frac {2 \paren {n - 2} \pi} 3}\)





Cosine of Zero is One














\(\ds \)

\(=\)







\(\ds \frac 1 3 \paren {2^n + \paren {2 \paren {\frac 1 2} }^n \cos \frac {\paren {n - 2} \pi} 3 + \paren {2 \cos \frac {2 \pi} 3}^n \cos \frac {2 \paren {n - 2} \pi} 3}\)





Cosine of $60^\circ$














\(\ds \)

\(=\)







\(\ds \frac 1 3 \paren {2^n + \cos \frac {\paren {n - 2} \pi} 3 + \paren {2 \paren {-\frac 1 2} }^n \cos \frac {2 \paren {n - 2} \pi} 3}\)





Cosine of $120^\circ$














\(\ds \)

\(=\)







\(\ds \frac 1 3 \paren {2^n + \cos \frac {\paren {n - 2} \pi} 3 + \paren {-1}^n \cos \frac {2 \paren {n - 2} \pi} 3}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 3 \paren {2^n + \cos \frac {\paren {n - 2} \pi} 3 + \paren {-1}^{2 - n} \cos \frac {2 \paren {n - 2} \pi} 3}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 3 \paren {2^n + \cos \frac {\paren {n - 2} \pi} 3 + \cos \frac {2 \paren {n - 2} \pi + \paren {2 - n} \pi} 3}\)





Cosine of Angle plus Integer Multiple of Pi














\(\ds \)

\(=\)







\(\ds \frac 1 3 \paren {2^n + \cos \frac {\paren {n - 2} \pi} 3 + \cos \frac {-\paren {n - 2} \pi} 3}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 3 \paren {2^n + 2 \cos \frac {\paren {n - 2} \pi} 3}\)





Cosine Function is Even



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $38$




