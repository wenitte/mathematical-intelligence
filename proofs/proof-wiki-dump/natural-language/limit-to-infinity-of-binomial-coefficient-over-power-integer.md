# 

Source: https://proofwiki.org/wiki/Limit_to_Infinity_of_Binomial_Coefficient_over_Power/Integer

Theorem
Let $k \in \N$.
Then:

$\ds \lim_{r \mathop \to \infty} \frac {\dbinom r k} {r^k} = \frac 1 {k!}$


Proof









\(\ds \forall r \in \R: \, \)



\(\ds \frac {\dbinom r k} {r^k}\)

\(=\)







\(\ds \frac 1 {k !} \cdot \frac {r^{\underline k} } {r^k}\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \frac 1 {k !} \prod_{j \mathop = 0}^{k - 1} \frac {r - j} r\)





Definition of Falling Factorial, Definition of Integer Power














\(\ds \)

\(=\)







\(\ds \frac 1 {k !} \prod_{j \mathop = 0}^{k - 1} \paren {1 - \frac j r}\)














\(\ds \leadsto \ \ \)





\(\ds \lim_{r \mathop \to \infty} \frac {\dbinom r k} {r^k}\)

\(=\)







\(\ds \lim_{r \mathop \to \infty} \frac 1 {k !} \prod_{j \mathop = 0}^{k - 1} \paren {1 - \frac j r}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {k !} \prod_{j \mathop = 0}^{k - 1} \lim_{r \mathop \to \infty} \paren {1 - \frac j r}\)





Product Rule for Real Sequences














\(\ds \)

\(=\)







\(\ds \frac 1 {k !} \prod_{j \mathop = 0}^{k - 1} \paren {1 - j \lim_{r \mathop \to \infty} \frac 1 r}\)





Combined Sum Rule for Real Sequences














\(\ds \)

\(=\)







\(\ds \frac 1 {k !} \prod_{j \mathop = 0}^{k - 1} 1\)





Sequence of Reciprocals is Null Sequence














\(\ds \)

\(=\)







\(\ds \frac 1 {k !}\)









$\blacksquare$





