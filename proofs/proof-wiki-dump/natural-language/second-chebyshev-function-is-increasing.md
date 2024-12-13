# 

Source: https://proofwiki.org/wiki/Second_Chebyshev_Function_is_Increasing

Theorem
The second Chebyshev function $\psi$ is increasing.


Proof
Let $x \ge y$. 
Then: 














\(\ds \map \psi y\)

\(=\)







\(\ds \sum_{k \mathop \ge 1} \sum_{p^k \mathop \le y} \ln p\)





Definition of Second Chebyshev Function














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 1} \paren {\sum_{p^k \mathop \le x} \ln p + \sum_{x \mathop < p^k \mathop \le y} \ln p}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 1} \sum_{p^k \mathop \le x} \ln p + \sum_{k \mathop \ge 1} \sum_{x \mathop < p^k \mathop \le y} \ln p\)









From Logarithm is Strictly Increasing:

$\ln p \ge \ln 2 > 0$
So, we have: 

$\ds \sum_{k \mathop \ge 1} \sum_{x \mathop < p^k \mathop \le y} \ln p \ge 0$
so:














\(\ds \sum_{k \mathop \ge 1} \sum_{p^k \mathop \le x} \ln p + \sum_{k \mathop \ge 1} \sum_{x \mathop < p^k \mathop \le y} \ln p\)

\(\ge\)







\(\ds \sum_{k \mathop \ge 1} \sum_{p^k \mathop \le x} \ln p\)




















\(\ds \)

\(=\)







\(\ds \map \psi x\)





Definition of Second Chebyshev Function



So if $x \le y$, then:

$\map \psi x \le \map \psi y$
so:

$\psi$ is increasing.
$\blacksquare$





