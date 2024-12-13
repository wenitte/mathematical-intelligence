# 

Source: https://proofwiki.org/wiki/Lower_and_Upper_Bound_of_Factorial

Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Then:

$\dfrac {n^n} {e^{n - 1} } \le n! \le \dfrac {n^{n + 1} } {e^{n - 1} }$


Proof
We have:














\(\ds 1 + x\)

\(\le\)







\(\ds e^x\)





Exponential of $x$ not less than $1+x$








\(\ds \leadsto \ \ \)





\(\ds 1 + \frac 1 k\)

\(\le\)







\(\ds e^{1 / k}\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \frac {k + 1} k\)

\(\le\)







\(\ds e^{1 / k}\)










and similarly:














\(\ds 1 + x\)

\(\le\)







\(\ds e^x\)





Exponential of $x$ not less than $1+x$








\(\ds \leadsto \ \ \)





\(\ds 1 - \frac 1 {k + 1}\)

\(\le\)







\(\ds e^{-1 / \left({k + 1}\right)}\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \frac k {k + 1}\)

\(\le\)







\(\ds e^{-1 / \left({k + 1}\right)}\)










First the left hand side inequality:














\(\ds \prod_{k \mathop = 1}^{n - 1} \dfrac {\left({k + 1}\right)^k} {k^k}\)

\(=\)







\(\ds \frac {2 \times 3^2 \times 4^3 \times \cdots \times n^{n - 1} } {1 \times 2^2 \times 3^3 \times 4^4 \times \cdots \times \left({n - 1}\right)^{n - 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac {n^{n - 1} } {\left({n - 1}\right)!}\)





as most of it cancels














\(\ds \)

\(=\)







\(\ds \frac {n \times n^{n - 1} } {n \left({n - 1}\right)!}\)










\(\text {(3)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac {n^n} {n!}\)









Then:














\(\ds \prod_{k \mathop = 1}^{n - 1} \dfrac {\left({k + 1}\right)^k} {k^k}\)

\(\le\)







\(\ds \prod_{k \mathop = 1}^{n - 1} \left({e^{1 / k} }\right)^k\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \prod_{k \mathop = 1}^{n - 1} e\)




















\(\ds \)

\(=\)







\(\ds e^{n - 1}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {n^n} {n!}\)

\(\le\)







\(\ds e^{n - 1}\)





from $(3)$








\(\ds \leadsto \ \ \)





\(\ds \frac 1 {n!}\)

\(\le\)







\(\ds \frac {e^{n - 1} } {n^n}\)














\(\ds \leadsto \ \ \)





\(\ds n!\)

\(\ge\)







\(\ds \frac {n^n} {e^{n - 1} }\)





Ordering of Reciprocals



$\Box$

Now the right hand side inequality:














\(\ds \prod_{k \mathop = 1}^{n - 1} \dfrac {k^{k + 1} } {\left({k + 1}\right)^{k + 1} }\)

\(=\)







\(\ds \frac {1^2 \times 2^3 \times 3^4 \times \cdots \times \left({n - 1}\right)^n} {2^2 \times 3^3 \times 4^4 \times \cdots \times \left({n - 1}\right)^{n - 1} \times n^n}\)




















\(\ds \)

\(=\)







\(\ds \frac {\left({n - 1}\right)!} {n^n}\)





as most of it cancels














\(\ds \)

\(=\)







\(\ds \frac {n \left({n - 1}\right)!} {n \times n^n}\)










\(\text {(4)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac {n!} {n^{n + 1} }\)









Then:














\(\ds \prod_{k \mathop = 1}^{n - 1} \dfrac {k^{k + 1} } {\left({k + 1}\right)^{k + 1} }\)

\(\le\)







\(\ds \prod_{k \mathop = 1}^{n - 1} \left({e^{-1 / \left({k + 1}\right)} }\right)^{k + 1}\)





from $(2)$














\(\ds \)

\(=\)







\(\ds \prod_{k \mathop = 1}^{n - 1} e^{-1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {e^{n - 1} }\)














\(\ds \leadsto \ \ \)





\(\ds \frac {n^n} {n!}\)

\(\le\)







\(\ds \frac {n!} {n^{n + 1} }\)





from $(4)$








\(\ds \leadsto \ \ \)





\(\ds n!\)

\(\le\)







\(\ds \frac {n^{n + 1} } {e^{n - 1} }\)









$\Box$

Hence the result.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials: Exercise $24$




