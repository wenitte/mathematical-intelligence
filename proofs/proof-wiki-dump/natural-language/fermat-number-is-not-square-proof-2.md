# 

Source: https://proofwiki.org/wiki/Fermat_Number_is_not_Square/Proof_2



Theorem
There exist no Fermat numbers which are square.


Proof
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





