# 

Source: https://proofwiki.org/wiki/Absolutely_Convergent_Series_is_Convergent/Complex_Numbers

Theorem
Let $\ds \sum_{n \mathop = 1}^\infty z_n$ be an absolutely convergent series in $\C$.

Then $\ds \sum_{n \mathop = 1}^\infty z_n$ is convergent.


Proof
Let $z_n = u_n + i v_n$.
We have that:














\(\ds \cmod {z_n}\)

\(=\)







\(\ds \sqrt { {u_n}^2 + {v_n}^2}\)




















\(\ds \)

\(>\)







\(\ds \sqrt { {u_n}^2}\)




















\(\ds \)

\(>\)







\(\ds \size {u_n}\)









and similarly:

$\cmod {z_n} > \size {v_n}$
From the Comparison Test, the series $\ds \sum_{n \mathop = 1}^\infty u_n$ and $\ds \sum_{n \mathop = 1}^\infty v_n$ are absolutely convergent.
From Absolutely Convergent Real Series is Convergent, $\ds \sum_{n \mathop = 1}^\infty u_n$ and $\ds \sum_{n \mathop = 1}^\infty v_n$ are convergent.
By Convergence of Series of Complex Numbers by Real and Imaginary Part, it follows that $\ds \sum_{n \mathop = 1}^\infty z_n$ is convergent.
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4.3$. Series: Theorem




