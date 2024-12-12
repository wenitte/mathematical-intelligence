# 

Source: https://proofwiki.org/wiki/Complex_Exponential_Function_is_Entire

Theorem
Let $\exp: \C \to \C$ be the complex exponential function. 
Then $\exp$ is entire. 


Proof
By the definition of the complex exponential function, $\exp$ admits a power series expansion about $0$: 

$\ds \exp z = \sum_{n \mathop = 0}^\infty \frac {z^n} {n!}$
By Complex Function is Entire iff it has Everywhere Convergent Power Series, to show that $\exp$ is entire it suffices to show that this series is everywhere convergent.
Note that this power series is of the form: 

$\ds \sum_{n \mathop = 0}^\infty \frac {\paren {z - \xi}^n} {n!}$
with $\xi = 0$. 
Therefore, by Radius of Convergence of Power Series over Factorial: Complex Case, we have that the former power series is everywhere convergent. 
Hence the result.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): entire function
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): entire function (integral function)




