# 

Source: https://proofwiki.org/wiki/Power_Rule_for_Derivatives/Fractional_Index/Proof_2

Theorem
Let $n \in \N_{>0}$.
Let $f: \R \to \R$ be the real function defined as $\map f x = x^{1 / n}$.

Then:

$\map {f'} x = n x^{n - 1}$
everywhere that $\map f x = x^n$ is defined.

When $x = 0$ and $n = 0$, $\map {f'} x$ is undefined.


Proof
Let $n \in \N_{>0}$.
Thus, let $\map f x = y = x^{1/n}$.
Thus $\map {f^{-1} } y = x = y^n$ from the definition of root.
So:














\(\ds D x^{1/n}\)

\(=\)







\(\ds \frac 1 {D y^n}\)





Derivative of Inverse Function‎














\(\ds \)

\(=\)







\(\ds \frac 1 {n y^{n - 1} }\)





Power Rule for Derivatives: Integer Index














\(\ds \)

\(=\)







\(\ds \frac 1 {n \paren {x^{1/n} }^{n - 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 n x^{\frac 1 n - 1}\)









$\blacksquare$





