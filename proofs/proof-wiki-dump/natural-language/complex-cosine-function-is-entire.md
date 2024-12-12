# 

Source: https://proofwiki.org/wiki/Complex_Cosine_Function_is_Entire



Theorem
Let $\cos: \C \to \C$ be the complex cosine function. 
Then $\cos$ is entire. 


Proof 1
By the definition of the complex cosine function, $\cos$ admits a power series expansion about $0$: 

$\ds \cos z = \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {z^{2 n} } {\paren {2 n}!}$
By Complex Function is Entire iff it has Everywhere Convergent Power Series, to show that $\cos$ is entire it suffices to show that this series is everywhere convergent.
From Radius of Convergence from Limit of Sequence: Complex Case, it is sufficient to show that: 

$\ds \lim_{n \mathop \to \infty} \size {\frac {\paren {-1}^{n + 1} } {\paren {2 n + 2}!} \times \frac {\paren {2 n}!} {\paren {-1}^n} } = 0$
We have: 














\(\ds \lim_{n \mathop \to \infty} \size {\frac {\paren {-1}^{n + 1} } {\paren {2 n + 2}!} \times \frac {\paren {2 n}!} {\paren {-1}^n} }\)

\(=\)







\(\ds \size {-1} \lim_{n \mathop \to \infty} \size {\frac {\paren {2 n}!} {\paren {2 n + 2} \paren {2 n + 1} \paren {2 n}!} }\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\frac 1 {\paren {2 n + 2} \paren {2 n + 1} } }\)




















\(\ds \)

\(=\)







\(\ds 0\)









Hence the result.
$\blacksquare$


Proof 2
Let: 














\(\ds \map f z\)

\(=\)







\(\ds \exp z\)




















\(\ds \map g z\)

\(=\)







\(\ds i z\)




















\(\ds \map h z\)

\(=\)







\(\ds -i z\)









for all $z \in \C$. 
By Complex Exponential Function is Entire, we have that $f$ is entire. 
By Polynomial is Entire, we have that $g$ and $h$ are entire. 
Therefore, by Composition of Entire Functions is Entire, we have that both $f \circ g$ and $f \circ h$ are entire.
By Linear Combination of Entire Functions is Entire, we then have that: 

$\dfrac 1 2 \paren {f \circ g + f \circ h}$
is entire.

Then: 














\(\ds \frac 1 2 \paren {\map {\paren {f \circ g} } z + \map {\paren {f \circ h} } z}\)

\(=\)







\(\ds \frac 1 2 \paren {\map \exp {i z} + \map \exp {-i z} }\)




















\(\ds \)

\(=\)







\(\ds \cos z\)





Euler's Cosine Identity



Therefore $\cos$ is an entire function.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): entire function
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): entire function (integral function)




