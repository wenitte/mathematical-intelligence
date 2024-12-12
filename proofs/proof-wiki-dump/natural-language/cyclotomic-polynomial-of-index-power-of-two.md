# 

Source: https://proofwiki.org/wiki/Cyclotomic_Polynomial_of_Index_Power_of_Two

Theorem
Let $n \ge 1$ be a natural number.

Then the $2^n$th cyclotomic polynomial is:

$\map {\Phi_{2^n} } x = x^{2^{n - 1} } + 1$


Proof













\(\ds \map {\Phi_{2^n} } x\)

\(=\)







\(\ds \prod_{\zeta} \paren {x - \zeta}\)





where the product runs over all primitive complex $2^n$th roots of unity














\(\ds \)

\(=\)







\(\ds \prod_{\substack {1 \mathop \le k \mathop \le 2^n \\ \gcd \set {k, 2^n} = 1} } \paren {x - \map \exp {\frac {2 \pi i k} {2^n} } }\)





Condition for Complex Root of Unity to be Primitive














\(\ds \)

\(=\)







\(\ds \prod_{\substack {1 \mathop \le k \mathop \le 2^n \\ k \text { odd} } } \paren {x - \map \exp {\frac {k i \pi} {2^{n - 1} } } }\)




















\(\ds \)

\(=\)







\(\ds \prod_{k \mathop = 0}^{2^{n - 1} - 1} \paren {x - \map \exp {\frac {\paren {2 k + 1} i \pi} {2^{n - 1} } } }\)





by writing each odd number as $2 k + 1$














\(\ds \)

\(=\)







\(\ds x^{2^{n - 1} } + 1\)





Factorisation of $z^n + 1$



$\blacksquare$





