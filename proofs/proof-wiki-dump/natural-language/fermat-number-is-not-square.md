# 

Source: https://proofwiki.org/wiki/Fermat_Number_is_not_Square



Theorem
There exist no Fermat numbers which are square.


Proof 1
Let $n = 0$.
Then $F_0 = 2^{2^0} + 1 = 3$ is not a square.

Let $n \ge 1$.
Then:














\(\ds F_n\)

\(=\)







\(\ds 2^{\left({2^n}\right)} + 1\)





Definition of Fermat Number














\(\ds \)

\(=\)







\(\ds \left({2^{\left({2^{n-1} }\right)} }\right)^2 + 1\)





... and so $1$ more than a square



Thus by Zero and One are the only Consecutive Perfect Squares, $2^{\left({2^n}\right)} + 1$ is not square.
$\blacksquare$


Proof 2
Recall the definition of Fermat numbers:

$F_n = 2^{(2^n)}+1$, where $n = 0, 1, 2, \ldots$


Marginal Case
$F_0 = 3$ is not a square.


General Case
It will be shown that Fermat numbers lie between $2$ consecutive squares, thus cannot be itself a square:














\(\ds \left({2^{ \left({2^{n-1} }\right)} }\right)^2\)

\(=\)







\(\ds 2^{\left({2^n}\right)}\)





Index Laws/Product of Indices














\(\ds \)

\(<\)







\(\ds 2^{\left({2^n}\right)} + 1\)





adding a positive term














\(\ds \)

\(=\)







\(\ds F_n\)




















\(\ds \)

\(<\)







\(\ds 2^{\left({2^n}\right)} + 2^{\left({2^{n-1} }\right) + 1} + 1\)





adding another positive term














\(\ds \)

\(=\)







\(\ds \left({2^{\left({2^{n-1} }\right)} + 1}\right)^2\)





Completing the Square



$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $257$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $257$




