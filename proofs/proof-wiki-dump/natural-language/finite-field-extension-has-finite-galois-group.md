# 

Source: https://proofwiki.org/wiki/Finite_Field_Extension_has_Finite_Galois_Group

Theorem
Let $E / F$ be a finite field extension.
Then its Galois group is finite.


Proof
Because $E / F$ is finite, it is finitely generated.
Let $\alpha_1, \ldots, \alpha_n \in E$ with $E = \map F {\alpha_1, \ldots, \alpha_n}$.
By Finite Field Extension is Algebraic, $\alpha_1, \ldots, \alpha_n$ are algebraic over $F$.
Let $f_1, \ldots, f_n$ be their minimal polynomials.
Let $f = f_1\dots f_n$.
By Galois Group Acts Faithfully on Generating Set, $\Gal {E / F}$ acts faithfully on the roots of $f$.
Thus $\Gal {E / F}$ is finite.
$\blacksquare$





